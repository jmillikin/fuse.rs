// Copyright 2021 John Millikin and the rust-fuse contributors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

use std::panic;
use std::sync::mpsc;

use interop_testutil::{diff_str, interop_test, path_cstr};

struct TestFS {
	requests: mpsc::Sender<String>,
}

impl fuse::FuseHandlers for TestFS {
	fn lookup(
		&self,
		_ctx: fuse::ServerContext,
		request: &fuse::LookupRequest,
		respond: impl for<'a> fuse::Respond<fuse::LookupResponse<'a>>,
	) {
		if request.parent_id() != fuse::ROOT_ID {
			respond.err(fuse::ErrorCode::ENOENT);
			return;
		}
		if request.name() != fuse::NodeName::from_bytes(b"lseek.txt").unwrap() {
			respond.err(fuse::ErrorCode::ENOENT);
			return;
		}

		let mut resp = fuse::LookupResponse::new();
		let node = resp.node_mut();
		node.set_id(fuse::NodeId::new(2).unwrap());
		node.set_cache_timeout(std::time::Duration::from_secs(60));

		let attr = node.attr_mut();
		attr.set_mode(fuse::FileType::Regular | 0o644);
		attr.set_nlink(2);

		respond.ok(&resp);
	}

	fn open(
		&self,
		_ctx: fuse::ServerContext,
		_request: &fuse::OpenRequest,
		respond: impl for<'a> fuse::Respond<fuse::OpenResponse<'a>>,
	) {
		let mut resp = fuse::OpenResponse::new();
		resp.set_handle(12345);
		respond.ok(&resp);
	}

	fn lseek(
		&self,
		_ctx: fuse::ServerContext,
		request: &fuse::LseekRequest,
		respond: impl for<'a> fuse::Respond<fuse::LseekResponse<'a>>,
	) {
		self.requests.send(format!("{:#?}", request)).unwrap();

		let mut resp = fuse::LseekResponse::new();
		resp.set_offset(4096);
		respond.ok(&resp);
	}
}

fn lseek_test(
	test_fn: impl FnOnce(&std::path::Path) + panic::UnwindSafe,
) -> Vec<String> {
	let (request_send, request_recv) = mpsc::channel();
	let fs = TestFS {
		requests: request_send,
	};
	interop_test(fs, test_fn);
	request_recv.iter().collect()
}

#[test]
#[cfg_attr(target_os = "freebsd", ignore)]
fn lseek_set() {
	let requests = lseek_test(|root| {
		let path = path_cstr(root.join("lseek.txt"));

		let file_fd = unsafe { libc::open(path.as_ptr(), libc::O_RDWR) };
		assert_ne!(file_fd, -1);
		let lseek_rc = unsafe { libc::lseek(file_fd, 1024, libc::SEEK_SET) };
		unsafe {
			libc::close(file_fd)
		};
		assert_eq!(lseek_rc, 1024);
	});
	assert_eq!(requests.len(), 0);
}

#[test]
#[cfg_attr(target_os = "freebsd", ignore)]
fn lseek_data() {
	let requests = lseek_test(|root| {
		let path = path_cstr(root.join("lseek.txt"));

		let file_fd = unsafe { libc::open(path.as_ptr(), libc::O_RDWR) };
		assert_ne!(file_fd, -1);
		let lseek_rc = unsafe { libc::lseek(file_fd, 1024, libc::SEEK_DATA) };
		unsafe {
			libc::close(file_fd)
		};
		assert_eq!(lseek_rc, 4096);
	});
	assert_eq!(requests.len(), 1);

	let expect = r#"LseekRequest {
    node_id: 2,
    handle: 12345,
    offset: 1024,
    whence: SEEK_DATA,
}"#;
	if let Some(diff) = diff_str(expect, &requests[0]) {
		println!("{}", diff);
		assert!(false);
	}
}

#[test]
#[cfg_attr(target_os = "freebsd", ignore)]
fn lseek_hole() {
	let requests = lseek_test(|root| {
		let path = path_cstr(root.join("lseek.txt"));

		let file_fd = unsafe { libc::open(path.as_ptr(), libc::O_RDWR) };
		assert_ne!(file_fd, -1);
		let lseek_rc = unsafe { libc::lseek(file_fd, 1024, libc::SEEK_HOLE) };
		unsafe {
			libc::close(file_fd)
		};
		assert_eq!(lseek_rc, 4096);
	});
	assert_eq!(requests.len(), 1);

	let expect = r#"LseekRequest {
    node_id: 2,
    handle: 12345,
    offset: 1024,
    whence: SEEK_HOLE,
}"#;
	if let Some(diff) = diff_str(expect, &requests[0]) {
		println!("{}", diff);
		assert!(false);
	}
}
