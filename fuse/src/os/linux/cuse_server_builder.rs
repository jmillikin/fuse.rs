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

use std::os::unix::ffi::OsStrExt;
use std::{ffi, fs, io, path};

use super::DevCuseChannel;
use crate::cuse_handlers::CuseHandlers;
use crate::cuse_server::{CuseDeviceName, CuseServer};

#[cfg_attr(doc, doc(cfg(not(feature = "no_std"))))]
pub struct CuseServerBuilder<Handlers> {
	dev_cuse: path::PathBuf,
	device_name: ffi::OsString,
	handlers: Handlers,
}

impl<H> CuseServerBuilder<H>
where
	H: CuseHandlers,
{
	pub fn new(
		device_name: impl AsRef<ffi::OsStr>,
		handlers: H,
	) -> CuseServerBuilder<H> {
		Self {
			dev_cuse: path::PathBuf::from("/dev/cuse"),
			device_name: ffi::OsString::from(device_name.as_ref()),
			handlers,
		}
	}

	pub fn build(self) -> io::Result<CuseServer<DevCuseChannel, H>> {
		let devname = self.device_name.as_bytes();
		let device_name = match CuseDeviceName::from_bytes(devname) {
			Some(x) => x,
			None => {
				if devname.is_empty() {
					return Err(io::Error::new(
						io::ErrorKind::InvalidInput,
						format!(
							"invalid device name {:?}: empty",
							self.device_name
						),
					));
				}
				#[rustfmt::skip]
				return Err(io::Error::new(
					io::ErrorKind::InvalidInput,
					format!("invalid device name {:?}: contains NUL", self.device_name),
				));
			},
		};

		let file = fs::OpenOptions::new()
			.read(true)
			.write(true)
			.open(&self.dev_cuse)?;

		CuseServer::new(device_name, DevCuseChannel::new(file), self.handlers)
	}
}