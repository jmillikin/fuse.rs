(function() {var implementors = {};
implementors["fuse"] = [{"text":"impl Send for CuseDeviceName","synthetic":true,"types":[]},{"text":"impl&lt;Channel, Handlers, Hooks&gt; Send for CuseServer&lt;Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Channel, Handlers, Hooks&gt; Send for CuseServerBuilder&lt;'a, Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Channel, Handlers, Hooks&gt; Send for CuseServerExecutor&lt;Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Channel, Handlers, Hooks&gt; Send for FuseServer&lt;Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Channel, Handlers, Hooks&gt; Send for FuseServerBuilder&lt;Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Channel, Handlers, Hooks&gt; Send for FuseServerExecutor&lt;Channel, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Channel: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ServerContext","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for RespondAsync&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ErrorCode","synthetic":true,"types":[]},{"text":"impl Send for FileMode","synthetic":true,"types":[]},{"text":"impl Send for Node","synthetic":true,"types":[]},{"text":"impl Send for NodeAttr","synthetic":true,"types":[]},{"text":"impl Send for NodeId","synthetic":true,"types":[]},{"text":"impl Send for NodeName","synthetic":true,"types":[]},{"text":"impl Send for XattrName","synthetic":true,"types":[]},{"text":"impl Send for FileType","synthetic":true,"types":[]},{"text":"impl Send for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl Send for OpcodeEnum","synthetic":true,"types":[]},{"text":"impl&lt;Handlers, Hooks&gt; Send for CuseServerBuilder&lt;Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DevCuseChannel","synthetic":true,"types":[]},{"text":"impl Send for DevFuseChannel","synthetic":true,"types":[]},{"text":"impl&lt;Mount, Handlers, Hooks&gt; Send for FuseServerBuilder&lt;Mount, Handlers, Hooks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Handlers: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hooks: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Mount: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LibcFuseMount","synthetic":true,"types":[]},{"text":"impl Send for SyscallFuseMount","synthetic":true,"types":[]},{"text":"impl Send for RequestHeader","synthetic":true,"types":[]},{"text":"impl Send for ResponseHeader","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnknownRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for XattrError","synthetic":true,"types":[]},{"text":"impl Send for AccessRequest","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AccessResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BmapRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BmapResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CuseInitRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CuseInitResponse","synthetic":true,"types":[]},{"text":"impl Send for CuseInitFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FallocateRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FallocateResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FlushRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FlushResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ForgetRequestItem","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ForgetRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FsyncRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FsyncResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FsyncdirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FsyncdirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for FuseInitRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for FuseInitResponse","synthetic":true,"types":[]},{"text":"impl Send for FuseInitFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetlkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetlkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetxattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetxattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for IoctlRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for IoctlResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LinkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LinkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListxattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListxattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LookupRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LookupResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LseekRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LseekResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MkdirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MkdirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MknodRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MknodResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OpenRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OpenResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for OpenResponseFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OpendirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OpendirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for OpendirResponseFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReadRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReadResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReaddirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ReaddirError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReaddirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ReaddirEntry","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReadlinkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReadlinkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReleaseRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReleaseResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReleasedirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReleasedirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RemovexattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RemovexattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RenameRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for RenameRequestFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RenameResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RmdirRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RmdirResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetlkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetlkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetxattrRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SetxattrResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for StatfsRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for StatfsResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SymlinkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SymlinkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnlinkRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnlinkResponse&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for WriteRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for WriteRequestFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for WriteResponse&lt;'a&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()