// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyful.cores');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('enfocus.core');
goog.require('enfocus.events');
goog.require('cljs.reader');
nonopolyful.cores.app_state = cljs.core.atom.call(null,null);
nonopolyful.cores.spielen = (function nonopolyful$cores$spielen(){
var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2487){
var state_val_2488 = (state_2487[(1)]);
if((state_val_2488 === (1))){
var inst_2467 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_2468 = cljs.core.deref.call(null,nonopolyful.cores.app_state);
var inst_2469 = [inst_2468];
var inst_2470 = cljs.core.PersistentHashMap.fromArrays(inst_2467,inst_2469);
var inst_2471 = cljs_http.client.post.call(null,"/nonopoly-Spiel-fortsetzen",inst_2470);
var state_2487__$1 = state_2487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2487__$1,(2),inst_2471);
} else {
if((state_val_2488 === (2))){
var inst_2473 = (state_2487[(2)]);
var inst_2474 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2473);
var inst_2475 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2474);
var inst_2476 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2474);
var inst_2477 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2474);
var inst_2478 = cljs.reader.read_string.call(null,inst_2475);
var inst_2479 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2478);
var inst_2480 = enfocus.core.content.call(null,inst_2476);
var inst_2481 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2482 = enfocus.core.do__GT_.call(null,inst_2480,inst_2481);
var inst_2483 = enfocus.core.at.call(null,"#status",inst_2482);
var inst_2484 = enfocus.core.content.call(null,inst_2477);
var inst_2485 = enfocus.core.at.call(null,"#spielstand",inst_2484);
var state_2487__$1 = (function (){var statearr_2489 = state_2487;
(statearr_2489[(7)] = inst_2479);

(statearr_2489[(8)] = inst_2483);

return statearr_2489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2487__$1,inst_2485);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$spielen_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$spielen_$_state_machine__1727__auto____0 = (function (){
var statearr_2490 = [null,null,null,null,null,null,null,null,null];
(statearr_2490[(0)] = nonopolyful$cores$spielen_$_state_machine__1727__auto__);

(statearr_2490[(1)] = (1));

return statearr_2490;
});
var nonopolyful$cores$spielen_$_state_machine__1727__auto____1 = (function (state_2487){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2491){if((e2491 instanceof Object)){
var ex__1730__auto__ = e2491;
var statearr_2492_2494 = state_2487;
(statearr_2492_2494[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2495 = state_2487;
state_2487 = G__2495;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$spielen_$_state_machine__1727__auto__ = function(state_2487){
switch(arguments.length){
case 0:
return nonopolyful$cores$spielen_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$spielen_$_state_machine__1727__auto____1.call(this,state_2487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$spielen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$spielen_$_state_machine__1727__auto____0;
nonopolyful$cores$spielen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$spielen_$_state_machine__1727__auto____1;
return nonopolyful$cores$spielen_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2493 = f__1854__auto__.call(null);
(statearr_2493[(6)] = c__1853__auto__);

return statearr_2493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
nonopolyful.cores.lass_spieler_an_der_reihe_ziehen = (function nonopolyful$cores$lass_spieler_an_der_reihe_ziehen(){
var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2516){
var state_val_2517 = (state_2516[(1)]);
if((state_val_2517 === (1))){
var inst_2496 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_2497 = cljs.core.deref.call(null,nonopolyful.cores.app_state);
var inst_2498 = [inst_2497];
var inst_2499 = cljs.core.PersistentHashMap.fromArrays(inst_2496,inst_2498);
var inst_2500 = cljs_http.client.post.call(null,"/nonopoly-1-zug",inst_2499);
var state_2516__$1 = state_2516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2516__$1,(2),inst_2500);
} else {
if((state_val_2517 === (2))){
var inst_2502 = (state_2516[(2)]);
var inst_2503 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2502);
var inst_2504 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2503);
var inst_2505 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2503);
var inst_2506 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2503);
var inst_2507 = cljs.reader.read_string.call(null,inst_2504);
var inst_2508 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2507);
var inst_2509 = enfocus.core.content.call(null,inst_2505);
var inst_2510 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2511 = enfocus.core.do__GT_.call(null,inst_2509,inst_2510);
var inst_2512 = enfocus.core.at.call(null,"#status",inst_2511);
var inst_2513 = enfocus.core.content.call(null,inst_2506);
var inst_2514 = enfocus.core.at.call(null,"#spielstand",inst_2513);
var state_2516__$1 = (function (){var statearr_2518 = state_2516;
(statearr_2518[(7)] = inst_2512);

(statearr_2518[(8)] = inst_2508);

return statearr_2518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2516__$1,inst_2514);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0 = (function (){
var statearr_2519 = [null,null,null,null,null,null,null,null,null];
(statearr_2519[(0)] = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__);

(statearr_2519[(1)] = (1));

return statearr_2519;
});
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1 = (function (state_2516){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2520){if((e2520 instanceof Object)){
var ex__1730__auto__ = e2520;
var statearr_2521_2523 = state_2516;
(statearr_2521_2523[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2524 = state_2516;
state_2516 = G__2524;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__ = function(state_2516){
switch(arguments.length){
case 0:
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1.call(this,state_2516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0;
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1;
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2522 = f__1854__auto__.call(null);
(statearr_2522[(6)] = c__1853__auto__);

return statearr_2522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
nonopolyful.cores.lass_spieler_an_der_reihe_ziehen = (function nonopolyful$cores$lass_spieler_an_der_reihe_ziehen(){
var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2545){
var state_val_2546 = (state_2545[(1)]);
if((state_val_2546 === (1))){
var inst_2525 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_2526 = cljs.core.deref.call(null,nonopolyful.cores.app_state);
var inst_2527 = [inst_2526];
var inst_2528 = cljs.core.PersistentHashMap.fromArrays(inst_2525,inst_2527);
var inst_2529 = cljs_http.client.post.call(null,"/nonopoly-1-zug",inst_2528);
var state_2545__$1 = state_2545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2545__$1,(2),inst_2529);
} else {
if((state_val_2546 === (2))){
var inst_2531 = (state_2545[(2)]);
var inst_2532 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2531);
var inst_2533 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2532);
var inst_2534 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2532);
var inst_2535 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2532);
var inst_2536 = cljs.reader.read_string.call(null,inst_2533);
var inst_2537 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2536);
var inst_2538 = enfocus.core.content.call(null,inst_2534);
var inst_2539 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2540 = enfocus.core.do__GT_.call(null,inst_2538,inst_2539);
var inst_2541 = enfocus.core.at.call(null,"#status",inst_2540);
var inst_2542 = enfocus.core.content.call(null,inst_2535);
var inst_2543 = enfocus.core.at.call(null,"#spielstand",inst_2542);
var state_2545__$1 = (function (){var statearr_2547 = state_2545;
(statearr_2547[(7)] = inst_2537);

(statearr_2547[(8)] = inst_2541);

return statearr_2547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2545__$1,inst_2543);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0 = (function (){
var statearr_2548 = [null,null,null,null,null,null,null,null,null];
(statearr_2548[(0)] = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__);

(statearr_2548[(1)] = (1));

return statearr_2548;
});
var nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1 = (function (state_2545){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2549){if((e2549 instanceof Object)){
var ex__1730__auto__ = e2549;
var statearr_2550_2552 = state_2545;
(statearr_2550_2552[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2553 = state_2545;
state_2545 = G__2553;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__ = function(state_2545){
switch(arguments.length){
case 0:
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1.call(this,state_2545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____0;
nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto____1;
return nonopolyful$cores$lass_spieler_an_der_reihe_ziehen_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2551 = f__1854__auto__.call(null);
(statearr_2551[(6)] = c__1853__auto__);

return statearr_2551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
nonopolyful.cores.eine_runde = (function nonopolyful$cores$eine_runde(){
var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2574){
var state_val_2575 = (state_2574[(1)]);
if((state_val_2575 === (1))){
var inst_2554 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_2555 = cljs.core.deref.call(null,nonopolyful.cores.app_state);
var inst_2556 = [inst_2555];
var inst_2557 = cljs.core.PersistentHashMap.fromArrays(inst_2554,inst_2556);
var inst_2558 = cljs_http.client.post.call(null,"/nonopoly-Runde-beenden",inst_2557);
var state_2574__$1 = state_2574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2574__$1,(2),inst_2558);
} else {
if((state_val_2575 === (2))){
var inst_2560 = (state_2574[(2)]);
var inst_2561 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2560);
var inst_2562 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2561);
var inst_2563 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2561);
var inst_2564 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2561);
var inst_2565 = cljs.reader.read_string.call(null,inst_2562);
var inst_2566 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2565);
var inst_2567 = enfocus.core.content.call(null,inst_2563);
var inst_2568 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2569 = enfocus.core.do__GT_.call(null,inst_2567,inst_2568);
var inst_2570 = enfocus.core.at.call(null,"#status",inst_2569);
var inst_2571 = enfocus.core.content.call(null,inst_2564);
var inst_2572 = enfocus.core.at.call(null,"#spielstand",inst_2571);
var state_2574__$1 = (function (){var statearr_2576 = state_2574;
(statearr_2576[(7)] = inst_2566);

(statearr_2576[(8)] = inst_2570);

return statearr_2576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2574__$1,inst_2572);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$eine_runde_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$eine_runde_$_state_machine__1727__auto____0 = (function (){
var statearr_2577 = [null,null,null,null,null,null,null,null,null];
(statearr_2577[(0)] = nonopolyful$cores$eine_runde_$_state_machine__1727__auto__);

(statearr_2577[(1)] = (1));

return statearr_2577;
});
var nonopolyful$cores$eine_runde_$_state_machine__1727__auto____1 = (function (state_2574){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2578){if((e2578 instanceof Object)){
var ex__1730__auto__ = e2578;
var statearr_2579_2581 = state_2574;
(statearr_2579_2581[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2582 = state_2574;
state_2574 = G__2582;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$eine_runde_$_state_machine__1727__auto__ = function(state_2574){
switch(arguments.length){
case 0:
return nonopolyful$cores$eine_runde_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$eine_runde_$_state_machine__1727__auto____1.call(this,state_2574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$eine_runde_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$eine_runde_$_state_machine__1727__auto____0;
nonopolyful$cores$eine_runde_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$eine_runde_$_state_machine__1727__auto____1;
return nonopolyful$cores$eine_runde_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2580 = f__1854__auto__.call(null);
(statearr_2580[(6)] = c__1853__auto__);

return statearr_2580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
nonopolyful.cores.abbruch = (function nonopolyful$cores$abbruch(){
var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2603){
var state_val_2604 = (state_2603[(1)]);
if((state_val_2604 === (1))){
var inst_2583 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_2584 = cljs.core.deref.call(null,nonopolyful.cores.app_state);
var inst_2585 = [inst_2584];
var inst_2586 = cljs.core.PersistentHashMap.fromArrays(inst_2583,inst_2585);
var inst_2587 = cljs_http.client.post.call(null,"/nonopoly-Spiel-abbrechen",inst_2586);
var state_2603__$1 = state_2603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2603__$1,(2),inst_2587);
} else {
if((state_val_2604 === (2))){
var inst_2589 = (state_2603[(2)]);
var inst_2590 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2589);
var inst_2591 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2590);
var inst_2592 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2590);
var inst_2593 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2590);
var inst_2594 = cljs.reader.read_string.call(null,inst_2591);
var inst_2595 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2594);
var inst_2596 = enfocus.core.content.call(null,inst_2592);
var inst_2597 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2598 = enfocus.core.do__GT_.call(null,inst_2596,inst_2597);
var inst_2599 = enfocus.core.at.call(null,"#status",inst_2598);
var inst_2600 = enfocus.core.content.call(null,inst_2593);
var inst_2601 = enfocus.core.at.call(null,"#spielstand",inst_2600);
var state_2603__$1 = (function (){var statearr_2605 = state_2603;
(statearr_2605[(7)] = inst_2595);

(statearr_2605[(8)] = inst_2599);

return statearr_2605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2603__$1,inst_2601);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$abbruch_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$abbruch_$_state_machine__1727__auto____0 = (function (){
var statearr_2606 = [null,null,null,null,null,null,null,null,null];
(statearr_2606[(0)] = nonopolyful$cores$abbruch_$_state_machine__1727__auto__);

(statearr_2606[(1)] = (1));

return statearr_2606;
});
var nonopolyful$cores$abbruch_$_state_machine__1727__auto____1 = (function (state_2603){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2607){if((e2607 instanceof Object)){
var ex__1730__auto__ = e2607;
var statearr_2608_2610 = state_2603;
(statearr_2608_2610[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2611 = state_2603;
state_2603 = G__2611;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$abbruch_$_state_machine__1727__auto__ = function(state_2603){
switch(arguments.length){
case 0:
return nonopolyful$cores$abbruch_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$abbruch_$_state_machine__1727__auto____1.call(this,state_2603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$abbruch_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$abbruch_$_state_machine__1727__auto____0;
nonopolyful$cores$abbruch_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$abbruch_$_state_machine__1727__auto____1;
return nonopolyful$cores$abbruch_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2609 = f__1854__auto__.call(null);
(statearr_2609[(6)] = c__1853__auto__);

return statearr_2609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
nonopolyful.cores.actions = new cljs.core.PersistentArrayMap(null, 1, ["1-zug",nonopolyful.cores.lass_spieler_an_der_reihe_ziehen], null);
nonopolyful.cores.init = (function nonopolyful$cores$init(){
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");

var c__1853__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1853__auto__){
return (function (){
var f__1854__auto__ = (function (){var switch__1726__auto__ = ((function (c__1853__auto__){
return (function (state_2637){
var state_val_2638 = (state_2637[(1)]);
if((state_val_2638 === (1))){
var inst_2612 = cljs_http.client.get.call(null,"/nonopoly");
var state_2637__$1 = state_2637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2637__$1,(2),inst_2612);
} else {
if((state_val_2638 === (2))){
var inst_2614 = (state_2637[(2)]);
var inst_2615 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2614);
var inst_2616 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_2615);
var inst_2617 = cljs.reader.read_string.call(null,inst_2616);
var inst_2618 = cljs.core.reset_BANG_.call(null,nonopolyful.cores.app_state,inst_2617);
var inst_2619 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_2615);
var inst_2620 = enfocus.core.content.call(null,inst_2619);
var inst_2621 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_2622 = enfocus.core.do__GT_.call(null,inst_2620,inst_2621);
var inst_2623 = enfocus.core.at.call(null,"#status",inst_2622);
var inst_2624 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_2615);
var inst_2625 = enfocus.core.content.call(null,inst_2624);
var inst_2626 = enfocus.core.at.call(null,"#spielstand",inst_2625);
var inst_2627 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),nonopolyful.cores.spielen);
var inst_2628 = enfocus.core.at.call(null,"#Spiel-fortsetzen",inst_2627);
var inst_2630 = (function (){var response = inst_2614;
var body = inst_2615;
var world = inst_2616;
return ((function (response,body,world,inst_2614,inst_2615,inst_2616,inst_2617,inst_2618,inst_2619,inst_2620,inst_2621,inst_2622,inst_2623,inst_2624,inst_2625,inst_2626,inst_2627,inst_2628,state_val_2638,c__1853__auto__){
return (function (p__2629){
var vec__2639 = p__2629;
var key = cljs.core.nth.call(null,vec__2639,(0),null);
var value = cljs.core.nth.call(null,vec__2639,(1),null);
return enfocus.core.at.call(null,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),value));
});
;})(response,body,world,inst_2614,inst_2615,inst_2616,inst_2617,inst_2618,inst_2619,inst_2620,inst_2621,inst_2622,inst_2623,inst_2624,inst_2625,inst_2626,inst_2627,inst_2628,state_val_2638,c__1853__auto__))
})();
var inst_2631 = cljs.core.map.call(null,inst_2630,nonopolyful.cores.actions);
var inst_2632 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),nonopolyful.cores.eine_runde);
var inst_2633 = enfocus.core.at.call(null,"#Runde-beenden",inst_2632);
var inst_2634 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),nonopolyful.cores.abbruch);
var inst_2635 = enfocus.core.at.call(null,"#Spiel-abbrechen",inst_2634);
var state_2637__$1 = (function (){var statearr_2642 = state_2637;
(statearr_2642[(7)] = inst_2626);

(statearr_2642[(8)] = inst_2633);

(statearr_2642[(9)] = inst_2623);

(statearr_2642[(10)] = inst_2618);

(statearr_2642[(11)] = inst_2628);

(statearr_2642[(12)] = inst_2631);

return statearr_2642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2637__$1,inst_2635);
} else {
return null;
}
}
});})(c__1853__auto__))
;
return ((function (switch__1726__auto__,c__1853__auto__){
return (function() {
var nonopolyful$cores$init_$_state_machine__1727__auto__ = null;
var nonopolyful$cores$init_$_state_machine__1727__auto____0 = (function (){
var statearr_2643 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2643[(0)] = nonopolyful$cores$init_$_state_machine__1727__auto__);

(statearr_2643[(1)] = (1));

return statearr_2643;
});
var nonopolyful$cores$init_$_state_machine__1727__auto____1 = (function (state_2637){
while(true){
var ret_value__1728__auto__ = (function (){try{while(true){
var result__1729__auto__ = switch__1726__auto__.call(null,state_2637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1729__auto__;
}
break;
}
}catch (e2644){if((e2644 instanceof Object)){
var ex__1730__auto__ = e2644;
var statearr_2645_2647 = state_2637;
(statearr_2645_2647[(5)] = ex__1730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2648 = state_2637;
state_2637 = G__2648;
continue;
} else {
return ret_value__1728__auto__;
}
break;
}
});
nonopolyful$cores$init_$_state_machine__1727__auto__ = function(state_2637){
switch(arguments.length){
case 0:
return nonopolyful$cores$init_$_state_machine__1727__auto____0.call(this);
case 1:
return nonopolyful$cores$init_$_state_machine__1727__auto____1.call(this,state_2637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopolyful$cores$init_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$0 = nonopolyful$cores$init_$_state_machine__1727__auto____0;
nonopolyful$cores$init_$_state_machine__1727__auto__.cljs$core$IFn$_invoke$arity$1 = nonopolyful$cores$init_$_state_machine__1727__auto____1;
return nonopolyful$cores$init_$_state_machine__1727__auto__;
})()
;})(switch__1726__auto__,c__1853__auto__))
})();
var state__1855__auto__ = (function (){var statearr_2646 = f__1854__auto__.call(null);
(statearr_2646[(6)] = c__1853__auto__);

return statearr_2646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1855__auto__);
});})(c__1853__auto__))
);

return c__1853__auto__;
});
goog.exportSymbol('nonopolyful.cores.init', nonopolyful.cores.init);

//# sourceMappingURL=cores.js.map
