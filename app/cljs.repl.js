goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19317){
var map__19318 = p__19317;
var map__19318__$1 = cljs.core.__destructure_map(map__19318);
var m = map__19318__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19318__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19329_19598 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19330_19599 = null;
var count__19331_19600 = (0);
var i__19332_19601 = (0);
while(true){
if((i__19332_19601 < count__19331_19600)){
var f_19602 = chunk__19330_19599.cljs$core$IIndexed$_nth$arity$2(null, i__19332_19601);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19602], 0));


var G__19603 = seq__19329_19598;
var G__19604 = chunk__19330_19599;
var G__19605 = count__19331_19600;
var G__19606 = (i__19332_19601 + (1));
seq__19329_19598 = G__19603;
chunk__19330_19599 = G__19604;
count__19331_19600 = G__19605;
i__19332_19601 = G__19606;
continue;
} else {
var temp__5804__auto___19607 = cljs.core.seq(seq__19329_19598);
if(temp__5804__auto___19607){
var seq__19329_19608__$1 = temp__5804__auto___19607;
if(cljs.core.chunked_seq_QMARK_(seq__19329_19608__$1)){
var c__5525__auto___19609 = cljs.core.chunk_first(seq__19329_19608__$1);
var G__19610 = cljs.core.chunk_rest(seq__19329_19608__$1);
var G__19611 = c__5525__auto___19609;
var G__19612 = cljs.core.count(c__5525__auto___19609);
var G__19613 = (0);
seq__19329_19598 = G__19610;
chunk__19330_19599 = G__19611;
count__19331_19600 = G__19612;
i__19332_19601 = G__19613;
continue;
} else {
var f_19614 = cljs.core.first(seq__19329_19608__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19614], 0));


var G__19616 = cljs.core.next(seq__19329_19608__$1);
var G__19617 = null;
var G__19618 = (0);
var G__19619 = (0);
seq__19329_19598 = G__19616;
chunk__19330_19599 = G__19617;
count__19331_19600 = G__19618;
i__19332_19601 = G__19619;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19622 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19622], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19622)))?cljs.core.second(arglists_19622):arglists_19622)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19365_19632 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19366_19633 = null;
var count__19367_19634 = (0);
var i__19368_19635 = (0);
while(true){
if((i__19368_19635 < count__19367_19634)){
var vec__19395_19636 = chunk__19366_19633.cljs$core$IIndexed$_nth$arity$2(null, i__19368_19635);
var name_19637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395_19636,(0),null);
var map__19398_19638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395_19636,(1),null);
var map__19398_19639__$1 = cljs.core.__destructure_map(map__19398_19638);
var doc_19640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398_19639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398_19639__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19637], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19641], 0));

if(cljs.core.truth_(doc_19640)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19640], 0));
} else {
}


var G__19647 = seq__19365_19632;
var G__19648 = chunk__19366_19633;
var G__19649 = count__19367_19634;
var G__19650 = (i__19368_19635 + (1));
seq__19365_19632 = G__19647;
chunk__19366_19633 = G__19648;
count__19367_19634 = G__19649;
i__19368_19635 = G__19650;
continue;
} else {
var temp__5804__auto___19651 = cljs.core.seq(seq__19365_19632);
if(temp__5804__auto___19651){
var seq__19365_19652__$1 = temp__5804__auto___19651;
if(cljs.core.chunked_seq_QMARK_(seq__19365_19652__$1)){
var c__5525__auto___19654 = cljs.core.chunk_first(seq__19365_19652__$1);
var G__19656 = cljs.core.chunk_rest(seq__19365_19652__$1);
var G__19657 = c__5525__auto___19654;
var G__19658 = cljs.core.count(c__5525__auto___19654);
var G__19659 = (0);
seq__19365_19632 = G__19656;
chunk__19366_19633 = G__19657;
count__19367_19634 = G__19658;
i__19368_19635 = G__19659;
continue;
} else {
var vec__19414_19661 = cljs.core.first(seq__19365_19652__$1);
var name_19662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19414_19661,(0),null);
var map__19417_19663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19414_19661,(1),null);
var map__19417_19664__$1 = cljs.core.__destructure_map(map__19417_19663);
var doc_19665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19417_19664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19417_19664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19662], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19666], 0));

if(cljs.core.truth_(doc_19665)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19665], 0));
} else {
}


var G__19667 = cljs.core.next(seq__19365_19652__$1);
var G__19668 = null;
var G__19669 = (0);
var G__19670 = (0);
seq__19365_19632 = G__19667;
chunk__19366_19633 = G__19668;
count__19367_19634 = G__19669;
i__19368_19635 = G__19670;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19427 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19428 = null;
var count__19429 = (0);
var i__19430 = (0);
while(true){
if((i__19430 < count__19429)){
var role = chunk__19428.cljs$core$IIndexed$_nth$arity$2(null, i__19430);
var temp__5804__auto___19674__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19674__$1)){
var spec_19677 = temp__5804__auto___19674__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19677)], 0));
} else {
}


