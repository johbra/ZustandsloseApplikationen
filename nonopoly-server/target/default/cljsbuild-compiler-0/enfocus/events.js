// Compiled by ClojureScript 1.10.238 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('enfocus.core');
goog.require('goog.object');

enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
 * needed to support window :resize
 */
enfocus.events.get_vp_monitor = (function enfocus$events$get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function enfocus$events$gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.events.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__10919_10923 = cljs.core.seq.call(null,listeners);
var chunk__10920_10924 = null;
var count__10921_10925 = (0);
var i__10922_10926 = (0);
while(true){
if((i__10922_10926 < count__10921_10925)){
var obj_10927__$1 = cljs.core._nth.call(null,chunk__10920_10924,i__10922_10926);
var listener_10928 = obj_10927__$1.listener;
if(((((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_10928.listen,func)))) && (((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_10928.scope,opt_scope)))))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_10928);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_10928);
}
} else {
}


var G__10929 = seq__10919_10923;
var G__10930 = chunk__10920_10924;
var G__10931 = count__10921_10925;
var G__10932 = (i__10922_10926 + (1));
seq__10919_10923 = G__10929;
chunk__10920_10924 = G__10930;
count__10921_10925 = G__10931;
i__10922_10926 = G__10932;
continue;
} else {
var temp__4657__auto___10933 = cljs.core.seq.call(null,seq__10919_10923);
if(temp__4657__auto___10933){
var seq__10919_10934__$1 = temp__4657__auto___10933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10919_10934__$1)){
var c__4319__auto___10935 = cljs.core.chunk_first.call(null,seq__10919_10934__$1);
var G__10936 = cljs.core.chunk_rest.call(null,seq__10919_10934__$1);
var G__10937 = c__4319__auto___10935;
var G__10938 = cljs.core.count.call(null,c__4319__auto___10935);
var G__10939 = (0);
seq__10919_10923 = G__10936;
chunk__10920_10924 = G__10937;
count__10921_10925 = G__10938;
i__10922_10926 = G__10939;
continue;
} else {
var obj_10940__$1 = cljs.core.first.call(null,seq__10919_10934__$1);
var listener_10941 = obj_10940__$1.listener;
if(((((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_10941.listen,func)))) && (((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_10941.scope,opt_scope)))))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_10941);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_10941);
}
} else {
}


var G__10942 = cljs.core.next.call(null,seq__10919_10934__$1);
var G__10943 = null;
var G__10944 = (0);
var G__10945 = (0);
seq__10919_10923 = G__10942;
chunk__10920_10924 = G__10943;
count__10921_10925 = G__10944;
i__10922_10926 = G__10945;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
 * adding an event to the selected nodes
 */
enfocus.events.listen = (function enfocus$events$listen(event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod)))){
return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
;})(wrapper))
});
/**
 * removing all listeners of a given event type from the selected nodes
 */
