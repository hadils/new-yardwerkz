goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16603){
var map__16604 = p__16603;
var map__16604__$1 = cljs.core.__destructure_map(map__16604);
var runtime = map__16604__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16604__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_16776 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_16776)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__16610 = runtime;
var G__16611 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_16776);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__16610,G__16611) : shadow.remote.runtime.shared.process.call(null, G__16610,G__16611));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16612,res){
var map__16613 = p__16612;
var map__16613__$1 = cljs.core.__destructure_map(map__16613);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16614 = res;
var G__16614__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16614,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16614);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16614__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16614__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16616 = arguments.length;
switch (G__16616) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16617,msg,handlers,timeout_after_ms){
var map__16618 = p__16617;
var map__16618__$1 = cljs.core.__destructure_map(map__16618);
var runtime = map__16618__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16618__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16804 = arguments.length;
var i__5727__auto___16806 = (0);
while(true){
if((i__5727__auto___16806 < len__5726__auto___16804)){
args__5732__auto__.push((arguments[i__5727__auto___16806]));

var G__16808 = (i__5727__auto___16806 + (1));
i__5727__auto___16806 = G__16808;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16624,ev,args){
var map__16625 = p__16624;
var map__16625__$1 = cljs.core.__destructure_map(map__16625);
var runtime = map__16625__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16627 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16631 = null;
var count__16632 = (0);
var i__16633 = (0);
while(true){
if((i__16633 < count__16632)){
var ext = chunk__16631.cljs$core$IIndexed$_nth$arity$2(null, i__16633);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16812 = seq__16627;
var G__16813 = chunk__16631;
var G__16814 = count__16632;
var G__16815 = (i__16633 + (1));
seq__16627 = G__16812;
chunk__16631 = G__16813;
count__16632 = G__16814;
i__16633 = G__16815;
continue;
} else {
var G__16816 = seq__16627;
var G__16817 = chunk__16631;
var G__16818 = count__16632;
var G__16819 = (i__16633 + (1));
seq__16627 = G__16816;
chunk__16631 = G__16817;
count__16632 = G__16818;
i__16633 = G__16819;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16627);
if(temp__5804__auto__){
var seq__16627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16627__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16627__$1);
var G__16820 = cljs.core.chunk_rest(seq__16627__$1);
var G__16821 = c__5525__auto__;
var G__16822 = cljs.core.count(c__5525__auto__);
var G__16823 = (0);
seq__16627 = G__16820;
chunk__16631 = G__16821;
count__16632 = G__16822;
i__16633 = G__16823;
continue;
} else {
var ext = cljs.core.first(seq__16627__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16826 = cljs.core.next(seq__16627__$1);
var G__16827 = null;
var G__16828 = (0);
var G__16829 = (0);
seq__16627 = G__16826;
chunk__16631 = G__16827;
count__16632 = G__16828;
i__16633 = G__16829;
continue;
} else {
var G__16830 = cljs.core.next(seq__16627__$1);
var G__16831 = null;
var G__16832 = (0);
var G__16833 = (0);
seq__16627 = G__16830;
chunk__16631 = G__16831;
count__16632 = G__16832;
i__16633 = G__16833;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16621){
var G__16622 = cljs.core.first(seq16621);
var seq16621__$1 = cljs.core.next(seq16621);
var G__16623 = cljs.core.first(seq16621__$1);
var seq16621__$2 = cljs.core.next(seq16621__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16622,G__16623,seq16621__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16723,p__16724){
var map__16725 = p__16723;
var map__16725__$1 = cljs.core.__destructure_map(map__16725);
var runtime = map__16725__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16726 = p__16724;
var map__16726__$1 = cljs.core.__destructure_map(map__16726);
var msg = map__16726__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16726__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__16727 = cljs.core.deref(state_ref);
var map__16727__$1 = cljs.core.__destructure_map(map__16727);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16727__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16727__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16728,msg){
var map__16729 = p__16728;
var map__16729__$1 = cljs.core.__destructure_map(map__16729);
var runtime = map__16729__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16730,key,p__16731){
var map__16732 = p__16730;
var map__16732__$1 = cljs.core.__destructure_map(map__16732);
var state = map__16732__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16732__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16733 = p__16731;
var map__16733__$1 = cljs.core.__destructure_map(map__16733);
var spec = map__16733__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16733__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16733__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16734,key,spec){
var map__16735 = p__16734;
var map__16735__$1 = cljs.core.__destructure_map(map__16735);
var runtime = map__16735__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16857 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16857 == null)){
} else {
var on_welcome_16858 = temp__5808__auto___16857;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16858.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16858.cljs$core$IFn$_invoke$arity$0() : on_welcome_16858.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16736_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16736_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16737_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16737_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16738_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16738_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16739_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16739_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16740_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16740_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16741,key){
var map__16742 = p__16741;
var map__16742__$1 = cljs.core.__destructure_map(map__16742);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16743,msg){
var map__16744 = p__16743;
var map__16744__$1 = cljs.core.__destructure_map(map__16744);
var runtime = map__16744__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16744__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16747,p__16748){
var map__16749 = p__16747;
var map__16749__$1 = cljs.core.__destructure_map(map__16749);
var runtime = map__16749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16750 = p__16748;
var map__16750__$1 = cljs.core.__destructure_map(map__16750);
var msg = map__16750__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16753 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16755 = null;
var count__16756 = (0);
var i__16757 = (0);
while(true){
if((i__16757 < count__16756)){
var map__16765 = chunk__16755.cljs$core$IIndexed$_nth$arity$2(null, i__16757);
var map__16765__$1 = cljs.core.__destructure_map(map__16765);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16765__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__17017 = seq__16753;
var G__17018 = chunk__16755;
var G__17019 = count__16756;
var G__17020 = (i__16757 + (1));
seq__16753 = G__17017;
chunk__16755 = G__17018;
count__16756 = G__17019;
i__16757 = G__17020;
continue;
} else {
var G__17023 = seq__16753;
var G__17024 = chunk__16755;
var G__17025 = count__16756;
var G__17026 = (i__16757 + (1));
seq__16753 = G__17023;
chunk__16755 = G__17024;
count__16756 = G__17025;
i__16757 = G__17026;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16753);
if(temp__5804__auto__){
var seq__16753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16753__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16753__$1);
var G__17029 = cljs.core.chunk_rest(seq__16753__$1);
var G__17030 = c__5525__auto__;
var G__17031 = cljs.core.count(c__5525__auto__);
var G__17032 = (0);
seq__16753 = G__17029;
chunk__16755 = G__17030;
count__16756 = G__17031;
i__16757 = G__17032;
continue;
} else {
var map__16769 = cljs.core.first(seq__16753__$1);
var map__16769__$1 = cljs.core.__destructure_map(map__16769);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16769__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__17035 = cljs.core.next(seq__16753__$1);
var G__17036 = null;
var G__17037 = (0);
var G__17038 = (0);
seq__16753 = G__17035;
chunk__16755 = G__17036;
count__16756 = G__17037;
i__16757 = G__17038;
continue;
} else {
var G__17041 = cljs.core.next(seq__16753__$1);
var G__17042 = null;
var G__17043 = (0);
var G__17044 = (0);
seq__16753 = G__17041;
chunk__16755 = G__17042;
count__16756 = G__17043;
i__16757 = G__17044;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
