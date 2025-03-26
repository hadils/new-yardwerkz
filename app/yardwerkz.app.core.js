goog.provide('yardwerkz.app.core');
if(cljs.core.truth_(goog.DEBUG)){
shadow.js.shim.module$reactotron_react_native$default.configure().useReactNative().connect();
} else {
}
yardwerkz.app.core.styles = shadow.js.shim.module$react_native.StyleSheet.create(yardwerkz.app.util.to_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)));
yardwerkz.app.core.screen_a = (function yardwerkz$app$core$screen_a(){
var f__18094__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30204 = yardwerkz.app.core.screen_a.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30204)){
var f__18018__auto___30205 = temp__5804__auto___30204;
(f__18018__auto___30205.cljs$core$IFn$_invoke$arity$0 ? f__18018__auto___30205.cljs$core$IFn$_invoke$arity$0() : f__18018__auto___30205.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaView,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.container], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.screen], null)],["Screen A"]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go to screen B",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","navigate","nav/navigate",657455268),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qp","qp",-434757570),(1)], null)], null));
})], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30176 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30177 = yardwerkz.app.core.screen_a;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30177);

try{return f__18094__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30176);
}} else {
return f__18094__auto__();
}
});

(yardwerkz.app.core.screen_a.uix_component_QMARK_ = true);

(yardwerkz.app.core.screen_a.displayName = "yardwerkz.app.core/screen-a");

Object.defineProperty(yardwerkz.app.core.screen_a,"name",(function (){var obj30179 = ({"value":"yardwerkz.app.core/screen-a"});
return obj30179;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__18027__auto___30206 = window.uix.dev.signature_BANG_();
(sig__18027__auto___30206.cljs$core$IFn$_invoke$arity$4 ? sig__18027__auto___30206.cljs$core$IFn$_invoke$arity$4(yardwerkz.app.core.screen_a,"",null,null) : sig__18027__auto___30206.call(null, yardwerkz.app.core.screen_a,"",null,null));

window.uix.dev.register_BANG_(yardwerkz.app.core.screen_a,yardwerkz.app.core.screen_a.displayName);

(yardwerkz.app.core.screen_a.fast_refresh_signature = sig__18027__auto___30206);
} else {
}
} else {
}

yardwerkz.app.core.screen_b = (function yardwerkz$app$core$screen_b(){
var f__18094__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30207 = yardwerkz.app.core.screen_b.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30207)){
var f__18018__auto___30208 = temp__5804__auto___30207;
(f__18018__auto___30208.cljs$core$IFn$_invoke$arity$0 ? f__18018__auto___30208.cljs$core$IFn$_invoke$arity$0() : f__18018__auto___30208.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaView,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.container], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.screen], null)],["Screen B"]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go back",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","go-back","nav/go-back",1642528778)], null));
})], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30181 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30182 = yardwerkz.app.core.screen_b;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30182);

try{return f__18094__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30181);
}} else {
return f__18094__auto__();
}
});

(yardwerkz.app.core.screen_b.uix_component_QMARK_ = true);

(yardwerkz.app.core.screen_b.displayName = "yardwerkz.app.core/screen-b");

Object.defineProperty(yardwerkz.app.core.screen_b,"name",(function (){var obj30184 = ({"value":"yardwerkz.app.core/screen-b"});
return obj30184;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__18027__auto___30209 = window.uix.dev.signature_BANG_();
(sig__18027__auto___30209.cljs$core$IFn$_invoke$arity$4 ? sig__18027__auto___30209.cljs$core$IFn$_invoke$arity$4(yardwerkz.app.core.screen_b,"",null,null) : sig__18027__auto___30209.call(null, yardwerkz.app.core.screen_b,"",null,null));

window.uix.dev.register_BANG_(yardwerkz.app.core.screen_b,yardwerkz.app.core.screen_b.displayName);

(yardwerkz.app.core.screen_b.fast_refresh_signature = sig__18027__auto___30209);
} else {
}
} else {
}

yardwerkz.app.core.screen_404_error = (function yardwerkz$app$core$screen_404_error(){
var f__18094__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30210 = yardwerkz.app.core.screen_404_error.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30210)){
var f__18018__auto___30211 = temp__5804__auto___30210;
(f__18018__auto___30211.cljs$core$IFn$_invoke$arity$0 ? f__18018__auto___30211.cljs$core$IFn$_invoke$arity$0() : f__18018__auto___30211.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaView,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.container], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),yardwerkz.app.core.styles.screen], null)],["Screen not found"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30186 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30187 = yardwerkz.app.core.screen_404_error;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30187);

