// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2295){
var map__2296 = p__2295;
var map__2296__$1 = ((((!((map__2296 == null)))?(((((map__2296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2296):map__2296);
var m = map__2296__$1;
var n = cljs.core.get.call(null,map__2296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__2298_2320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2299_2321 = null;
var count__2300_2322 = (0);
var i__2301_2323 = (0);
while(true){
if((i__2301_2323 < count__2300_2322)){
var f_2324 = cljs.core._nth.call(null,chunk__2299_2321,i__2301_2323);
cljs.core.println.call(null,"  ",f_2324);


var G__2325 = seq__2298_2320;
var G__2326 = chunk__2299_2321;
var G__2327 = count__2300_2322;
var G__2328 = (i__2301_2323 + (1));
seq__2298_2320 = G__2325;
chunk__2299_2321 = G__2326;
count__2300_2322 = G__2327;
i__2301_2323 = G__2328;
continue;
} else {
var temp__4657__auto___2329 = cljs.core.seq.call(null,seq__2298_2320);
if(temp__4657__auto___2329){
var seq__2298_2330__$1 = temp__4657__auto___2329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2298_2330__$1)){
var c__4319__auto___2331 = cljs.core.chunk_first.call(null,seq__2298_2330__$1);
var G__2332 = cljs.core.chunk_rest.call(null,seq__2298_2330__$1);
var G__2333 = c__4319__auto___2331;
var G__2334 = cljs.core.count.call(null,c__4319__auto___2331);
var G__2335 = (0);
seq__2298_2320 = G__2332;
chunk__2299_2321 = G__2333;
count__2300_2322 = G__2334;
i__2301_2323 = G__2335;
continue;
} else {
var f_2336 = cljs.core.first.call(null,seq__2298_2330__$1);
cljs.core.println.call(null,"  ",f_2336);


var G__2337 = cljs.core.next.call(null,seq__2298_2330__$1);
var G__2338 = null;
var G__2339 = (0);
var G__2340 = (0);
seq__2298_2320 = G__2337;
chunk__2299_2321 = G__2338;
count__2300_2322 = G__2339;
i__2301_2323 = G__2340;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2341 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2341);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2341)))?cljs.core.second.call(null,arglists_2341):arglists_2341));
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
var seq__2302_2342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2303_2343 = null;
var count__2304_2344 = (0);
var i__2305_2345 = (0);
while(true){
if((i__2305_2345 < count__2304_2344)){
var vec__2306_2346 = cljs.core._nth.call(null,chunk__2303_2343,i__2305_2345);
var name_2347 = cljs.core.nth.call(null,vec__2306_2346,(0),null);
var map__2309_2348 = cljs.core.nth.call(null,vec__2306_2346,(1),null);
var map__2309_2349__$1 = ((((!((map__2309_2348 == null)))?(((((map__2309_2348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2309_2348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2309_2348):map__2309_2348);
var doc_2350 = cljs.core.get.call(null,map__2309_2349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2351 = cljs.core.get.call(null,map__2309_2349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2347);

cljs.core.println.call(null," ",arglists_2351);

if(cljs.core.truth_(doc_2350)){
cljs.core.println.call(null," ",doc_2350);
} else {
}


var G__2352 = seq__2302_2342;
var G__2353 = chunk__2303_2343;
var G__2354 = count__2304_2344;
var G__2355 = (i__2305_2345 + (1));
seq__2302_2342 = G__2352;
chunk__2303_2343 = G__2353;
count__2304_2344 = G__2354;
i__2305_2345 = G__2355;
continue;
} else {
var temp__4657__auto___2356 = cljs.core.seq.call(null,seq__2302_2342);
if(temp__4657__auto___2356){
var seq__2302_2357__$1 = temp__4657__auto___2356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2302_2357__$1)){
var c__4319__auto___2358 = cljs.core.chunk_first.call(null,seq__2302_2357__$1);
var G__2359 = cljs.core.chunk_rest.call(null,seq__2302_2357__$1);
var G__2360 = c__4319__auto___2358;
var G__2361 = cljs.core.count.call(null,c__4319__auto___2358);
var G__2362 = (0);
seq__2302_2342 = G__2359;
chunk__2303_2343 = G__2360;
count__2304_2344 = G__2361;
i__2305_2345 = G__2362;
continue;
} else {
var vec__2311_2363 = cljs.core.first.call(null,seq__2302_2357__$1);
var name_2364 = cljs.core.nth.call(null,vec__2311_2363,(0),null);
var map__2314_2365 = cljs.core.nth.call(null,vec__2311_2363,(1),null);
var map__2314_2366__$1 = ((((!((map__2314_2365 == null)))?(((((map__2314_2365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2314_2365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2314_2365):map__2314_2365);
var doc_2367 = cljs.core.get.call(null,map__2314_2366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2368 = cljs.core.get.call(null,map__2314_2366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2364);

cljs.core.println.call(null," ",arglists_2368);

if(cljs.core.truth_(doc_2367)){
cljs.core.println.call(null," ",doc_2367);
} else {
}


var G__2369 = cljs.core.next.call(null,seq__2302_2357__$1);
var G__2370 = null;
var G__2371 = (0);
var G__2372 = (0);
seq__2302_2342 = G__2369;
chunk__2303_2343 = G__2370;
count__2304_2344 = G__2371;
i__2305_2345 = G__2372;
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

var seq__2316 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2317 = null;
var count__2318 = (0);
var i__2319 = (0);
while(true){
if((i__2319 < count__2318)){
var role = cljs.core._nth.call(null,chunk__2317,i__2319);
var temp__4657__auto___2373__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2373__$1)){
var spec_2374 = temp__4657__auto___2373__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2374));
} else {
}


var G__2375 = seq__2316;
var G__2376 = chunk__2317;
var G__2377 = count__2318;
var G__2378 = (i__2319 + (1));
seq__2316 = G__2375;
chunk__2317 = G__2376;
count__2318 = G__2377;
i__2319 = G__2378;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2316);
if(temp__4657__auto____$1){
var seq__2316__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2316__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2316__$1);
var G__2379 = cljs.core.chunk_rest.call(null,seq__2316__$1);
var G__2380 = c__4319__auto__;
var G__2381 = cljs.core.count.call(null,c__4319__auto__);
var G__2382 = (0);
seq__2316 = G__2379;
chunk__2317 = G__2380;
count__2318 = G__2381;
i__2319 = G__2382;
continue;
} else {
var role = cljs.core.first.call(null,seq__2316__$1);
var temp__4657__auto___2383__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2383__$2)){
var spec_2384 = temp__4657__auto___2383__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2384));
} else {
}


var G__2385 = cljs.core.next.call(null,seq__2316__$1);
var G__2386 = null;
var G__2387 = (0);
var G__2388 = (0);
seq__2316 = G__2385;
chunk__2317 = G__2386;
count__2318 = G__2387;
i__2319 = G__2388;
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

//# sourceMappingURL=repl.js.map
