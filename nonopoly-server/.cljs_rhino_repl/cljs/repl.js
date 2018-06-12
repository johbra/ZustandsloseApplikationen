// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2290){
var map__2291 = p__2290;
var map__2291__$1 = ((((!((map__2291 == null)))?(((((map__2291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2291):map__2291);
var m = map__2291__$1;
var n = cljs.core.get.call(null,map__2291__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__2293_2315 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2294_2316 = null;
var count__2295_2317 = (0);
var i__2296_2318 = (0);
while(true){
if((i__2296_2318 < count__2295_2317)){
var f_2319 = cljs.core._nth.call(null,chunk__2294_2316,i__2296_2318);
cljs.core.println.call(null,"  ",f_2319);


var G__2320 = seq__2293_2315;
var G__2321 = chunk__2294_2316;
var G__2322 = count__2295_2317;
var G__2323 = (i__2296_2318 + (1));
seq__2293_2315 = G__2320;
chunk__2294_2316 = G__2321;
count__2295_2317 = G__2322;
i__2296_2318 = G__2323;
continue;
} else {
var temp__4657__auto___2324 = cljs.core.seq.call(null,seq__2293_2315);
if(temp__4657__auto___2324){
var seq__2293_2325__$1 = temp__4657__auto___2324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2293_2325__$1)){
var c__4319__auto___2326 = cljs.core.chunk_first.call(null,seq__2293_2325__$1);
var G__2327 = cljs.core.chunk_rest.call(null,seq__2293_2325__$1);
var G__2328 = c__4319__auto___2326;
var G__2329 = cljs.core.count.call(null,c__4319__auto___2326);
var G__2330 = (0);
seq__2293_2315 = G__2327;
chunk__2294_2316 = G__2328;
count__2295_2317 = G__2329;
i__2296_2318 = G__2330;
continue;
} else {
var f_2331 = cljs.core.first.call(null,seq__2293_2325__$1);
cljs.core.println.call(null,"  ",f_2331);


var G__2332 = cljs.core.next.call(null,seq__2293_2325__$1);
var G__2333 = null;
var G__2334 = (0);
var G__2335 = (0);
seq__2293_2315 = G__2332;
chunk__2294_2316 = G__2333;
count__2295_2317 = G__2334;
i__2296_2318 = G__2335;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2336 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2336);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2336)))?cljs.core.second.call(null,arglists_2336):arglists_2336));
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
var seq__2297_2337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2298_2338 = null;
var count__2299_2339 = (0);
var i__2300_2340 = (0);
while(true){
if((i__2300_2340 < count__2299_2339)){
var vec__2301_2341 = cljs.core._nth.call(null,chunk__2298_2338,i__2300_2340);
var name_2342 = cljs.core.nth.call(null,vec__2301_2341,(0),null);
var map__2304_2343 = cljs.core.nth.call(null,vec__2301_2341,(1),null);
var map__2304_2344__$1 = ((((!((map__2304_2343 == null)))?(((((map__2304_2343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2304_2343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2304_2343):map__2304_2343);
var doc_2345 = cljs.core.get.call(null,map__2304_2344__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2346 = cljs.core.get.call(null,map__2304_2344__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2342);

cljs.core.println.call(null," ",arglists_2346);

if(cljs.core.truth_(doc_2345)){
cljs.core.println.call(null," ",doc_2345);
} else {
}


var G__2347 = seq__2297_2337;
var G__2348 = chunk__2298_2338;
var G__2349 = count__2299_2339;
var G__2350 = (i__2300_2340 + (1));
seq__2297_2337 = G__2347;
chunk__2298_2338 = G__2348;
count__2299_2339 = G__2349;
i__2300_2340 = G__2350;
continue;
} else {
var temp__4657__auto___2351 = cljs.core.seq.call(null,seq__2297_2337);
if(temp__4657__auto___2351){
var seq__2297_2352__$1 = temp__4657__auto___2351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2297_2352__$1)){
var c__4319__auto___2353 = cljs.core.chunk_first.call(null,seq__2297_2352__$1);
var G__2354 = cljs.core.chunk_rest.call(null,seq__2297_2352__$1);
var G__2355 = c__4319__auto___2353;
var G__2356 = cljs.core.count.call(null,c__4319__auto___2353);
var G__2357 = (0);
seq__2297_2337 = G__2354;
chunk__2298_2338 = G__2355;
count__2299_2339 = G__2356;
i__2300_2340 = G__2357;
continue;
} else {
var vec__2306_2358 = cljs.core.first.call(null,seq__2297_2352__$1);
var name_2359 = cljs.core.nth.call(null,vec__2306_2358,(0),null);
var map__2309_2360 = cljs.core.nth.call(null,vec__2306_2358,(1),null);
var map__2309_2361__$1 = ((((!((map__2309_2360 == null)))?(((((map__2309_2360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2309_2360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2309_2360):map__2309_2360);
var doc_2362 = cljs.core.get.call(null,map__2309_2361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2363 = cljs.core.get.call(null,map__2309_2361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2359);

cljs.core.println.call(null," ",arglists_2363);

if(cljs.core.truth_(doc_2362)){
cljs.core.println.call(null," ",doc_2362);
} else {
}


var G__2364 = cljs.core.next.call(null,seq__2297_2352__$1);
var G__2365 = null;
var G__2366 = (0);
var G__2367 = (0);
seq__2297_2337 = G__2364;
chunk__2298_2338 = G__2365;
count__2299_2339 = G__2366;
i__2300_2340 = G__2367;
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

var seq__2311 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2312 = null;
var count__2313 = (0);
var i__2314 = (0);
while(true){
if((i__2314 < count__2313)){
var role = cljs.core._nth.call(null,chunk__2312,i__2314);
var temp__4657__auto___2368__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2368__$1)){
var spec_2369 = temp__4657__auto___2368__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2369));
} else {
}


var G__2370 = seq__2311;
var G__2371 = chunk__2312;
var G__2372 = count__2313;
var G__2373 = (i__2314 + (1));
seq__2311 = G__2370;
chunk__2312 = G__2371;
count__2313 = G__2372;
i__2314 = G__2373;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2311);
if(temp__4657__auto____$1){
var seq__2311__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2311__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2311__$1);
var G__2374 = cljs.core.chunk_rest.call(null,seq__2311__$1);
var G__2375 = c__4319__auto__;
var G__2376 = cljs.core.count.call(null,c__4319__auto__);
var G__2377 = (0);
seq__2311 = G__2374;
chunk__2312 = G__2375;
count__2313 = G__2376;
i__2314 = G__2377;
continue;
} else {
var role = cljs.core.first.call(null,seq__2311__$1);
var temp__4657__auto___2378__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2378__$2)){
var spec_2379 = temp__4657__auto___2378__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2379));
} else {
}


var G__2380 = cljs.core.next.call(null,seq__2311__$1);
var G__2381 = null;
var G__2382 = (0);
var G__2383 = (0);
seq__2311 = G__2380;
chunk__2312 = G__2381;
count__2313 = G__2382;
i__2314 = G__2383;
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