try{return f__18094__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30186);
}} else {
return f__18094__auto__();
}
});

(yardwerkz.app.core.screen_404_error.uix_component_QMARK_ = true);

(yardwerkz.app.core.screen_404_error.displayName = "yardwerkz.app.core/screen-404-error");

Object.defineProperty(yardwerkz.app.core.screen_404_error,"name",(function (){var obj30189 = ({"value":"yardwerkz.app.core/screen-404-error"});
return obj30189;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__18027__auto___30212 = window.uix.dev.signature_BANG_();
(sig__18027__auto___30212.cljs$core$IFn$_invoke$arity$4 ? sig__18027__auto___30212.cljs$core$IFn$_invoke$arity$4(yardwerkz.app.core.screen_404_error,"",null,null) : sig__18027__auto___30212.call(null, yardwerkz.app.core.screen_404_error,"",null,null));

window.uix.dev.register_BANG_(yardwerkz.app.core.screen_404_error,yardwerkz.app.core.screen_404_error.displayName);

(yardwerkz.app.core.screen_404_error.fast_refresh_signature = sig__18027__auto___30212);
} else {
}
} else {
}

yardwerkz.app.core.example_routes = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",yardwerkz.app.navigation.stack_navigator(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/a",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"screen","screen",1990059748),yardwerkz.app.core.screen_a], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/b",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"screen","screen",1990059748),yardwerkz.app.core.screen_b], null)], null)], null));
yardwerkz.app.core.animated_timing = shadow.js.shim.module$react_native.Animated.timing;
yardwerkz.app.core.animated_view = shadow.js.shim.module$react_native.Animated.View;
yardwerkz.app.core.old_root = (function yardwerkz$app$core$old_root(){
var f__18094__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30213 = yardwerkz.app.core.old_root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30213)){
var f__18018__auto___30214 = temp__5804__auto___30213;
(f__18018__auto___30214.cljs$core$IFn$_invoke$arity$0 ? f__18018__auto___30214.cljs$core$IFn$_invoke$arity$0() : f__18018__auto___30214.call(null, ));
} else {
}
} else {
}

var fade_anim = shadow.js.shim.module$react_native.useAnimatedValue((0));
var fade_in = (function (){
return (function (){var G__30191 = fade_anim;
var G__30192 = yardwerkz.app.util.to_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),(5000),new cljs.core.Keyword(null,"useNativeDriver","useNativeDriver",228195501),true], null));
return (yardwerkz.app.core.animated_timing.cljs$core$IFn$_invoke$arity$2 ? yardwerkz.app.core.animated_timing.cljs$core$IFn$_invoke$arity$2(G__30191,G__30192) : yardwerkz.app.core.animated_timing.call(null, G__30191,G__30192));
})().start();
});
var fade_out = (function (){
return (function (){var G__30193 = fade_anim;
var G__30194 = yardwerkz.app.util.to_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),(3000),new cljs.core.Keyword(null,"useNativeDriver","useNativeDriver",228195501),true], null));
return (yardwerkz.app.core.animated_timing.cljs$core$IFn$_invoke$arity$2 ? yardwerkz.app.core.animated_timing.cljs$core$IFn$_invoke$arity$2(G__30193,G__30194) : yardwerkz.app.core.animated_timing.call(null, G__30193,G__30194));
})().start();
});
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaProvider,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaView,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),true,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null)],[uix.compiler.alpha.component_element(yardwerkz.app.core.animated_view,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),fade_anim], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null)],["Fading in and out"])]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),fade_in,new cljs.core.Keyword(null,"title","title",636505583),"Fade In"], null)],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),fade_out,new cljs.core.Keyword(null,"title","title",636505583),"Fade Out"], null)],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30195 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30196 = yardwerkz.app.core.old_root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30196);

