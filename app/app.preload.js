goog.provide('app.preload');
if((typeof app !== 'undefined') && (typeof app.preload !== 'undefined') && (typeof app.preload.__init_fast_refresh_BANG_ !== 'undefined')){
} else {
app.preload.__init_fast_refresh_BANG_ = (function (){
uix.dev.init_fast_refresh_BANG_();

return null;
})()
;
}
app.preload.refresh = (function app$preload$refresh(){
return uix.dev.refresh_BANG_();
});
app.preload.build_notify = (function app$preload$build_notify(p__16683){
var map__16684 = p__16683;
var map__16684__$1 = cljs.core.__destructure_map(map__16684);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16684__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16684__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466),type)){
return console.error((new Error(report)));
} else {
return null;
}
});

//# sourceMappingURL=app.preload.js.map
