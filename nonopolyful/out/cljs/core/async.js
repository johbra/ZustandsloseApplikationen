// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3919 = arguments.length;
switch (G__3919) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async3920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3920 = (function (f,blockable,meta3921){
this.f = f;
this.blockable = blockable;
this.meta3921 = meta3921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3922,meta3921__$1){
var self__ = this;
var _3922__$1 = this;
return (new cljs.core.async.t_cljs$core$async3920(self__.f,self__.blockable,meta3921__$1));
});

cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3922){
var self__ = this;
var _3922__$1 = this;
return self__.meta3921;
});

cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3921","meta3921",2112642324,null)], null);
});

cljs.core.async.t_cljs$core$async3920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3920";

cljs.core.async.t_cljs$core$async3920.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3920");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3920.
 */
cljs.core.async.__GT_t_cljs$core$async3920 = (function cljs$core$async$__GT_t_cljs$core$async3920(f__$1,blockable__$1,meta3921){
return (new cljs.core.async.t_cljs$core$async3920(f__$1,blockable__$1,meta3921));
});

}

return (new cljs.core.async.t_cljs$core$async3920(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3926 = arguments.length;
switch (G__3926) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3929 = arguments.length;
switch (G__3929) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3932 = arguments.length;
switch (G__3932) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3934 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3934);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3934,ret){
return (function (){
return fn1.call(null,val_3934);
});})(val_3934,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3936 = arguments.length;
switch (G__3936) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___3938 = n;
var x_3939 = (0);
while(true){
if((x_3939 < n__4376__auto___3938)){
(a[x_3939] = (0));

var G__3940 = (x_3939 + (1));
x_3939 = G__3940;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3941 = (i + (1));
i = G__3941;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3942 = (function (flag,meta3943){
this.flag = flag;
this.meta3943 = meta3943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3944,meta3943__$1){
var self__ = this;
var _3944__$1 = this;
return (new cljs.core.async.t_cljs$core$async3942(self__.flag,meta3943__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3944){
var self__ = this;
var _3944__$1 = this;
return self__.meta3943;
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3943","meta3943",-1864851107,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3942";

cljs.core.async.t_cljs$core$async3942.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3942");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3942.
 */
cljs.core.async.__GT_t_cljs$core$async3942 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3942(flag__$1,meta3943){
return (new cljs.core.async.t_cljs$core$async3942(flag__$1,meta3943));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3942(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3945 = (function (flag,cb,meta3946){
this.flag = flag;
this.cb = cb;
this.meta3946 = meta3946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3947,meta3946__$1){
var self__ = this;
var _3947__$1 = this;
return (new cljs.core.async.t_cljs$core$async3945(self__.flag,self__.cb,meta3946__$1));
});

cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3947){
var self__ = this;
var _3947__$1 = this;
return self__.meta3946;
});

cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3946","meta3946",-1111420294,null)], null);
});

cljs.core.async.t_cljs$core$async3945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3945";

cljs.core.async.t_cljs$core$async3945.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3945");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3945.
 */
cljs.core.async.__GT_t_cljs$core$async3945 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3945(flag__$1,cb__$1,meta3946){
return (new cljs.core.async.t_cljs$core$async3945(flag__$1,cb__$1,meta3946));
});

}

return (new cljs.core.async.t_cljs$core$async3945(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3948_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3948_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3949_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3949_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3950 = (i + (1));
i = G__3950;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3956 = arguments.length;
var i__4500__auto___3957 = (0);
while(true){
if((i__4500__auto___3957 < len__4499__auto___3956)){
args__4502__auto__.push((arguments[i__4500__auto___3957]));

var G__3958 = (i__4500__auto___3957 + (1));
i__4500__auto___3957 = G__3958;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3953){
var map__3954 = p__3953;
var map__3954__$1 = ((((!((map__3954 == null)))?(((((map__3954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3954):map__3954);
var opts = map__3954__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3951){
var G__3952 = cljs.core.first.call(null,seq3951);
var seq3951__$1 = cljs.core.next.call(null,seq3951);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3952,seq3951__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3960 = arguments.length;
switch (G__3960) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1705__auto___4006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4006){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4006){
return (function (state_3984){
var state_val_3985 = (state_3984[(1)]);
if((state_val_3985 === (7))){
var inst_3980 = (state_3984[(2)]);
var state_3984__$1 = state_3984;
var statearr_3986_4007 = state_3984__$1;
(statearr_3986_4007[(2)] = inst_3980);

(statearr_3986_4007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (1))){
var state_3984__$1 = state_3984;
var statearr_3987_4008 = state_3984__$1;
(statearr_3987_4008[(2)] = null);

(statearr_3987_4008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (4))){
var inst_3963 = (state_3984[(7)]);
var inst_3963__$1 = (state_3984[(2)]);
var inst_3964 = (inst_3963__$1 == null);
var state_3984__$1 = (function (){var statearr_3988 = state_3984;
(statearr_3988[(7)] = inst_3963__$1);

return statearr_3988;
})();
if(cljs.core.truth_(inst_3964)){
var statearr_3989_4009 = state_3984__$1;
(statearr_3989_4009[(1)] = (5));

} else {
var statearr_3990_4010 = state_3984__$1;
(statearr_3990_4010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (13))){
var state_3984__$1 = state_3984;
var statearr_3991_4011 = state_3984__$1;
(statearr_3991_4011[(2)] = null);

(statearr_3991_4011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (6))){
var inst_3963 = (state_3984[(7)]);
var state_3984__$1 = state_3984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3984__$1,(11),to,inst_3963);
} else {
if((state_val_3985 === (3))){
var inst_3982 = (state_3984[(2)]);
var state_3984__$1 = state_3984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3984__$1,inst_3982);
} else {
if((state_val_3985 === (12))){
var state_3984__$1 = state_3984;
var statearr_3992_4012 = state_3984__$1;
(statearr_3992_4012[(2)] = null);

(statearr_3992_4012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (2))){
var state_3984__$1 = state_3984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3984__$1,(4),from);
} else {
if((state_val_3985 === (11))){
var inst_3973 = (state_3984[(2)]);
var state_3984__$1 = state_3984;
if(cljs.core.truth_(inst_3973)){
var statearr_3993_4013 = state_3984__$1;
(statearr_3993_4013[(1)] = (12));

} else {
var statearr_3994_4014 = state_3984__$1;
(statearr_3994_4014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (9))){
var state_3984__$1 = state_3984;
var statearr_3995_4015 = state_3984__$1;
(statearr_3995_4015[(2)] = null);

(statearr_3995_4015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (5))){
var state_3984__$1 = state_3984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3996_4016 = state_3984__$1;
(statearr_3996_4016[(1)] = (8));

} else {
var statearr_3997_4017 = state_3984__$1;
(statearr_3997_4017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (14))){
var inst_3978 = (state_3984[(2)]);
var state_3984__$1 = state_3984;
var statearr_3998_4018 = state_3984__$1;
(statearr_3998_4018[(2)] = inst_3978);

(statearr_3998_4018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (10))){
var inst_3970 = (state_3984[(2)]);
var state_3984__$1 = state_3984;
var statearr_3999_4019 = state_3984__$1;
(statearr_3999_4019[(2)] = inst_3970);

(statearr_3999_4019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3985 === (8))){
var inst_3967 = cljs.core.async.close_BANG_.call(null,to);
var state_3984__$1 = state_3984;
var statearr_4000_4020 = state_3984__$1;
(statearr_4000_4020[(2)] = inst_3967);

(statearr_4000_4020[(1)] = (10));


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
}
});})(c__1705__auto___4006))
;
return ((function (switch__1690__auto__,c__1705__auto___4006){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_4001 = [null,null,null,null,null,null,null,null];
(statearr_4001[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_4001[(1)] = (1));

return statearr_4001;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_3984){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_3984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4002){if((e4002 instanceof Object)){
var ex__1694__auto__ = e4002;
var statearr_4003_4021 = state_3984;
(statearr_4003_4021[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4022 = state_3984;
state_3984 = G__4022;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_3984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_3984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4006))
})();
var state__1707__auto__ = (function (){var statearr_4004 = f__1706__auto__.call(null);
(statearr_4004[(6)] = c__1705__auto___4006);

return statearr_4004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4006))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4023){
var vec__4024 = p__4023;
var v = cljs.core.nth.call(null,vec__4024,(0),null);
var p = cljs.core.nth.call(null,vec__4024,(1),null);
var job = vec__4024;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1705__auto___4195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results){
return (function (state_4031){
var state_val_4032 = (state_4031[(1)]);
if((state_val_4032 === (1))){
var state_4031__$1 = state_4031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4031__$1,(2),res,v);
} else {
if((state_val_4032 === (2))){
var inst_4028 = (state_4031[(2)]);
var inst_4029 = cljs.core.async.close_BANG_.call(null,res);
var state_4031__$1 = (function (){var statearr_4033 = state_4031;
(statearr_4033[(7)] = inst_4028);

return statearr_4033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4031__$1,inst_4029);
} else {
return null;
}
}
});})(c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results))
;
return ((function (switch__1690__auto__,c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_4034 = [null,null,null,null,null,null,null,null];
(statearr_4034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__);

(statearr_4034[(1)] = (1));

return statearr_4034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1 = (function (state_4031){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4035){if((e4035 instanceof Object)){
var ex__1694__auto__ = e4035;
var statearr_4036_4196 = state_4031;
(statearr_4036_4196[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4197 = state_4031;
state_4031 = G__4197;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = function(state_4031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1.call(this,state_4031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results))
})();
var state__1707__auto__ = (function (){var statearr_4037 = f__1706__auto__.call(null);
(statearr_4037[(6)] = c__1705__auto___4195);

return statearr_4037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4195,res,vec__4024,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4038){
var vec__4039 = p__4038;
var v = cljs.core.nth.call(null,vec__4039,(0),null);
var p = cljs.core.nth.call(null,vec__4039,(1),null);
var job = vec__4039;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___4198 = n;
var __4199 = (0);
while(true){
if((__4199 < n__4376__auto___4198)){
var G__4042_4200 = type;
var G__4042_4201__$1 = (((G__4042_4200 instanceof cljs.core.Keyword))?G__4042_4200.fqn:null);
switch (G__4042_4201__$1) {
case "compute":
var c__1705__auto___4203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4199,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (__4199,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function (state_4055){
var state_val_4056 = (state_4055[(1)]);
if((state_val_4056 === (1))){
var state_4055__$1 = state_4055;
var statearr_4057_4204 = state_4055__$1;
(statearr_4057_4204[(2)] = null);

(statearr_4057_4204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4056 === (2))){
var state_4055__$1 = state_4055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4055__$1,(4),jobs);
} else {
if((state_val_4056 === (3))){
var inst_4053 = (state_4055[(2)]);
var state_4055__$1 = state_4055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4055__$1,inst_4053);
} else {
if((state_val_4056 === (4))){
var inst_4045 = (state_4055[(2)]);
var inst_4046 = process.call(null,inst_4045);
var state_4055__$1 = state_4055;
if(cljs.core.truth_(inst_4046)){
var statearr_4058_4205 = state_4055__$1;
(statearr_4058_4205[(1)] = (5));

} else {
var statearr_4059_4206 = state_4055__$1;
(statearr_4059_4206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4056 === (5))){
var state_4055__$1 = state_4055;
var statearr_4060_4207 = state_4055__$1;
(statearr_4060_4207[(2)] = null);

(statearr_4060_4207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4056 === (6))){
var state_4055__$1 = state_4055;
var statearr_4061_4208 = state_4055__$1;
(statearr_4061_4208[(2)] = null);

(statearr_4061_4208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4056 === (7))){
var inst_4051 = (state_4055[(2)]);
var state_4055__$1 = state_4055;
var statearr_4062_4209 = state_4055__$1;
(statearr_4062_4209[(2)] = inst_4051);

(statearr_4062_4209[(1)] = (3));


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
});})(__4199,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
;
return ((function (__4199,switch__1690__auto__,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_4063 = [null,null,null,null,null,null,null];
(statearr_4063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__);

(statearr_4063[(1)] = (1));

return statearr_4063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1 = (function (state_4055){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4064){if((e4064 instanceof Object)){
var ex__1694__auto__ = e4064;
var statearr_4065_4210 = state_4055;
(statearr_4065_4210[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4211 = state_4055;
state_4055 = G__4211;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = function(state_4055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1.call(this,state_4055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__;
})()
;})(__4199,switch__1690__auto__,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
})();
var state__1707__auto__ = (function (){var statearr_4066 = f__1706__auto__.call(null);
(statearr_4066[(6)] = c__1705__auto___4203);

return statearr_4066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(__4199,c__1705__auto___4203,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
);


break;
case "async":
var c__1705__auto___4212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4199,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (__4199,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function (state_4079){
var state_val_4080 = (state_4079[(1)]);
if((state_val_4080 === (1))){
var state_4079__$1 = state_4079;
var statearr_4081_4213 = state_4079__$1;
(statearr_4081_4213[(2)] = null);

(statearr_4081_4213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4080 === (2))){
var state_4079__$1 = state_4079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4079__$1,(4),jobs);
} else {
if((state_val_4080 === (3))){
var inst_4077 = (state_4079[(2)]);
var state_4079__$1 = state_4079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4079__$1,inst_4077);
} else {
if((state_val_4080 === (4))){
var inst_4069 = (state_4079[(2)]);
var inst_4070 = async.call(null,inst_4069);
var state_4079__$1 = state_4079;
if(cljs.core.truth_(inst_4070)){
var statearr_4082_4214 = state_4079__$1;
(statearr_4082_4214[(1)] = (5));

} else {
var statearr_4083_4215 = state_4079__$1;
(statearr_4083_4215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4080 === (5))){
var state_4079__$1 = state_4079;
var statearr_4084_4216 = state_4079__$1;
(statearr_4084_4216[(2)] = null);

(statearr_4084_4216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4080 === (6))){
var state_4079__$1 = state_4079;
var statearr_4085_4217 = state_4079__$1;
(statearr_4085_4217[(2)] = null);

(statearr_4085_4217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4080 === (7))){
var inst_4075 = (state_4079[(2)]);
var state_4079__$1 = state_4079;
var statearr_4086_4218 = state_4079__$1;
(statearr_4086_4218[(2)] = inst_4075);

(statearr_4086_4218[(1)] = (3));


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
});})(__4199,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
;
return ((function (__4199,switch__1690__auto__,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_4087 = [null,null,null,null,null,null,null];
(statearr_4087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__);

(statearr_4087[(1)] = (1));

return statearr_4087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1 = (function (state_4079){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4088){if((e4088 instanceof Object)){
var ex__1694__auto__ = e4088;
var statearr_4089_4219 = state_4079;
(statearr_4089_4219[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4220 = state_4079;
state_4079 = G__4220;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = function(state_4079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1.call(this,state_4079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__;
})()
;})(__4199,switch__1690__auto__,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
})();
var state__1707__auto__ = (function (){var statearr_4090 = f__1706__auto__.call(null);
(statearr_4090[(6)] = c__1705__auto___4212);

return statearr_4090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(__4199,c__1705__auto___4212,G__4042_4200,G__4042_4201__$1,n__4376__auto___4198,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4042_4201__$1)].join('')));

}

var G__4221 = (__4199 + (1));
__4199 = G__4221;
continue;
} else {
}
break;
}

var c__1705__auto___4222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4222,jobs,results,process,async){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4222,jobs,results,process,async){
return (function (state_4112){
var state_val_4113 = (state_4112[(1)]);
if((state_val_4113 === (1))){
var state_4112__$1 = state_4112;
var statearr_4114_4223 = state_4112__$1;
(statearr_4114_4223[(2)] = null);

(statearr_4114_4223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4113 === (2))){
var state_4112__$1 = state_4112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4112__$1,(4),from);
} else {
if((state_val_4113 === (3))){
var inst_4110 = (state_4112[(2)]);
var state_4112__$1 = state_4112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4112__$1,inst_4110);
} else {
if((state_val_4113 === (4))){
var inst_4093 = (state_4112[(7)]);
var inst_4093__$1 = (state_4112[(2)]);
var inst_4094 = (inst_4093__$1 == null);
var state_4112__$1 = (function (){var statearr_4115 = state_4112;
(statearr_4115[(7)] = inst_4093__$1);

return statearr_4115;
})();
if(cljs.core.truth_(inst_4094)){
var statearr_4116_4224 = state_4112__$1;
(statearr_4116_4224[(1)] = (5));

} else {
var statearr_4117_4225 = state_4112__$1;
(statearr_4117_4225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4113 === (5))){
var inst_4096 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4112__$1 = state_4112;
var statearr_4118_4226 = state_4112__$1;
(statearr_4118_4226[(2)] = inst_4096);

(statearr_4118_4226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4113 === (6))){
var inst_4093 = (state_4112[(7)]);
var inst_4098 = (state_4112[(8)]);
var inst_4098__$1 = cljs.core.async.chan.call(null,(1));
var inst_4099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4100 = [inst_4093,inst_4098__$1];
var inst_4101 = (new cljs.core.PersistentVector(null,2,(5),inst_4099,inst_4100,null));
var state_4112__$1 = (function (){var statearr_4119 = state_4112;
(statearr_4119[(8)] = inst_4098__$1);

return statearr_4119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4112__$1,(8),jobs,inst_4101);
} else {
if((state_val_4113 === (7))){
var inst_4108 = (state_4112[(2)]);
var state_4112__$1 = state_4112;
var statearr_4120_4227 = state_4112__$1;
(statearr_4120_4227[(2)] = inst_4108);

(statearr_4120_4227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4113 === (8))){
var inst_4098 = (state_4112[(8)]);
var inst_4103 = (state_4112[(2)]);
var state_4112__$1 = (function (){var statearr_4121 = state_4112;
(statearr_4121[(9)] = inst_4103);

return statearr_4121;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4112__$1,(9),results,inst_4098);
} else {
if((state_val_4113 === (9))){
var inst_4105 = (state_4112[(2)]);
var state_4112__$1 = (function (){var statearr_4122 = state_4112;
(statearr_4122[(10)] = inst_4105);

return statearr_4122;
})();
var statearr_4123_4228 = state_4112__$1;
(statearr_4123_4228[(2)] = null);

(statearr_4123_4228[(1)] = (2));


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
});})(c__1705__auto___4222,jobs,results,process,async))
;
return ((function (switch__1690__auto__,c__1705__auto___4222,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_4124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__);

(statearr_4124[(1)] = (1));

return statearr_4124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1 = (function (state_4112){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4125){if((e4125 instanceof Object)){
var ex__1694__auto__ = e4125;
var statearr_4126_4229 = state_4112;
(statearr_4126_4229[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4230 = state_4112;
state_4112 = G__4230;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = function(state_4112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1.call(this,state_4112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4222,jobs,results,process,async))
})();
var state__1707__auto__ = (function (){var statearr_4127 = f__1706__auto__.call(null);
(statearr_4127[(6)] = c__1705__auto___4222);

return statearr_4127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4222,jobs,results,process,async))
);


var c__1705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto__,jobs,results,process,async){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto__,jobs,results,process,async){
return (function (state_4165){
var state_val_4166 = (state_4165[(1)]);
if((state_val_4166 === (7))){
var inst_4161 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
var statearr_4167_4231 = state_4165__$1;
(statearr_4167_4231[(2)] = inst_4161);

(statearr_4167_4231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (20))){
var state_4165__$1 = state_4165;
var statearr_4168_4232 = state_4165__$1;
(statearr_4168_4232[(2)] = null);

(statearr_4168_4232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (1))){
var state_4165__$1 = state_4165;
var statearr_4169_4233 = state_4165__$1;
(statearr_4169_4233[(2)] = null);

(statearr_4169_4233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (4))){
var inst_4130 = (state_4165[(7)]);
var inst_4130__$1 = (state_4165[(2)]);
var inst_4131 = (inst_4130__$1 == null);
var state_4165__$1 = (function (){var statearr_4170 = state_4165;
(statearr_4170[(7)] = inst_4130__$1);

return statearr_4170;
})();
if(cljs.core.truth_(inst_4131)){
var statearr_4171_4234 = state_4165__$1;
(statearr_4171_4234[(1)] = (5));

} else {
var statearr_4172_4235 = state_4165__$1;
(statearr_4172_4235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (15))){
var inst_4143 = (state_4165[(8)]);
var state_4165__$1 = state_4165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4165__$1,(18),to,inst_4143);
} else {
if((state_val_4166 === (21))){
var inst_4156 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
var statearr_4173_4236 = state_4165__$1;
(statearr_4173_4236[(2)] = inst_4156);

(statearr_4173_4236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (13))){
var inst_4158 = (state_4165[(2)]);
var state_4165__$1 = (function (){var statearr_4174 = state_4165;
(statearr_4174[(9)] = inst_4158);

return statearr_4174;
})();
var statearr_4175_4237 = state_4165__$1;
(statearr_4175_4237[(2)] = null);

(statearr_4175_4237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (6))){
var inst_4130 = (state_4165[(7)]);
var state_4165__$1 = state_4165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4165__$1,(11),inst_4130);
} else {
if((state_val_4166 === (17))){
var inst_4151 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
if(cljs.core.truth_(inst_4151)){
var statearr_4176_4238 = state_4165__$1;
(statearr_4176_4238[(1)] = (19));

} else {
var statearr_4177_4239 = state_4165__$1;
(statearr_4177_4239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (3))){
var inst_4163 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4165__$1,inst_4163);
} else {
if((state_val_4166 === (12))){
var inst_4140 = (state_4165[(10)]);
var state_4165__$1 = state_4165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4165__$1,(14),inst_4140);
} else {
if((state_val_4166 === (2))){
var state_4165__$1 = state_4165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4165__$1,(4),results);
} else {
if((state_val_4166 === (19))){
var state_4165__$1 = state_4165;
var statearr_4178_4240 = state_4165__$1;
(statearr_4178_4240[(2)] = null);

(statearr_4178_4240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (11))){
var inst_4140 = (state_4165[(2)]);
var state_4165__$1 = (function (){var statearr_4179 = state_4165;
(statearr_4179[(10)] = inst_4140);

return statearr_4179;
})();
var statearr_4180_4241 = state_4165__$1;
(statearr_4180_4241[(2)] = null);

(statearr_4180_4241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (9))){
var state_4165__$1 = state_4165;
var statearr_4181_4242 = state_4165__$1;
(statearr_4181_4242[(2)] = null);

(statearr_4181_4242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (5))){
var state_4165__$1 = state_4165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4182_4243 = state_4165__$1;
(statearr_4182_4243[(1)] = (8));

} else {
var statearr_4183_4244 = state_4165__$1;
(statearr_4183_4244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (14))){
var inst_4145 = (state_4165[(11)]);
var inst_4143 = (state_4165[(8)]);
var inst_4143__$1 = (state_4165[(2)]);
var inst_4144 = (inst_4143__$1 == null);
var inst_4145__$1 = cljs.core.not.call(null,inst_4144);
var state_4165__$1 = (function (){var statearr_4184 = state_4165;
(statearr_4184[(11)] = inst_4145__$1);

(statearr_4184[(8)] = inst_4143__$1);

return statearr_4184;
})();
if(inst_4145__$1){
var statearr_4185_4245 = state_4165__$1;
(statearr_4185_4245[(1)] = (15));

} else {
var statearr_4186_4246 = state_4165__$1;
(statearr_4186_4246[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (16))){
var inst_4145 = (state_4165[(11)]);
var state_4165__$1 = state_4165;
var statearr_4187_4247 = state_4165__$1;
(statearr_4187_4247[(2)] = inst_4145);

(statearr_4187_4247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (10))){
var inst_4137 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
var statearr_4188_4248 = state_4165__$1;
(statearr_4188_4248[(2)] = inst_4137);

(statearr_4188_4248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (18))){
var inst_4148 = (state_4165[(2)]);
var state_4165__$1 = state_4165;
var statearr_4189_4249 = state_4165__$1;
(statearr_4189_4249[(2)] = inst_4148);

(statearr_4189_4249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4166 === (8))){
var inst_4134 = cljs.core.async.close_BANG_.call(null,to);
var state_4165__$1 = state_4165;
var statearr_4190_4250 = state_4165__$1;
(statearr_4190_4250[(2)] = inst_4134);

(statearr_4190_4250[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__1705__auto__,jobs,results,process,async))
;
return ((function (switch__1690__auto__,c__1705__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_4191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__);

(statearr_4191[(1)] = (1));

return statearr_4191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1 = (function (state_4165){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4192){if((e4192 instanceof Object)){
var ex__1694__auto__ = e4192;
var statearr_4193_4251 = state_4165;
(statearr_4193_4251[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4252 = state_4165;
state_4165 = G__4252;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__ = function(state_4165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1.call(this,state_4165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto__,jobs,results,process,async))
})();
var state__1707__auto__ = (function (){var statearr_4194 = f__1706__auto__.call(null);
(statearr_4194[(6)] = c__1705__auto__);

return statearr_4194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto__,jobs,results,process,async))
);

return c__1705__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4254 = arguments.length;
switch (G__4254) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4257 = arguments.length;
switch (G__4257) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4260 = arguments.length;
switch (G__4260) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1705__auto___4309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4309,tc,fc){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4309,tc,fc){
return (function (state_4286){
var state_val_4287 = (state_4286[(1)]);
if((state_val_4287 === (7))){
var inst_4282 = (state_4286[(2)]);
var state_4286__$1 = state_4286;
var statearr_4288_4310 = state_4286__$1;
(statearr_4288_4310[(2)] = inst_4282);

(statearr_4288_4310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (1))){
var state_4286__$1 = state_4286;
var statearr_4289_4311 = state_4286__$1;
(statearr_4289_4311[(2)] = null);

(statearr_4289_4311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (4))){
var inst_4263 = (state_4286[(7)]);
var inst_4263__$1 = (state_4286[(2)]);
var inst_4264 = (inst_4263__$1 == null);
var state_4286__$1 = (function (){var statearr_4290 = state_4286;
(statearr_4290[(7)] = inst_4263__$1);

return statearr_4290;
})();
if(cljs.core.truth_(inst_4264)){
var statearr_4291_4312 = state_4286__$1;
(statearr_4291_4312[(1)] = (5));

} else {
var statearr_4292_4313 = state_4286__$1;
(statearr_4292_4313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (13))){
var state_4286__$1 = state_4286;
var statearr_4293_4314 = state_4286__$1;
(statearr_4293_4314[(2)] = null);

(statearr_4293_4314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (6))){
var inst_4263 = (state_4286[(7)]);
var inst_4269 = p.call(null,inst_4263);
var state_4286__$1 = state_4286;
if(cljs.core.truth_(inst_4269)){
var statearr_4294_4315 = state_4286__$1;
(statearr_4294_4315[(1)] = (9));

} else {
var statearr_4295_4316 = state_4286__$1;
(statearr_4295_4316[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (3))){
var inst_4284 = (state_4286[(2)]);
var state_4286__$1 = state_4286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4286__$1,inst_4284);
} else {
if((state_val_4287 === (12))){
var state_4286__$1 = state_4286;
var statearr_4296_4317 = state_4286__$1;
(statearr_4296_4317[(2)] = null);

(statearr_4296_4317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (2))){
var state_4286__$1 = state_4286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4286__$1,(4),ch);
} else {
if((state_val_4287 === (11))){
var inst_4263 = (state_4286[(7)]);
var inst_4273 = (state_4286[(2)]);
var state_4286__$1 = state_4286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4286__$1,(8),inst_4273,inst_4263);
} else {
if((state_val_4287 === (9))){
var state_4286__$1 = state_4286;
var statearr_4297_4318 = state_4286__$1;
(statearr_4297_4318[(2)] = tc);

(statearr_4297_4318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (5))){
var inst_4266 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4267 = cljs.core.async.close_BANG_.call(null,fc);
var state_4286__$1 = (function (){var statearr_4298 = state_4286;
(statearr_4298[(8)] = inst_4266);

return statearr_4298;
})();
var statearr_4299_4319 = state_4286__$1;
(statearr_4299_4319[(2)] = inst_4267);

(statearr_4299_4319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (14))){
var inst_4280 = (state_4286[(2)]);
var state_4286__$1 = state_4286;
var statearr_4300_4320 = state_4286__$1;
(statearr_4300_4320[(2)] = inst_4280);

(statearr_4300_4320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (10))){
var state_4286__$1 = state_4286;
var statearr_4301_4321 = state_4286__$1;
(statearr_4301_4321[(2)] = fc);

(statearr_4301_4321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4287 === (8))){
var inst_4275 = (state_4286[(2)]);
var state_4286__$1 = state_4286;
if(cljs.core.truth_(inst_4275)){
var statearr_4302_4322 = state_4286__$1;
(statearr_4302_4322[(1)] = (12));

} else {
var statearr_4303_4323 = state_4286__$1;
(statearr_4303_4323[(1)] = (13));

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
}
});})(c__1705__auto___4309,tc,fc))
;
return ((function (switch__1690__auto__,c__1705__auto___4309,tc,fc){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_4304 = [null,null,null,null,null,null,null,null,null];
(statearr_4304[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_4304[(1)] = (1));

return statearr_4304;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_4286){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4305){if((e4305 instanceof Object)){
var ex__1694__auto__ = e4305;
var statearr_4306_4324 = state_4286;
(statearr_4306_4324[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4325 = state_4286;
state_4286 = G__4325;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_4286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_4286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4309,tc,fc))
})();
var state__1707__auto__ = (function (){var statearr_4307 = f__1706__auto__.call(null);
(statearr_4307[(6)] = c__1705__auto___4309);

return statearr_4307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4309,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__1705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto__){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto__){
return (function (state_4346){
var state_val_4347 = (state_4346[(1)]);
if((state_val_4347 === (7))){
var inst_4342 = (state_4346[(2)]);
var state_4346__$1 = state_4346;
var statearr_4348_4366 = state_4346__$1;
(statearr_4348_4366[(2)] = inst_4342);

(statearr_4348_4366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (1))){
var inst_4326 = init;
var state_4346__$1 = (function (){var statearr_4349 = state_4346;
(statearr_4349[(7)] = inst_4326);

return statearr_4349;
})();
var statearr_4350_4367 = state_4346__$1;
(statearr_4350_4367[(2)] = null);

(statearr_4350_4367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (4))){
var inst_4329 = (state_4346[(8)]);
var inst_4329__$1 = (state_4346[(2)]);
var inst_4330 = (inst_4329__$1 == null);
var state_4346__$1 = (function (){var statearr_4351 = state_4346;
(statearr_4351[(8)] = inst_4329__$1);

return statearr_4351;
})();
if(cljs.core.truth_(inst_4330)){
var statearr_4352_4368 = state_4346__$1;
(statearr_4352_4368[(1)] = (5));

} else {
var statearr_4353_4369 = state_4346__$1;
(statearr_4353_4369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (6))){
var inst_4326 = (state_4346[(7)]);
var inst_4333 = (state_4346[(9)]);
var inst_4329 = (state_4346[(8)]);
var inst_4333__$1 = f.call(null,inst_4326,inst_4329);
var inst_4334 = cljs.core.reduced_QMARK_.call(null,inst_4333__$1);
var state_4346__$1 = (function (){var statearr_4354 = state_4346;
(statearr_4354[(9)] = inst_4333__$1);

return statearr_4354;
})();
if(inst_4334){
var statearr_4355_4370 = state_4346__$1;
(statearr_4355_4370[(1)] = (8));

} else {
var statearr_4356_4371 = state_4346__$1;
(statearr_4356_4371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (3))){
var inst_4344 = (state_4346[(2)]);
var state_4346__$1 = state_4346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4346__$1,inst_4344);
} else {
if((state_val_4347 === (2))){
var state_4346__$1 = state_4346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4346__$1,(4),ch);
} else {
if((state_val_4347 === (9))){
var inst_4333 = (state_4346[(9)]);
var inst_4326 = inst_4333;
var state_4346__$1 = (function (){var statearr_4357 = state_4346;
(statearr_4357[(7)] = inst_4326);

return statearr_4357;
})();
var statearr_4358_4372 = state_4346__$1;
(statearr_4358_4372[(2)] = null);

(statearr_4358_4372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (5))){
var inst_4326 = (state_4346[(7)]);
var state_4346__$1 = state_4346;
var statearr_4359_4373 = state_4346__$1;
(statearr_4359_4373[(2)] = inst_4326);

(statearr_4359_4373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (10))){
var inst_4340 = (state_4346[(2)]);
var state_4346__$1 = state_4346;
var statearr_4360_4374 = state_4346__$1;
(statearr_4360_4374[(2)] = inst_4340);

(statearr_4360_4374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4347 === (8))){
var inst_4333 = (state_4346[(9)]);
var inst_4336 = cljs.core.deref.call(null,inst_4333);
var state_4346__$1 = state_4346;
var statearr_4361_4375 = state_4346__$1;
(statearr_4361_4375[(2)] = inst_4336);

(statearr_4361_4375[(1)] = (10));


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
});})(c__1705__auto__))
;
return ((function (switch__1690__auto__,c__1705__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1691__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1691__auto____0 = (function (){
var statearr_4362 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4362[(0)] = cljs$core$async$reduce_$_state_machine__1691__auto__);

(statearr_4362[(1)] = (1));

return statearr_4362;
});
var cljs$core$async$reduce_$_state_machine__1691__auto____1 = (function (state_4346){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4363){if((e4363 instanceof Object)){
var ex__1694__auto__ = e4363;
var statearr_4364_4376 = state_4346;
(statearr_4364_4376[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4377 = state_4346;
state_4346 = G__4377;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1691__auto__ = function(state_4346){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1691__auto____1.call(this,state_4346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1691__auto____0;
cljs$core$async$reduce_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1691__auto____1;
return cljs$core$async$reduce_$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto__))
})();
var state__1707__auto__ = (function (){var statearr_4365 = f__1706__auto__.call(null);
(statearr_4365[(6)] = c__1705__auto__);

return statearr_4365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto__))
);

return c__1705__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__1705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto__,f__$1){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto__,f__$1){
return (function (state_4383){
var state_val_4384 = (state_4383[(1)]);
if((state_val_4384 === (1))){
var inst_4378 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4383__$1 = state_4383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4383__$1,(2),inst_4378);
} else {
if((state_val_4384 === (2))){
var inst_4380 = (state_4383[(2)]);
var inst_4381 = f__$1.call(null,inst_4380);
var state_4383__$1 = state_4383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4383__$1,inst_4381);
} else {
return null;
}
}
});})(c__1705__auto__,f__$1))
;
return ((function (switch__1690__auto__,c__1705__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__1691__auto__ = null;
var cljs$core$async$transduce_$_state_machine__1691__auto____0 = (function (){
var statearr_4385 = [null,null,null,null,null,null,null];
(statearr_4385[(0)] = cljs$core$async$transduce_$_state_machine__1691__auto__);

(statearr_4385[(1)] = (1));

return statearr_4385;
});
var cljs$core$async$transduce_$_state_machine__1691__auto____1 = (function (state_4383){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4386){if((e4386 instanceof Object)){
var ex__1694__auto__ = e4386;
var statearr_4387_4389 = state_4383;
(statearr_4387_4389[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4390 = state_4383;
state_4383 = G__4390;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__1691__auto__ = function(state_4383){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__1691__auto____1.call(this,state_4383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__1691__auto____0;
cljs$core$async$transduce_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__1691__auto____1;
return cljs$core$async$transduce_$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto__,f__$1))
})();
var state__1707__auto__ = (function (){var statearr_4388 = f__1706__auto__.call(null);
(statearr_4388[(6)] = c__1705__auto__);

return statearr_4388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto__,f__$1))
);

return c__1705__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4392 = arguments.length;
switch (G__4392) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto__){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto__){
return (function (state_4417){
var state_val_4418 = (state_4417[(1)]);
if((state_val_4418 === (7))){
var inst_4399 = (state_4417[(2)]);
var state_4417__$1 = state_4417;
var statearr_4419_4440 = state_4417__$1;
(statearr_4419_4440[(2)] = inst_4399);

(statearr_4419_4440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (1))){
var inst_4393 = cljs.core.seq.call(null,coll);
var inst_4394 = inst_4393;
var state_4417__$1 = (function (){var statearr_4420 = state_4417;
(statearr_4420[(7)] = inst_4394);

return statearr_4420;
})();
var statearr_4421_4441 = state_4417__$1;
(statearr_4421_4441[(2)] = null);

(statearr_4421_4441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (4))){
var inst_4394 = (state_4417[(7)]);
var inst_4397 = cljs.core.first.call(null,inst_4394);
var state_4417__$1 = state_4417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4417__$1,(7),ch,inst_4397);
} else {
if((state_val_4418 === (13))){
var inst_4411 = (state_4417[(2)]);
var state_4417__$1 = state_4417;
var statearr_4422_4442 = state_4417__$1;
(statearr_4422_4442[(2)] = inst_4411);

(statearr_4422_4442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (6))){
var inst_4402 = (state_4417[(2)]);
var state_4417__$1 = state_4417;
if(cljs.core.truth_(inst_4402)){
var statearr_4423_4443 = state_4417__$1;
(statearr_4423_4443[(1)] = (8));

} else {
var statearr_4424_4444 = state_4417__$1;
(statearr_4424_4444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (3))){
var inst_4415 = (state_4417[(2)]);
var state_4417__$1 = state_4417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4417__$1,inst_4415);
} else {
if((state_val_4418 === (12))){
var state_4417__$1 = state_4417;
var statearr_4425_4445 = state_4417__$1;
(statearr_4425_4445[(2)] = null);

(statearr_4425_4445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (2))){
var inst_4394 = (state_4417[(7)]);
var state_4417__$1 = state_4417;
if(cljs.core.truth_(inst_4394)){
var statearr_4426_4446 = state_4417__$1;
(statearr_4426_4446[(1)] = (4));

} else {
var statearr_4427_4447 = state_4417__$1;
(statearr_4427_4447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (11))){
var inst_4408 = cljs.core.async.close_BANG_.call(null,ch);
var state_4417__$1 = state_4417;
var statearr_4428_4448 = state_4417__$1;
(statearr_4428_4448[(2)] = inst_4408);

(statearr_4428_4448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (9))){
var state_4417__$1 = state_4417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4429_4449 = state_4417__$1;
(statearr_4429_4449[(1)] = (11));

} else {
var statearr_4430_4450 = state_4417__$1;
(statearr_4430_4450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (5))){
var inst_4394 = (state_4417[(7)]);
var state_4417__$1 = state_4417;
var statearr_4431_4451 = state_4417__$1;
(statearr_4431_4451[(2)] = inst_4394);

(statearr_4431_4451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (10))){
var inst_4413 = (state_4417[(2)]);
var state_4417__$1 = state_4417;
var statearr_4432_4452 = state_4417__$1;
(statearr_4432_4452[(2)] = inst_4413);

(statearr_4432_4452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4418 === (8))){
var inst_4394 = (state_4417[(7)]);
var inst_4404 = cljs.core.next.call(null,inst_4394);
var inst_4394__$1 = inst_4404;
var state_4417__$1 = (function (){var statearr_4433 = state_4417;
(statearr_4433[(7)] = inst_4394__$1);

return statearr_4433;
})();
var statearr_4434_4453 = state_4417__$1;
(statearr_4434_4453[(2)] = null);

(statearr_4434_4453[(1)] = (2));


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
});})(c__1705__auto__))
;
return ((function (switch__1690__auto__,c__1705__auto__){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_4435 = [null,null,null,null,null,null,null,null];
(statearr_4435[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_4435[(1)] = (1));

return statearr_4435;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_4417){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4436){if((e4436 instanceof Object)){
var ex__1694__auto__ = e4436;
var statearr_4437_4454 = state_4417;
(statearr_4437_4454[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4455 = state_4417;
state_4417 = G__4455;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_4417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_4417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto__))
})();
var state__1707__auto__ = (function (){var statearr_4438 = f__1706__auto__.call(null);
(statearr_4438[(6)] = c__1705__auto__);

return statearr_4438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto__))
);

return c__1705__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4456 = (function (ch,cs,meta4457){
this.ch = ch;
this.cs = cs;
this.meta4457 = meta4457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4458,meta4457__$1){
var self__ = this;
var _4458__$1 = this;
return (new cljs.core.async.t_cljs$core$async4456(self__.ch,self__.cs,meta4457__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4458){
var self__ = this;
var _4458__$1 = this;
return self__.meta4457;
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4457","meta4457",1849942795,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4456";

cljs.core.async.t_cljs$core$async4456.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4456");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4456.
 */
cljs.core.async.__GT_t_cljs$core$async4456 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4456(ch__$1,cs__$1,meta4457){
return (new cljs.core.async.t_cljs$core$async4456(ch__$1,cs__$1,meta4457));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4456(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__1705__auto___4678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4678,cs,m,dchan,dctr,done){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4678,cs,m,dchan,dctr,done){
return (function (state_4593){
var state_val_4594 = (state_4593[(1)]);
if((state_val_4594 === (7))){
var inst_4589 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4595_4679 = state_4593__$1;
(statearr_4595_4679[(2)] = inst_4589);

(statearr_4595_4679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (20))){
var inst_4492 = (state_4593[(7)]);
var inst_4504 = cljs.core.first.call(null,inst_4492);
var inst_4505 = cljs.core.nth.call(null,inst_4504,(0),null);
var inst_4506 = cljs.core.nth.call(null,inst_4504,(1),null);
var state_4593__$1 = (function (){var statearr_4596 = state_4593;
(statearr_4596[(8)] = inst_4505);

return statearr_4596;
})();
if(cljs.core.truth_(inst_4506)){
var statearr_4597_4680 = state_4593__$1;
(statearr_4597_4680[(1)] = (22));

} else {
var statearr_4598_4681 = state_4593__$1;
(statearr_4598_4681[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (27))){
var inst_4534 = (state_4593[(9)]);
var inst_4461 = (state_4593[(10)]);
var inst_4536 = (state_4593[(11)]);
var inst_4541 = (state_4593[(12)]);
var inst_4541__$1 = cljs.core._nth.call(null,inst_4534,inst_4536);
var inst_4542 = cljs.core.async.put_BANG_.call(null,inst_4541__$1,inst_4461,done);
var state_4593__$1 = (function (){var statearr_4599 = state_4593;
(statearr_4599[(12)] = inst_4541__$1);

return statearr_4599;
})();
if(cljs.core.truth_(inst_4542)){
var statearr_4600_4682 = state_4593__$1;
(statearr_4600_4682[(1)] = (30));

} else {
var statearr_4601_4683 = state_4593__$1;
(statearr_4601_4683[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (1))){
var state_4593__$1 = state_4593;
var statearr_4602_4684 = state_4593__$1;
(statearr_4602_4684[(2)] = null);

(statearr_4602_4684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (24))){
var inst_4492 = (state_4593[(7)]);
var inst_4511 = (state_4593[(2)]);
var inst_4512 = cljs.core.next.call(null,inst_4492);
var inst_4470 = inst_4512;
var inst_4471 = null;
var inst_4472 = (0);
var inst_4473 = (0);
var state_4593__$1 = (function (){var statearr_4603 = state_4593;
(statearr_4603[(13)] = inst_4473);

(statearr_4603[(14)] = inst_4511);

(statearr_4603[(15)] = inst_4470);

(statearr_4603[(16)] = inst_4472);

(statearr_4603[(17)] = inst_4471);

return statearr_4603;
})();
var statearr_4604_4685 = state_4593__$1;
(statearr_4604_4685[(2)] = null);

(statearr_4604_4685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (39))){
var state_4593__$1 = state_4593;
var statearr_4608_4686 = state_4593__$1;
(statearr_4608_4686[(2)] = null);

(statearr_4608_4686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (4))){
var inst_4461 = (state_4593[(10)]);
var inst_4461__$1 = (state_4593[(2)]);
var inst_4462 = (inst_4461__$1 == null);
var state_4593__$1 = (function (){var statearr_4609 = state_4593;
(statearr_4609[(10)] = inst_4461__$1);

return statearr_4609;
})();
if(cljs.core.truth_(inst_4462)){
var statearr_4610_4687 = state_4593__$1;
(statearr_4610_4687[(1)] = (5));

} else {
var statearr_4611_4688 = state_4593__$1;
(statearr_4611_4688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (15))){
var inst_4473 = (state_4593[(13)]);
var inst_4470 = (state_4593[(15)]);
var inst_4472 = (state_4593[(16)]);
var inst_4471 = (state_4593[(17)]);
var inst_4488 = (state_4593[(2)]);
var inst_4489 = (inst_4473 + (1));
var tmp4605 = inst_4470;
var tmp4606 = inst_4472;
var tmp4607 = inst_4471;
var inst_4470__$1 = tmp4605;
var inst_4471__$1 = tmp4607;
var inst_4472__$1 = tmp4606;
var inst_4473__$1 = inst_4489;
var state_4593__$1 = (function (){var statearr_4612 = state_4593;
(statearr_4612[(13)] = inst_4473__$1);

(statearr_4612[(18)] = inst_4488);

(statearr_4612[(15)] = inst_4470__$1);

(statearr_4612[(16)] = inst_4472__$1);

(statearr_4612[(17)] = inst_4471__$1);

return statearr_4612;
})();
var statearr_4613_4689 = state_4593__$1;
(statearr_4613_4689[(2)] = null);

(statearr_4613_4689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (21))){
var inst_4515 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4617_4690 = state_4593__$1;
(statearr_4617_4690[(2)] = inst_4515);

(statearr_4617_4690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (31))){
var inst_4541 = (state_4593[(12)]);
var inst_4545 = done.call(null,null);
var inst_4546 = cljs.core.async.untap_STAR_.call(null,m,inst_4541);
var state_4593__$1 = (function (){var statearr_4618 = state_4593;
(statearr_4618[(19)] = inst_4545);

return statearr_4618;
})();
var statearr_4619_4691 = state_4593__$1;
(statearr_4619_4691[(2)] = inst_4546);

(statearr_4619_4691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (32))){
var inst_4535 = (state_4593[(20)]);
var inst_4534 = (state_4593[(9)]);
var inst_4536 = (state_4593[(11)]);
var inst_4533 = (state_4593[(21)]);
var inst_4548 = (state_4593[(2)]);
var inst_4549 = (inst_4536 + (1));
var tmp4614 = inst_4535;
var tmp4615 = inst_4534;
var tmp4616 = inst_4533;
var inst_4533__$1 = tmp4616;
var inst_4534__$1 = tmp4615;
var inst_4535__$1 = tmp4614;
var inst_4536__$1 = inst_4549;
var state_4593__$1 = (function (){var statearr_4620 = state_4593;
(statearr_4620[(20)] = inst_4535__$1);

(statearr_4620[(9)] = inst_4534__$1);

(statearr_4620[(22)] = inst_4548);

(statearr_4620[(11)] = inst_4536__$1);

(statearr_4620[(21)] = inst_4533__$1);

return statearr_4620;
})();
var statearr_4621_4692 = state_4593__$1;
(statearr_4621_4692[(2)] = null);

(statearr_4621_4692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (40))){
var inst_4561 = (state_4593[(23)]);
var inst_4565 = done.call(null,null);
var inst_4566 = cljs.core.async.untap_STAR_.call(null,m,inst_4561);
var state_4593__$1 = (function (){var statearr_4622 = state_4593;
(statearr_4622[(24)] = inst_4565);

return statearr_4622;
})();
var statearr_4623_4693 = state_4593__$1;
(statearr_4623_4693[(2)] = inst_4566);

(statearr_4623_4693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (33))){
var inst_4552 = (state_4593[(25)]);
var inst_4554 = cljs.core.chunked_seq_QMARK_.call(null,inst_4552);
var state_4593__$1 = state_4593;
if(inst_4554){
var statearr_4624_4694 = state_4593__$1;
(statearr_4624_4694[(1)] = (36));

} else {
var statearr_4625_4695 = state_4593__$1;
(statearr_4625_4695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (13))){
var inst_4482 = (state_4593[(26)]);
var inst_4485 = cljs.core.async.close_BANG_.call(null,inst_4482);
var state_4593__$1 = state_4593;
var statearr_4626_4696 = state_4593__$1;
(statearr_4626_4696[(2)] = inst_4485);

(statearr_4626_4696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (22))){
var inst_4505 = (state_4593[(8)]);
var inst_4508 = cljs.core.async.close_BANG_.call(null,inst_4505);
var state_4593__$1 = state_4593;
var statearr_4627_4697 = state_4593__$1;
(statearr_4627_4697[(2)] = inst_4508);

(statearr_4627_4697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (36))){
var inst_4552 = (state_4593[(25)]);
var inst_4556 = cljs.core.chunk_first.call(null,inst_4552);
var inst_4557 = cljs.core.chunk_rest.call(null,inst_4552);
var inst_4558 = cljs.core.count.call(null,inst_4556);
var inst_4533 = inst_4557;
var inst_4534 = inst_4556;
var inst_4535 = inst_4558;
var inst_4536 = (0);
var state_4593__$1 = (function (){var statearr_4628 = state_4593;
(statearr_4628[(20)] = inst_4535);

(statearr_4628[(9)] = inst_4534);

(statearr_4628[(11)] = inst_4536);

(statearr_4628[(21)] = inst_4533);

return statearr_4628;
})();
var statearr_4629_4698 = state_4593__$1;
(statearr_4629_4698[(2)] = null);

(statearr_4629_4698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (41))){
var inst_4552 = (state_4593[(25)]);
var inst_4568 = (state_4593[(2)]);
var inst_4569 = cljs.core.next.call(null,inst_4552);
var inst_4533 = inst_4569;
var inst_4534 = null;
var inst_4535 = (0);
var inst_4536 = (0);
var state_4593__$1 = (function (){var statearr_4630 = state_4593;
(statearr_4630[(27)] = inst_4568);

(statearr_4630[(20)] = inst_4535);

(statearr_4630[(9)] = inst_4534);

(statearr_4630[(11)] = inst_4536);

(statearr_4630[(21)] = inst_4533);

return statearr_4630;
})();
var statearr_4631_4699 = state_4593__$1;
(statearr_4631_4699[(2)] = null);

(statearr_4631_4699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (43))){
var state_4593__$1 = state_4593;
var statearr_4632_4700 = state_4593__$1;
(statearr_4632_4700[(2)] = null);

(statearr_4632_4700[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (29))){
var inst_4577 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4633_4701 = state_4593__$1;
(statearr_4633_4701[(2)] = inst_4577);

(statearr_4633_4701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (44))){
var inst_4586 = (state_4593[(2)]);
var state_4593__$1 = (function (){var statearr_4634 = state_4593;
(statearr_4634[(28)] = inst_4586);

return statearr_4634;
})();
var statearr_4635_4702 = state_4593__$1;
(statearr_4635_4702[(2)] = null);

(statearr_4635_4702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (6))){
var inst_4525 = (state_4593[(29)]);
var inst_4524 = cljs.core.deref.call(null,cs);
var inst_4525__$1 = cljs.core.keys.call(null,inst_4524);
var inst_4526 = cljs.core.count.call(null,inst_4525__$1);
var inst_4527 = cljs.core.reset_BANG_.call(null,dctr,inst_4526);
var inst_4532 = cljs.core.seq.call(null,inst_4525__$1);
var inst_4533 = inst_4532;
var inst_4534 = null;
var inst_4535 = (0);
var inst_4536 = (0);
var state_4593__$1 = (function (){var statearr_4636 = state_4593;
(statearr_4636[(20)] = inst_4535);

(statearr_4636[(9)] = inst_4534);

(statearr_4636[(11)] = inst_4536);

(statearr_4636[(29)] = inst_4525__$1);

(statearr_4636[(30)] = inst_4527);

(statearr_4636[(21)] = inst_4533);

return statearr_4636;
})();
var statearr_4637_4703 = state_4593__$1;
(statearr_4637_4703[(2)] = null);

(statearr_4637_4703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (28))){
var inst_4552 = (state_4593[(25)]);
var inst_4533 = (state_4593[(21)]);
var inst_4552__$1 = cljs.core.seq.call(null,inst_4533);
var state_4593__$1 = (function (){var statearr_4638 = state_4593;
(statearr_4638[(25)] = inst_4552__$1);

return statearr_4638;
})();
if(inst_4552__$1){
var statearr_4639_4704 = state_4593__$1;
(statearr_4639_4704[(1)] = (33));

} else {
var statearr_4640_4705 = state_4593__$1;
(statearr_4640_4705[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (25))){
var inst_4535 = (state_4593[(20)]);
var inst_4536 = (state_4593[(11)]);
var inst_4538 = (inst_4536 < inst_4535);
var inst_4539 = inst_4538;
var state_4593__$1 = state_4593;
if(cljs.core.truth_(inst_4539)){
var statearr_4641_4706 = state_4593__$1;
(statearr_4641_4706[(1)] = (27));

} else {
var statearr_4642_4707 = state_4593__$1;
(statearr_4642_4707[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (34))){
var state_4593__$1 = state_4593;
var statearr_4643_4708 = state_4593__$1;
(statearr_4643_4708[(2)] = null);

(statearr_4643_4708[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (17))){
var state_4593__$1 = state_4593;
var statearr_4644_4709 = state_4593__$1;
(statearr_4644_4709[(2)] = null);

(statearr_4644_4709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (3))){
var inst_4591 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4593__$1,inst_4591);
} else {
if((state_val_4594 === (12))){
var inst_4520 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4645_4710 = state_4593__$1;
(statearr_4645_4710[(2)] = inst_4520);

(statearr_4645_4710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (2))){
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4593__$1,(4),ch);
} else {
if((state_val_4594 === (23))){
var state_4593__$1 = state_4593;
var statearr_4646_4711 = state_4593__$1;
(statearr_4646_4711[(2)] = null);

(statearr_4646_4711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (35))){
var inst_4575 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4647_4712 = state_4593__$1;
(statearr_4647_4712[(2)] = inst_4575);

(statearr_4647_4712[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (19))){
var inst_4492 = (state_4593[(7)]);
var inst_4496 = cljs.core.chunk_first.call(null,inst_4492);
var inst_4497 = cljs.core.chunk_rest.call(null,inst_4492);
var inst_4498 = cljs.core.count.call(null,inst_4496);
var inst_4470 = inst_4497;
var inst_4471 = inst_4496;
var inst_4472 = inst_4498;
var inst_4473 = (0);
var state_4593__$1 = (function (){var statearr_4648 = state_4593;
(statearr_4648[(13)] = inst_4473);

(statearr_4648[(15)] = inst_4470);

(statearr_4648[(16)] = inst_4472);

(statearr_4648[(17)] = inst_4471);

return statearr_4648;
})();
var statearr_4649_4713 = state_4593__$1;
(statearr_4649_4713[(2)] = null);

(statearr_4649_4713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (11))){
var inst_4492 = (state_4593[(7)]);
var inst_4470 = (state_4593[(15)]);
var inst_4492__$1 = cljs.core.seq.call(null,inst_4470);
var state_4593__$1 = (function (){var statearr_4650 = state_4593;
(statearr_4650[(7)] = inst_4492__$1);

return statearr_4650;
})();
if(inst_4492__$1){
var statearr_4651_4714 = state_4593__$1;
(statearr_4651_4714[(1)] = (16));

} else {
var statearr_4652_4715 = state_4593__$1;
(statearr_4652_4715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (9))){
var inst_4522 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4653_4716 = state_4593__$1;
(statearr_4653_4716[(2)] = inst_4522);

(statearr_4653_4716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (5))){
var inst_4468 = cljs.core.deref.call(null,cs);
var inst_4469 = cljs.core.seq.call(null,inst_4468);
var inst_4470 = inst_4469;
var inst_4471 = null;
var inst_4472 = (0);
var inst_4473 = (0);
var state_4593__$1 = (function (){var statearr_4654 = state_4593;
(statearr_4654[(13)] = inst_4473);

(statearr_4654[(15)] = inst_4470);

(statearr_4654[(16)] = inst_4472);

(statearr_4654[(17)] = inst_4471);

return statearr_4654;
})();
var statearr_4655_4717 = state_4593__$1;
(statearr_4655_4717[(2)] = null);

(statearr_4655_4717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (14))){
var state_4593__$1 = state_4593;
var statearr_4656_4718 = state_4593__$1;
(statearr_4656_4718[(2)] = null);

(statearr_4656_4718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (45))){
var inst_4583 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4657_4719 = state_4593__$1;
(statearr_4657_4719[(2)] = inst_4583);

(statearr_4657_4719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (26))){
var inst_4525 = (state_4593[(29)]);
var inst_4579 = (state_4593[(2)]);
var inst_4580 = cljs.core.seq.call(null,inst_4525);
var state_4593__$1 = (function (){var statearr_4658 = state_4593;
(statearr_4658[(31)] = inst_4579);

return statearr_4658;
})();
if(inst_4580){
var statearr_4659_4720 = state_4593__$1;
(statearr_4659_4720[(1)] = (42));

} else {
var statearr_4660_4721 = state_4593__$1;
(statearr_4660_4721[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (16))){
var inst_4492 = (state_4593[(7)]);
var inst_4494 = cljs.core.chunked_seq_QMARK_.call(null,inst_4492);
var state_4593__$1 = state_4593;
if(inst_4494){
var statearr_4661_4722 = state_4593__$1;
(statearr_4661_4722[(1)] = (19));

} else {
var statearr_4662_4723 = state_4593__$1;
(statearr_4662_4723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (38))){
var inst_4572 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4663_4724 = state_4593__$1;
(statearr_4663_4724[(2)] = inst_4572);

(statearr_4663_4724[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (30))){
var state_4593__$1 = state_4593;
var statearr_4664_4725 = state_4593__$1;
(statearr_4664_4725[(2)] = null);

(statearr_4664_4725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (10))){
var inst_4473 = (state_4593[(13)]);
var inst_4471 = (state_4593[(17)]);
var inst_4481 = cljs.core._nth.call(null,inst_4471,inst_4473);
var inst_4482 = cljs.core.nth.call(null,inst_4481,(0),null);
var inst_4483 = cljs.core.nth.call(null,inst_4481,(1),null);
var state_4593__$1 = (function (){var statearr_4665 = state_4593;
(statearr_4665[(26)] = inst_4482);

return statearr_4665;
})();
if(cljs.core.truth_(inst_4483)){
var statearr_4666_4726 = state_4593__$1;
(statearr_4666_4726[(1)] = (13));

} else {
var statearr_4667_4727 = state_4593__$1;
(statearr_4667_4727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (18))){
var inst_4518 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4668_4728 = state_4593__$1;
(statearr_4668_4728[(2)] = inst_4518);

(statearr_4668_4728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (42))){
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4593__$1,(45),dchan);
} else {
if((state_val_4594 === (37))){
var inst_4552 = (state_4593[(25)]);
var inst_4461 = (state_4593[(10)]);
var inst_4561 = (state_4593[(23)]);
var inst_4561__$1 = cljs.core.first.call(null,inst_4552);
var inst_4562 = cljs.core.async.put_BANG_.call(null,inst_4561__$1,inst_4461,done);
var state_4593__$1 = (function (){var statearr_4669 = state_4593;
(statearr_4669[(23)] = inst_4561__$1);

return statearr_4669;
})();
if(cljs.core.truth_(inst_4562)){
var statearr_4670_4729 = state_4593__$1;
(statearr_4670_4729[(1)] = (39));

} else {
var statearr_4671_4730 = state_4593__$1;
(statearr_4671_4730[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (8))){
var inst_4473 = (state_4593[(13)]);
var inst_4472 = (state_4593[(16)]);
var inst_4475 = (inst_4473 < inst_4472);
var inst_4476 = inst_4475;
var state_4593__$1 = state_4593;
if(cljs.core.truth_(inst_4476)){
var statearr_4672_4731 = state_4593__$1;
(statearr_4672_4731[(1)] = (10));

} else {
var statearr_4673_4732 = state_4593__$1;
(statearr_4673_4732[(1)] = (11));

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
}
}
}
}
}
}
});})(c__1705__auto___4678,cs,m,dchan,dctr,done))
;
return ((function (switch__1690__auto__,c__1705__auto___4678,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1691__auto__ = null;
var cljs$core$async$mult_$_state_machine__1691__auto____0 = (function (){
var statearr_4674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4674[(0)] = cljs$core$async$mult_$_state_machine__1691__auto__);

(statearr_4674[(1)] = (1));

return statearr_4674;
});
var cljs$core$async$mult_$_state_machine__1691__auto____1 = (function (state_4593){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4675){if((e4675 instanceof Object)){
var ex__1694__auto__ = e4675;
var statearr_4676_4733 = state_4593;
(statearr_4676_4733[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4734 = state_4593;
state_4593 = G__4734;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1691__auto__ = function(state_4593){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1691__auto____1.call(this,state_4593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1691__auto____0;
cljs$core$async$mult_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1691__auto____1;
return cljs$core$async$mult_$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4678,cs,m,dchan,dctr,done))
})();
var state__1707__auto__ = (function (){var statearr_4677 = f__1706__auto__.call(null);
(statearr_4677[(6)] = c__1705__auto___4678);

return statearr_4677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4678,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__4736 = arguments.length;
switch (G__4736) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4748 = arguments.length;
var i__4500__auto___4749 = (0);
while(true){
if((i__4500__auto___4749 < len__4499__auto___4748)){
args__4502__auto__.push((arguments[i__4500__auto___4749]));

var G__4750 = (i__4500__auto___4749 + (1));
i__4500__auto___4749 = G__4750;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4742){
var map__4743 = p__4742;
var map__4743__$1 = ((((!((map__4743 == null)))?(((((map__4743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4743):map__4743);
var opts = map__4743__$1;
var statearr_4745_4751 = state;
(statearr_4745_4751[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4743,map__4743__$1,opts){
return (function (val){
var statearr_4746_4752 = state;
(statearr_4746_4752[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4743,map__4743__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4747_4753 = state;
(statearr_4747_4753[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4738){
var G__4739 = cljs.core.first.call(null,seq4738);
var seq4738__$1 = cljs.core.next.call(null,seq4738);
var G__4740 = cljs.core.first.call(null,seq4738__$1);
var seq4738__$2 = cljs.core.next.call(null,seq4738__$1);
var G__4741 = cljs.core.first.call(null,seq4738__$2);
var seq4738__$3 = cljs.core.next.call(null,seq4738__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4739,G__4740,G__4741,seq4738__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4754 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4755){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4755 = meta4755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4756,meta4755__$1){
var self__ = this;
var _4756__$1 = this;
return (new cljs.core.async.t_cljs$core$async4754(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4755__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4756){
var self__ = this;
var _4756__$1 = this;
return self__.meta4755;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4755","meta4755",133163037,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4754";

cljs.core.async.t_cljs$core$async4754.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4754");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4754.
 */
cljs.core.async.__GT_t_cljs$core$async4754 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4754(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4755){
return (new cljs.core.async.t_cljs$core$async4754(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4755));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4754(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1705__auto___4918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4858){
var state_val_4859 = (state_4858[(1)]);
if((state_val_4859 === (7))){
var inst_4773 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4860_4919 = state_4858__$1;
(statearr_4860_4919[(2)] = inst_4773);

(statearr_4860_4919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (20))){
var inst_4785 = (state_4858[(7)]);
var state_4858__$1 = state_4858;
var statearr_4861_4920 = state_4858__$1;
(statearr_4861_4920[(2)] = inst_4785);

(statearr_4861_4920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (27))){
var state_4858__$1 = state_4858;
var statearr_4862_4921 = state_4858__$1;
(statearr_4862_4921[(2)] = null);

(statearr_4862_4921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (1))){
var inst_4760 = (state_4858[(8)]);
var inst_4760__$1 = calc_state.call(null);
var inst_4762 = (inst_4760__$1 == null);
var inst_4763 = cljs.core.not.call(null,inst_4762);
var state_4858__$1 = (function (){var statearr_4863 = state_4858;
(statearr_4863[(8)] = inst_4760__$1);

return statearr_4863;
})();
if(inst_4763){
var statearr_4864_4922 = state_4858__$1;
(statearr_4864_4922[(1)] = (2));

} else {
var statearr_4865_4923 = state_4858__$1;
(statearr_4865_4923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (24))){
var inst_4832 = (state_4858[(9)]);
var inst_4818 = (state_4858[(10)]);
var inst_4809 = (state_4858[(11)]);
var inst_4832__$1 = inst_4809.call(null,inst_4818);
var state_4858__$1 = (function (){var statearr_4866 = state_4858;
(statearr_4866[(9)] = inst_4832__$1);

return statearr_4866;
})();
if(cljs.core.truth_(inst_4832__$1)){
var statearr_4867_4924 = state_4858__$1;
(statearr_4867_4924[(1)] = (29));

} else {
var statearr_4868_4925 = state_4858__$1;
(statearr_4868_4925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (4))){
var inst_4776 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4776)){
var statearr_4869_4926 = state_4858__$1;
(statearr_4869_4926[(1)] = (8));

} else {
var statearr_4870_4927 = state_4858__$1;
(statearr_4870_4927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (15))){
var inst_4803 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4803)){
var statearr_4871_4928 = state_4858__$1;
(statearr_4871_4928[(1)] = (19));

} else {
var statearr_4872_4929 = state_4858__$1;
(statearr_4872_4929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (21))){
var inst_4808 = (state_4858[(12)]);
var inst_4808__$1 = (state_4858[(2)]);
var inst_4809 = cljs.core.get.call(null,inst_4808__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4810 = cljs.core.get.call(null,inst_4808__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4811 = cljs.core.get.call(null,inst_4808__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4858__$1 = (function (){var statearr_4873 = state_4858;
(statearr_4873[(13)] = inst_4810);

(statearr_4873[(12)] = inst_4808__$1);

(statearr_4873[(11)] = inst_4809);

return statearr_4873;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4858__$1,(22),inst_4811);
} else {
if((state_val_4859 === (31))){
var inst_4840 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4840)){
var statearr_4874_4930 = state_4858__$1;
(statearr_4874_4930[(1)] = (32));

} else {
var statearr_4875_4931 = state_4858__$1;
(statearr_4875_4931[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (32))){
var inst_4817 = (state_4858[(14)]);
var state_4858__$1 = state_4858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4858__$1,(35),out,inst_4817);
} else {
if((state_val_4859 === (33))){
var inst_4808 = (state_4858[(12)]);
var inst_4785 = inst_4808;
var state_4858__$1 = (function (){var statearr_4876 = state_4858;
(statearr_4876[(7)] = inst_4785);

return statearr_4876;
})();
var statearr_4877_4932 = state_4858__$1;
(statearr_4877_4932[(2)] = null);

(statearr_4877_4932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (13))){
var inst_4785 = (state_4858[(7)]);
var inst_4792 = inst_4785.cljs$lang$protocol_mask$partition0$;
var inst_4793 = (inst_4792 & (64));
var inst_4794 = inst_4785.cljs$core$ISeq$;
var inst_4795 = (cljs.core.PROTOCOL_SENTINEL === inst_4794);
var inst_4796 = ((inst_4793) || (inst_4795));
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4796)){
var statearr_4878_4933 = state_4858__$1;
(statearr_4878_4933[(1)] = (16));

} else {
var statearr_4879_4934 = state_4858__$1;
(statearr_4879_4934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (22))){
var inst_4817 = (state_4858[(14)]);
var inst_4818 = (state_4858[(10)]);
var inst_4816 = (state_4858[(2)]);
var inst_4817__$1 = cljs.core.nth.call(null,inst_4816,(0),null);
var inst_4818__$1 = cljs.core.nth.call(null,inst_4816,(1),null);
var inst_4819 = (inst_4817__$1 == null);
var inst_4820 = cljs.core._EQ_.call(null,inst_4818__$1,change);
var inst_4821 = ((inst_4819) || (inst_4820));
var state_4858__$1 = (function (){var statearr_4880 = state_4858;
(statearr_4880[(14)] = inst_4817__$1);

(statearr_4880[(10)] = inst_4818__$1);

return statearr_4880;
})();
if(cljs.core.truth_(inst_4821)){
var statearr_4881_4935 = state_4858__$1;
(statearr_4881_4935[(1)] = (23));

} else {
var statearr_4882_4936 = state_4858__$1;
(statearr_4882_4936[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (36))){
var inst_4808 = (state_4858[(12)]);
var inst_4785 = inst_4808;
var state_4858__$1 = (function (){var statearr_4883 = state_4858;
(statearr_4883[(7)] = inst_4785);

return statearr_4883;
})();
var statearr_4884_4937 = state_4858__$1;
(statearr_4884_4937[(2)] = null);

(statearr_4884_4937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (29))){
var inst_4832 = (state_4858[(9)]);
var state_4858__$1 = state_4858;
var statearr_4885_4938 = state_4858__$1;
(statearr_4885_4938[(2)] = inst_4832);

(statearr_4885_4938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (6))){
var state_4858__$1 = state_4858;
var statearr_4886_4939 = state_4858__$1;
(statearr_4886_4939[(2)] = false);

(statearr_4886_4939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (28))){
var inst_4828 = (state_4858[(2)]);
var inst_4829 = calc_state.call(null);
var inst_4785 = inst_4829;
var state_4858__$1 = (function (){var statearr_4887 = state_4858;
(statearr_4887[(7)] = inst_4785);

(statearr_4887[(15)] = inst_4828);

return statearr_4887;
})();
var statearr_4888_4940 = state_4858__$1;
(statearr_4888_4940[(2)] = null);

(statearr_4888_4940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (25))){
var inst_4854 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4889_4941 = state_4858__$1;
(statearr_4889_4941[(2)] = inst_4854);

(statearr_4889_4941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (34))){
var inst_4852 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4890_4942 = state_4858__$1;
(statearr_4890_4942[(2)] = inst_4852);

(statearr_4890_4942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (17))){
var state_4858__$1 = state_4858;
var statearr_4891_4943 = state_4858__$1;
(statearr_4891_4943[(2)] = false);

(statearr_4891_4943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (3))){
var state_4858__$1 = state_4858;
var statearr_4892_4944 = state_4858__$1;
(statearr_4892_4944[(2)] = false);

(statearr_4892_4944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (12))){
var inst_4856 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4858__$1,inst_4856);
} else {
if((state_val_4859 === (2))){
var inst_4760 = (state_4858[(8)]);
var inst_4765 = inst_4760.cljs$lang$protocol_mask$partition0$;
var inst_4766 = (inst_4765 & (64));
var inst_4767 = inst_4760.cljs$core$ISeq$;
var inst_4768 = (cljs.core.PROTOCOL_SENTINEL === inst_4767);
var inst_4769 = ((inst_4766) || (inst_4768));
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4769)){
var statearr_4893_4945 = state_4858__$1;
(statearr_4893_4945[(1)] = (5));

} else {
var statearr_4894_4946 = state_4858__$1;
(statearr_4894_4946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (23))){
var inst_4817 = (state_4858[(14)]);
var inst_4823 = (inst_4817 == null);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4823)){
var statearr_4895_4947 = state_4858__$1;
(statearr_4895_4947[(1)] = (26));

} else {
var statearr_4896_4948 = state_4858__$1;
(statearr_4896_4948[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (35))){
var inst_4843 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4843)){
var statearr_4897_4949 = state_4858__$1;
(statearr_4897_4949[(1)] = (36));

} else {
var statearr_4898_4950 = state_4858__$1;
(statearr_4898_4950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (19))){
var inst_4785 = (state_4858[(7)]);
var inst_4805 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4785);
var state_4858__$1 = state_4858;
var statearr_4899_4951 = state_4858__$1;
(statearr_4899_4951[(2)] = inst_4805);

(statearr_4899_4951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (11))){
var inst_4785 = (state_4858[(7)]);
var inst_4789 = (inst_4785 == null);
var inst_4790 = cljs.core.not.call(null,inst_4789);
var state_4858__$1 = state_4858;
if(inst_4790){
var statearr_4900_4952 = state_4858__$1;
(statearr_4900_4952[(1)] = (13));

} else {
var statearr_4901_4953 = state_4858__$1;
(statearr_4901_4953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (9))){
var inst_4760 = (state_4858[(8)]);
var state_4858__$1 = state_4858;
var statearr_4902_4954 = state_4858__$1;
(statearr_4902_4954[(2)] = inst_4760);

(statearr_4902_4954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (5))){
var state_4858__$1 = state_4858;
var statearr_4903_4955 = state_4858__$1;
(statearr_4903_4955[(2)] = true);

(statearr_4903_4955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (14))){
var state_4858__$1 = state_4858;
var statearr_4904_4956 = state_4858__$1;
(statearr_4904_4956[(2)] = false);

(statearr_4904_4956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (26))){
var inst_4818 = (state_4858[(10)]);
var inst_4825 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4818);
var state_4858__$1 = state_4858;
var statearr_4905_4957 = state_4858__$1;
(statearr_4905_4957[(2)] = inst_4825);

(statearr_4905_4957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (16))){
var state_4858__$1 = state_4858;
var statearr_4906_4958 = state_4858__$1;
(statearr_4906_4958[(2)] = true);

(statearr_4906_4958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (38))){
var inst_4848 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4907_4959 = state_4858__$1;
(statearr_4907_4959[(2)] = inst_4848);

(statearr_4907_4959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (30))){
var inst_4810 = (state_4858[(13)]);
var inst_4818 = (state_4858[(10)]);
var inst_4809 = (state_4858[(11)]);
var inst_4835 = cljs.core.empty_QMARK_.call(null,inst_4809);
var inst_4836 = inst_4810.call(null,inst_4818);
var inst_4837 = cljs.core.not.call(null,inst_4836);
var inst_4838 = ((inst_4835) && (inst_4837));
var state_4858__$1 = state_4858;
var statearr_4908_4960 = state_4858__$1;
(statearr_4908_4960[(2)] = inst_4838);

(statearr_4908_4960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (10))){
var inst_4760 = (state_4858[(8)]);
var inst_4781 = (state_4858[(2)]);
var inst_4782 = cljs.core.get.call(null,inst_4781,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4783 = cljs.core.get.call(null,inst_4781,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4784 = cljs.core.get.call(null,inst_4781,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4785 = inst_4760;
var state_4858__$1 = (function (){var statearr_4909 = state_4858;
(statearr_4909[(16)] = inst_4782);

(statearr_4909[(7)] = inst_4785);

(statearr_4909[(17)] = inst_4783);

(statearr_4909[(18)] = inst_4784);

return statearr_4909;
})();
var statearr_4910_4961 = state_4858__$1;
(statearr_4910_4961[(2)] = null);

(statearr_4910_4961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (18))){
var inst_4800 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4911_4962 = state_4858__$1;
(statearr_4911_4962[(2)] = inst_4800);

(statearr_4911_4962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (37))){
var state_4858__$1 = state_4858;
var statearr_4912_4963 = state_4858__$1;
(statearr_4912_4963[(2)] = null);

(statearr_4912_4963[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (8))){
var inst_4760 = (state_4858[(8)]);
var inst_4778 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4760);
var state_4858__$1 = state_4858;
var statearr_4913_4964 = state_4858__$1;
(statearr_4913_4964[(2)] = inst_4778);

(statearr_4913_4964[(1)] = (10));


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
});})(c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1690__auto__,c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1691__auto__ = null;
var cljs$core$async$mix_$_state_machine__1691__auto____0 = (function (){
var statearr_4914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4914[(0)] = cljs$core$async$mix_$_state_machine__1691__auto__);

(statearr_4914[(1)] = (1));

return statearr_4914;
});
var cljs$core$async$mix_$_state_machine__1691__auto____1 = (function (state_4858){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_4858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e4915){if((e4915 instanceof Object)){
var ex__1694__auto__ = e4915;
var statearr_4916_4965 = state_4858;
(statearr_4916_4965[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4966 = state_4858;
state_4858 = G__4966;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1691__auto__ = function(state_4858){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1691__auto____1.call(this,state_4858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1691__auto____0;
cljs$core$async$mix_$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1691__auto____1;
return cljs$core$async$mix_$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1707__auto__ = (function (){var statearr_4917 = f__1706__auto__.call(null);
(statearr_4917[(6)] = c__1705__auto___4918);

return statearr_4917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___4918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4968 = arguments.length;
switch (G__4968) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4972 = arguments.length;
switch (G__4972) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__4970_SHARP_){
if(cljs.core.truth_(p1__4970_SHARP_.call(null,topic))){
return p1__4970_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4970_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4973 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4974){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4974 = meta4974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4975,meta4974__$1){
var self__ = this;
var _4975__$1 = this;
return (new cljs.core.async.t_cljs$core$async4973(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4974__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4975){
var self__ = this;
var _4975__$1 = this;
return self__.meta4974;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4974","meta4974",2126466040,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4973";

cljs.core.async.t_cljs$core$async4973.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4973");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4973.
 */
cljs.core.async.__GT_t_cljs$core$async4973 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4973(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4974){
return (new cljs.core.async.t_cljs$core$async4973(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4974));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4973(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1705__auto___5093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5093,mults,ensure_mult,p){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5093,mults,ensure_mult,p){
return (function (state_5047){
var state_val_5048 = (state_5047[(1)]);
if((state_val_5048 === (7))){
var inst_5043 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5049_5094 = state_5047__$1;
(statearr_5049_5094[(2)] = inst_5043);

(statearr_5049_5094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (20))){
var state_5047__$1 = state_5047;
var statearr_5050_5095 = state_5047__$1;
(statearr_5050_5095[(2)] = null);

(statearr_5050_5095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (1))){
var state_5047__$1 = state_5047;
var statearr_5051_5096 = state_5047__$1;
(statearr_5051_5096[(2)] = null);

(statearr_5051_5096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (24))){
var inst_5026 = (state_5047[(7)]);
var inst_5035 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5026);
var state_5047__$1 = state_5047;
var statearr_5052_5097 = state_5047__$1;
(statearr_5052_5097[(2)] = inst_5035);

(statearr_5052_5097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (4))){
var inst_4978 = (state_5047[(8)]);
var inst_4978__$1 = (state_5047[(2)]);
var inst_4979 = (inst_4978__$1 == null);
var state_5047__$1 = (function (){var statearr_5053 = state_5047;
(statearr_5053[(8)] = inst_4978__$1);

return statearr_5053;
})();
if(cljs.core.truth_(inst_4979)){
var statearr_5054_5098 = state_5047__$1;
(statearr_5054_5098[(1)] = (5));

} else {
var statearr_5055_5099 = state_5047__$1;
(statearr_5055_5099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (15))){
var inst_5020 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5056_5100 = state_5047__$1;
(statearr_5056_5100[(2)] = inst_5020);

(statearr_5056_5100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (21))){
var inst_5040 = (state_5047[(2)]);
var state_5047__$1 = (function (){var statearr_5057 = state_5047;
(statearr_5057[(9)] = inst_5040);

return statearr_5057;
})();
var statearr_5058_5101 = state_5047__$1;
(statearr_5058_5101[(2)] = null);

(statearr_5058_5101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (13))){
var inst_5002 = (state_5047[(10)]);
var inst_5004 = cljs.core.chunked_seq_QMARK_.call(null,inst_5002);
var state_5047__$1 = state_5047;
if(inst_5004){
var statearr_5059_5102 = state_5047__$1;
(statearr_5059_5102[(1)] = (16));

} else {
var statearr_5060_5103 = state_5047__$1;
(statearr_5060_5103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (22))){
var inst_5032 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
if(cljs.core.truth_(inst_5032)){
var statearr_5061_5104 = state_5047__$1;
(statearr_5061_5104[(1)] = (23));

} else {
var statearr_5062_5105 = state_5047__$1;
(statearr_5062_5105[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (6))){
var inst_5028 = (state_5047[(11)]);
var inst_4978 = (state_5047[(8)]);
var inst_5026 = (state_5047[(7)]);
var inst_5026__$1 = topic_fn.call(null,inst_4978);
var inst_5027 = cljs.core.deref.call(null,mults);
var inst_5028__$1 = cljs.core.get.call(null,inst_5027,inst_5026__$1);
var state_5047__$1 = (function (){var statearr_5063 = state_5047;
(statearr_5063[(11)] = inst_5028__$1);

(statearr_5063[(7)] = inst_5026__$1);

return statearr_5063;
})();
if(cljs.core.truth_(inst_5028__$1)){
var statearr_5064_5106 = state_5047__$1;
(statearr_5064_5106[(1)] = (19));

} else {
var statearr_5065_5107 = state_5047__$1;
(statearr_5065_5107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (25))){
var inst_5037 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5066_5108 = state_5047__$1;
(statearr_5066_5108[(2)] = inst_5037);

(statearr_5066_5108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (17))){
var inst_5002 = (state_5047[(10)]);
var inst_5011 = cljs.core.first.call(null,inst_5002);
var inst_5012 = cljs.core.async.muxch_STAR_.call(null,inst_5011);
var inst_5013 = cljs.core.async.close_BANG_.call(null,inst_5012);
var inst_5014 = cljs.core.next.call(null,inst_5002);
var inst_4988 = inst_5014;
var inst_4989 = null;
var inst_4990 = (0);
var inst_4991 = (0);
var state_5047__$1 = (function (){var statearr_5067 = state_5047;
(statearr_5067[(12)] = inst_4988);

(statearr_5067[(13)] = inst_4991);

(statearr_5067[(14)] = inst_5013);

(statearr_5067[(15)] = inst_4989);

(statearr_5067[(16)] = inst_4990);

return statearr_5067;
})();
var statearr_5068_5109 = state_5047__$1;
(statearr_5068_5109[(2)] = null);

(statearr_5068_5109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (3))){
var inst_5045 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5047__$1,inst_5045);
} else {
if((state_val_5048 === (12))){
var inst_5022 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5069_5110 = state_5047__$1;
(statearr_5069_5110[(2)] = inst_5022);

(statearr_5069_5110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (2))){
var state_5047__$1 = state_5047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5047__$1,(4),ch);
} else {
if((state_val_5048 === (23))){
var state_5047__$1 = state_5047;
var statearr_5070_5111 = state_5047__$1;
(statearr_5070_5111[(2)] = null);

(statearr_5070_5111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (19))){
var inst_5028 = (state_5047[(11)]);
var inst_4978 = (state_5047[(8)]);
var inst_5030 = cljs.core.async.muxch_STAR_.call(null,inst_5028);
var state_5047__$1 = state_5047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5047__$1,(22),inst_5030,inst_4978);
} else {
if((state_val_5048 === (11))){
var inst_4988 = (state_5047[(12)]);
var inst_5002 = (state_5047[(10)]);
var inst_5002__$1 = cljs.core.seq.call(null,inst_4988);
var state_5047__$1 = (function (){var statearr_5071 = state_5047;
(statearr_5071[(10)] = inst_5002__$1);

return statearr_5071;
})();
if(inst_5002__$1){
var statearr_5072_5112 = state_5047__$1;
(statearr_5072_5112[(1)] = (13));

} else {
var statearr_5073_5113 = state_5047__$1;
(statearr_5073_5113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (9))){
var inst_5024 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5074_5114 = state_5047__$1;
(statearr_5074_5114[(2)] = inst_5024);

(statearr_5074_5114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (5))){
var inst_4985 = cljs.core.deref.call(null,mults);
var inst_4986 = cljs.core.vals.call(null,inst_4985);
var inst_4987 = cljs.core.seq.call(null,inst_4986);
var inst_4988 = inst_4987;
var inst_4989 = null;
var inst_4990 = (0);
var inst_4991 = (0);
var state_5047__$1 = (function (){var statearr_5075 = state_5047;
(statearr_5075[(12)] = inst_4988);

(statearr_5075[(13)] = inst_4991);

(statearr_5075[(15)] = inst_4989);

(statearr_5075[(16)] = inst_4990);

return statearr_5075;
})();
var statearr_5076_5115 = state_5047__$1;
(statearr_5076_5115[(2)] = null);

(statearr_5076_5115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (14))){
var state_5047__$1 = state_5047;
var statearr_5080_5116 = state_5047__$1;
(statearr_5080_5116[(2)] = null);

(statearr_5080_5116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (16))){
var inst_5002 = (state_5047[(10)]);
var inst_5006 = cljs.core.chunk_first.call(null,inst_5002);
var inst_5007 = cljs.core.chunk_rest.call(null,inst_5002);
var inst_5008 = cljs.core.count.call(null,inst_5006);
var inst_4988 = inst_5007;
var inst_4989 = inst_5006;
var inst_4990 = inst_5008;
var inst_4991 = (0);
var state_5047__$1 = (function (){var statearr_5081 = state_5047;
(statearr_5081[(12)] = inst_4988);

(statearr_5081[(13)] = inst_4991);

(statearr_5081[(15)] = inst_4989);

(statearr_5081[(16)] = inst_4990);

return statearr_5081;
})();
var statearr_5082_5117 = state_5047__$1;
(statearr_5082_5117[(2)] = null);

(statearr_5082_5117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (10))){
var inst_4988 = (state_5047[(12)]);
var inst_4991 = (state_5047[(13)]);
var inst_4989 = (state_5047[(15)]);
var inst_4990 = (state_5047[(16)]);
var inst_4996 = cljs.core._nth.call(null,inst_4989,inst_4991);
var inst_4997 = cljs.core.async.muxch_STAR_.call(null,inst_4996);
var inst_4998 = cljs.core.async.close_BANG_.call(null,inst_4997);
var inst_4999 = (inst_4991 + (1));
var tmp5077 = inst_4988;
var tmp5078 = inst_4989;
var tmp5079 = inst_4990;
var inst_4988__$1 = tmp5077;
var inst_4989__$1 = tmp5078;
var inst_4990__$1 = tmp5079;
var inst_4991__$1 = inst_4999;
var state_5047__$1 = (function (){var statearr_5083 = state_5047;
(statearr_5083[(12)] = inst_4988__$1);

(statearr_5083[(13)] = inst_4991__$1);

(statearr_5083[(17)] = inst_4998);

(statearr_5083[(15)] = inst_4989__$1);

(statearr_5083[(16)] = inst_4990__$1);

return statearr_5083;
})();
var statearr_5084_5118 = state_5047__$1;
(statearr_5084_5118[(2)] = null);

(statearr_5084_5118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (18))){
var inst_5017 = (state_5047[(2)]);
var state_5047__$1 = state_5047;
var statearr_5085_5119 = state_5047__$1;
(statearr_5085_5119[(2)] = inst_5017);

(statearr_5085_5119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5048 === (8))){
var inst_4991 = (state_5047[(13)]);
var inst_4990 = (state_5047[(16)]);
var inst_4993 = (inst_4991 < inst_4990);
var inst_4994 = inst_4993;
var state_5047__$1 = state_5047;
if(cljs.core.truth_(inst_4994)){
var statearr_5086_5120 = state_5047__$1;
(statearr_5086_5120[(1)] = (10));

} else {
var statearr_5087_5121 = state_5047__$1;
(statearr_5087_5121[(1)] = (11));

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
});})(c__1705__auto___5093,mults,ensure_mult,p))
;
return ((function (switch__1690__auto__,c__1705__auto___5093,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5088[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5088[(1)] = (1));

return statearr_5088;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5047){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5089){if((e5089 instanceof Object)){
var ex__1694__auto__ = e5089;
var statearr_5090_5122 = state_5047;
(statearr_5090_5122[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5123 = state_5047;
state_5047 = G__5123;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5093,mults,ensure_mult,p))
})();
var state__1707__auto__ = (function (){var statearr_5091 = f__1706__auto__.call(null);
(statearr_5091[(6)] = c__1705__auto___5093);

return statearr_5091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5093,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__5125 = arguments.length;
switch (G__5125) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__5128 = arguments.length;
switch (G__5128) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__5131 = arguments.length;
switch (G__5131) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__1705__auto___5198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5170){
var state_val_5171 = (state_5170[(1)]);
if((state_val_5171 === (7))){
var state_5170__$1 = state_5170;
var statearr_5172_5199 = state_5170__$1;
(statearr_5172_5199[(2)] = null);

(statearr_5172_5199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (1))){
var state_5170__$1 = state_5170;
var statearr_5173_5200 = state_5170__$1;
(statearr_5173_5200[(2)] = null);

(statearr_5173_5200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (4))){
var inst_5134 = (state_5170[(7)]);
var inst_5136 = (inst_5134 < cnt);
var state_5170__$1 = state_5170;
if(cljs.core.truth_(inst_5136)){
var statearr_5174_5201 = state_5170__$1;
(statearr_5174_5201[(1)] = (6));

} else {
var statearr_5175_5202 = state_5170__$1;
(statearr_5175_5202[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (15))){
var inst_5166 = (state_5170[(2)]);
var state_5170__$1 = state_5170;
var statearr_5176_5203 = state_5170__$1;
(statearr_5176_5203[(2)] = inst_5166);

(statearr_5176_5203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (13))){
var inst_5159 = cljs.core.async.close_BANG_.call(null,out);
var state_5170__$1 = state_5170;
var statearr_5177_5204 = state_5170__$1;
(statearr_5177_5204[(2)] = inst_5159);

(statearr_5177_5204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (6))){
var state_5170__$1 = state_5170;
var statearr_5178_5205 = state_5170__$1;
(statearr_5178_5205[(2)] = null);

(statearr_5178_5205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (3))){
var inst_5168 = (state_5170[(2)]);
var state_5170__$1 = state_5170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5170__$1,inst_5168);
} else {
if((state_val_5171 === (12))){
var inst_5156 = (state_5170[(8)]);
var inst_5156__$1 = (state_5170[(2)]);
var inst_5157 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5156__$1);
var state_5170__$1 = (function (){var statearr_5179 = state_5170;
(statearr_5179[(8)] = inst_5156__$1);

return statearr_5179;
})();
if(cljs.core.truth_(inst_5157)){
var statearr_5180_5206 = state_5170__$1;
(statearr_5180_5206[(1)] = (13));

} else {
var statearr_5181_5207 = state_5170__$1;
(statearr_5181_5207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (2))){
var inst_5133 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5134 = (0);
var state_5170__$1 = (function (){var statearr_5182 = state_5170;
(statearr_5182[(9)] = inst_5133);

(statearr_5182[(7)] = inst_5134);

return statearr_5182;
})();
var statearr_5183_5208 = state_5170__$1;
(statearr_5183_5208[(2)] = null);

(statearr_5183_5208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (11))){
var inst_5134 = (state_5170[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5170,(10),Object,null,(9));
var inst_5143 = chs__$1.call(null,inst_5134);
var inst_5144 = done.call(null,inst_5134);
var inst_5145 = cljs.core.async.take_BANG_.call(null,inst_5143,inst_5144);
var state_5170__$1 = state_5170;
var statearr_5184_5209 = state_5170__$1;
(statearr_5184_5209[(2)] = inst_5145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5170__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (9))){
var inst_5134 = (state_5170[(7)]);
var inst_5147 = (state_5170[(2)]);
var inst_5148 = (inst_5134 + (1));
var inst_5134__$1 = inst_5148;
var state_5170__$1 = (function (){var statearr_5185 = state_5170;
(statearr_5185[(10)] = inst_5147);

(statearr_5185[(7)] = inst_5134__$1);

return statearr_5185;
})();
var statearr_5186_5210 = state_5170__$1;
(statearr_5186_5210[(2)] = null);

(statearr_5186_5210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (5))){
var inst_5154 = (state_5170[(2)]);
var state_5170__$1 = (function (){var statearr_5187 = state_5170;
(statearr_5187[(11)] = inst_5154);

return statearr_5187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5170__$1,(12),dchan);
} else {
if((state_val_5171 === (14))){
var inst_5156 = (state_5170[(8)]);
var inst_5161 = cljs.core.apply.call(null,f,inst_5156);
var state_5170__$1 = state_5170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5170__$1,(16),out,inst_5161);
} else {
if((state_val_5171 === (16))){
var inst_5163 = (state_5170[(2)]);
var state_5170__$1 = (function (){var statearr_5188 = state_5170;
(statearr_5188[(12)] = inst_5163);

return statearr_5188;
})();
var statearr_5189_5211 = state_5170__$1;
(statearr_5189_5211[(2)] = null);

(statearr_5189_5211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (10))){
var inst_5138 = (state_5170[(2)]);
var inst_5139 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5170__$1 = (function (){var statearr_5190 = state_5170;
(statearr_5190[(13)] = inst_5138);

return statearr_5190;
})();
var statearr_5191_5212 = state_5170__$1;
(statearr_5191_5212[(2)] = inst_5139);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5170__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5171 === (8))){
var inst_5152 = (state_5170[(2)]);
var state_5170__$1 = state_5170;
var statearr_5192_5213 = state_5170__$1;
(statearr_5192_5213[(2)] = inst_5152);

(statearr_5192_5213[(1)] = (5));


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
}
}
}
});})(c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1690__auto__,c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5193[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5193[(1)] = (1));

return statearr_5193;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5170){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5194){if((e5194 instanceof Object)){
var ex__1694__auto__ = e5194;
var statearr_5195_5214 = state_5170;
(statearr_5195_5214[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5215 = state_5170;
state_5170 = G__5215;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1707__auto__ = (function (){var statearr_5196 = f__1706__auto__.call(null);
(statearr_5196[(6)] = c__1705__auto___5198);

return statearr_5196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5198,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5218 = arguments.length;
switch (G__5218) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5272,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5272,out){
return (function (state_5250){
var state_val_5251 = (state_5250[(1)]);
if((state_val_5251 === (7))){
var inst_5230 = (state_5250[(7)]);
var inst_5229 = (state_5250[(8)]);
var inst_5229__$1 = (state_5250[(2)]);
var inst_5230__$1 = cljs.core.nth.call(null,inst_5229__$1,(0),null);
var inst_5231 = cljs.core.nth.call(null,inst_5229__$1,(1),null);
var inst_5232 = (inst_5230__$1 == null);
var state_5250__$1 = (function (){var statearr_5252 = state_5250;
(statearr_5252[(7)] = inst_5230__$1);

(statearr_5252[(8)] = inst_5229__$1);

(statearr_5252[(9)] = inst_5231);

return statearr_5252;
})();
if(cljs.core.truth_(inst_5232)){
var statearr_5253_5273 = state_5250__$1;
(statearr_5253_5273[(1)] = (8));

} else {
var statearr_5254_5274 = state_5250__$1;
(statearr_5254_5274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (1))){
var inst_5219 = cljs.core.vec.call(null,chs);
var inst_5220 = inst_5219;
var state_5250__$1 = (function (){var statearr_5255 = state_5250;
(statearr_5255[(10)] = inst_5220);

return statearr_5255;
})();
var statearr_5256_5275 = state_5250__$1;
(statearr_5256_5275[(2)] = null);

(statearr_5256_5275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (4))){
var inst_5220 = (state_5250[(10)]);
var state_5250__$1 = state_5250;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5250__$1,(7),inst_5220);
} else {
if((state_val_5251 === (6))){
var inst_5246 = (state_5250[(2)]);
var state_5250__$1 = state_5250;
var statearr_5257_5276 = state_5250__$1;
(statearr_5257_5276[(2)] = inst_5246);

(statearr_5257_5276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (3))){
var inst_5248 = (state_5250[(2)]);
var state_5250__$1 = state_5250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5250__$1,inst_5248);
} else {
if((state_val_5251 === (2))){
var inst_5220 = (state_5250[(10)]);
var inst_5222 = cljs.core.count.call(null,inst_5220);
var inst_5223 = (inst_5222 > (0));
var state_5250__$1 = state_5250;
if(cljs.core.truth_(inst_5223)){
var statearr_5259_5277 = state_5250__$1;
(statearr_5259_5277[(1)] = (4));

} else {
var statearr_5260_5278 = state_5250__$1;
(statearr_5260_5278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (11))){
var inst_5220 = (state_5250[(10)]);
var inst_5239 = (state_5250[(2)]);
var tmp5258 = inst_5220;
var inst_5220__$1 = tmp5258;
var state_5250__$1 = (function (){var statearr_5261 = state_5250;
(statearr_5261[(11)] = inst_5239);

(statearr_5261[(10)] = inst_5220__$1);

return statearr_5261;
})();
var statearr_5262_5279 = state_5250__$1;
(statearr_5262_5279[(2)] = null);

(statearr_5262_5279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (9))){
var inst_5230 = (state_5250[(7)]);
var state_5250__$1 = state_5250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5250__$1,(11),out,inst_5230);
} else {
if((state_val_5251 === (5))){
var inst_5244 = cljs.core.async.close_BANG_.call(null,out);
var state_5250__$1 = state_5250;
var statearr_5263_5280 = state_5250__$1;
(statearr_5263_5280[(2)] = inst_5244);

(statearr_5263_5280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (10))){
var inst_5242 = (state_5250[(2)]);
var state_5250__$1 = state_5250;
var statearr_5264_5281 = state_5250__$1;
(statearr_5264_5281[(2)] = inst_5242);

(statearr_5264_5281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5251 === (8))){
var inst_5230 = (state_5250[(7)]);
var inst_5229 = (state_5250[(8)]);
var inst_5220 = (state_5250[(10)]);
var inst_5231 = (state_5250[(9)]);
var inst_5234 = (function (){var cs = inst_5220;
var vec__5225 = inst_5229;
var v = inst_5230;
var c = inst_5231;
return ((function (cs,vec__5225,v,c,inst_5230,inst_5229,inst_5220,inst_5231,state_val_5251,c__1705__auto___5272,out){
return (function (p1__5216_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5216_SHARP_);
});
;})(cs,vec__5225,v,c,inst_5230,inst_5229,inst_5220,inst_5231,state_val_5251,c__1705__auto___5272,out))
})();
var inst_5235 = cljs.core.filterv.call(null,inst_5234,inst_5220);
var inst_5220__$1 = inst_5235;
var state_5250__$1 = (function (){var statearr_5265 = state_5250;
(statearr_5265[(10)] = inst_5220__$1);

return statearr_5265;
})();
var statearr_5266_5282 = state_5250__$1;
(statearr_5266_5282[(2)] = null);

(statearr_5266_5282[(1)] = (2));


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
});})(c__1705__auto___5272,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5272,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5267[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5267[(1)] = (1));

return statearr_5267;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5250){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5268){if((e5268 instanceof Object)){
var ex__1694__auto__ = e5268;
var statearr_5269_5283 = state_5250;
(statearr_5269_5283[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5284 = state_5250;
state_5250 = G__5284;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5272,out))
})();
var state__1707__auto__ = (function (){var statearr_5270 = f__1706__auto__.call(null);
(statearr_5270[(6)] = c__1705__auto___5272);

return statearr_5270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5272,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5286 = arguments.length;
switch (G__5286) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5331,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5331,out){
return (function (state_5310){
var state_val_5311 = (state_5310[(1)]);
if((state_val_5311 === (7))){
var inst_5292 = (state_5310[(7)]);
var inst_5292__$1 = (state_5310[(2)]);
var inst_5293 = (inst_5292__$1 == null);
var inst_5294 = cljs.core.not.call(null,inst_5293);
var state_5310__$1 = (function (){var statearr_5312 = state_5310;
(statearr_5312[(7)] = inst_5292__$1);

return statearr_5312;
})();
if(inst_5294){
var statearr_5313_5332 = state_5310__$1;
(statearr_5313_5332[(1)] = (8));

} else {
var statearr_5314_5333 = state_5310__$1;
(statearr_5314_5333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (1))){
var inst_5287 = (0);
var state_5310__$1 = (function (){var statearr_5315 = state_5310;
(statearr_5315[(8)] = inst_5287);

return statearr_5315;
})();
var statearr_5316_5334 = state_5310__$1;
(statearr_5316_5334[(2)] = null);

(statearr_5316_5334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (4))){
var state_5310__$1 = state_5310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5310__$1,(7),ch);
} else {
if((state_val_5311 === (6))){
var inst_5305 = (state_5310[(2)]);
var state_5310__$1 = state_5310;
var statearr_5317_5335 = state_5310__$1;
(statearr_5317_5335[(2)] = inst_5305);

(statearr_5317_5335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (3))){
var inst_5307 = (state_5310[(2)]);
var inst_5308 = cljs.core.async.close_BANG_.call(null,out);
var state_5310__$1 = (function (){var statearr_5318 = state_5310;
(statearr_5318[(9)] = inst_5307);

return statearr_5318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5310__$1,inst_5308);
} else {
if((state_val_5311 === (2))){
var inst_5287 = (state_5310[(8)]);
var inst_5289 = (inst_5287 < n);
var state_5310__$1 = state_5310;
if(cljs.core.truth_(inst_5289)){
var statearr_5319_5336 = state_5310__$1;
(statearr_5319_5336[(1)] = (4));

} else {
var statearr_5320_5337 = state_5310__$1;
(statearr_5320_5337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (11))){
var inst_5287 = (state_5310[(8)]);
var inst_5297 = (state_5310[(2)]);
var inst_5298 = (inst_5287 + (1));
var inst_5287__$1 = inst_5298;
var state_5310__$1 = (function (){var statearr_5321 = state_5310;
(statearr_5321[(8)] = inst_5287__$1);

(statearr_5321[(10)] = inst_5297);

return statearr_5321;
})();
var statearr_5322_5338 = state_5310__$1;
(statearr_5322_5338[(2)] = null);

(statearr_5322_5338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (9))){
var state_5310__$1 = state_5310;
var statearr_5323_5339 = state_5310__$1;
(statearr_5323_5339[(2)] = null);

(statearr_5323_5339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (5))){
var state_5310__$1 = state_5310;
var statearr_5324_5340 = state_5310__$1;
(statearr_5324_5340[(2)] = null);

(statearr_5324_5340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (10))){
var inst_5302 = (state_5310[(2)]);
var state_5310__$1 = state_5310;
var statearr_5325_5341 = state_5310__$1;
(statearr_5325_5341[(2)] = inst_5302);

(statearr_5325_5341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5311 === (8))){
var inst_5292 = (state_5310[(7)]);
var state_5310__$1 = state_5310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5310__$1,(11),out,inst_5292);
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
});})(c__1705__auto___5331,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5331,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5326[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5326[(1)] = (1));

return statearr_5326;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5310){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5327){if((e5327 instanceof Object)){
var ex__1694__auto__ = e5327;
var statearr_5328_5342 = state_5310;
(statearr_5328_5342[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5343 = state_5310;
state_5310 = G__5343;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5331,out))
})();
var state__1707__auto__ = (function (){var statearr_5329 = f__1706__auto__.call(null);
(statearr_5329[(6)] = c__1705__auto___5331);

return statearr_5329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5331,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5345 = (function (f,ch,meta5346){
this.f = f;
this.ch = ch;
this.meta5346 = meta5346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5347,meta5346__$1){
var self__ = this;
var _5347__$1 = this;
return (new cljs.core.async.t_cljs$core$async5345(self__.f,self__.ch,meta5346__$1));
});

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5347){
var self__ = this;
var _5347__$1 = this;
return self__.meta5346;
});

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5348 = (function (f,ch,meta5346,_,fn1,meta5349){
this.f = f;
this.ch = ch;
this.meta5346 = meta5346;
this._ = _;
this.fn1 = fn1;
this.meta5349 = meta5349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5350,meta5349__$1){
var self__ = this;
var _5350__$1 = this;
return (new cljs.core.async.t_cljs$core$async5348(self__.f,self__.ch,self__.meta5346,self__._,self__.fn1,meta5349__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5350){
var self__ = this;
var _5350__$1 = this;
return self__.meta5349;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5344_SHARP_){
return f1.call(null,(((p1__5344_SHARP_ == null))?null:self__.f.call(null,p1__5344_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5346","meta5346",1965411980,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5345","cljs.core.async/t_cljs$core$async5345",767008282,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5349","meta5349",-1992155329,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5348";

cljs.core.async.t_cljs$core$async5348.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5348");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5348.
 */
cljs.core.async.__GT_t_cljs$core$async5348 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5348(f__$1,ch__$1,meta5346__$1,___$2,fn1__$1,meta5349){
return (new cljs.core.async.t_cljs$core$async5348(f__$1,ch__$1,meta5346__$1,___$2,fn1__$1,meta5349));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5348(self__.f,self__.ch,self__.meta5346,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5346","meta5346",1965411980,null)], null);
});

cljs.core.async.t_cljs$core$async5345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5345";

cljs.core.async.t_cljs$core$async5345.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5345");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5345.
 */
cljs.core.async.__GT_t_cljs$core$async5345 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5345(f__$1,ch__$1,meta5346){
return (new cljs.core.async.t_cljs$core$async5345(f__$1,ch__$1,meta5346));
});

}

return (new cljs.core.async.t_cljs$core$async5345(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5351 = (function (f,ch,meta5352){
this.f = f;
this.ch = ch;
this.meta5352 = meta5352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5353,meta5352__$1){
var self__ = this;
var _5353__$1 = this;
return (new cljs.core.async.t_cljs$core$async5351(self__.f,self__.ch,meta5352__$1));
});

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5353){
var self__ = this;
var _5353__$1 = this;
return self__.meta5352;
});

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5352","meta5352",1220275282,null)], null);
});

cljs.core.async.t_cljs$core$async5351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5351";

cljs.core.async.t_cljs$core$async5351.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5351");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5351.
 */
cljs.core.async.__GT_t_cljs$core$async5351 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5351(f__$1,ch__$1,meta5352){
return (new cljs.core.async.t_cljs$core$async5351(f__$1,ch__$1,meta5352));
});

}

return (new cljs.core.async.t_cljs$core$async5351(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5354 = (function (p,ch,meta5355){
this.p = p;
this.ch = ch;
this.meta5355 = meta5355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5356,meta5355__$1){
var self__ = this;
var _5356__$1 = this;
return (new cljs.core.async.t_cljs$core$async5354(self__.p,self__.ch,meta5355__$1));
});

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5356){
var self__ = this;
var _5356__$1 = this;
return self__.meta5355;
});

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5355","meta5355",-1815141531,null)], null);
});

cljs.core.async.t_cljs$core$async5354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5354";

cljs.core.async.t_cljs$core$async5354.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5354");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5354.
 */
cljs.core.async.__GT_t_cljs$core$async5354 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5354(p__$1,ch__$1,meta5355){
return (new cljs.core.async.t_cljs$core$async5354(p__$1,ch__$1,meta5355));
});

}

return (new cljs.core.async.t_cljs$core$async5354(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5358 = arguments.length;
switch (G__5358) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5398,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5398,out){
return (function (state_5379){
var state_val_5380 = (state_5379[(1)]);
if((state_val_5380 === (7))){
var inst_5375 = (state_5379[(2)]);
var state_5379__$1 = state_5379;
var statearr_5381_5399 = state_5379__$1;
(statearr_5381_5399[(2)] = inst_5375);

(statearr_5381_5399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (1))){
var state_5379__$1 = state_5379;
var statearr_5382_5400 = state_5379__$1;
(statearr_5382_5400[(2)] = null);

(statearr_5382_5400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (4))){
var inst_5361 = (state_5379[(7)]);
var inst_5361__$1 = (state_5379[(2)]);
var inst_5362 = (inst_5361__$1 == null);
var state_5379__$1 = (function (){var statearr_5383 = state_5379;
(statearr_5383[(7)] = inst_5361__$1);

return statearr_5383;
})();
if(cljs.core.truth_(inst_5362)){
var statearr_5384_5401 = state_5379__$1;
(statearr_5384_5401[(1)] = (5));

} else {
var statearr_5385_5402 = state_5379__$1;
(statearr_5385_5402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (6))){
var inst_5361 = (state_5379[(7)]);
var inst_5366 = p.call(null,inst_5361);
var state_5379__$1 = state_5379;
if(cljs.core.truth_(inst_5366)){
var statearr_5386_5403 = state_5379__$1;
(statearr_5386_5403[(1)] = (8));

} else {
var statearr_5387_5404 = state_5379__$1;
(statearr_5387_5404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (3))){
var inst_5377 = (state_5379[(2)]);
var state_5379__$1 = state_5379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5379__$1,inst_5377);
} else {
if((state_val_5380 === (2))){
var state_5379__$1 = state_5379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5379__$1,(4),ch);
} else {
if((state_val_5380 === (11))){
var inst_5369 = (state_5379[(2)]);
var state_5379__$1 = state_5379;
var statearr_5388_5405 = state_5379__$1;
(statearr_5388_5405[(2)] = inst_5369);

(statearr_5388_5405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (9))){
var state_5379__$1 = state_5379;
var statearr_5389_5406 = state_5379__$1;
(statearr_5389_5406[(2)] = null);

(statearr_5389_5406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (5))){
var inst_5364 = cljs.core.async.close_BANG_.call(null,out);
var state_5379__$1 = state_5379;
var statearr_5390_5407 = state_5379__$1;
(statearr_5390_5407[(2)] = inst_5364);

(statearr_5390_5407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (10))){
var inst_5372 = (state_5379[(2)]);
var state_5379__$1 = (function (){var statearr_5391 = state_5379;
(statearr_5391[(8)] = inst_5372);

return statearr_5391;
})();
var statearr_5392_5408 = state_5379__$1;
(statearr_5392_5408[(2)] = null);

(statearr_5392_5408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5380 === (8))){
var inst_5361 = (state_5379[(7)]);
var state_5379__$1 = state_5379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5379__$1,(11),out,inst_5361);
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
});})(c__1705__auto___5398,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5398,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5393 = [null,null,null,null,null,null,null,null,null];
(statearr_5393[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5393[(1)] = (1));

return statearr_5393;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5379){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5394){if((e5394 instanceof Object)){
var ex__1694__auto__ = e5394;
var statearr_5395_5409 = state_5379;
(statearr_5395_5409[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5410 = state_5379;
state_5379 = G__5410;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5398,out))
})();
var state__1707__auto__ = (function (){var statearr_5396 = f__1706__auto__.call(null);
(statearr_5396[(6)] = c__1705__auto___5398);

return statearr_5396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5398,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5412 = arguments.length;
switch (G__5412) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__1705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto__){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto__){
return (function (state_5475){
var state_val_5476 = (state_5475[(1)]);
if((state_val_5476 === (7))){
var inst_5471 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
var statearr_5477_5515 = state_5475__$1;
(statearr_5477_5515[(2)] = inst_5471);

(statearr_5477_5515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (20))){
var inst_5441 = (state_5475[(7)]);
var inst_5452 = (state_5475[(2)]);
var inst_5453 = cljs.core.next.call(null,inst_5441);
var inst_5427 = inst_5453;
var inst_5428 = null;
var inst_5429 = (0);
var inst_5430 = (0);
var state_5475__$1 = (function (){var statearr_5478 = state_5475;
(statearr_5478[(8)] = inst_5427);

(statearr_5478[(9)] = inst_5429);

(statearr_5478[(10)] = inst_5430);

(statearr_5478[(11)] = inst_5428);

(statearr_5478[(12)] = inst_5452);

return statearr_5478;
})();
var statearr_5479_5516 = state_5475__$1;
(statearr_5479_5516[(2)] = null);

(statearr_5479_5516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (1))){
var state_5475__$1 = state_5475;
var statearr_5480_5517 = state_5475__$1;
(statearr_5480_5517[(2)] = null);

(statearr_5480_5517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (4))){
var inst_5416 = (state_5475[(13)]);
var inst_5416__$1 = (state_5475[(2)]);
var inst_5417 = (inst_5416__$1 == null);
var state_5475__$1 = (function (){var statearr_5481 = state_5475;
(statearr_5481[(13)] = inst_5416__$1);

return statearr_5481;
})();
if(cljs.core.truth_(inst_5417)){
var statearr_5482_5518 = state_5475__$1;
(statearr_5482_5518[(1)] = (5));

} else {
var statearr_5483_5519 = state_5475__$1;
(statearr_5483_5519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (15))){
var state_5475__$1 = state_5475;
var statearr_5487_5520 = state_5475__$1;
(statearr_5487_5520[(2)] = null);

(statearr_5487_5520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (21))){
var state_5475__$1 = state_5475;
var statearr_5488_5521 = state_5475__$1;
(statearr_5488_5521[(2)] = null);

(statearr_5488_5521[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (13))){
var inst_5427 = (state_5475[(8)]);
var inst_5429 = (state_5475[(9)]);
var inst_5430 = (state_5475[(10)]);
var inst_5428 = (state_5475[(11)]);
var inst_5437 = (state_5475[(2)]);
var inst_5438 = (inst_5430 + (1));
var tmp5484 = inst_5427;
var tmp5485 = inst_5429;
var tmp5486 = inst_5428;
var inst_5427__$1 = tmp5484;
var inst_5428__$1 = tmp5486;
var inst_5429__$1 = tmp5485;
var inst_5430__$1 = inst_5438;
var state_5475__$1 = (function (){var statearr_5489 = state_5475;
(statearr_5489[(8)] = inst_5427__$1);

(statearr_5489[(9)] = inst_5429__$1);

(statearr_5489[(10)] = inst_5430__$1);

(statearr_5489[(11)] = inst_5428__$1);

(statearr_5489[(14)] = inst_5437);

return statearr_5489;
})();
var statearr_5490_5522 = state_5475__$1;
(statearr_5490_5522[(2)] = null);

(statearr_5490_5522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (22))){
var state_5475__$1 = state_5475;
var statearr_5491_5523 = state_5475__$1;
(statearr_5491_5523[(2)] = null);

(statearr_5491_5523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (6))){
var inst_5416 = (state_5475[(13)]);
var inst_5425 = f.call(null,inst_5416);
var inst_5426 = cljs.core.seq.call(null,inst_5425);
var inst_5427 = inst_5426;
var inst_5428 = null;
var inst_5429 = (0);
var inst_5430 = (0);
var state_5475__$1 = (function (){var statearr_5492 = state_5475;
(statearr_5492[(8)] = inst_5427);

(statearr_5492[(9)] = inst_5429);

(statearr_5492[(10)] = inst_5430);

(statearr_5492[(11)] = inst_5428);

return statearr_5492;
})();
var statearr_5493_5524 = state_5475__$1;
(statearr_5493_5524[(2)] = null);

(statearr_5493_5524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (17))){
var inst_5441 = (state_5475[(7)]);
var inst_5445 = cljs.core.chunk_first.call(null,inst_5441);
var inst_5446 = cljs.core.chunk_rest.call(null,inst_5441);
var inst_5447 = cljs.core.count.call(null,inst_5445);
var inst_5427 = inst_5446;
var inst_5428 = inst_5445;
var inst_5429 = inst_5447;
var inst_5430 = (0);
var state_5475__$1 = (function (){var statearr_5494 = state_5475;
(statearr_5494[(8)] = inst_5427);

(statearr_5494[(9)] = inst_5429);

(statearr_5494[(10)] = inst_5430);

(statearr_5494[(11)] = inst_5428);

return statearr_5494;
})();
var statearr_5495_5525 = state_5475__$1;
(statearr_5495_5525[(2)] = null);

(statearr_5495_5525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (3))){
var inst_5473 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5475__$1,inst_5473);
} else {
if((state_val_5476 === (12))){
var inst_5461 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
var statearr_5496_5526 = state_5475__$1;
(statearr_5496_5526[(2)] = inst_5461);

(statearr_5496_5526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (2))){
var state_5475__$1 = state_5475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5475__$1,(4),in$);
} else {
if((state_val_5476 === (23))){
var inst_5469 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
var statearr_5497_5527 = state_5475__$1;
(statearr_5497_5527[(2)] = inst_5469);

(statearr_5497_5527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (19))){
var inst_5456 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
var statearr_5498_5528 = state_5475__$1;
(statearr_5498_5528[(2)] = inst_5456);

(statearr_5498_5528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (11))){
var inst_5441 = (state_5475[(7)]);
var inst_5427 = (state_5475[(8)]);
var inst_5441__$1 = cljs.core.seq.call(null,inst_5427);
var state_5475__$1 = (function (){var statearr_5499 = state_5475;
(statearr_5499[(7)] = inst_5441__$1);

return statearr_5499;
})();
if(inst_5441__$1){
var statearr_5500_5529 = state_5475__$1;
(statearr_5500_5529[(1)] = (14));

} else {
var statearr_5501_5530 = state_5475__$1;
(statearr_5501_5530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (9))){
var inst_5463 = (state_5475[(2)]);
var inst_5464 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5475__$1 = (function (){var statearr_5502 = state_5475;
(statearr_5502[(15)] = inst_5463);

return statearr_5502;
})();
if(cljs.core.truth_(inst_5464)){
var statearr_5503_5531 = state_5475__$1;
(statearr_5503_5531[(1)] = (21));

} else {
var statearr_5504_5532 = state_5475__$1;
(statearr_5504_5532[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (5))){
var inst_5419 = cljs.core.async.close_BANG_.call(null,out);
var state_5475__$1 = state_5475;
var statearr_5505_5533 = state_5475__$1;
(statearr_5505_5533[(2)] = inst_5419);

(statearr_5505_5533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (14))){
var inst_5441 = (state_5475[(7)]);
var inst_5443 = cljs.core.chunked_seq_QMARK_.call(null,inst_5441);
var state_5475__$1 = state_5475;
if(inst_5443){
var statearr_5506_5534 = state_5475__$1;
(statearr_5506_5534[(1)] = (17));

} else {
var statearr_5507_5535 = state_5475__$1;
(statearr_5507_5535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (16))){
var inst_5459 = (state_5475[(2)]);
var state_5475__$1 = state_5475;
var statearr_5508_5536 = state_5475__$1;
(statearr_5508_5536[(2)] = inst_5459);

(statearr_5508_5536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5476 === (10))){
var inst_5430 = (state_5475[(10)]);
var inst_5428 = (state_5475[(11)]);
var inst_5435 = cljs.core._nth.call(null,inst_5428,inst_5430);
var state_5475__$1 = state_5475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5475__$1,(13),out,inst_5435);
} else {
if((state_val_5476 === (18))){
var inst_5441 = (state_5475[(7)]);
var inst_5450 = cljs.core.first.call(null,inst_5441);
var state_5475__$1 = state_5475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5475__$1,(20),out,inst_5450);
} else {
if((state_val_5476 === (8))){
var inst_5429 = (state_5475[(9)]);
var inst_5430 = (state_5475[(10)]);
var inst_5432 = (inst_5430 < inst_5429);
var inst_5433 = inst_5432;
var state_5475__$1 = state_5475;
if(cljs.core.truth_(inst_5433)){
var statearr_5509_5537 = state_5475__$1;
(statearr_5509_5537[(1)] = (10));

} else {
var statearr_5510_5538 = state_5475__$1;
(statearr_5510_5538[(1)] = (11));

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
});})(c__1705__auto__))
;
return ((function (switch__1690__auto__,c__1705__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____0 = (function (){
var statearr_5511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5511[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__);

(statearr_5511[(1)] = (1));

return statearr_5511;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____1 = (function (state_5475){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5512){if((e5512 instanceof Object)){
var ex__1694__auto__ = e5512;
var statearr_5513_5539 = state_5475;
(statearr_5513_5539[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5540 = state_5475;
state_5475 = G__5540;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__ = function(state_5475){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____1.call(this,state_5475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1691__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto__))
})();
var state__1707__auto__ = (function (){var statearr_5514 = f__1706__auto__.call(null);
(statearr_5514[(6)] = c__1705__auto__);

return statearr_5514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto__))
);

return c__1705__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5542 = arguments.length;
switch (G__5542) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5545 = arguments.length;
switch (G__5545) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5548 = arguments.length;
switch (G__5548) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5595,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5595,out){
return (function (state_5572){
var state_val_5573 = (state_5572[(1)]);
if((state_val_5573 === (7))){
var inst_5567 = (state_5572[(2)]);
var state_5572__$1 = state_5572;
var statearr_5574_5596 = state_5572__$1;
(statearr_5574_5596[(2)] = inst_5567);

(statearr_5574_5596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (1))){
var inst_5549 = null;
var state_5572__$1 = (function (){var statearr_5575 = state_5572;
(statearr_5575[(7)] = inst_5549);

return statearr_5575;
})();
var statearr_5576_5597 = state_5572__$1;
(statearr_5576_5597[(2)] = null);

(statearr_5576_5597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (4))){
var inst_5552 = (state_5572[(8)]);
var inst_5552__$1 = (state_5572[(2)]);
var inst_5553 = (inst_5552__$1 == null);
var inst_5554 = cljs.core.not.call(null,inst_5553);
var state_5572__$1 = (function (){var statearr_5577 = state_5572;
(statearr_5577[(8)] = inst_5552__$1);

return statearr_5577;
})();
if(inst_5554){
var statearr_5578_5598 = state_5572__$1;
(statearr_5578_5598[(1)] = (5));

} else {
var statearr_5579_5599 = state_5572__$1;
(statearr_5579_5599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (6))){
var state_5572__$1 = state_5572;
var statearr_5580_5600 = state_5572__$1;
(statearr_5580_5600[(2)] = null);

(statearr_5580_5600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (3))){
var inst_5569 = (state_5572[(2)]);
var inst_5570 = cljs.core.async.close_BANG_.call(null,out);
var state_5572__$1 = (function (){var statearr_5581 = state_5572;
(statearr_5581[(9)] = inst_5569);

return statearr_5581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5572__$1,inst_5570);
} else {
if((state_val_5573 === (2))){
var state_5572__$1 = state_5572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5572__$1,(4),ch);
} else {
if((state_val_5573 === (11))){
var inst_5552 = (state_5572[(8)]);
var inst_5561 = (state_5572[(2)]);
var inst_5549 = inst_5552;
var state_5572__$1 = (function (){var statearr_5582 = state_5572;
(statearr_5582[(10)] = inst_5561);

(statearr_5582[(7)] = inst_5549);

return statearr_5582;
})();
var statearr_5583_5601 = state_5572__$1;
(statearr_5583_5601[(2)] = null);

(statearr_5583_5601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (9))){
var inst_5552 = (state_5572[(8)]);
var state_5572__$1 = state_5572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5572__$1,(11),out,inst_5552);
} else {
if((state_val_5573 === (5))){
var inst_5552 = (state_5572[(8)]);
var inst_5549 = (state_5572[(7)]);
var inst_5556 = cljs.core._EQ_.call(null,inst_5552,inst_5549);
var state_5572__$1 = state_5572;
if(inst_5556){
var statearr_5585_5602 = state_5572__$1;
(statearr_5585_5602[(1)] = (8));

} else {
var statearr_5586_5603 = state_5572__$1;
(statearr_5586_5603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (10))){
var inst_5564 = (state_5572[(2)]);
var state_5572__$1 = state_5572;
var statearr_5587_5604 = state_5572__$1;
(statearr_5587_5604[(2)] = inst_5564);

(statearr_5587_5604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5573 === (8))){
var inst_5549 = (state_5572[(7)]);
var tmp5584 = inst_5549;
var inst_5549__$1 = tmp5584;
var state_5572__$1 = (function (){var statearr_5588 = state_5572;
(statearr_5588[(7)] = inst_5549__$1);

return statearr_5588;
})();
var statearr_5589_5605 = state_5572__$1;
(statearr_5589_5605[(2)] = null);

(statearr_5589_5605[(1)] = (2));


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
});})(c__1705__auto___5595,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5595,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5590[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5590[(1)] = (1));

return statearr_5590;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5572){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5591){if((e5591 instanceof Object)){
var ex__1694__auto__ = e5591;
var statearr_5592_5606 = state_5572;
(statearr_5592_5606[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5607 = state_5572;
state_5572 = G__5607;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5595,out))
})();
var state__1707__auto__ = (function (){var statearr_5593 = f__1706__auto__.call(null);
(statearr_5593[(6)] = c__1705__auto___5595);

return statearr_5593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5595,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5609 = arguments.length;
switch (G__5609) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5675,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5675,out){
return (function (state_5647){
var state_val_5648 = (state_5647[(1)]);
if((state_val_5648 === (7))){
var inst_5643 = (state_5647[(2)]);
var state_5647__$1 = state_5647;
var statearr_5649_5676 = state_5647__$1;
(statearr_5649_5676[(2)] = inst_5643);

(statearr_5649_5676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (1))){
var inst_5610 = (new Array(n));
var inst_5611 = inst_5610;
var inst_5612 = (0);
var state_5647__$1 = (function (){var statearr_5650 = state_5647;
(statearr_5650[(7)] = inst_5611);

(statearr_5650[(8)] = inst_5612);

return statearr_5650;
})();
var statearr_5651_5677 = state_5647__$1;
(statearr_5651_5677[(2)] = null);

(statearr_5651_5677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (4))){
var inst_5615 = (state_5647[(9)]);
var inst_5615__$1 = (state_5647[(2)]);
var inst_5616 = (inst_5615__$1 == null);
var inst_5617 = cljs.core.not.call(null,inst_5616);
var state_5647__$1 = (function (){var statearr_5652 = state_5647;
(statearr_5652[(9)] = inst_5615__$1);

return statearr_5652;
})();
if(inst_5617){
var statearr_5653_5678 = state_5647__$1;
(statearr_5653_5678[(1)] = (5));

} else {
var statearr_5654_5679 = state_5647__$1;
(statearr_5654_5679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (15))){
var inst_5637 = (state_5647[(2)]);
var state_5647__$1 = state_5647;
var statearr_5655_5680 = state_5647__$1;
(statearr_5655_5680[(2)] = inst_5637);

(statearr_5655_5680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (13))){
var state_5647__$1 = state_5647;
var statearr_5656_5681 = state_5647__$1;
(statearr_5656_5681[(2)] = null);

(statearr_5656_5681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (6))){
var inst_5612 = (state_5647[(8)]);
var inst_5633 = (inst_5612 > (0));
var state_5647__$1 = state_5647;
if(cljs.core.truth_(inst_5633)){
var statearr_5657_5682 = state_5647__$1;
(statearr_5657_5682[(1)] = (12));

} else {
var statearr_5658_5683 = state_5647__$1;
(statearr_5658_5683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (3))){
var inst_5645 = (state_5647[(2)]);
var state_5647__$1 = state_5647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5647__$1,inst_5645);
} else {
if((state_val_5648 === (12))){
var inst_5611 = (state_5647[(7)]);
var inst_5635 = cljs.core.vec.call(null,inst_5611);
var state_5647__$1 = state_5647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5647__$1,(15),out,inst_5635);
} else {
if((state_val_5648 === (2))){
var state_5647__$1 = state_5647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5647__$1,(4),ch);
} else {
if((state_val_5648 === (11))){
var inst_5627 = (state_5647[(2)]);
var inst_5628 = (new Array(n));
var inst_5611 = inst_5628;
var inst_5612 = (0);
var state_5647__$1 = (function (){var statearr_5659 = state_5647;
(statearr_5659[(10)] = inst_5627);

(statearr_5659[(7)] = inst_5611);

(statearr_5659[(8)] = inst_5612);

return statearr_5659;
})();
var statearr_5660_5684 = state_5647__$1;
(statearr_5660_5684[(2)] = null);

(statearr_5660_5684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (9))){
var inst_5611 = (state_5647[(7)]);
var inst_5625 = cljs.core.vec.call(null,inst_5611);
var state_5647__$1 = state_5647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5647__$1,(11),out,inst_5625);
} else {
if((state_val_5648 === (5))){
var inst_5620 = (state_5647[(11)]);
var inst_5615 = (state_5647[(9)]);
var inst_5611 = (state_5647[(7)]);
var inst_5612 = (state_5647[(8)]);
var inst_5619 = (inst_5611[inst_5612] = inst_5615);
var inst_5620__$1 = (inst_5612 + (1));
var inst_5621 = (inst_5620__$1 < n);
var state_5647__$1 = (function (){var statearr_5661 = state_5647;
(statearr_5661[(11)] = inst_5620__$1);

(statearr_5661[(12)] = inst_5619);

return statearr_5661;
})();
if(cljs.core.truth_(inst_5621)){
var statearr_5662_5685 = state_5647__$1;
(statearr_5662_5685[(1)] = (8));

} else {
var statearr_5663_5686 = state_5647__$1;
(statearr_5663_5686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (14))){
var inst_5640 = (state_5647[(2)]);
var inst_5641 = cljs.core.async.close_BANG_.call(null,out);
var state_5647__$1 = (function (){var statearr_5665 = state_5647;
(statearr_5665[(13)] = inst_5640);

return statearr_5665;
})();
var statearr_5666_5687 = state_5647__$1;
(statearr_5666_5687[(2)] = inst_5641);

(statearr_5666_5687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (10))){
var inst_5631 = (state_5647[(2)]);
var state_5647__$1 = state_5647;
var statearr_5667_5688 = state_5647__$1;
(statearr_5667_5688[(2)] = inst_5631);

(statearr_5667_5688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5648 === (8))){
var inst_5620 = (state_5647[(11)]);
var inst_5611 = (state_5647[(7)]);
var tmp5664 = inst_5611;
var inst_5611__$1 = tmp5664;
var inst_5612 = inst_5620;
var state_5647__$1 = (function (){var statearr_5668 = state_5647;
(statearr_5668[(7)] = inst_5611__$1);

(statearr_5668[(8)] = inst_5612);

return statearr_5668;
})();
var statearr_5669_5689 = state_5647__$1;
(statearr_5669_5689[(2)] = null);

(statearr_5669_5689[(1)] = (2));


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
}
}
});})(c__1705__auto___5675,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5675,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5670[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5670[(1)] = (1));

return statearr_5670;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5647){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5671){if((e5671 instanceof Object)){
var ex__1694__auto__ = e5671;
var statearr_5672_5690 = state_5647;
(statearr_5672_5690[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5691 = state_5647;
state_5647 = G__5691;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5675,out))
})();
var state__1707__auto__ = (function (){var statearr_5673 = f__1706__auto__.call(null);
(statearr_5673[(6)] = c__1705__auto___5675);

return statearr_5673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5675,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5693 = arguments.length;
switch (G__5693) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1705__auto___5763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1705__auto___5763,out){
return (function (){
var f__1706__auto__ = (function (){var switch__1690__auto__ = ((function (c__1705__auto___5763,out){
return (function (state_5735){
var state_val_5736 = (state_5735[(1)]);
if((state_val_5736 === (7))){
var inst_5731 = (state_5735[(2)]);
var state_5735__$1 = state_5735;
var statearr_5737_5764 = state_5735__$1;
(statearr_5737_5764[(2)] = inst_5731);

(statearr_5737_5764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (1))){
var inst_5694 = [];
var inst_5695 = inst_5694;
var inst_5696 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5735__$1 = (function (){var statearr_5738 = state_5735;
(statearr_5738[(7)] = inst_5695);

(statearr_5738[(8)] = inst_5696);

return statearr_5738;
})();
var statearr_5739_5765 = state_5735__$1;
(statearr_5739_5765[(2)] = null);

(statearr_5739_5765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (4))){
var inst_5699 = (state_5735[(9)]);
var inst_5699__$1 = (state_5735[(2)]);
var inst_5700 = (inst_5699__$1 == null);
var inst_5701 = cljs.core.not.call(null,inst_5700);
var state_5735__$1 = (function (){var statearr_5740 = state_5735;
(statearr_5740[(9)] = inst_5699__$1);

return statearr_5740;
})();
if(inst_5701){
var statearr_5741_5766 = state_5735__$1;
(statearr_5741_5766[(1)] = (5));

} else {
var statearr_5742_5767 = state_5735__$1;
(statearr_5742_5767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (15))){
var inst_5725 = (state_5735[(2)]);
var state_5735__$1 = state_5735;
var statearr_5743_5768 = state_5735__$1;
(statearr_5743_5768[(2)] = inst_5725);

(statearr_5743_5768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (13))){
var state_5735__$1 = state_5735;
var statearr_5744_5769 = state_5735__$1;
(statearr_5744_5769[(2)] = null);

(statearr_5744_5769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (6))){
var inst_5695 = (state_5735[(7)]);
var inst_5720 = inst_5695.length;
var inst_5721 = (inst_5720 > (0));
var state_5735__$1 = state_5735;
if(cljs.core.truth_(inst_5721)){
var statearr_5745_5770 = state_5735__$1;
(statearr_5745_5770[(1)] = (12));

} else {
var statearr_5746_5771 = state_5735__$1;
(statearr_5746_5771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (3))){
var inst_5733 = (state_5735[(2)]);
var state_5735__$1 = state_5735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5735__$1,inst_5733);
} else {
if((state_val_5736 === (12))){
var inst_5695 = (state_5735[(7)]);
var inst_5723 = cljs.core.vec.call(null,inst_5695);
var state_5735__$1 = state_5735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5735__$1,(15),out,inst_5723);
} else {
if((state_val_5736 === (2))){
var state_5735__$1 = state_5735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5735__$1,(4),ch);
} else {
if((state_val_5736 === (11))){
var inst_5699 = (state_5735[(9)]);
var inst_5703 = (state_5735[(10)]);
var inst_5713 = (state_5735[(2)]);
var inst_5714 = [];
var inst_5715 = inst_5714.push(inst_5699);
var inst_5695 = inst_5714;
var inst_5696 = inst_5703;
var state_5735__$1 = (function (){var statearr_5747 = state_5735;
(statearr_5747[(7)] = inst_5695);

(statearr_5747[(8)] = inst_5696);

(statearr_5747[(11)] = inst_5715);

(statearr_5747[(12)] = inst_5713);

return statearr_5747;
})();
var statearr_5748_5772 = state_5735__$1;
(statearr_5748_5772[(2)] = null);

(statearr_5748_5772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (9))){
var inst_5695 = (state_5735[(7)]);
var inst_5711 = cljs.core.vec.call(null,inst_5695);
var state_5735__$1 = state_5735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5735__$1,(11),out,inst_5711);
} else {
if((state_val_5736 === (5))){
var inst_5699 = (state_5735[(9)]);
var inst_5703 = (state_5735[(10)]);
var inst_5696 = (state_5735[(8)]);
var inst_5703__$1 = f.call(null,inst_5699);
var inst_5704 = cljs.core._EQ_.call(null,inst_5703__$1,inst_5696);
var inst_5705 = cljs.core.keyword_identical_QMARK_.call(null,inst_5696,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5706 = ((inst_5704) || (inst_5705));
var state_5735__$1 = (function (){var statearr_5749 = state_5735;
(statearr_5749[(10)] = inst_5703__$1);

return statearr_5749;
})();
if(cljs.core.truth_(inst_5706)){
var statearr_5750_5773 = state_5735__$1;
(statearr_5750_5773[(1)] = (8));

} else {
var statearr_5751_5774 = state_5735__$1;
(statearr_5751_5774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (14))){
var inst_5728 = (state_5735[(2)]);
var inst_5729 = cljs.core.async.close_BANG_.call(null,out);
var state_5735__$1 = (function (){var statearr_5753 = state_5735;
(statearr_5753[(13)] = inst_5728);

return statearr_5753;
})();
var statearr_5754_5775 = state_5735__$1;
(statearr_5754_5775[(2)] = inst_5729);

(statearr_5754_5775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (10))){
var inst_5718 = (state_5735[(2)]);
var state_5735__$1 = state_5735;
var statearr_5755_5776 = state_5735__$1;
(statearr_5755_5776[(2)] = inst_5718);

(statearr_5755_5776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5736 === (8))){
var inst_5699 = (state_5735[(9)]);
var inst_5695 = (state_5735[(7)]);
var inst_5703 = (state_5735[(10)]);
var inst_5708 = inst_5695.push(inst_5699);
var tmp5752 = inst_5695;
var inst_5695__$1 = tmp5752;
var inst_5696 = inst_5703;
var state_5735__$1 = (function (){var statearr_5756 = state_5735;
(statearr_5756[(7)] = inst_5695__$1);

(statearr_5756[(14)] = inst_5708);

(statearr_5756[(8)] = inst_5696);

return statearr_5756;
})();
var statearr_5757_5777 = state_5735__$1;
(statearr_5757_5777[(2)] = null);

(statearr_5757_5777[(1)] = (2));


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
}
}
});})(c__1705__auto___5763,out))
;
return ((function (switch__1690__auto__,c__1705__auto___5763,out){
return (function() {
var cljs$core$async$state_machine__1691__auto__ = null;
var cljs$core$async$state_machine__1691__auto____0 = (function (){
var statearr_5758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5758[(0)] = cljs$core$async$state_machine__1691__auto__);

(statearr_5758[(1)] = (1));

return statearr_5758;
});
var cljs$core$async$state_machine__1691__auto____1 = (function (state_5735){
while(true){
var ret_value__1692__auto__ = (function (){try{while(true){
var result__1693__auto__ = switch__1690__auto__.call(null,state_5735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1693__auto__;
}
break;
}
}catch (e5759){if((e5759 instanceof Object)){
var ex__1694__auto__ = e5759;
var statearr_5760_5778 = state_5735;
(statearr_5760_5778[(5)] = ex__1694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5779 = state_5735;
state_5735 = G__5779;
continue;
} else {
return ret_value__1692__auto__;
}
break;
}
});
cljs$core$async$state_machine__1691__auto__ = function(state_5735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1691__auto____1.call(this,state_5735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1691__auto____0;
cljs$core$async$state_machine__1691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1691__auto____1;
return cljs$core$async$state_machine__1691__auto__;
})()
;})(switch__1690__auto__,c__1705__auto___5763,out))
})();
var state__1707__auto__ = (function (){var statearr_5761 = f__1706__auto__.call(null);
(statearr_5761[(6)] = c__1705__auto___5763);

return statearr_5761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1707__auto__);
});})(c__1705__auto___5763,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
