// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9811){
var map__9812 = p__9811;
var map__9812__$1 = ((((!((map__9812 == null)))?(((((map__9812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9812):map__9812);
var m = map__9812__$1;
var n = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9814_9836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9815_9837 = null;
var count__9816_9838 = (0);
var i__9817_9839 = (0);
while(true){
if((i__9817_9839 < count__9816_9838)){
var f_9840 = cljs.core._nth.call(null,chunk__9815_9837,i__9817_9839);
cljs.core.println.call(null,"  ",f_9840);


var G__9841 = seq__9814_9836;
var G__9842 = chunk__9815_9837;
var G__9843 = count__9816_9838;
var G__9844 = (i__9817_9839 + (1));
seq__9814_9836 = G__9841;
chunk__9815_9837 = G__9842;
count__9816_9838 = G__9843;
i__9817_9839 = G__9844;
continue;
} else {
var temp__4657__auto___9845 = cljs.core.seq.call(null,seq__9814_9836);
if(temp__4657__auto___9845){
var seq__9814_9846__$1 = temp__4657__auto___9845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9814_9846__$1)){
var c__4319__auto___9847 = cljs.core.chunk_first.call(null,seq__9814_9846__$1);
var G__9848 = cljs.core.chunk_rest.call(null,seq__9814_9846__$1);
var G__9849 = c__4319__auto___9847;
var G__9850 = cljs.core.count.call(null,c__4319__auto___9847);
var G__9851 = (0);
seq__9814_9836 = G__9848;
chunk__9815_9837 = G__9849;
count__9816_9838 = G__9850;
i__9817_9839 = G__9851;
continue;
} else {
var f_9852 = cljs.core.first.call(null,seq__9814_9846__$1);
cljs.core.println.call(null,"  ",f_9852);


var G__9853 = cljs.core.next.call(null,seq__9814_9846__$1);
var G__9854 = null;
var G__9855 = (0);
var G__9856 = (0);
seq__9814_9836 = G__9853;
chunk__9815_9837 = G__9854;
count__9816_9838 = G__9855;
i__9817_9839 = G__9856;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9857 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9857);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9857)))?cljs.core.second.call(null,arglists_9857):arglists_9857));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9818_9858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9819_9859 = null;
var count__9820_9860 = (0);
var i__9821_9861 = (0);
while(true){
if((i__9821_9861 < count__9820_9860)){
var vec__9822_9862 = cljs.core._nth.call(null,chunk__9819_9859,i__9821_9861);
var name_9863 = cljs.core.nth.call(null,vec__9822_9862,(0),null);
var map__9825_9864 = cljs.core.nth.call(null,vec__9822_9862,(1),null);
var map__9825_9865__$1 = ((((!((map__9825_9864 == null)))?(((((map__9825_9864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9825_9864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9825_9864):map__9825_9864);
var doc_9866 = cljs.core.get.call(null,map__9825_9865__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9867 = cljs.core.get.call(null,map__9825_9865__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9863);

cljs.core.println.call(null," ",arglists_9867);

if(cljs.core.truth_(doc_9866)){
cljs.core.println.call(null," ",doc_9866);
} else {
}


var G__9868 = seq__9818_9858;
var G__9869 = chunk__9819_9859;
var G__9870 = count__9820_9860;
var G__9871 = (i__9821_9861 + (1));
seq__9818_9858 = G__9868;
chunk__9819_9859 = G__9869;
count__9820_9860 = G__9870;
i__9821_9861 = G__9871;
continue;
} else {
var temp__4657__auto___9872 = cljs.core.seq.call(null,seq__9818_9858);
if(temp__4657__auto___9872){
var seq__9818_9873__$1 = temp__4657__auto___9872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9818_9873__$1)){
var c__4319__auto___9874 = cljs.core.chunk_first.call(null,seq__9818_9873__$1);
var G__9875 = cljs.core.chunk_rest.call(null,seq__9818_9873__$1);
var G__9876 = c__4319__auto___9874;
var G__9877 = cljs.core.count.call(null,c__4319__auto___9874);
var G__9878 = (0);
seq__9818_9858 = G__9875;
chunk__9819_9859 = G__9876;
count__9820_9860 = G__9877;
i__9821_9861 = G__9878;
continue;
} else {
var vec__9827_9879 = cljs.core.first.call(null,seq__9818_9873__$1);
var name_9880 = cljs.core.nth.call(null,vec__9827_9879,(0),null);
var map__9830_9881 = cljs.core.nth.call(null,vec__9827_9879,(1),null);
var map__9830_9882__$1 = ((((!((map__9830_9881 == null)))?(((((map__9830_9881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9830_9881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9830_9881):map__9830_9881);
var doc_9883 = cljs.core.get.call(null,map__9830_9882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9884 = cljs.core.get.call(null,map__9830_9882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9880);

cljs.core.println.call(null," ",arglists_9884);

if(cljs.core.truth_(doc_9883)){
cljs.core.println.call(null," ",doc_9883);
} else {
}


var G__9885 = cljs.core.next.call(null,seq__9818_9873__$1);
var G__9886 = null;
var G__9887 = (0);
var G__9888 = (0);
seq__9818_9858 = G__9885;
chunk__9819_9859 = G__9886;
count__9820_9860 = G__9887;
i__9821_9861 = G__9888;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9832 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9833 = null;
var count__9834 = (0);
var i__9835 = (0);
while(true){
if((i__9835 < count__9834)){
var role = cljs.core._nth.call(null,chunk__9833,i__9835);
var temp__4657__auto___9889__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9889__$1)){
var spec_9890 = temp__4657__auto___9889__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9890));
} else {
}


var G__9891 = seq__9832;
var G__9892 = chunk__9833;
var G__9893 = count__9834;
var G__9894 = (i__9835 + (1));
seq__9832 = G__9891;
chunk__9833 = G__9892;
count__9834 = G__9893;
i__9835 = G__9894;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9832);
if(temp__4657__auto____$1){
var seq__9832__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9832__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9832__$1);
var G__9895 = cljs.core.chunk_rest.call(null,seq__9832__$1);
var G__9896 = c__4319__auto__;
var G__9897 = cljs.core.count.call(null,c__4319__auto__);
var G__9898 = (0);
seq__9832 = G__9895;
chunk__9833 = G__9896;
count__9834 = G__9897;
i__9835 = G__9898;
continue;
} else {
var role = cljs.core.first.call(null,seq__9832__$1);
var temp__4657__auto___9899__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9899__$2)){
var spec_9900 = temp__4657__auto___9899__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9900));
} else {
}


var G__9901 = cljs.core.next.call(null,seq__9832__$1);
var G__9902 = null;
var G__9903 = (0);
var G__9904 = (0);
seq__9832 = G__9901;
chunk__9833 = G__9902;
count__9834 = G__9903;
i__9835 = G__9904;
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
