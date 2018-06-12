// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopoly.cores');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('enfocus.core');
goog.require('enfocus.events');
goog.require('cljs.reader');
nonopoly.cores.app_state = cljs.core.atom.call(null,null);
nonopoly.cores.button_ids = cljs.core.atom.call(null,null);
nonopoly.cores.request = (function nonopoly$cores$request(event){
var url = event.currentTarget.id;
var c__4778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4778__auto__,url){
return (function (){
var f__4779__auto__ = (function (){var switch__4732__auto__ = ((function (c__4778__auto__,url){
return (function (state_7042){
var state_val_7043 = (state_7042[(1)]);
if((state_val_7043 === (1))){
var inst_7021 = ["/nonopoly-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_7022 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_7023 = cljs.core.deref.call(null,nonopoly.cores.app_state);
var inst_7024 = [inst_7023];
var inst_7025 = cljs.core.PersistentHashMap.fromArrays(inst_7022,inst_7024);
var inst_7026 = cljs_http.client.post.call(null,inst_7021,inst_7025);
var state_7042__$1 = state_7042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7042__$1,(2),inst_7026);
} else {
if((state_val_7043 === (2))){
var inst_7028 = (state_7042[(2)]);
var inst_7029 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_7028);
var inst_7030 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_7029);
var inst_7031 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_7029);
var inst_7032 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_7029);
var inst_7033 = cljs.reader.read_string.call(null,inst_7030);
var inst_7034 = cljs.core.reset_BANG_.call(null,nonopoly.cores.app_state,inst_7033);
var inst_7035 = enfocus.core.content.call(null,inst_7031);
var inst_7036 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_7037 = enfocus.core.do__GT_.call(null,inst_7035,inst_7036);
var inst_7038 = enfocus.core.at.call(null,"#status",inst_7037);
var inst_7039 = enfocus.core.content.call(null,inst_7032);
var inst_7040 = enfocus.core.at.call(null,"#spielstand",inst_7039);
var state_7042__$1 = (function (){var statearr_7044 = state_7042;
(statearr_7044[(7)] = inst_7034);

(statearr_7044[(8)] = inst_7038);

return statearr_7044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7042__$1,inst_7040);
} else {
return null;
}
}
});})(c__4778__auto__,url))
;
return ((function (switch__4732__auto__,c__4778__auto__,url){
return (function() {
var nonopoly$cores$request_$_state_machine__4733__auto__ = null;
var nonopoly$cores$request_$_state_machine__4733__auto____0 = (function (){
var statearr_7045 = [null,null,null,null,null,null,null,null,null];
(statearr_7045[(0)] = nonopoly$cores$request_$_state_machine__4733__auto__);

(statearr_7045[(1)] = (1));

return statearr_7045;
});
var nonopoly$cores$request_$_state_machine__4733__auto____1 = (function (state_7042){
while(true){
var ret_value__4734__auto__ = (function (){try{while(true){
var result__4735__auto__ = switch__4732__auto__.call(null,state_7042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4735__auto__;
}
break;
}
}catch (e7046){if((e7046 instanceof Object)){
var ex__4736__auto__ = e7046;
var statearr_7047_7049 = state_7042;
(statearr_7047_7049[(5)] = ex__4736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7050 = state_7042;
state_7042 = G__7050;
continue;
} else {
return ret_value__4734__auto__;
}
break;
}
});
nonopoly$cores$request_$_state_machine__4733__auto__ = function(state_7042){
switch(arguments.length){
case 0:
return nonopoly$cores$request_$_state_machine__4733__auto____0.call(this);
case 1:
return nonopoly$cores$request_$_state_machine__4733__auto____1.call(this,state_7042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopoly$cores$request_$_state_machine__4733__auto__.cljs$core$IFn$_invoke$arity$0 = nonopoly$cores$request_$_state_machine__4733__auto____0;
nonopoly$cores$request_$_state_machine__4733__auto__.cljs$core$IFn$_invoke$arity$1 = nonopoly$cores$request_$_state_machine__4733__auto____1;
return nonopoly$cores$request_$_state_machine__4733__auto__;
})()
;})(switch__4732__auto__,c__4778__auto__,url))
})();
var state__4780__auto__ = (function (){var statearr_7048 = f__4779__auto__.call(null);
(statearr_7048[(6)] = c__4778__auto__);

return statearr_7048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4780__auto__);
});})(c__4778__auto__,url))
);

return c__4778__auto__;
});
nonopoly.cores.init = (function nonopoly$cores$init(){
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");

var c__4778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4778__auto__){
return (function (){
var f__4779__auto__ = (function (){var switch__4732__auto__ = ((function (c__4778__auto__){
return (function (state_7117){
var state_val_7118 = (state_7117[(1)]);
if((state_val_7118 === (7))){
var inst_7113 = (state_7117[(2)]);
var state_7117__$1 = state_7117;
var statearr_7119_7145 = state_7117__$1;
(statearr_7119_7145[(2)] = inst_7113);

(statearr_7119_7145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (1))){
var inst_7051 = cljs_http.client.get.call(null,"/nonopoly");
var state_7117__$1 = state_7117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7117__$1,(2),inst_7051);
} else {
if((state_val_7118 === (4))){
var inst_7115 = (state_7117[(2)]);
var state_7117__$1 = state_7117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7117__$1,inst_7115);
} else {
if((state_val_7118 === (13))){
var inst_7108 = (state_7117[(2)]);
var state_7117__$1 = state_7117;
var statearr_7120_7146 = state_7117__$1;
(statearr_7120_7146[(2)] = inst_7108);

(statearr_7120_7146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (6))){
var inst_7075 = (state_7117[(7)]);
var inst_7091 = (state_7117[(8)]);
var inst_7091__$1 = cljs.core.seq.call(null,inst_7075);
var state_7117__$1 = (function (){var statearr_7121 = state_7117;
(statearr_7121[(8)] = inst_7091__$1);

return statearr_7121;
})();
if(inst_7091__$1){
var statearr_7122_7147 = state_7117__$1;
(statearr_7122_7147[(1)] = (8));

} else {
var statearr_7123_7148 = state_7117__$1;
(statearr_7123_7148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (3))){
var inst_7077 = (state_7117[(9)]);
var inst_7078 = (state_7117[(10)]);
var inst_7080 = (inst_7078 < inst_7077);
var inst_7081 = inst_7080;
var state_7117__$1 = state_7117;
if(cljs.core.truth_(inst_7081)){
var statearr_7124_7149 = state_7117__$1;
(statearr_7124_7149[(1)] = (5));

} else {
var statearr_7125_7150 = state_7117__$1;
(statearr_7125_7150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (12))){
var inst_7076 = (state_7117[(11)]);
var inst_7056 = (state_7117[(12)]);
var inst_7091 = (state_7117[(8)]);
var inst_7077 = (state_7117[(9)]);
var inst_7055 = (state_7117[(13)]);
var inst_7053 = (state_7117[(14)]);
var inst_7078 = (state_7117[(10)]);
var inst_7054 = (state_7117[(15)]);
var inst_7100 = cljs.core.first.call(null,inst_7091);
var inst_7101 = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7100)].join('');
var inst_7102 = (function (){var body = inst_7054;
var seq__7069 = inst_7091;
var a = inst_7100;
var response = inst_7053;
var b_ids = inst_7056;
var i__7072 = inst_7078;
var count__7071 = inst_7077;
var temp__5457__auto__ = inst_7091;
var world = inst_7055;
var chunk__7070 = inst_7076;
return ((function (body,seq__7069,a,response,b_ids,i__7072,count__7071,temp__5457__auto__,world,chunk__7070,inst_7076,inst_7056,inst_7091,inst_7077,inst_7055,inst_7053,inst_7078,inst_7054,inst_7100,inst_7101,state_val_7118,c__4778__auto__){
return (function (ev){
return nonopoly.cores.request.call(null,ev);
});
;})(body,seq__7069,a,response,b_ids,i__7072,count__7071,temp__5457__auto__,world,chunk__7070,inst_7076,inst_7056,inst_7091,inst_7077,inst_7055,inst_7053,inst_7078,inst_7054,inst_7100,inst_7101,state_val_7118,c__4778__auto__))
})();
var inst_7103 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_7102);
var inst_7104 = enfocus.core.at.call(null,inst_7101,inst_7103);
var inst_7105 = cljs.core.next.call(null,inst_7091);
var inst_7075 = inst_7105;
var inst_7076__$1 = null;
var inst_7077__$1 = (0);
var inst_7078__$1 = (0);
var state_7117__$1 = (function (){var statearr_7126 = state_7117;
(statearr_7126[(11)] = inst_7076__$1);

(statearr_7126[(7)] = inst_7075);

(statearr_7126[(9)] = inst_7077__$1);

(statearr_7126[(10)] = inst_7078__$1);

(statearr_7126[(16)] = inst_7104);

return statearr_7126;
})();
var statearr_7127_7151 = state_7117__$1;
(statearr_7127_7151[(2)] = null);

(statearr_7127_7151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (2))){
var inst_7056 = (state_7117[(12)]);
var inst_7055 = (state_7117[(13)]);
var inst_7053 = (state_7117[(14)]);
var inst_7054 = (state_7117[(15)]);
var inst_7053__$1 = (state_7117[(2)]);
var inst_7054__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_7053__$1);
var inst_7055__$1 = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(inst_7054__$1);
var inst_7056__$1 = new cljs.core.Keyword(null,"button-ids","button-ids",-1383009881).cljs$core$IFn$_invoke$arity$1(inst_7054__$1);
var inst_7057 = cljs.reader.read_string.call(null,inst_7055__$1);
var inst_7058 = cljs.core.reset_BANG_.call(null,nonopoly.cores.app_state,inst_7057);
var inst_7059 = cljs.reader.read_string.call(null,inst_7056__$1);
var inst_7060 = cljs.core.reset_BANG_.call(null,nonopoly.cores.button_ids,inst_7059);
var inst_7061 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_7054__$1);
var inst_7062 = enfocus.core.content.call(null,inst_7061);
var inst_7063 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
var inst_7064 = enfocus.core.do__GT_.call(null,inst_7062,inst_7063);
var inst_7065 = enfocus.core.at.call(null,"#status",inst_7064);
var inst_7066 = new cljs.core.Keyword(null,"spielstand","spielstand",-696449325).cljs$core$IFn$_invoke$arity$1(inst_7054__$1);
var inst_7067 = enfocus.core.content.call(null,inst_7066);
var inst_7068 = enfocus.core.at.call(null,"#spielstand",inst_7067);
var inst_7073 = cljs.core.deref.call(null,nonopoly.cores.button_ids);
var inst_7074 = cljs.core.seq.call(null,inst_7073);
var inst_7075 = inst_7074;
var inst_7076 = null;
var inst_7077 = (0);
var inst_7078 = (0);
var state_7117__$1 = (function (){var statearr_7128 = state_7117;
(statearr_7128[(17)] = inst_7068);

(statearr_7128[(11)] = inst_7076);

(statearr_7128[(7)] = inst_7075);

(statearr_7128[(12)] = inst_7056__$1);

(statearr_7128[(18)] = inst_7065);

(statearr_7128[(19)] = inst_7060);

(statearr_7128[(9)] = inst_7077);

(statearr_7128[(13)] = inst_7055__$1);

(statearr_7128[(14)] = inst_7053__$1);

(statearr_7128[(10)] = inst_7078);

(statearr_7128[(15)] = inst_7054__$1);

(statearr_7128[(20)] = inst_7058);

return statearr_7128;
})();
var statearr_7129_7152 = state_7117__$1;
(statearr_7129_7152[(2)] = null);

(statearr_7129_7152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (11))){
var inst_7091 = (state_7117[(8)]);
var inst_7095 = cljs.core.chunk_first.call(null,inst_7091);
var inst_7096 = cljs.core.chunk_rest.call(null,inst_7091);
var inst_7097 = cljs.core.count.call(null,inst_7095);
var inst_7075 = inst_7096;
var inst_7076 = inst_7095;
var inst_7077 = inst_7097;
var inst_7078 = (0);
var state_7117__$1 = (function (){var statearr_7133 = state_7117;
(statearr_7133[(11)] = inst_7076);

(statearr_7133[(7)] = inst_7075);

(statearr_7133[(9)] = inst_7077);

(statearr_7133[(10)] = inst_7078);

return statearr_7133;
})();
var statearr_7134_7153 = state_7117__$1;
(statearr_7134_7153[(2)] = null);

(statearr_7134_7153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (9))){
var state_7117__$1 = state_7117;
var statearr_7135_7154 = state_7117__$1;
(statearr_7135_7154[(2)] = null);

(statearr_7135_7154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (5))){
var inst_7076 = (state_7117[(11)]);
var inst_7075 = (state_7117[(7)]);
var inst_7056 = (state_7117[(12)]);
var inst_7077 = (state_7117[(9)]);
var inst_7055 = (state_7117[(13)]);
var inst_7053 = (state_7117[(14)]);
var inst_7078 = (state_7117[(10)]);
var inst_7054 = (state_7117[(15)]);
var inst_7083 = cljs.core._nth.call(null,inst_7076,inst_7078);
var inst_7084 = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7083)].join('');
var inst_7085 = (function (){var response = inst_7053;
var body = inst_7054;
var world = inst_7055;
var b_ids = inst_7056;
var seq__7069 = inst_7075;
var chunk__7070 = inst_7076;
var count__7071 = inst_7077;
var i__7072 = inst_7078;
var a = inst_7083;
return ((function (response,body,world,b_ids,seq__7069,chunk__7070,count__7071,i__7072,a,inst_7076,inst_7075,inst_7056,inst_7077,inst_7055,inst_7053,inst_7078,inst_7054,inst_7083,inst_7084,state_val_7118,c__4778__auto__){
return (function (ev){
return nonopoly.cores.request.call(null,ev);
});
;})(response,body,world,b_ids,seq__7069,chunk__7070,count__7071,i__7072,a,inst_7076,inst_7075,inst_7056,inst_7077,inst_7055,inst_7053,inst_7078,inst_7054,inst_7083,inst_7084,state_val_7118,c__4778__auto__))
})();
var inst_7086 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_7085);
var inst_7087 = enfocus.core.at.call(null,inst_7084,inst_7086);
var inst_7088 = (inst_7078 + (1));
var tmp7130 = inst_7076;
var tmp7131 = inst_7075;
var tmp7132 = inst_7077;
var inst_7075__$1 = tmp7131;
var inst_7076__$1 = tmp7130;
var inst_7077__$1 = tmp7132;
var inst_7078__$1 = inst_7088;
var state_7117__$1 = (function (){var statearr_7136 = state_7117;
(statearr_7136[(11)] = inst_7076__$1);

(statearr_7136[(21)] = inst_7087);

(statearr_7136[(7)] = inst_7075__$1);

(statearr_7136[(9)] = inst_7077__$1);

(statearr_7136[(10)] = inst_7078__$1);

return statearr_7136;
})();
var statearr_7137_7155 = state_7117__$1;
(statearr_7137_7155[(2)] = null);

(statearr_7137_7155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (10))){
var inst_7111 = (state_7117[(2)]);
var state_7117__$1 = state_7117;
var statearr_7138_7156 = state_7117__$1;
(statearr_7138_7156[(2)] = inst_7111);

(statearr_7138_7156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7118 === (8))){
var inst_7091 = (state_7117[(8)]);
var inst_7093 = cljs.core.chunked_seq_QMARK_.call(null,inst_7091);
var state_7117__$1 = state_7117;
if(inst_7093){
var statearr_7139_7157 = state_7117__$1;
(statearr_7139_7157[(1)] = (11));

} else {
var statearr_7140_7158 = state_7117__$1;
(statearr_7140_7158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4778__auto__))
;
return ((function (switch__4732__auto__,c__4778__auto__){
return (function() {
var nonopoly$cores$init_$_state_machine__4733__auto__ = null;
var nonopoly$cores$init_$_state_machine__4733__auto____0 = (function (){
var statearr_7141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7141[(0)] = nonopoly$cores$init_$_state_machine__4733__auto__);

(statearr_7141[(1)] = (1));

return statearr_7141;
});
var nonopoly$cores$init_$_state_machine__4733__auto____1 = (function (state_7117){
while(true){
var ret_value__4734__auto__ = (function (){try{while(true){
var result__4735__auto__ = switch__4732__auto__.call(null,state_7117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4735__auto__;
}
break;
}
}catch (e7142){if((e7142 instanceof Object)){
var ex__4736__auto__ = e7142;
var statearr_7143_7159 = state_7117;
(statearr_7143_7159[(5)] = ex__4736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7160 = state_7117;
state_7117 = G__7160;
continue;
} else {
return ret_value__4734__auto__;
}
break;
}
});
nonopoly$cores$init_$_state_machine__4733__auto__ = function(state_7117){
switch(arguments.length){
case 0:
return nonopoly$cores$init_$_state_machine__4733__auto____0.call(this);
case 1:
return nonopoly$cores$init_$_state_machine__4733__auto____1.call(this,state_7117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
nonopoly$cores$init_$_state_machine__4733__auto__.cljs$core$IFn$_invoke$arity$0 = nonopoly$cores$init_$_state_machine__4733__auto____0;
nonopoly$cores$init_$_state_machine__4733__auto__.cljs$core$IFn$_invoke$arity$1 = nonopoly$cores$init_$_state_machine__4733__auto____1;
return nonopoly$cores$init_$_state_machine__4733__auto__;
})()
;})(switch__4732__auto__,c__4778__auto__))
})();
var state__4780__auto__ = (function (){var statearr_7144 = f__4779__auto__.call(null);
(statearr_7144[(6)] = c__4778__auto__);

return statearr_7144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4780__auto__);
});})(c__4778__auto__))
);

return c__4778__auto__;
});
goog.exportSymbol('nonopoly.cores.init', nonopoly.cores.init);
