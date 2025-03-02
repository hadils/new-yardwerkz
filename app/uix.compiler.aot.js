goog.provide('uix.compiler.aot');
uix.compiler.aot.hiccup_QMARK_ = (function uix$compiler$aot$hiccup_QMARK_(el){
if(cljs.core.vector_QMARK_(el)){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(el,(0),null);
return (((tag instanceof cljs.core.Keyword)) || ((((tag instanceof cljs.core.Symbol)) || (((cljs.core.fn_QMARK_(tag)) || ((tag instanceof cljs.core.MultiFn)))))));
} else {
return null;
}
});
uix.compiler.aot.validate_children = (function uix$compiler$aot$validate_children(children){
var v__20332__auto___20497 = children;
if(cljs.core.seq(v__20332__auto___20497)){
var x__20333__auto___20499 = cljs.core.first(v__20332__auto___20497);
var xs__20334__auto___20500 = cljs.core.next(v__20332__auto___20497);
while(true){
var child_20501 = x__20333__auto___20499;
if(cljs.core.truth_(uix.compiler.aot.hiccup_QMARK_(child_20501))){
throw (new Error(["Hiccup is not valid as UIx child (found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_20501),").\n","If you meant to render UIx element, use `$` macro, i.e. ($ ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",child_20501),")\n","If you meant to render Reagent element, wrap it with r/as-element, i.e. (r/as-element ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_20501),")"].join('')));
} else {
if(cljs.core.sequential_QMARK_(child_20501)){
(uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1(child_20501) : uix.compiler.aot.validate_children.call(null, child_20501));
} else {
}
}

if(cljs.core.seq(xs__20334__auto___20500)){
var G__20505 = cljs.core.first(xs__20334__auto___20500);
var G__20506 = cljs.core.next(xs__20334__auto___20500);
x__20333__auto___20499 = G__20505;
xs__20334__auto___20500 = G__20506;
continue;
} else {
}
break;
}
} else {
}

return true;
});
uix.compiler.aot._GT_el = (function uix$compiler$aot$_GT_el(tag,attrs_children,children){
var args = [tag].concat(attrs_children);
if(goog.DEBUG){
uix.compiler.aot.validate_children(args);
} else {
}

return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.aot.create_uix_input = (function uix$compiler$aot$create_uix_input(tag,attrs_children,children){
if(uix.compiler.input.should_use_reagent_input_QMARK_()){
var props = (attrs_children[(0)]);
var children__$1 = [(attrs_children[(1)])].concat(children);
return uix.compiler.alpha.create_element([uix.compiler.input.reagent_input,({"props": props, "tag": tag})],children__$1);
} else {
return uix.compiler.aot._GT_el(tag,attrs_children,children);
}
});
uix.compiler.aot.fragment = shadow.js.shim.module$react.Fragment;

//# sourceMappingURL=uix.compiler.aot.js.map
