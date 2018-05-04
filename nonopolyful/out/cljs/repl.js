// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1251){
var map__1252 = p__1251;
var map__1252__$1 = ((((!((map__1252 == null)))?(((((map__1252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1252):map__1252);
var m = map__1252__$1;
var n = cljs.core.get.call(null,map__1252__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1254_1276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1255_1277 = null;
var count__1256_1278 = (0);
var i__1257_1279 = (0);
while(true){
if((i__1257_1279 < count__1256_1278)){
var f_1280 = cljs.core._nth.call(null,chunk__1255_1277,i__1257_1279);
cljs.core.println.call(null,"  ",f_1280);


var G__1281 = seq__1254_1276;
var G__1282 = chunk__1255_1277;
var G__1283 = count__1256_1278;
var G__1284 = (i__1257_1279 + (1));
seq__1254_1276 = G__1281;
chunk__1255_1277 = G__1282;
count__1256_1278 = G__1283;
i__1257_1279 = G__1284;
continue;
} else {
var temp__4657__auto___1285 = cljs.core.seq.call(null,seq__1254_1276);
if(temp__4657__auto___1285){
var seq__1254_1286__$1 = temp__4657__auto___1285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1254_1286__$1)){
var c__4319__auto___1287 = cljs.core.chunk_first.call(null,seq__1254_1286__$1);
var G__1288 = cljs.core.chunk_rest.call(null,seq__1254_1286__$1);
var G__1289 = c__4319__auto___1287;
var G__1290 = cljs.core.count.call(null,c__4319__auto___1287);
var G__1291 = (0);
seq__1254_1276 = G__1288;
chunk__1255_1277 = G__1289;
count__1256_1278 = G__1290;
i__1257_1279 = G__1291;
continue;
} else {
var f_1292 = cljs.core.first.call(null,seq__1254_1286__$1);
cljs.core.println.call(null,"  ",f_1292);


var G__1293 = cljs.core.next.call(null,seq__1254_1286__$1);
var G__1294 = null;
var G__1295 = (0);
var G__1296 = (0);
seq__1254_1276 = G__1293;
chunk__1255_1277 = G__1294;
count__1256_1278 = G__1295;
i__1257_1279 = G__1296;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1297 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1297);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1297)))?cljs.core.second.call(null,arglists_1297):arglists_1297));
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
var seq__1258_1298 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1259_1299 = null;
var count__1260_1300 = (0);
var i__1261_1301 = (0);
while(true){
if((i__1261_1301 < count__1260_1300)){
var vec__1262_1302 = cljs.core._nth.call(null,chunk__1259_1299,i__1261_1301);
var name_1303 = cljs.core.nth.call(null,vec__1262_1302,(0),null);
var map__1265_1304 = cljs.core.nth.call(null,vec__1262_1302,(1),null);
var map__1265_1305__$1 = ((((!((map__1265_1304 == null)))?(((((map__1265_1304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1265_1304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1265_1304):map__1265_1304);
var doc_1306 = cljs.core.get.call(null,map__1265_1305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1307 = cljs.core.get.call(null,map__1265_1305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1303);

cljs.core.println.call(null," ",arglists_1307);

if(cljs.core.truth_(doc_1306)){
cljs.core.println.call(null," ",doc_1306);
} else {
}


var G__1308 = seq__1258_1298;
var G__1309 = chunk__1259_1299;
var G__1310 = count__1260_1300;
var G__1311 = (i__1261_1301 + (1));
seq__1258_1298 = G__1308;
chunk__1259_1299 = G__1309;
count__1260_1300 = G__1310;
i__1261_1301 = G__1311;
continue;
} else {
var temp__4657__auto___1312 = cljs.core.seq.call(null,seq__1258_1298);
if(temp__4657__auto___1312){
var seq__1258_1313__$1 = temp__4657__auto___1312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1258_1313__$1)){
var c__4319__auto___1314 = cljs.core.chunk_first.call(null,seq__1258_1313__$1);
var G__1315 = cljs.core.chunk_rest.call(null,seq__1258_1313__$1);
var G__1316 = c__4319__auto___1314;
var G__1317 = cljs.core.count.call(null,c__4319__auto___1314);
var G__1318 = (0);
seq__1258_1298 = G__1315;
chunk__1259_1299 = G__1316;
count__1260_1300 = G__1317;
i__1261_1301 = G__1318;
continue;
} else {
var vec__1267_1319 = cljs.core.first.call(null,seq__1258_1313__$1);
var name_1320 = cljs.core.nth.call(null,vec__1267_1319,(0),null);
var map__1270_1321 = cljs.core.nth.call(null,vec__1267_1319,(1),null);
var map__1270_1322__$1 = ((((!((map__1270_1321 == null)))?(((((map__1270_1321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1270_1321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1270_1321):map__1270_1321);
var doc_1323 = cljs.core.get.call(null,map__1270_1322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1324 = cljs.core.get.call(null,map__1270_1322__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1320);

cljs.core.println.call(null," ",arglists_1324);

if(cljs.core.truth_(doc_1323)){
cljs.core.println.call(null," ",doc_1323);
} else {
}


var G__1325 = cljs.core.next.call(null,seq__1258_1313__$1);
var G__1326 = null;
var G__1327 = (0);
var G__1328 = (0);
seq__1258_1298 = G__1325;
chunk__1259_1299 = G__1326;
count__1260_1300 = G__1327;
i__1261_1301 = G__1328;
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

var seq__1272 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1273 = null;
var count__1274 = (0);
var i__1275 = (0);
while(true){
if((i__1275 < count__1274)){
var role = cljs.core._nth.call(null,chunk__1273,i__1275);
var temp__4657__auto___1329__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1329__$1)){
var spec_1330 = temp__4657__auto___1329__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1330));
} else {
}


var G__1331 = seq__1272;
var G__1332 = chunk__1273;
var G__1333 = count__1274;
var G__1334 = (i__1275 + (1));
seq__1272 = G__1331;
chunk__1273 = G__1332;
count__1274 = G__1333;
i__1275 = G__1334;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1272);
if(temp__4657__auto____$1){
var seq__1272__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1272__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__1272__$1);
var G__1335 = cljs.core.chunk_rest.call(null,seq__1272__$1);
var G__1336 = c__4319__auto__;
var G__1337 = cljs.core.count.call(null,c__4319__auto__);
var G__1338 = (0);
seq__1272 = G__1335;
chunk__1273 = G__1336;
count__1274 = G__1337;
i__1275 = G__1338;
continue;
} else {
var role = cljs.core.first.call(null,seq__1272__$1);
var temp__4657__auto___1339__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1339__$2)){
var spec_1340 = temp__4657__auto___1339__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1340));
} else {
}


var G__1341 = cljs.core.next.call(null,seq__1272__$1);
var G__1342 = null;
var G__1343 = (0);
var G__1344 = (0);
seq__1272 = G__1341;
chunk__1273 = G__1342;
count__1274 = G__1343;
i__1275 = G__1344;
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
