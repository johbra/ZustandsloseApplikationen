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
var seq__3735_3739 = cljs.core.seq.call(null,listeners);
var chunk__3736_3740 = null;
var count__3737_3741 = (0);
var i__3738_3742 = (0);
while(true){
if((i__3738_3742 < count__3737_3741)){
var obj_3743__$1 = cljs.core._nth.call(null,chunk__3736_3740,i__3738_3742);
var listener_3744 = obj_3743__$1.listener;
if(((((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_3744.listen,func)))) && (((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_3744.scope,opt_scope)))))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_3744);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_3744);
}
} else {
}


var G__3745 = seq__3735_3739;
var G__3746 = chunk__3736_3740;
var G__3747 = count__3737_3741;
var G__3748 = (i__3738_3742 + (1));
seq__3735_3739 = G__3745;
chunk__3736_3740 = G__3746;
count__3737_3741 = G__3747;
i__3738_3742 = G__3748;
continue;
} else {
var temp__4657__auto___3749 = cljs.core.seq.call(null,seq__3735_3739);
if(temp__4657__auto___3749){
var seq__3735_3750__$1 = temp__4657__auto___3749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3735_3750__$1)){
var c__4319__auto___3751 = cljs.core.chunk_first.call(null,seq__3735_3750__$1);
var G__3752 = cljs.core.chunk_rest.call(null,seq__3735_3750__$1);
var G__3753 = c__4319__auto___3751;
var G__3754 = cljs.core.count.call(null,c__4319__auto___3751);
var G__3755 = (0);
seq__3735_3739 = G__3752;
chunk__3736_3740 = G__3753;
count__3737_3741 = G__3754;
i__3738_3742 = G__3755;
continue;
} else {
var obj_3756__$1 = cljs.core.first.call(null,seq__3735_3750__$1);
var listener_3757 = obj_3756__$1.listener;
if(((((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_3757.listen,func)))) && (((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_3757.scope,opt_scope)))))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_3757);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_3757);
}
} else {
}


var G__3758 = cljs.core.next.call(null,seq__3735_3750__$1);
var G__3759 = null;
var G__3760 = (0);
var G__3761 = (0);
seq__3735_3739 = G__3758;
chunk__3736_3740 = G__3759;
count__3737_3741 = G__3760;
i__3738_3742 = G__3761;
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
var len__4499__auto___3768 = arguments.length;
var i__4500__auto___3769 = (0);
while(true){
if((i__4500__auto___3769 < len__4499__auto___3768)){
args__4502__auto__.push((arguments[i__4500__auto___3769]));

var G__3770 = (i__4500__auto___3769 + (1));
i__4500__auto___3769 = G__3770;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic = (function (event_list){
var get_name = (function (p1__3762_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__3762_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__3762_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__3762_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__3764 = cljs.core.seq.call(null,event_list);
var chunk__3765 = null;
var count__3766 = (0);
var i__3767 = (0);
while(true){
if((i__3767 < count__3766)){
var ev = cljs.core._nth.call(null,chunk__3765,i__3767);
goog.events.removeAll(pnod,get_name.call(null,ev));


var G__3771 = seq__3764;
var G__3772 = chunk__3765;
var G__3773 = count__3766;
var G__3774 = (i__3767 + (1));
seq__3764 = G__3771;
chunk__3765 = G__3772;
count__3766 = G__3773;
i__3767 = G__3774;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3764);
if(temp__4657__auto__){
var seq__3764__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3764__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3764__$1);
var G__3775 = cljs.core.chunk_rest.call(null,seq__3764__$1);
var G__3776 = c__4319__auto__;
var G__3777 = cljs.core.count.call(null,c__4319__auto__);
var G__3778 = (0);
seq__3764 = G__3775;
chunk__3765 = G__3776;
count__3766 = G__3777;
i__3767 = G__3778;
continue;
} else {
var ev = cljs.core.first.call(null,seq__3764__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));


var G__3779 = cljs.core.next.call(null,seq__3764__$1);
var G__3780 = null;
var G__3781 = (0);
var G__3782 = (0);
seq__3764 = G__3779;
chunk__3765 = G__3780;
count__3766 = G__3781;
i__3767 = G__3782;
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
enfocus.events.remove_listeners.cljs$lang$applyTo = (function (seq3763){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3763));
});

/**
 * removing a specific event from the selected nodes
 */
enfocus.events.unlisten = (function enfocus$events$unlisten(var_args){
var G__3784 = arguments.length;
switch (G__3784) {
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__3786_SHARP_){
var seq__3787 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__3786_SHARP_.target));
var chunk__3788 = null;
var count__3789 = (0);
var i__3790 = (0);
while(true){
if((i__3790 < count__3789)){
var el = cljs.core._nth.call(null,chunk__3788,i__3790);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__3787,chunk__3788,count__3789,i__3790,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__3786_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__3786_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__3786_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__3787,chunk__3788,count__3789,i__3790,el))
));


var G__3791 = seq__3787;
var G__3792 = chunk__3788;
var G__3793 = count__3789;
var G__3794 = (i__3790 + (1));
seq__3787 = G__3791;
chunk__3788 = G__3792;
count__3789 = G__3793;
i__3790 = G__3794;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3787);
if(temp__4657__auto__){
var seq__3787__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3787__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3787__$1);
var G__3795 = cljs.core.chunk_rest.call(null,seq__3787__$1);
var G__3796 = c__4319__auto__;
var G__3797 = cljs.core.count.call(null,c__4319__auto__);
var G__3798 = (0);
seq__3787 = G__3795;
chunk__3788 = G__3796;
count__3789 = G__3797;
i__3790 = G__3798;
continue;
} else {
var el = cljs.core.first.call(null,seq__3787__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__3787,chunk__3788,count__3789,i__3790,el,seq__3787__$1,temp__4657__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__3786_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__3786_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__3786_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__3787,chunk__3788,count__3789,i__3790,el,seq__3787__$1,temp__4657__auto__))
));


var G__3799 = cljs.core.next.call(null,seq__3787__$1);
var G__3800 = null;
var G__3801 = (0);
var G__3802 = (0);
seq__3787 = G__3799;
chunk__3788 = G__3800;
count__3789 = G__3801;
i__3790 = G__3802;
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
var G__3803 = parent;
var G__3804 = child.parentNode;
parent = G__3803;
child = G__3804;
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

//# sourceMappingURL=events.js.map