var G__19678 = seq__19427;
var G__19679 = chunk__19428;
var G__19680 = count__19429;
var G__19681 = (i__19430 + (1));
seq__19427 = G__19678;
chunk__19428 = G__19679;
count__19429 = G__19680;
i__19430 = G__19681;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19427);
if(temp__5804__auto____$1){
var seq__19427__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19427__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19427__$1);
var G__19684 = cljs.core.chunk_rest(seq__19427__$1);
var G__19685 = c__5525__auto__;
var G__19686 = cljs.core.count(c__5525__auto__);
var G__19687 = (0);
seq__19427 = G__19684;
chunk__19428 = G__19685;
count__19429 = G__19686;
i__19430 = G__19687;
continue;
} else {
var role = cljs.core.first(seq__19427__$1);
var temp__5804__auto___19689__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19689__$2)){
var spec_19690 = temp__5804__auto___19689__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19690)], 0));
} else {
}


var G__19691 = cljs.core.next(seq__19427__$1);
var G__19692 = null;
var G__19693 = (0);
var G__19694 = (0);
seq__19427 = G__19691;
chunk__19428 = G__19692;
count__19429 = G__19693;
i__19430 = G__19694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19478 = datafied_throwable;
var map__19478__$1 = cljs.core.__destructure_map(map__19478);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19478__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19478__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19478__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19480 = cljs.core.last(via);
var map__19480__$1 = cljs.core.__destructure_map(map__19480);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19480__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19480__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19481 = data;
var map__19481__$1 = cljs.core.__destructure_map(map__19481);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19481__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19481__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19481__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19482 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19482__$1 = cljs.core.__destructure_map(map__19482);
var top_data = map__19482__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19488 = phase;
var G__19488__$1 = (((G__19488 instanceof cljs.core.Keyword))?G__19488.fqn:null);
switch (G__19488__$1) {
case "read-source":
var map__19489 = data;
var map__19489__$1 = cljs.core.__destructure_map(map__19489);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19489__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19489__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19490__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19490,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19490);
var G__19490__$2 = (cljs.core.truth_((function (){var fexpr__19495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19495.cljs$core$IFn$_invoke$arity$1 ? fexpr__19495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19495.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19490__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19490__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19490__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19490__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19496 = top_data;
var G__19496__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19496,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19496);
var G__19496__$2 = (cljs.core.truth_((function (){var fexpr__19501 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19501.cljs$core$IFn$_invoke$arity$1 ? fexpr__19501.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19501.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19496__$1);
var G__19496__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19496__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19496__$2);
var G__19496__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19496__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19496__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19496__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19496__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19505 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(3),null);
var G__19509 = top_data;
var G__19509__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19509,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19509);
var G__19509__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19509__$1);
var G__19509__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19509__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19509__$2);
var G__19509__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19509__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19509__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19509__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19509__$4;
}

break;
case "execution":
var vec__19516 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19516,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19516,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19516,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19516,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19474_SHARP_){
var or__5002__auto__ = (p1__19474_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19525.cljs$core$IFn$_invoke$arity$1 ? fexpr__19525.cljs$core$IFn$_invoke$arity$1(p1__19474_SHARP_) : fexpr__19525.call(null, p1__19474_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19529 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19529__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19529);
var G__19529__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19529__$1);
var G__19529__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19529__$2);
var G__19529__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19529__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19529__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19488__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19543){
var map__19544 = p__19543;
var map__19544__$1 = cljs.core.__destructure_map(map__19544);
var triage_data = map__19544__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19551 = phase;
var G__19551__$1 = (((G__19551 instanceof cljs.core.Keyword))?G__19551.fqn:null);
switch (G__19551__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19554 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19556 = loc;
var G__19557 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19558_19735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19559_19736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19560_19737 = true;
var _STAR_print_fn_STAR__temp_val__19561_19738 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19560_19737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19561_19738);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19537_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19537_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19559_19736);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19558_19735);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19554,G__19555,G__19556,G__19557) : format.call(null, G__19554,G__19555,G__19556,G__19557));

break;
case "macroexpansion":
var G__19562 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19563 = cause_type;
var G__19564 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19565 = loc;
var G__19566 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19562,G__19563,G__19564,G__19565,G__19566) : format.call(null, G__19562,G__19563,G__19564,G__19565,G__19566));

break;
case "compile-syntax-check":
var G__19567 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19568 = cause_type;
var G__19569 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19570 = loc;
var G__19571 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19567,G__19568,G__19569,G__19570,G__19571) : format.call(null, G__19567,G__19568,G__19569,G__19570,G__19571));

break;
case "compilation":
var G__19572 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19573 = cause_type;
var G__19574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19575 = loc;
var G__19576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19572,G__19573,G__19574,G__19575,G__19576) : format.call(null, G__19572,G__19573,G__19574,G__19575,G__19576));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19577 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19578 = symbol;
var G__19579 = loc;
var G__19580 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19581_19762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19582_19763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19583_19764 = true;
var _STAR_print_fn_STAR__temp_val__19584_19765 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19583_19764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19584_19765);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19582_19763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19581_19762);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19577,G__19578,G__19579,G__19580) : format.call(null, G__19577,G__19578,G__19579,G__19580));
} else {
var G__19589 = "Execution error%s at %s(%s).\n%s\n";
var G__19590 = cause_type;
var G__19591 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19592 = loc;
var G__19593 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19589,G__19590,G__19591,G__19592,G__19593) : format.call(null, G__19589,G__19590,G__19591,G__19592,G__19593));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19551__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