try{return f__18094__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30195);
}} else {
return f__18094__auto__();
}
});

(yardwerkz.app.core.old_root.uix_component_QMARK_ = true);

(yardwerkz.app.core.old_root.displayName = "yardwerkz.app.core/old-root");

Object.defineProperty(yardwerkz.app.core.old_root,"name",(function (){var obj30198 = ({"value":"yardwerkz.app.core/old-root"});
return obj30198;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__18027__auto___30215 = window.uix.dev.signature_BANG_();
(sig__18027__auto___30215.cljs$core$IFn$_invoke$arity$4 ? sig__18027__auto___30215.cljs$core$IFn$_invoke$arity$4(yardwerkz.app.core.old_root,"(rn/useAnimatedValue 0)",null,null) : sig__18027__auto___30215.call(null, yardwerkz.app.core.old_root,"(rn/useAnimatedValue 0)",null,null));

window.uix.dev.register_BANG_(yardwerkz.app.core.old_root,yardwerkz.app.core.old_root.displayName);

(yardwerkz.app.core.old_root.fast_refresh_signature = sig__18027__auto___30215);
} else {
}
} else {
}

yardwerkz.app.core.root = (function yardwerkz$app$core$root(){
var f__18094__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30216 = yardwerkz.app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30216)){
var f__18018__auto___30217 = temp__5804__auto___30216;
(f__18018__auto___30217.cljs$core$IFn$_invoke$arity$0 ? f__18018__auto___30217.cljs$core$IFn$_invoke$arity$0() : f__18018__auto___30217.call(null, ));
} else {
}
} else {
}

var match = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","match","nav/match",1220245633)], null));
if(cljs.core.truth_(match)){
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native_safe_area_context.SafeAreaProvider,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(yardwerkz.app.navigation.display_screen,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"match","match",1220059550),match], null)],[])]);
} else {
return uix.compiler.alpha.component_element(yardwerkz.app.core.screen_404_error,[null],[]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30200 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30201 = yardwerkz.app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30201);

try{return f__18094__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30200);
}} else {
return f__18094__auto__();
}
});

(yardwerkz.app.core.root.uix_component_QMARK_ = true);

(yardwerkz.app.core.root.displayName = "yardwerkz.app.core/root");

Object.defineProperty(yardwerkz.app.core.root,"name",(function (){var obj30203 = ({"value":"yardwerkz.app.core/root"});
return obj30203;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__18027__auto___30218 = window.uix.dev.signature_BANG_();
(sig__18027__auto___30218.cljs$core$IFn$_invoke$arity$4 ? sig__18027__auto___30218.cljs$core$IFn$_invoke$arity$4(yardwerkz.app.core.root,"(refx/use-sub [:nav/match])",null,null) : sig__18027__auto___30218.call(null, yardwerkz.app.core.root,"(refx/use-sub [:nav/match])",null,null));

window.uix.dev.register_BANG_(yardwerkz.app.core.root,yardwerkz.app.core.root.displayName);

(yardwerkz.app.core.root.fast_refresh_signature = sig__18027__auto___30218);
} else {
}
} else {
}

yardwerkz.app.core.init = (function yardwerkz$app$core$init(){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","start","nav/start",-355358704),yardwerkz.app.core.example_routes], null));

return shadow.js.shim.module$expo.registerRootComponent(uix.core.as_react(yardwerkz.app.core.root));
});

//# sourceMappingURL=yardwerkz.app.core.js.map
