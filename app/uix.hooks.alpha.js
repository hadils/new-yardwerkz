goog.provide('uix.hooks.alpha');
uix.hooks.alpha.choose_value = (function uix$hooks$alpha$choose_value(nv,cv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,cv)){
return cv;
} else {
return nv;
}
});
/**
 * Replicates React's behaviour when updating state with identical JS value,
 *   but using Clojure's value equality here
 */
uix.hooks.alpha.use_clojure_aware_updater = (function uix$hooks$alpha$use_clojure_aware_updater(updater){
return shadow.js.shim.module$react.useCallback((function() { 
var G__19976__delegate = function (v,args){
var G__19898 = (function (cv){
if(cljs.core.fn_QMARK_(v)){
return uix.hooks.alpha.choose_value(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v,cv,args),cv);
} else {
return uix.hooks.alpha.choose_value(v,cv);
}
});
return (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(G__19898) : updater.call(null, G__19898));
};
var G__19976 = function (v,var_args){
var args = null;
if (arguments.length > 1) {
var G__19978__i = 0, G__19978__a = new Array(arguments.length -  1);
while (G__19978__i < G__19978__a.length) {G__19978__a[G__19978__i] = arguments[G__19978__i + 1]; ++G__19978__i;}
  args = new cljs.core.IndexedSeq(G__19978__a,0,null);
} 
return G__19976__delegate.call(this,v,args);};
G__19976.cljs$lang$maxFixedArity = 1;
G__19976.cljs$lang$applyTo = (function (arglist__19980){
var v = cljs.core.first(arglist__19980);
var args = cljs.core.rest(arglist__19980);
return G__19976__delegate(v,args);
});
G__19976.cljs$core$IFn$_invoke$arity$variadic = G__19976__delegate;
return G__19976;
})()
,[updater]);
});
uix.hooks.alpha.use_state = (function uix$hooks$alpha$use_state(value){
var vec__19906 = shadow.js.shim.module$react.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19906,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19906,(1),null);
var set_state__$1 = uix.hooks.alpha.use_clojure_aware_updater(set_state);
return [state,set_state__$1];
});
/**
 * Same as `use-clojure-primitive-aware-updater` but for `use-reducer`
 */
uix.hooks.alpha.clojure_aware_reducer_updater = (function uix$hooks$alpha$clojure_aware_reducer_updater(f){
return (function (state,action){
return uix.hooks.alpha.choose_value((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,action) : f.call(null, state,action)),state);
});
});
uix.hooks.alpha.use_reducer = (function uix$hooks$alpha$use_reducer(var_args){
var G__19912 = arguments.length;
switch (G__19912) {
case 2:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return shadow.js.shim.module$react.useReducer(updater,value);
}));

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return shadow.js.shim.module$react.useReducer(updater,value,init_state);
}));

(uix.hooks.alpha.use_reducer.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_ref = (function uix$hooks$alpha$use_ref(value){
return shadow.js.shim.module$react.useRef(value);
});
uix.hooks.alpha.with_return_value_check = (function uix$hooks$alpha$with_return_value_check(f){
return (function (){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
if(cljs.core.fn_QMARK_(ret)){
return ret;
} else {
return undefined;
}
});
});
uix.hooks.alpha.use_clj_deps = (function uix$hooks$alpha$use_clj_deps(deps){
var ref = shadow.js.shim.module$react.useRef(deps);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref.current,deps)){
(ref.current = deps);
} else {
}

return ref.current;
});
uix.hooks.alpha.use_effect = (function uix$hooks$alpha$use_effect(var_args){
var G__19920 = arguments.length;
switch (G__19920) {
case 1:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return shadow.js.shim.module$react.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_layout_effect = (function uix$hooks$alpha$use_layout_effect(var_args){
var G__19927 = arguments.length;
switch (G__19927) {
case 1:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return shadow.js.shim.module$react.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_layout_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_insertion_effect = (function uix$hooks$alpha$use_insertion_effect(var_args){
var G__19935 = arguments.length;
switch (G__19935) {
case 1:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$react.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f));
}));

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return shadow.js.shim.module$react.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f),deps);
}));

(uix.hooks.alpha.use_insertion_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_callback = (function uix$hooks$alpha$use_callback(f,deps){
return shadow.js.shim.module$react.useCallback(f,deps);
});
uix.hooks.alpha.use_memo = (function uix$hooks$alpha$use_memo(f,deps){
return shadow.js.shim.module$react.useMemo(f,deps);
});
uix.hooks.alpha.use_context = (function uix$hooks$alpha$use_context(v){
return shadow.js.shim.module$react.useContext(v);
});
uix.hooks.alpha.use_imperative_handle = (function uix$hooks$alpha$use_imperative_handle(var_args){
var G__19945 = arguments.length;
switch (G__19945) {
case 2:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return shadow.js.shim.module$react.useImperativeHandle(ref,create_handle);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return shadow.js.shim.module$react.useImperativeHandle(ref,create_handle,deps);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_debug = (function uix$hooks$alpha$use_debug(var_args){
var G__19949 = arguments.length;
switch (G__19949) {
case 1:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1 = (function (v){
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
return shadow.js.shim.module$react.useDebugValue(v,fmt);
}));

(uix.hooks.alpha.use_debug.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_deferred_value = (function uix$hooks$alpha$use_deferred_value(var_args){
var G__19953 = arguments.length;
switch (G__19953) {
case 1:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1 = (function (v){
return shadow.js.shim.module$react.useDeferredValue(v);
}));

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2 = (function (v,initial){
return shadow.js.shim.module$react.useDeferredValue(v,initial);
}));

(uix.hooks.alpha.use_deferred_value.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_transition = (function uix$hooks$alpha$use_transition(){
return shadow.js.shim.module$react.useTransition();
});
uix.hooks.alpha.use_id = (function uix$hooks$alpha$use_id(){
return shadow.js.shim.module$react.useId();
});
uix.hooks.alpha.use_sync_external_store = (function uix$hooks$alpha$use_sync_external_store(var_args){
var G__19958 = arguments.length;
switch (G__19958) {
case 2:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return shadow.js.shim.module$react.useSyncExternalStore(subscribe,get_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return shadow.js.shim.module$react.useSyncExternalStore(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_optimistic = (function uix$hooks$alpha$use_optimistic(state,update_fn){
return shadow.js.shim.module$react.useOptimistic(state,update_fn);
});
uix.hooks.alpha.use_action_state = (function uix$hooks$alpha$use_action_state(var_args){
var G__19964 = arguments.length;
switch (G__19964) {
case 2:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2 = (function (f,state){
return shadow.js.shim.module$react.useActionState(f,state);
}));

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3 = (function (f,state,permalink){
return shadow.js.shim.module$react.useActionState(f,state,permalink);
}));

(uix.hooks.alpha.use_action_state.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use = (function uix$hooks$alpha$use(resource){
return shadow.js.shim.module$react.use(resource);
});

//# sourceMappingURL=uix.hooks.alpha.js.map