enfocus.events.remove_listeners = (function enfocus$events$remove_listeners(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10952 = arguments.length;
var i__4500__auto___10953 = (0);
while(true){
if((i__4500__auto___10953 < len__4499__auto___10952)){
args__4502__auto__.push((arguments[i__4500__auto___10953]));

var G__10954 = (i__4500__auto___10953 + (1));
i__4500__auto___10953 = G__10954;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic = (function (event_list){
var get_name = (function (p1__10946_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__10946_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__10946_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__10946_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__10948 = cljs.core.seq.call(null,event_list);
var chunk__10949 = null;
var count__10950 = (0);
var i__10951 = (0);
while(true){
if((i__10951 < count__10950)){
var ev = cljs.core._nth.call(null,chunk__10949,i__10951);
goog.events.removeAll(pnod,get_name.call(null,ev));


var G__10955 = seq__10948;
var G__10956 = chunk__10949;
var G__10957 = count__10950;
var G__10958 = (i__10951 + (1));
seq__10948 = G__10955;
chunk__10949 = G__10956;
count__10950 = G__10957;
i__10951 = G__10958;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10948);
if(temp__4657__auto__){
var seq__10948__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10948__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10948__$1);
var G__10959 = cljs.core.chunk_rest.call(null,seq__10948__$1);
var G__10960 = c__4319__auto__;
var G__10961 = cljs.core.count.call(null,c__4319__auto__);
var G__10962 = (0);
seq__10948 = G__10959;
chunk__10949 = G__10960;
count__10950 = G__10961;
i__10951 = G__10962;
continue;
} else {
var ev = cljs.core.first.call(null,seq__10948__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));


var G__10963 = cljs.core.next.call(null,seq__10948__$1);
var G__10964 = null;
var G__10965 = (0);
var G__10966 = (0);
seq__10948 = G__10963;
chunk__10949 = G__10964;
count__10950 = G__10965;
i__10951 = G__10966;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(get_name))
});

enfocus.events.remove_listeners.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.events.remove_listeners.cljs$lang$applyTo = (function (seq10947){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10947));
});

/**
 * removing a specific event from the selected nodes
 */
enfocus.events.unlisten = (function enfocus$events$unlisten(var_args){
var G__10968 = arguments.length;
switch (G__10968) {
case 1:
return enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$1 = (function (event){
return enfocus.events.remove_listeners.call(null,event);
});

enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$2 = (function (event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
;})(wrapper))
});

enfocus.events.unlisten.cljs$lang$maxFixedArity = 2;

enfocus.events.get_node_chain = (function enfocus$events$get_node_chain(top,node){
if((((node == null)) || (cljs.core._EQ_.call(null,node,top)))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,enfocus.events.get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function enfocus$events$create_event(cur,cur_event){
var event = goog.object.clone(cur_event);
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function enfocus$events$listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__10970_SHARP_){
var seq__10971 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__10970_SHARP_.target));
var chunk__10972 = null;
var count__10973 = (0);
var i__10974 = (0);
while(true){
if((i__10974 < count__10973)){
var el = cljs.core._nth.call(null,chunk__10972,i__10974);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__10971,chunk__10972,count__10973,i__10974,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__10970_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__10970_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__10970_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__10971,chunk__10972,count__10973,i__10974,el))
));


var G__10975 = seq__10971;
var G__10976 = chunk__10972;
var G__10977 = count__10973;
var G__10978 = (i__10974 + (1));
seq__10971 = G__10975;
chunk__10972 = G__10976;
count__10973 = G__10977;
i__10974 = G__10978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10971);
if(temp__4657__auto__){
var seq__10971__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10971__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10971__$1);
var G__10979 = cljs.core.chunk_rest.call(null,seq__10971__$1);
var G__10980 = c__4319__auto__;
var G__10981 = cljs.core.count.call(null,c__4319__auto__);
var G__10982 = (0);
seq__10971 = G__10979;
chunk__10972 = G__10980;
count__10973 = G__10981;
i__10974 = G__10982;
continue;
} else {
var el = cljs.core.first.call(null,seq__10971__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__10971,chunk__10972,count__10973,i__10974,el,seq__10971__$1,temp__4657__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__10970_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__10970_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__10970_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__10971,chunk__10972,count__10973,i__10974,el,seq__10971__$1,temp__4657__auto__))
));


var G__10983 = cljs.core.next.call(null,seq__10971__$1);
var G__10984 = null;
var G__10985 = (0);
var G__10986 = (0);
seq__10971 = G__10983;
chunk__10972 = G__10984;
count__10973 = G__10985;
i__10974 = G__10986;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
});
/**
 * returns true if the node(child) is a child of parent
 */
enfocus.events.child_of_QMARK_ = (function enfocus$events$child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__10987 = parent;
var G__10988 = child.parentNode;
parent = G__10987;
child = G__10988;
continue;

}
}
}
break;
}
});
/**
 * this is used to build cross browser versions of :mouseenter and :mouseleave events
 */
enfocus.events.mouse_enter_leave = (function enfocus$events$mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if(((!((re === this$))) && (cljs.core.not.call(null,enfocus.events.child_of_QMARK_.call(null,this$,re))))){
return func.call(null,e);
} else {
return null;
}
});
});
