// Copyright 2020 John Millikin and the rust-fuse contributors.
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

use crate::internal::testutil::MessageBuilder;
use crate::protocol::prelude::*;

use super::{FsyncdirRequest, FsyncdirResponse};

#[test]
fn request() {
	let buf = MessageBuilder::new()
		.set_header(|h| {
			h.opcode = fuse_kernel::FUSE_FSYNCDIR;
			h.nodeid = 123;
		})
		.push_sized(&fuse_kernel::fuse_fsync_in {
			fh: 3,
			fsync_flags: 0x1,
			padding: 0,
		})
		.build_aligned();

	let req: FsyncdirRequest = decode_request!(buf, {
		protocol_version: (7, 1),
	});

	assert_eq!(req.handle(), 3);
	assert_eq!(req.flags().datasync, true);
}

#[test]
fn request_impl_debug() {
	let request = &FsyncdirRequest {
		phantom: PhantomData,
		node_id: crate::ROOT_ID,
		handle: 3,
		flags: super::FsyncdirRequestFlags::from_bits(0x1),
	};

	assert_eq!(
		format!("{:#?}", request),
		concat!(
			"FsyncdirRequest {\n",
			"    node_id: 1,\n",
			"    handle: 3,\n",
			"    flags: FsyncdirRequestFlags {\n",
			"        datasync: true,\n",
			"    },\n",
			"}",
		),
	);
}

#[test]
fn response_empty() {
	let resp = FsyncdirResponse::new();
	let encoded = encode_response!(resp);

	assert_eq!(
		encoded,
		MessageBuilder::new()
			.push_sized(&fuse_kernel::fuse_out_header {
				len: size_of::<fuse_kernel::fuse_out_header>() as u32,
				error: 0,
				unique: 0,
			})
			.build()
	);
}

#[test]
fn response_impl_debug() {
	let response = FsyncdirResponse::new();
	assert_eq!(format!("{:#?}", response), "FsyncdirResponse",);
}
