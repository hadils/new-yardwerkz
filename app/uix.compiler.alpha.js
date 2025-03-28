goog.provide('uix.compiler.alpha');
goog.scope(function(){
  uix.compiler.alpha.goog$module$goog$object = goog.module.get('goog.object');
});
uix.compiler.alpha.reagent_component_QMARK_ = (function uix$compiler$alpha$reagent_component_QMARK_(component_type){
return cljs.core.some((function (p1__20376_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__20376_SHARP_,"G_")){
return (component_type === uix.compiler.alpha.goog$module$goog$object.get(component_type,p1__20376_SHARP_));
} else {
return null;
}
}),Object.keys(component_type));
});
uix.compiler.alpha.validate_component = (function uix$compiler$alpha$validate_component(component_type){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(component_type.uix_component_QMARK_);
if(and__5000__auto__){
return uix.compiler.alpha.reagent_component_QMARK_(component_type);
} else {
return and__5000__auto__;
}
})())){
var name_str_20442 = (function (){var or__5002__auto__ = component_type.displayName;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return component_type.name;
}
})();
throw (new Error(["Invalid use of Reagent component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str_20442)," in `$` form.\n","UIx doesn't know how to render Reagent components.\n","Reagent element should be Hiccup wrapped with r/as-element, i.e. (r/as-element [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str_20442),"])"].join('')));
} else {
}

return true;
});
uix.compiler.alpha.normalise_args = (function uix$compiler$alpha$normalise_args(component_type,js_props,props_children){
if(((2) === props_children.length)){
return [component_type,js_props,(props_children[(1)])];
} else {
return [component_type,js_props];
}
});
uix.compiler.alpha.react_context_QMARK_ = (function uix$compiler$alpha$react_context_QMARK_(x){
return ((x["$$typeof"]) === Symbol["for"]("react.context"));
});
uix.compiler.alpha.pojo_QMARK_ = (function uix$compiler$alpha$pojo_QMARK_(x){
var and__5000__auto__ = cljs.core.not(x.hasOwnProperty("$$typeof"));
if(and__5000__auto__){
var G__20409 = x;
var G__20409__$1 = (((G__20409 == null))?null:G__20409.constructor);
if((G__20409__$1 == null)){
return null;
} else {
return (G__20409__$1 === Object);
}
} else {
return and__5000__auto__;
}
});
uix.compiler.alpha.js_props_QMARK_ = (function uix$compiler$alpha$js_props_QMARK_(tag,props){
var and__5000__auto__ = ((typeof tag === 'string') || (cljs.core.not(tag.uix_component_QMARK_)));
if(and__5000__auto__){
var and__5000__auto____$1 = props;
if(cljs.core.truth_(and__5000__auto____$1)){
return uix.compiler.alpha.pojo_QMARK_(props);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
uix.compiler.alpha.create_element = (function uix$compiler$alpha$create_element(args,children){
var tag = (args[(0)]);
var props = (args[(1)]);
var child = (args[(2)]);
if(cljs.core.truth_(uix.compiler.alpha.js_props_QMARK_(tag,child))){
return shadow.js.shim.module$react.createElement.apply(null,[tag,Object.assign(props,child)].concat(children));
} else {
return shadow.js.shim.module$react.createElement.apply(null,args.concat(children));
}
});
uix.compiler.alpha.uix_component_element = (function uix$compiler$alpha$uix_component_element(component_type,props_children,children){
var props = (props_children[(0)]);
var js_props = (function (){var temp__5806__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5806__auto__ == null)){
return ({"argv": props});
} else {
var key = temp__5806__auto__;
return ({"key": key, "argv": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"key","key",-1516042587))});
}
})();
var args = uix.compiler.alpha.normalise_args(component_type,js_props,props_children);
return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.alpha.react_context_element = (function uix$compiler$alpha$react_context_element(component_type,props_children,children){
var component_type__$1 = component_type.Provider;
var props = (props_children[(0)]);
var js_props = ({"value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)});
var args = uix.compiler.alpha.normalise_args(component_type__$1,js_props,props_children);
return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.alpha.react_component_element = (function uix$compiler$alpha$react_component_element(component_type,props_children,children){
var js_props = (uix.compiler.attributes.interpret_attrs((props_children[(0)]),[],true)[(0)]);
var args = uix.compiler.alpha.normalise_args(component_type,js_props,props_children);
return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.alpha.dynamic_element = (function uix$compiler$alpha$dynamic_element(component_type,props_children,children){
var tag_id_class = uix.compiler.attributes.parse_tag(component_type);
var js_props = (uix.compiler.attributes.interpret_attrs((props_children[(0)]),tag_id_class,false)[(0)]);
var tag = (tag_id_class[(0)]);
var args = uix.compiler.alpha.normalise_args(tag,js_props,props_children);
return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.alpha.component_element = (function uix$compiler$alpha$component_element(component_type,props_children,children){
if(goog.DEBUG){
uix.compiler.alpha.validate_component(component_type);
} else {
}

if(cljs.core.truth_(component_type.uix_component_QMARK_)){
return uix.compiler.alpha.uix_component_element(component_type,props_children,children);
} else {
if((component_type instanceof cljs.core.Keyword)){
return uix.compiler.alpha.dynamic_element(component_type,props_children,children);
} else {
if(uix.compiler.alpha.react_context_QMARK_(component_type)){
return uix.compiler.alpha.react_context_element(component_type,props_children,children);
} else {
return uix.compiler.alpha.react_component_element(component_type,props_children,children);

}
}
}
});

//# sourceMappingURL=uix.compiler.alpha.js.map
