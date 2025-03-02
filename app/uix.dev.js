goog.provide('uix.dev');
uix.dev.signature_BANG_ = (function uix$dev$signature_BANG_(){
return shadow.js.shim.module$react_refresh$runtime.createSignatureFunctionForTransform();
});
uix.dev.register_BANG_ = (function uix$dev$register_BANG_(type,id){
return shadow.js.shim.module$react_refresh$runtime.register(type,id);
});
/**
 * Injects react-refresh runtime. Should be called before UI is rendered
 */
uix.dev.init_fast_refresh_BANG_ = (function uix$dev$init_fast_refresh_BANG_(){
return shadow.js.shim.module$react_refresh$runtime.injectIntoGlobalHook(window);
});
/**
 * Should be called after hot-reload, in shadow's ^:dev/after-load hook
 */
uix.dev.refresh_BANG_ = (function uix$dev$refresh_BANG_(){
return shadow.js.shim.module$react_refresh$runtime.performReactRefresh();
});

//# sourceMappingURL=uix.dev.js.map
