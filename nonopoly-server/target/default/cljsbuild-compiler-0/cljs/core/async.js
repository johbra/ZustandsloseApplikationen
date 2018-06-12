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
var G__6691 = arguments.length;
switch (G__6691) {
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
if(typeof cljs.core.async.t_cljs$core$async6692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6692 = (function (f,blockable,meta6693){
this.f = f;
this.blockable = blockable;
this.meta6693 = meta6693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6694,meta6693__$1){
var self__ = this;
var _6694__$1 = this;
return (new cljs.core.async.t_cljs$core$async6692(self__.f,self__.blockable,meta6693__$1));
});

cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6694){
var self__ = this;
var _6694__$1 = this;
return self__.meta6693;
});

cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6693","meta6693",1894438364,null)], null);
});

cljs.core.async.t_cljs$core$async6692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6692";

cljs.core.async.t_cljs$core$async6692.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6692");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6692.
 */
cljs.core.async.__GT_t_cljs$core$async6692 = (function cljs$core$async$__GT_t_cljs$core$async6692(f__$1,blockable__$1,meta6693){
return (new cljs.core.async.t_cljs$core$async6692(f__$1,blockable__$1,meta6693));
});

}

return (new cljs.core.async.t_cljs$core$async6692(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6698 = arguments.length;
switch (G__6698) {
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
var G__6701 = arguments.length;
switch (G__6701) {
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
var G__6704 = arguments.length;
switch (G__6704) {
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
var val_6706 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6706);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6706,ret){
return (function (){
return fn1.call(null,val_6706);
});})(val_6706,ret))
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
var G__6708 = arguments.length;
switch (G__6708) {
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
var n__4376__auto___6710 = n;
var x_6711 = (0);
while(true){
if((x_6711 < n__4376__auto___6710)){
(a[x_6711] = (0));

var G__6712 = (x_6711 + (1));
x_6711 = G__6712;
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

var G__6713 = (i + (1));
i = G__6713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async6714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6714 = (function (flag,meta6715){
this.flag = flag;
this.meta6715 = meta6715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6716,meta6715__$1){
var self__ = this;
var _6716__$1 = this;
return (new cljs.core.async.t_cljs$core$async6714(self__.flag,meta6715__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6716){
var self__ = this;
var _6716__$1 = this;
return self__.meta6715;
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6715","meta6715",544590618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6714";

cljs.core.async.t_cljs$core$async6714.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6714");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6714.
 */
cljs.core.async.__GT_t_cljs$core$async6714 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6714(flag__$1,meta6715){
return (new cljs.core.async.t_cljs$core$async6714(flag__$1,meta6715));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async6717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6717 = (function (flag,cb,meta6718){
this.flag = flag;
this.cb = cb;
this.meta6718 = meta6718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6719,meta6718__$1){
var self__ = this;
var _6719__$1 = this;
return (new cljs.core.async.t_cljs$core$async6717(self__.flag,self__.cb,meta6718__$1));
});

cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6719){
var self__ = this;
var _6719__$1 = this;
return self__.meta6718;
});

cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6718","meta6718",726420542,null)], null);
});

cljs.core.async.t_cljs$core$async6717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6717";

cljs.core.async.t_cljs$core$async6717.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6717");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6717.
 */
cljs.core.async.__GT_t_cljs$core$async6717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6717(flag__$1,cb__$1,meta6718){
return (new cljs.core.async.t_cljs$core$async6717(flag__$1,cb__$1,meta6718));
});

}

return (new cljs.core.async.t_cljs$core$async6717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__6720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6720_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6721_SHARP_,port], null));
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
var G__6722 = (i + (1));
i = G__6722;
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
var len__4499__auto___6728 = arguments.length;
var i__4500__auto___6729 = (0);
while(true){
if((i__4500__auto___6729 < len__4499__auto___6728)){
args__4502__auto__.push((arguments[i__4500__auto___6729]));

var G__6730 = (i__4500__auto___6729 + (1));
i__4500__auto___6729 = G__6730;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6725){
var map__6726 = p__6725;
var map__6726__$1 = ((((!((map__6726 == null)))?(((((map__6726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6726):map__6726);
var opts = map__6726__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6723){
var G__6724 = cljs.core.first.call(null,seq6723);
var seq6723__$1 = cljs.core.next.call(null,seq6723);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6724,seq6723__$1);
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
var G__6732 = arguments.length;
switch (G__6732) {
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
var c__6645__auto___6778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___6778){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___6778){
return (function (state_6756){
var state_val_6757 = (state_6756[(1)]);
if((state_val_6757 === (7))){
var inst_6752 = (state_6756[(2)]);
var state_6756__$1 = state_6756;
var statearr_6758_6779 = state_6756__$1;
(statearr_6758_6779[(2)] = inst_6752);

(statearr_6758_6779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (1))){
var state_6756__$1 = state_6756;
var statearr_6759_6780 = state_6756__$1;
(statearr_6759_6780[(2)] = null);

(statearr_6759_6780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (4))){
var inst_6735 = (state_6756[(7)]);
var inst_6735__$1 = (state_6756[(2)]);
var inst_6736 = (inst_6735__$1 == null);
var state_6756__$1 = (function (){var statearr_6760 = state_6756;
(statearr_6760[(7)] = inst_6735__$1);

return statearr_6760;
})();
if(cljs.core.truth_(inst_6736)){
var statearr_6761_6781 = state_6756__$1;
(statearr_6761_6781[(1)] = (5));

} else {
var statearr_6762_6782 = state_6756__$1;
(statearr_6762_6782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (13))){
var state_6756__$1 = state_6756;
var statearr_6763_6783 = state_6756__$1;
(statearr_6763_6783[(2)] = null);

(statearr_6763_6783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (6))){
var inst_6735 = (state_6756[(7)]);
var state_6756__$1 = state_6756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6756__$1,(11),to,inst_6735);
} else {
if((state_val_6757 === (3))){
var inst_6754 = (state_6756[(2)]);
var state_6756__$1 = state_6756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6756__$1,inst_6754);
} else {
if((state_val_6757 === (12))){
var state_6756__$1 = state_6756;
var statearr_6764_6784 = state_6756__$1;
(statearr_6764_6784[(2)] = null);

(statearr_6764_6784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (2))){
var state_6756__$1 = state_6756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6756__$1,(4),from);
} else {
if((state_val_6757 === (11))){
var inst_6745 = (state_6756[(2)]);
var state_6756__$1 = state_6756;
if(cljs.core.truth_(inst_6745)){
var statearr_6765_6785 = state_6756__$1;
(statearr_6765_6785[(1)] = (12));

} else {
var statearr_6766_6786 = state_6756__$1;
(statearr_6766_6786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (9))){
var state_6756__$1 = state_6756;
var statearr_6767_6787 = state_6756__$1;
(statearr_6767_6787[(2)] = null);

(statearr_6767_6787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (5))){
var state_6756__$1 = state_6756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6768_6788 = state_6756__$1;
(statearr_6768_6788[(1)] = (8));

} else {
var statearr_6769_6789 = state_6756__$1;
(statearr_6769_6789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (14))){
var inst_6750 = (state_6756[(2)]);
var state_6756__$1 = state_6756;
var statearr_6770_6790 = state_6756__$1;
(statearr_6770_6790[(2)] = inst_6750);

(statearr_6770_6790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (10))){
var inst_6742 = (state_6756[(2)]);
var state_6756__$1 = state_6756;
var statearr_6771_6791 = state_6756__$1;
(statearr_6771_6791[(2)] = inst_6742);

(statearr_6771_6791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6757 === (8))){
var inst_6739 = cljs.core.async.close_BANG_.call(null,to);
var state_6756__$1 = state_6756;
var statearr_6772_6792 = state_6756__$1;
(statearr_6772_6792[(2)] = inst_6739);

(statearr_6772_6792[(1)] = (10));


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
});})(c__6645__auto___6778))
;
return ((function (switch__6557__auto__,c__6645__auto___6778){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_6773 = [null,null,null,null,null,null,null,null];
(statearr_6773[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_6773[(1)] = (1));

return statearr_6773;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_6756){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6774){if((e6774 instanceof Object)){
var ex__6561__auto__ = e6774;
var statearr_6775_6793 = state_6756;
(statearr_6775_6793[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6794 = state_6756;
state_6756 = G__6794;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_6756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_6756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___6778))
})();
var state__6647__auto__ = (function (){var statearr_6776 = f__6646__auto__.call(null);
(statearr_6776[(6)] = c__6645__auto___6778);

return statearr_6776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___6778))
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
return (function (p__6795){
var vec__6796 = p__6795;
var v = cljs.core.nth.call(null,vec__6796,(0),null);
var p = cljs.core.nth.call(null,vec__6796,(1),null);
var job = vec__6796;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6645__auto___6967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results){
return (function (state_6803){
var state_val_6804 = (state_6803[(1)]);
if((state_val_6804 === (1))){
var state_6803__$1 = state_6803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6803__$1,(2),res,v);
} else {
if((state_val_6804 === (2))){
var inst_6800 = (state_6803[(2)]);
var inst_6801 = cljs.core.async.close_BANG_.call(null,res);
var state_6803__$1 = (function (){var statearr_6805 = state_6803;
(statearr_6805[(7)] = inst_6800);

return statearr_6805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6803__$1,inst_6801);
} else {
return null;
}
}
});})(c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results))
;
return ((function (switch__6557__auto__,c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_6806 = [null,null,null,null,null,null,null,null];
(statearr_6806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__);

(statearr_6806[(1)] = (1));

return statearr_6806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1 = (function (state_6803){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6807){if((e6807 instanceof Object)){
var ex__6561__auto__ = e6807;
var statearr_6808_6968 = state_6803;
(statearr_6808_6968[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6969 = state_6803;
state_6803 = G__6969;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = function(state_6803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1.call(this,state_6803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results))
})();
var state__6647__auto__ = (function (){var statearr_6809 = f__6646__auto__.call(null);
(statearr_6809[(6)] = c__6645__auto___6967);

return statearr_6809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___6967,res,vec__6796,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6810){
var vec__6811 = p__6810;
var v = cljs.core.nth.call(null,vec__6811,(0),null);
var p = cljs.core.nth.call(null,vec__6811,(1),null);
var job = vec__6811;
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
var n__4376__auto___6970 = n;
var __6971 = (0);
while(true){
if((__6971 < n__4376__auto___6970)){
var G__6814_6972 = type;
var G__6814_6973__$1 = (((G__6814_6972 instanceof cljs.core.Keyword))?G__6814_6972.fqn:null);
switch (G__6814_6973__$1) {
case "compute":
var c__6645__auto___6975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6971,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (__6971,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function (state_6827){
var state_val_6828 = (state_6827[(1)]);
if((state_val_6828 === (1))){
var state_6827__$1 = state_6827;
var statearr_6829_6976 = state_6827__$1;
(statearr_6829_6976[(2)] = null);

(statearr_6829_6976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6828 === (2))){
var state_6827__$1 = state_6827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6827__$1,(4),jobs);
} else {
if((state_val_6828 === (3))){
var inst_6825 = (state_6827[(2)]);
var state_6827__$1 = state_6827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6827__$1,inst_6825);
} else {
if((state_val_6828 === (4))){
var inst_6817 = (state_6827[(2)]);
var inst_6818 = process.call(null,inst_6817);
var state_6827__$1 = state_6827;
if(cljs.core.truth_(inst_6818)){
var statearr_6830_6977 = state_6827__$1;
(statearr_6830_6977[(1)] = (5));

} else {
var statearr_6831_6978 = state_6827__$1;
(statearr_6831_6978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6828 === (5))){
var state_6827__$1 = state_6827;
var statearr_6832_6979 = state_6827__$1;
(statearr_6832_6979[(2)] = null);

(statearr_6832_6979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6828 === (6))){
var state_6827__$1 = state_6827;
var statearr_6833_6980 = state_6827__$1;
(statearr_6833_6980[(2)] = null);

(statearr_6833_6980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6828 === (7))){
var inst_6823 = (state_6827[(2)]);
var state_6827__$1 = state_6827;
var statearr_6834_6981 = state_6827__$1;
(statearr_6834_6981[(2)] = inst_6823);

(statearr_6834_6981[(1)] = (3));


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
});})(__6971,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
;
return ((function (__6971,switch__6557__auto__,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_6835 = [null,null,null,null,null,null,null];
(statearr_6835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__);

(statearr_6835[(1)] = (1));

return statearr_6835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1 = (function (state_6827){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6836){if((e6836 instanceof Object)){
var ex__6561__auto__ = e6836;
var statearr_6837_6982 = state_6827;
(statearr_6837_6982[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6983 = state_6827;
state_6827 = G__6983;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = function(state_6827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1.call(this,state_6827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__;
})()
;})(__6971,switch__6557__auto__,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
})();
var state__6647__auto__ = (function (){var statearr_6838 = f__6646__auto__.call(null);
(statearr_6838[(6)] = c__6645__auto___6975);

return statearr_6838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(__6971,c__6645__auto___6975,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
);


break;
case "async":
var c__6645__auto___6984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6971,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (__6971,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function (state_6851){
var state_val_6852 = (state_6851[(1)]);
if((state_val_6852 === (1))){
var state_6851__$1 = state_6851;
var statearr_6853_6985 = state_6851__$1;
(statearr_6853_6985[(2)] = null);

(statearr_6853_6985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6852 === (2))){
var state_6851__$1 = state_6851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6851__$1,(4),jobs);
} else {
if((state_val_6852 === (3))){
var inst_6849 = (state_6851[(2)]);
var state_6851__$1 = state_6851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6851__$1,inst_6849);
} else {
if((state_val_6852 === (4))){
var inst_6841 = (state_6851[(2)]);
var inst_6842 = async.call(null,inst_6841);
var state_6851__$1 = state_6851;
if(cljs.core.truth_(inst_6842)){
var statearr_6854_6986 = state_6851__$1;
(statearr_6854_6986[(1)] = (5));

} else {
var statearr_6855_6987 = state_6851__$1;
(statearr_6855_6987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6852 === (5))){
var state_6851__$1 = state_6851;
var statearr_6856_6988 = state_6851__$1;
(statearr_6856_6988[(2)] = null);

(statearr_6856_6988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6852 === (6))){
var state_6851__$1 = state_6851;
var statearr_6857_6989 = state_6851__$1;
(statearr_6857_6989[(2)] = null);

(statearr_6857_6989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6852 === (7))){
var inst_6847 = (state_6851[(2)]);
var state_6851__$1 = state_6851;
var statearr_6858_6990 = state_6851__$1;
(statearr_6858_6990[(2)] = inst_6847);

(statearr_6858_6990[(1)] = (3));


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
});})(__6971,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
;
return ((function (__6971,switch__6557__auto__,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_6859 = [null,null,null,null,null,null,null];
(statearr_6859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__);

(statearr_6859[(1)] = (1));

return statearr_6859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1 = (function (state_6851){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6860){if((e6860 instanceof Object)){
var ex__6561__auto__ = e6860;
var statearr_6861_6991 = state_6851;
(statearr_6861_6991[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6992 = state_6851;
state_6851 = G__6992;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = function(state_6851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1.call(this,state_6851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__;
})()
;})(__6971,switch__6557__auto__,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
})();
var state__6647__auto__ = (function (){var statearr_6862 = f__6646__auto__.call(null);
(statearr_6862[(6)] = c__6645__auto___6984);

return statearr_6862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(__6971,c__6645__auto___6984,G__6814_6972,G__6814_6973__$1,n__4376__auto___6970,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6814_6973__$1)].join('')));

}

var G__6993 = (__6971 + (1));
__6971 = G__6993;
continue;
} else {
}
break;
}

var c__6645__auto___6994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___6994,jobs,results,process,async){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___6994,jobs,results,process,async){
return (function (state_6884){
var state_val_6885 = (state_6884[(1)]);
if((state_val_6885 === (1))){
var state_6884__$1 = state_6884;
var statearr_6886_6995 = state_6884__$1;
(statearr_6886_6995[(2)] = null);

(statearr_6886_6995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6885 === (2))){
var state_6884__$1 = state_6884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6884__$1,(4),from);
} else {
if((state_val_6885 === (3))){
var inst_6882 = (state_6884[(2)]);
var state_6884__$1 = state_6884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6884__$1,inst_6882);
} else {
if((state_val_6885 === (4))){
var inst_6865 = (state_6884[(7)]);
var inst_6865__$1 = (state_6884[(2)]);
var inst_6866 = (inst_6865__$1 == null);
var state_6884__$1 = (function (){var statearr_6887 = state_6884;
(statearr_6887[(7)] = inst_6865__$1);

return statearr_6887;
})();
if(cljs.core.truth_(inst_6866)){
var statearr_6888_6996 = state_6884__$1;
(statearr_6888_6996[(1)] = (5));

} else {
var statearr_6889_6997 = state_6884__$1;
(statearr_6889_6997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6885 === (5))){
var inst_6868 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6884__$1 = state_6884;
var statearr_6890_6998 = state_6884__$1;
(statearr_6890_6998[(2)] = inst_6868);

(statearr_6890_6998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6885 === (6))){
var inst_6865 = (state_6884[(7)]);
var inst_6870 = (state_6884[(8)]);
var inst_6870__$1 = cljs.core.async.chan.call(null,(1));
var inst_6871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6872 = [inst_6865,inst_6870__$1];
var inst_6873 = (new cljs.core.PersistentVector(null,2,(5),inst_6871,inst_6872,null));
var state_6884__$1 = (function (){var statearr_6891 = state_6884;
(statearr_6891[(8)] = inst_6870__$1);

return statearr_6891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6884__$1,(8),jobs,inst_6873);
} else {
if((state_val_6885 === (7))){
var inst_6880 = (state_6884[(2)]);
var state_6884__$1 = state_6884;
var statearr_6892_6999 = state_6884__$1;
(statearr_6892_6999[(2)] = inst_6880);

(statearr_6892_6999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6885 === (8))){
var inst_6870 = (state_6884[(8)]);
var inst_6875 = (state_6884[(2)]);
var state_6884__$1 = (function (){var statearr_6893 = state_6884;
(statearr_6893[(9)] = inst_6875);

return statearr_6893;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6884__$1,(9),results,inst_6870);
} else {
if((state_val_6885 === (9))){
var inst_6877 = (state_6884[(2)]);
var state_6884__$1 = (function (){var statearr_6894 = state_6884;
(statearr_6894[(10)] = inst_6877);

return statearr_6894;
})();
var statearr_6895_7000 = state_6884__$1;
(statearr_6895_7000[(2)] = null);

(statearr_6895_7000[(1)] = (2));


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
});})(c__6645__auto___6994,jobs,results,process,async))
;
return ((function (switch__6557__auto__,c__6645__auto___6994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_6896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__);

(statearr_6896[(1)] = (1));

return statearr_6896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1 = (function (state_6884){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6897){if((e6897 instanceof Object)){
var ex__6561__auto__ = e6897;
var statearr_6898_7001 = state_6884;
(statearr_6898_7001[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7002 = state_6884;
state_6884 = G__7002;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = function(state_6884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1.call(this,state_6884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___6994,jobs,results,process,async))
})();
var state__6647__auto__ = (function (){var statearr_6899 = f__6646__auto__.call(null);
(statearr_6899[(6)] = c__6645__auto___6994);

return statearr_6899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___6994,jobs,results,process,async))
);


var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__,jobs,results,process,async){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto__,jobs,results,process,async){
return (function (state_6937){
var state_val_6938 = (state_6937[(1)]);
if((state_val_6938 === (7))){
var inst_6933 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
var statearr_6939_7003 = state_6937__$1;
(statearr_6939_7003[(2)] = inst_6933);

(statearr_6939_7003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (20))){
var state_6937__$1 = state_6937;
var statearr_6940_7004 = state_6937__$1;
(statearr_6940_7004[(2)] = null);

(statearr_6940_7004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (1))){
var state_6937__$1 = state_6937;
var statearr_6941_7005 = state_6937__$1;
(statearr_6941_7005[(2)] = null);

(statearr_6941_7005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (4))){
var inst_6902 = (state_6937[(7)]);
var inst_6902__$1 = (state_6937[(2)]);
var inst_6903 = (inst_6902__$1 == null);
var state_6937__$1 = (function (){var statearr_6942 = state_6937;
(statearr_6942[(7)] = inst_6902__$1);

return statearr_6942;
})();
if(cljs.core.truth_(inst_6903)){
var statearr_6943_7006 = state_6937__$1;
(statearr_6943_7006[(1)] = (5));

} else {
var statearr_6944_7007 = state_6937__$1;
(statearr_6944_7007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (15))){
var inst_6915 = (state_6937[(8)]);
var state_6937__$1 = state_6937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6937__$1,(18),to,inst_6915);
} else {
if((state_val_6938 === (21))){
var inst_6928 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
var statearr_6945_7008 = state_6937__$1;
(statearr_6945_7008[(2)] = inst_6928);

(statearr_6945_7008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (13))){
var inst_6930 = (state_6937[(2)]);
var state_6937__$1 = (function (){var statearr_6946 = state_6937;
(statearr_6946[(9)] = inst_6930);

return statearr_6946;
})();
var statearr_6947_7009 = state_6937__$1;
(statearr_6947_7009[(2)] = null);

(statearr_6947_7009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (6))){
var inst_6902 = (state_6937[(7)]);
var state_6937__$1 = state_6937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6937__$1,(11),inst_6902);
} else {
if((state_val_6938 === (17))){
var inst_6923 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
if(cljs.core.truth_(inst_6923)){
var statearr_6948_7010 = state_6937__$1;
(statearr_6948_7010[(1)] = (19));

} else {
var statearr_6949_7011 = state_6937__$1;
(statearr_6949_7011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (3))){
var inst_6935 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6937__$1,inst_6935);
} else {
if((state_val_6938 === (12))){
var inst_6912 = (state_6937[(10)]);
var state_6937__$1 = state_6937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6937__$1,(14),inst_6912);
} else {
if((state_val_6938 === (2))){
var state_6937__$1 = state_6937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6937__$1,(4),results);
} else {
if((state_val_6938 === (19))){
var state_6937__$1 = state_6937;
var statearr_6950_7012 = state_6937__$1;
(statearr_6950_7012[(2)] = null);

(statearr_6950_7012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (11))){
var inst_6912 = (state_6937[(2)]);
var state_6937__$1 = (function (){var statearr_6951 = state_6937;
(statearr_6951[(10)] = inst_6912);

return statearr_6951;
})();
var statearr_6952_7013 = state_6937__$1;
(statearr_6952_7013[(2)] = null);

(statearr_6952_7013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (9))){
var state_6937__$1 = state_6937;
var statearr_6953_7014 = state_6937__$1;
(statearr_6953_7014[(2)] = null);

(statearr_6953_7014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (5))){
var state_6937__$1 = state_6937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6954_7015 = state_6937__$1;
(statearr_6954_7015[(1)] = (8));

} else {
var statearr_6955_7016 = state_6937__$1;
(statearr_6955_7016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (14))){
var inst_6915 = (state_6937[(8)]);
var inst_6917 = (state_6937[(11)]);
var inst_6915__$1 = (state_6937[(2)]);
var inst_6916 = (inst_6915__$1 == null);
var inst_6917__$1 = cljs.core.not.call(null,inst_6916);
var state_6937__$1 = (function (){var statearr_6956 = state_6937;
(statearr_6956[(8)] = inst_6915__$1);

(statearr_6956[(11)] = inst_6917__$1);

return statearr_6956;
})();
if(inst_6917__$1){
var statearr_6957_7017 = state_6937__$1;
(statearr_6957_7017[(1)] = (15));

} else {
var statearr_6958_7018 = state_6937__$1;
(statearr_6958_7018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (16))){
var inst_6917 = (state_6937[(11)]);
var state_6937__$1 = state_6937;
var statearr_6959_7019 = state_6937__$1;
(statearr_6959_7019[(2)] = inst_6917);

(statearr_6959_7019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (10))){
var inst_6909 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
var statearr_6960_7020 = state_6937__$1;
(statearr_6960_7020[(2)] = inst_6909);

(statearr_6960_7020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (18))){
var inst_6920 = (state_6937[(2)]);
var state_6937__$1 = state_6937;
var statearr_6961_7021 = state_6937__$1;
(statearr_6961_7021[(2)] = inst_6920);

(statearr_6961_7021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6938 === (8))){
var inst_6906 = cljs.core.async.close_BANG_.call(null,to);
var state_6937__$1 = state_6937;
var statearr_6962_7022 = state_6937__$1;
(statearr_6962_7022[(2)] = inst_6906);

(statearr_6962_7022[(1)] = (10));


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
});})(c__6645__auto__,jobs,results,process,async))
;
return ((function (switch__6557__auto__,c__6645__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_6963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__);

(statearr_6963[(1)] = (1));

return statearr_6963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1 = (function (state_6937){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_6937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e6964){if((e6964 instanceof Object)){
var ex__6561__auto__ = e6964;
var statearr_6965_7023 = state_6937;
(statearr_6965_7023[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7024 = state_6937;
state_6937 = G__7024;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__ = function(state_6937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1.call(this,state_6937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto__,jobs,results,process,async))
})();
var state__6647__auto__ = (function (){var statearr_6966 = f__6646__auto__.call(null);
(statearr_6966[(6)] = c__6645__auto__);

return statearr_6966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__,jobs,results,process,async))
);

return c__6645__auto__;
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
var G__7026 = arguments.length;
switch (G__7026) {
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
var G__7029 = arguments.length;
switch (G__7029) {
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
var G__7032 = arguments.length;
switch (G__7032) {
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
var c__6645__auto___7081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___7081,tc,fc){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___7081,tc,fc){
return (function (state_7058){
var state_val_7059 = (state_7058[(1)]);
if((state_val_7059 === (7))){
var inst_7054 = (state_7058[(2)]);
var state_7058__$1 = state_7058;
var statearr_7060_7082 = state_7058__$1;
(statearr_7060_7082[(2)] = inst_7054);

(statearr_7060_7082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (1))){
var state_7058__$1 = state_7058;
var statearr_7061_7083 = state_7058__$1;
(statearr_7061_7083[(2)] = null);

(statearr_7061_7083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (4))){
var inst_7035 = (state_7058[(7)]);
var inst_7035__$1 = (state_7058[(2)]);
var inst_7036 = (inst_7035__$1 == null);
var state_7058__$1 = (function (){var statearr_7062 = state_7058;
(statearr_7062[(7)] = inst_7035__$1);

return statearr_7062;
})();
if(cljs.core.truth_(inst_7036)){
var statearr_7063_7084 = state_7058__$1;
(statearr_7063_7084[(1)] = (5));

} else {
var statearr_7064_7085 = state_7058__$1;
(statearr_7064_7085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (13))){
var state_7058__$1 = state_7058;
var statearr_7065_7086 = state_7058__$1;
(statearr_7065_7086[(2)] = null);

(statearr_7065_7086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (6))){
var inst_7035 = (state_7058[(7)]);
var inst_7041 = p.call(null,inst_7035);
var state_7058__$1 = state_7058;
if(cljs.core.truth_(inst_7041)){
var statearr_7066_7087 = state_7058__$1;
(statearr_7066_7087[(1)] = (9));

} else {
var statearr_7067_7088 = state_7058__$1;
(statearr_7067_7088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (3))){
var inst_7056 = (state_7058[(2)]);
var state_7058__$1 = state_7058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7058__$1,inst_7056);
} else {
if((state_val_7059 === (12))){
var state_7058__$1 = state_7058;
var statearr_7068_7089 = state_7058__$1;
(statearr_7068_7089[(2)] = null);

(statearr_7068_7089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (2))){
var state_7058__$1 = state_7058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7058__$1,(4),ch);
} else {
if((state_val_7059 === (11))){
var inst_7035 = (state_7058[(7)]);
var inst_7045 = (state_7058[(2)]);
var state_7058__$1 = state_7058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7058__$1,(8),inst_7045,inst_7035);
} else {
if((state_val_7059 === (9))){
var state_7058__$1 = state_7058;
var statearr_7069_7090 = state_7058__$1;
(statearr_7069_7090[(2)] = tc);

(statearr_7069_7090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (5))){
var inst_7038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7039 = cljs.core.async.close_BANG_.call(null,fc);
var state_7058__$1 = (function (){var statearr_7070 = state_7058;
(statearr_7070[(8)] = inst_7038);

return statearr_7070;
})();
var statearr_7071_7091 = state_7058__$1;
(statearr_7071_7091[(2)] = inst_7039);

(statearr_7071_7091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (14))){
var inst_7052 = (state_7058[(2)]);
var state_7058__$1 = state_7058;
var statearr_7072_7092 = state_7058__$1;
(statearr_7072_7092[(2)] = inst_7052);

(statearr_7072_7092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (10))){
var state_7058__$1 = state_7058;
var statearr_7073_7093 = state_7058__$1;
(statearr_7073_7093[(2)] = fc);

(statearr_7073_7093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7059 === (8))){
var inst_7047 = (state_7058[(2)]);
var state_7058__$1 = state_7058;
if(cljs.core.truth_(inst_7047)){
var statearr_7074_7094 = state_7058__$1;
(statearr_7074_7094[(1)] = (12));

} else {
var statearr_7075_7095 = state_7058__$1;
(statearr_7075_7095[(1)] = (13));

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
});})(c__6645__auto___7081,tc,fc))
;
return ((function (switch__6557__auto__,c__6645__auto___7081,tc,fc){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_7076 = [null,null,null,null,null,null,null,null,null];
(statearr_7076[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_7076[(1)] = (1));

return statearr_7076;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_7058){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7077){if((e7077 instanceof Object)){
var ex__6561__auto__ = e7077;
var statearr_7078_7096 = state_7058;
(statearr_7078_7096[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7097 = state_7058;
state_7058 = G__7097;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_7058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_7058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___7081,tc,fc))
})();
var state__6647__auto__ = (function (){var statearr_7079 = f__6646__auto__.call(null);
(statearr_7079[(6)] = c__6645__auto___7081);

return statearr_7079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___7081,tc,fc))
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
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto__){
return (function (state_7118){
var state_val_7119 = (state_7118[(1)]);
if((state_val_7119 === (7))){
var inst_7114 = (state_7118[(2)]);
var state_7118__$1 = state_7118;
var statearr_7120_7138 = state_7118__$1;
(statearr_7120_7138[(2)] = inst_7114);

(statearr_7120_7138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (1))){
var inst_7098 = init;
var state_7118__$1 = (function (){var statearr_7121 = state_7118;
(statearr_7121[(7)] = inst_7098);

return statearr_7121;
})();
var statearr_7122_7139 = state_7118__$1;
(statearr_7122_7139[(2)] = null);

(statearr_7122_7139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (4))){
var inst_7101 = (state_7118[(8)]);
var inst_7101__$1 = (state_7118[(2)]);
var inst_7102 = (inst_7101__$1 == null);
var state_7118__$1 = (function (){var statearr_7123 = state_7118;
(statearr_7123[(8)] = inst_7101__$1);

return statearr_7123;
})();
if(cljs.core.truth_(inst_7102)){
var statearr_7124_7140 = state_7118__$1;
(statearr_7124_7140[(1)] = (5));

} else {
var statearr_7125_7141 = state_7118__$1;
(statearr_7125_7141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (6))){
var inst_7101 = (state_7118[(8)]);
var inst_7105 = (state_7118[(9)]);
var inst_7098 = (state_7118[(7)]);
var inst_7105__$1 = f.call(null,inst_7098,inst_7101);
var inst_7106 = cljs.core.reduced_QMARK_.call(null,inst_7105__$1);
var state_7118__$1 = (function (){var statearr_7126 = state_7118;
(statearr_7126[(9)] = inst_7105__$1);

return statearr_7126;
})();
if(inst_7106){
var statearr_7127_7142 = state_7118__$1;
(statearr_7127_7142[(1)] = (8));

} else {
var statearr_7128_7143 = state_7118__$1;
(statearr_7128_7143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (3))){
var inst_7116 = (state_7118[(2)]);
var state_7118__$1 = state_7118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7118__$1,inst_7116);
} else {
if((state_val_7119 === (2))){
var state_7118__$1 = state_7118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7118__$1,(4),ch);
} else {
if((state_val_7119 === (9))){
var inst_7105 = (state_7118[(9)]);
var inst_7098 = inst_7105;
var state_7118__$1 = (function (){var statearr_7129 = state_7118;
(statearr_7129[(7)] = inst_7098);

return statearr_7129;
})();
var statearr_7130_7144 = state_7118__$1;
(statearr_7130_7144[(2)] = null);

(statearr_7130_7144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (5))){
var inst_7098 = (state_7118[(7)]);
var state_7118__$1 = state_7118;
var statearr_7131_7145 = state_7118__$1;
(statearr_7131_7145[(2)] = inst_7098);

(statearr_7131_7145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (10))){
var inst_7112 = (state_7118[(2)]);
var state_7118__$1 = state_7118;
var statearr_7132_7146 = state_7118__$1;
(statearr_7132_7146[(2)] = inst_7112);

(statearr_7132_7146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7119 === (8))){
var inst_7105 = (state_7118[(9)]);
var inst_7108 = cljs.core.deref.call(null,inst_7105);
var state_7118__$1 = state_7118;
var statearr_7133_7147 = state_7118__$1;
(statearr_7133_7147[(2)] = inst_7108);

(statearr_7133_7147[(1)] = (10));


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
});})(c__6645__auto__))
;
return ((function (switch__6557__auto__,c__6645__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6558__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6558__auto____0 = (function (){
var statearr_7134 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7134[(0)] = cljs$core$async$reduce_$_state_machine__6558__auto__);

(statearr_7134[(1)] = (1));

return statearr_7134;
});
var cljs$core$async$reduce_$_state_machine__6558__auto____1 = (function (state_7118){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7135){if((e7135 instanceof Object)){
var ex__6561__auto__ = e7135;
var statearr_7136_7148 = state_7118;
(statearr_7136_7148[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7149 = state_7118;
state_7118 = G__7149;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6558__auto__ = function(state_7118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6558__auto____1.call(this,state_7118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6558__auto____0;
cljs$core$async$reduce_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6558__auto____1;
return cljs$core$async$reduce_$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_7137 = f__6646__auto__.call(null);
(statearr_7137[(6)] = c__6645__auto__);

return statearr_7137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__,f__$1){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto__,f__$1){
return (function (state_7155){
var state_val_7156 = (state_7155[(1)]);
if((state_val_7156 === (1))){
var inst_7150 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7155__$1 = state_7155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7155__$1,(2),inst_7150);
} else {
if((state_val_7156 === (2))){
var inst_7152 = (state_7155[(2)]);
var inst_7153 = f__$1.call(null,inst_7152);
var state_7155__$1 = state_7155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7155__$1,inst_7153);
} else {
return null;
}
}
});})(c__6645__auto__,f__$1))
;
return ((function (switch__6557__auto__,c__6645__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6558__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6558__auto____0 = (function (){
var statearr_7157 = [null,null,null,null,null,null,null];
(statearr_7157[(0)] = cljs$core$async$transduce_$_state_machine__6558__auto__);

(statearr_7157[(1)] = (1));

return statearr_7157;
});
var cljs$core$async$transduce_$_state_machine__6558__auto____1 = (function (state_7155){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7158){if((e7158 instanceof Object)){
var ex__6561__auto__ = e7158;
var statearr_7159_7161 = state_7155;
(statearr_7159_7161[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7162 = state_7155;
state_7155 = G__7162;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6558__auto__ = function(state_7155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6558__auto____1.call(this,state_7155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6558__auto____0;
cljs$core$async$transduce_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6558__auto____1;
return cljs$core$async$transduce_$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto__,f__$1))
})();
var state__6647__auto__ = (function (){var statearr_7160 = f__6646__auto__.call(null);
(statearr_7160[(6)] = c__6645__auto__);

return statearr_7160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__,f__$1))
);

return c__6645__auto__;
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
var G__7164 = arguments.length;
switch (G__7164) {
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
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto__){
return (function (state_7189){
var state_val_7190 = (state_7189[(1)]);
if((state_val_7190 === (7))){
var inst_7171 = (state_7189[(2)]);
var state_7189__$1 = state_7189;
var statearr_7191_7212 = state_7189__$1;
(statearr_7191_7212[(2)] = inst_7171);

(statearr_7191_7212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (1))){
var inst_7165 = cljs.core.seq.call(null,coll);
var inst_7166 = inst_7165;
var state_7189__$1 = (function (){var statearr_7192 = state_7189;
(statearr_7192[(7)] = inst_7166);

return statearr_7192;
})();
var statearr_7193_7213 = state_7189__$1;
(statearr_7193_7213[(2)] = null);

(statearr_7193_7213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (4))){
var inst_7166 = (state_7189[(7)]);
var inst_7169 = cljs.core.first.call(null,inst_7166);
var state_7189__$1 = state_7189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7189__$1,(7),ch,inst_7169);
} else {
if((state_val_7190 === (13))){
var inst_7183 = (state_7189[(2)]);
var state_7189__$1 = state_7189;
var statearr_7194_7214 = state_7189__$1;
(statearr_7194_7214[(2)] = inst_7183);

(statearr_7194_7214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (6))){
var inst_7174 = (state_7189[(2)]);
var state_7189__$1 = state_7189;
if(cljs.core.truth_(inst_7174)){
var statearr_7195_7215 = state_7189__$1;
(statearr_7195_7215[(1)] = (8));

} else {
var statearr_7196_7216 = state_7189__$1;
(statearr_7196_7216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (3))){
var inst_7187 = (state_7189[(2)]);
var state_7189__$1 = state_7189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7189__$1,inst_7187);
} else {
if((state_val_7190 === (12))){
var state_7189__$1 = state_7189;
var statearr_7197_7217 = state_7189__$1;
(statearr_7197_7217[(2)] = null);

(statearr_7197_7217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (2))){
var inst_7166 = (state_7189[(7)]);
var state_7189__$1 = state_7189;
if(cljs.core.truth_(inst_7166)){
var statearr_7198_7218 = state_7189__$1;
(statearr_7198_7218[(1)] = (4));

} else {
var statearr_7199_7219 = state_7189__$1;
(statearr_7199_7219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (11))){
var inst_7180 = cljs.core.async.close_BANG_.call(null,ch);
var state_7189__$1 = state_7189;
var statearr_7200_7220 = state_7189__$1;
(statearr_7200_7220[(2)] = inst_7180);

(statearr_7200_7220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (9))){
var state_7189__$1 = state_7189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7201_7221 = state_7189__$1;
(statearr_7201_7221[(1)] = (11));

} else {
var statearr_7202_7222 = state_7189__$1;
(statearr_7202_7222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (5))){
var inst_7166 = (state_7189[(7)]);
var state_7189__$1 = state_7189;
var statearr_7203_7223 = state_7189__$1;
(statearr_7203_7223[(2)] = inst_7166);

(statearr_7203_7223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (10))){
var inst_7185 = (state_7189[(2)]);
var state_7189__$1 = state_7189;
var statearr_7204_7224 = state_7189__$1;
(statearr_7204_7224[(2)] = inst_7185);

(statearr_7204_7224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7190 === (8))){
var inst_7166 = (state_7189[(7)]);
var inst_7176 = cljs.core.next.call(null,inst_7166);
var inst_7166__$1 = inst_7176;
var state_7189__$1 = (function (){var statearr_7205 = state_7189;
(statearr_7205[(7)] = inst_7166__$1);

return statearr_7205;
})();
var statearr_7206_7225 = state_7189__$1;
(statearr_7206_7225[(2)] = null);

(statearr_7206_7225[(1)] = (2));


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
});})(c__6645__auto__))
;
return ((function (switch__6557__auto__,c__6645__auto__){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_7207 = [null,null,null,null,null,null,null,null];
(statearr_7207[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_7207[(1)] = (1));

return statearr_7207;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_7189){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7208){if((e7208 instanceof Object)){
var ex__6561__auto__ = e7208;
var statearr_7209_7226 = state_7189;
(statearr_7209_7226[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7227 = state_7189;
state_7189 = G__7227;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_7189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_7189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_7210 = f__6646__auto__.call(null);
(statearr_7210[(6)] = c__6645__auto__);

return statearr_7210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async7228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7228 = (function (ch,cs,meta7229){
this.ch = ch;
this.cs = cs;
this.meta7229 = meta7229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7230,meta7229__$1){
var self__ = this;
var _7230__$1 = this;
return (new cljs.core.async.t_cljs$core$async7228(self__.ch,self__.cs,meta7229__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7230){
var self__ = this;
var _7230__$1 = this;
return self__.meta7229;
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7229","meta7229",1380345695,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7228";

cljs.core.async.t_cljs$core$async7228.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7228");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7228.
 */
cljs.core.async.__GT_t_cljs$core$async7228 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7228(ch__$1,cs__$1,meta7229){
return (new cljs.core.async.t_cljs$core$async7228(ch__$1,cs__$1,meta7229));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7228(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6645__auto___7450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___7450,cs,m,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___7450,cs,m,dchan,dctr,done){
return (function (state_7365){
var state_val_7366 = (state_7365[(1)]);
if((state_val_7366 === (7))){
var inst_7361 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7367_7451 = state_7365__$1;
(statearr_7367_7451[(2)] = inst_7361);

(statearr_7367_7451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (20))){
var inst_7264 = (state_7365[(7)]);
var inst_7276 = cljs.core.first.call(null,inst_7264);
var inst_7277 = cljs.core.nth.call(null,inst_7276,(0),null);
var inst_7278 = cljs.core.nth.call(null,inst_7276,(1),null);
var state_7365__$1 = (function (){var statearr_7368 = state_7365;
(statearr_7368[(8)] = inst_7277);

return statearr_7368;
})();
if(cljs.core.truth_(inst_7278)){
var statearr_7369_7452 = state_7365__$1;
(statearr_7369_7452[(1)] = (22));

} else {
var statearr_7370_7453 = state_7365__$1;
(statearr_7370_7453[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (27))){
var inst_7233 = (state_7365[(9)]);
var inst_7306 = (state_7365[(10)]);
var inst_7308 = (state_7365[(11)]);
var inst_7313 = (state_7365[(12)]);
var inst_7313__$1 = cljs.core._nth.call(null,inst_7306,inst_7308);
var inst_7314 = cljs.core.async.put_BANG_.call(null,inst_7313__$1,inst_7233,done);
var state_7365__$1 = (function (){var statearr_7371 = state_7365;
(statearr_7371[(12)] = inst_7313__$1);

return statearr_7371;
})();
if(cljs.core.truth_(inst_7314)){
var statearr_7372_7454 = state_7365__$1;
(statearr_7372_7454[(1)] = (30));

} else {
var statearr_7373_7455 = state_7365__$1;
(statearr_7373_7455[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (1))){
var state_7365__$1 = state_7365;
var statearr_7374_7456 = state_7365__$1;
(statearr_7374_7456[(2)] = null);

(statearr_7374_7456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (24))){
var inst_7264 = (state_7365[(7)]);
var inst_7283 = (state_7365[(2)]);
var inst_7284 = cljs.core.next.call(null,inst_7264);
var inst_7242 = inst_7284;
var inst_7243 = null;
var inst_7244 = (0);
var inst_7245 = (0);
var state_7365__$1 = (function (){var statearr_7375 = state_7365;
(statearr_7375[(13)] = inst_7245);

(statearr_7375[(14)] = inst_7244);

(statearr_7375[(15)] = inst_7243);

(statearr_7375[(16)] = inst_7283);

(statearr_7375[(17)] = inst_7242);

return statearr_7375;
})();
var statearr_7376_7457 = state_7365__$1;
(statearr_7376_7457[(2)] = null);

(statearr_7376_7457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (39))){
var state_7365__$1 = state_7365;
var statearr_7380_7458 = state_7365__$1;
(statearr_7380_7458[(2)] = null);

(statearr_7380_7458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (4))){
var inst_7233 = (state_7365[(9)]);
var inst_7233__$1 = (state_7365[(2)]);
var inst_7234 = (inst_7233__$1 == null);
var state_7365__$1 = (function (){var statearr_7381 = state_7365;
(statearr_7381[(9)] = inst_7233__$1);

return statearr_7381;
})();
if(cljs.core.truth_(inst_7234)){
var statearr_7382_7459 = state_7365__$1;
(statearr_7382_7459[(1)] = (5));

} else {
var statearr_7383_7460 = state_7365__$1;
(statearr_7383_7460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (15))){
var inst_7245 = (state_7365[(13)]);
var inst_7244 = (state_7365[(14)]);
var inst_7243 = (state_7365[(15)]);
var inst_7242 = (state_7365[(17)]);
var inst_7260 = (state_7365[(2)]);
var inst_7261 = (inst_7245 + (1));
var tmp7377 = inst_7244;
var tmp7378 = inst_7243;
var tmp7379 = inst_7242;
var inst_7242__$1 = tmp7379;
var inst_7243__$1 = tmp7378;
var inst_7244__$1 = tmp7377;
var inst_7245__$1 = inst_7261;
var state_7365__$1 = (function (){var statearr_7384 = state_7365;
(statearr_7384[(18)] = inst_7260);

(statearr_7384[(13)] = inst_7245__$1);

(statearr_7384[(14)] = inst_7244__$1);

(statearr_7384[(15)] = inst_7243__$1);

(statearr_7384[(17)] = inst_7242__$1);

return statearr_7384;
})();
var statearr_7385_7461 = state_7365__$1;
(statearr_7385_7461[(2)] = null);

(statearr_7385_7461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (21))){
var inst_7287 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7389_7462 = state_7365__$1;
(statearr_7389_7462[(2)] = inst_7287);

(statearr_7389_7462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (31))){
var inst_7313 = (state_7365[(12)]);
var inst_7317 = done.call(null,null);
var inst_7318 = cljs.core.async.untap_STAR_.call(null,m,inst_7313);
var state_7365__$1 = (function (){var statearr_7390 = state_7365;
(statearr_7390[(19)] = inst_7317);

return statearr_7390;
})();
var statearr_7391_7463 = state_7365__$1;
(statearr_7391_7463[(2)] = inst_7318);

(statearr_7391_7463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (32))){
var inst_7305 = (state_7365[(20)]);
var inst_7306 = (state_7365[(10)]);
var inst_7307 = (state_7365[(21)]);
var inst_7308 = (state_7365[(11)]);
var inst_7320 = (state_7365[(2)]);
var inst_7321 = (inst_7308 + (1));
var tmp7386 = inst_7305;
var tmp7387 = inst_7306;
var tmp7388 = inst_7307;
var inst_7305__$1 = tmp7386;
var inst_7306__$1 = tmp7387;
var inst_7307__$1 = tmp7388;
var inst_7308__$1 = inst_7321;
var state_7365__$1 = (function (){var statearr_7392 = state_7365;
(statearr_7392[(22)] = inst_7320);

(statearr_7392[(20)] = inst_7305__$1);

(statearr_7392[(10)] = inst_7306__$1);

(statearr_7392[(21)] = inst_7307__$1);

(statearr_7392[(11)] = inst_7308__$1);

return statearr_7392;
})();
var statearr_7393_7464 = state_7365__$1;
(statearr_7393_7464[(2)] = null);

(statearr_7393_7464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (40))){
var inst_7333 = (state_7365[(23)]);
var inst_7337 = done.call(null,null);
var inst_7338 = cljs.core.async.untap_STAR_.call(null,m,inst_7333);
var state_7365__$1 = (function (){var statearr_7394 = state_7365;
(statearr_7394[(24)] = inst_7337);

return statearr_7394;
})();
var statearr_7395_7465 = state_7365__$1;
(statearr_7395_7465[(2)] = inst_7338);

(statearr_7395_7465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (33))){
var inst_7324 = (state_7365[(25)]);
var inst_7326 = cljs.core.chunked_seq_QMARK_.call(null,inst_7324);
var state_7365__$1 = state_7365;
if(inst_7326){
var statearr_7396_7466 = state_7365__$1;
(statearr_7396_7466[(1)] = (36));

} else {
var statearr_7397_7467 = state_7365__$1;
(statearr_7397_7467[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (13))){
var inst_7254 = (state_7365[(26)]);
var inst_7257 = cljs.core.async.close_BANG_.call(null,inst_7254);
var state_7365__$1 = state_7365;
var statearr_7398_7468 = state_7365__$1;
(statearr_7398_7468[(2)] = inst_7257);

(statearr_7398_7468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (22))){
var inst_7277 = (state_7365[(8)]);
var inst_7280 = cljs.core.async.close_BANG_.call(null,inst_7277);
var state_7365__$1 = state_7365;
var statearr_7399_7469 = state_7365__$1;
(statearr_7399_7469[(2)] = inst_7280);

(statearr_7399_7469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (36))){
var inst_7324 = (state_7365[(25)]);
var inst_7328 = cljs.core.chunk_first.call(null,inst_7324);
var inst_7329 = cljs.core.chunk_rest.call(null,inst_7324);
var inst_7330 = cljs.core.count.call(null,inst_7328);
var inst_7305 = inst_7329;
var inst_7306 = inst_7328;
var inst_7307 = inst_7330;
var inst_7308 = (0);
var state_7365__$1 = (function (){var statearr_7400 = state_7365;
(statearr_7400[(20)] = inst_7305);

(statearr_7400[(10)] = inst_7306);

(statearr_7400[(21)] = inst_7307);

(statearr_7400[(11)] = inst_7308);

return statearr_7400;
})();
var statearr_7401_7470 = state_7365__$1;
(statearr_7401_7470[(2)] = null);

(statearr_7401_7470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (41))){
var inst_7324 = (state_7365[(25)]);
var inst_7340 = (state_7365[(2)]);
var inst_7341 = cljs.core.next.call(null,inst_7324);
var inst_7305 = inst_7341;
var inst_7306 = null;
var inst_7307 = (0);
var inst_7308 = (0);
var state_7365__$1 = (function (){var statearr_7402 = state_7365;
(statearr_7402[(20)] = inst_7305);

(statearr_7402[(10)] = inst_7306);

(statearr_7402[(21)] = inst_7307);

(statearr_7402[(11)] = inst_7308);

(statearr_7402[(27)] = inst_7340);

return statearr_7402;
})();
var statearr_7403_7471 = state_7365__$1;
(statearr_7403_7471[(2)] = null);

(statearr_7403_7471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (43))){
var state_7365__$1 = state_7365;
var statearr_7404_7472 = state_7365__$1;
(statearr_7404_7472[(2)] = null);

(statearr_7404_7472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (29))){
var inst_7349 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7405_7473 = state_7365__$1;
(statearr_7405_7473[(2)] = inst_7349);

(statearr_7405_7473[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (44))){
var inst_7358 = (state_7365[(2)]);
var state_7365__$1 = (function (){var statearr_7406 = state_7365;
(statearr_7406[(28)] = inst_7358);

return statearr_7406;
})();
var statearr_7407_7474 = state_7365__$1;
(statearr_7407_7474[(2)] = null);

(statearr_7407_7474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (6))){
var inst_7297 = (state_7365[(29)]);
var inst_7296 = cljs.core.deref.call(null,cs);
var inst_7297__$1 = cljs.core.keys.call(null,inst_7296);
var inst_7298 = cljs.core.count.call(null,inst_7297__$1);
var inst_7299 = cljs.core.reset_BANG_.call(null,dctr,inst_7298);
var inst_7304 = cljs.core.seq.call(null,inst_7297__$1);
var inst_7305 = inst_7304;
var inst_7306 = null;
var inst_7307 = (0);
var inst_7308 = (0);
var state_7365__$1 = (function (){var statearr_7408 = state_7365;
(statearr_7408[(30)] = inst_7299);

(statearr_7408[(20)] = inst_7305);

(statearr_7408[(10)] = inst_7306);

(statearr_7408[(21)] = inst_7307);

(statearr_7408[(11)] = inst_7308);

(statearr_7408[(29)] = inst_7297__$1);

return statearr_7408;
})();
var statearr_7409_7475 = state_7365__$1;
(statearr_7409_7475[(2)] = null);

(statearr_7409_7475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (28))){
var inst_7305 = (state_7365[(20)]);
var inst_7324 = (state_7365[(25)]);
var inst_7324__$1 = cljs.core.seq.call(null,inst_7305);
var state_7365__$1 = (function (){var statearr_7410 = state_7365;
(statearr_7410[(25)] = inst_7324__$1);

return statearr_7410;
})();
if(inst_7324__$1){
var statearr_7411_7476 = state_7365__$1;
(statearr_7411_7476[(1)] = (33));

} else {
var statearr_7412_7477 = state_7365__$1;
(statearr_7412_7477[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (25))){
var inst_7307 = (state_7365[(21)]);
var inst_7308 = (state_7365[(11)]);
var inst_7310 = (inst_7308 < inst_7307);
var inst_7311 = inst_7310;
var state_7365__$1 = state_7365;
if(cljs.core.truth_(inst_7311)){
var statearr_7413_7478 = state_7365__$1;
(statearr_7413_7478[(1)] = (27));

} else {
var statearr_7414_7479 = state_7365__$1;
(statearr_7414_7479[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (34))){
var state_7365__$1 = state_7365;
var statearr_7415_7480 = state_7365__$1;
(statearr_7415_7480[(2)] = null);

(statearr_7415_7480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (17))){
var state_7365__$1 = state_7365;
var statearr_7416_7481 = state_7365__$1;
(statearr_7416_7481[(2)] = null);

(statearr_7416_7481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (3))){
var inst_7363 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7365__$1,inst_7363);
} else {
if((state_val_7366 === (12))){
var inst_7292 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7417_7482 = state_7365__$1;
(statearr_7417_7482[(2)] = inst_7292);

(statearr_7417_7482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (2))){
var state_7365__$1 = state_7365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7365__$1,(4),ch);
} else {
if((state_val_7366 === (23))){
var state_7365__$1 = state_7365;
var statearr_7418_7483 = state_7365__$1;
(statearr_7418_7483[(2)] = null);

(statearr_7418_7483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (35))){
var inst_7347 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7419_7484 = state_7365__$1;
(statearr_7419_7484[(2)] = inst_7347);

(statearr_7419_7484[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (19))){
var inst_7264 = (state_7365[(7)]);
var inst_7268 = cljs.core.chunk_first.call(null,inst_7264);
var inst_7269 = cljs.core.chunk_rest.call(null,inst_7264);
var inst_7270 = cljs.core.count.call(null,inst_7268);
var inst_7242 = inst_7269;
var inst_7243 = inst_7268;
var inst_7244 = inst_7270;
var inst_7245 = (0);
var state_7365__$1 = (function (){var statearr_7420 = state_7365;
(statearr_7420[(13)] = inst_7245);

(statearr_7420[(14)] = inst_7244);

(statearr_7420[(15)] = inst_7243);

(statearr_7420[(17)] = inst_7242);

return statearr_7420;
})();
var statearr_7421_7485 = state_7365__$1;
(statearr_7421_7485[(2)] = null);

(statearr_7421_7485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (11))){
var inst_7264 = (state_7365[(7)]);
var inst_7242 = (state_7365[(17)]);
var inst_7264__$1 = cljs.core.seq.call(null,inst_7242);
var state_7365__$1 = (function (){var statearr_7422 = state_7365;
(statearr_7422[(7)] = inst_7264__$1);

return statearr_7422;
})();
if(inst_7264__$1){
var statearr_7423_7486 = state_7365__$1;
(statearr_7423_7486[(1)] = (16));

} else {
var statearr_7424_7487 = state_7365__$1;
(statearr_7424_7487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (9))){
var inst_7294 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7425_7488 = state_7365__$1;
(statearr_7425_7488[(2)] = inst_7294);

(statearr_7425_7488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (5))){
var inst_7240 = cljs.core.deref.call(null,cs);
var inst_7241 = cljs.core.seq.call(null,inst_7240);
var inst_7242 = inst_7241;
var inst_7243 = null;
var inst_7244 = (0);
var inst_7245 = (0);
var state_7365__$1 = (function (){var statearr_7426 = state_7365;
(statearr_7426[(13)] = inst_7245);

(statearr_7426[(14)] = inst_7244);

(statearr_7426[(15)] = inst_7243);

(statearr_7426[(17)] = inst_7242);

return statearr_7426;
})();
var statearr_7427_7489 = state_7365__$1;
(statearr_7427_7489[(2)] = null);

(statearr_7427_7489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (14))){
var state_7365__$1 = state_7365;
var statearr_7428_7490 = state_7365__$1;
(statearr_7428_7490[(2)] = null);

(statearr_7428_7490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (45))){
var inst_7355 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7429_7491 = state_7365__$1;
(statearr_7429_7491[(2)] = inst_7355);

(statearr_7429_7491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (26))){
var inst_7297 = (state_7365[(29)]);
var inst_7351 = (state_7365[(2)]);
var inst_7352 = cljs.core.seq.call(null,inst_7297);
var state_7365__$1 = (function (){var statearr_7430 = state_7365;
(statearr_7430[(31)] = inst_7351);

return statearr_7430;
})();
if(inst_7352){
var statearr_7431_7492 = state_7365__$1;
(statearr_7431_7492[(1)] = (42));

} else {
var statearr_7432_7493 = state_7365__$1;
(statearr_7432_7493[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (16))){
var inst_7264 = (state_7365[(7)]);
var inst_7266 = cljs.core.chunked_seq_QMARK_.call(null,inst_7264);
var state_7365__$1 = state_7365;
if(inst_7266){
var statearr_7433_7494 = state_7365__$1;
(statearr_7433_7494[(1)] = (19));

} else {
var statearr_7434_7495 = state_7365__$1;
(statearr_7434_7495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (38))){
var inst_7344 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7435_7496 = state_7365__$1;
(statearr_7435_7496[(2)] = inst_7344);

(statearr_7435_7496[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (30))){
var state_7365__$1 = state_7365;
var statearr_7436_7497 = state_7365__$1;
(statearr_7436_7497[(2)] = null);

(statearr_7436_7497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (10))){
var inst_7245 = (state_7365[(13)]);
var inst_7243 = (state_7365[(15)]);
var inst_7253 = cljs.core._nth.call(null,inst_7243,inst_7245);
var inst_7254 = cljs.core.nth.call(null,inst_7253,(0),null);
var inst_7255 = cljs.core.nth.call(null,inst_7253,(1),null);
var state_7365__$1 = (function (){var statearr_7437 = state_7365;
(statearr_7437[(26)] = inst_7254);

return statearr_7437;
})();
if(cljs.core.truth_(inst_7255)){
var statearr_7438_7498 = state_7365__$1;
(statearr_7438_7498[(1)] = (13));

} else {
var statearr_7439_7499 = state_7365__$1;
(statearr_7439_7499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (18))){
var inst_7290 = (state_7365[(2)]);
var state_7365__$1 = state_7365;
var statearr_7440_7500 = state_7365__$1;
(statearr_7440_7500[(2)] = inst_7290);

(statearr_7440_7500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (42))){
var state_7365__$1 = state_7365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7365__$1,(45),dchan);
} else {
if((state_val_7366 === (37))){
var inst_7233 = (state_7365[(9)]);
var inst_7333 = (state_7365[(23)]);
var inst_7324 = (state_7365[(25)]);
var inst_7333__$1 = cljs.core.first.call(null,inst_7324);
var inst_7334 = cljs.core.async.put_BANG_.call(null,inst_7333__$1,inst_7233,done);
var state_7365__$1 = (function (){var statearr_7441 = state_7365;
(statearr_7441[(23)] = inst_7333__$1);

return statearr_7441;
})();
if(cljs.core.truth_(inst_7334)){
var statearr_7442_7501 = state_7365__$1;
(statearr_7442_7501[(1)] = (39));

} else {
var statearr_7443_7502 = state_7365__$1;
(statearr_7443_7502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7366 === (8))){
var inst_7245 = (state_7365[(13)]);
var inst_7244 = (state_7365[(14)]);
var inst_7247 = (inst_7245 < inst_7244);
var inst_7248 = inst_7247;
var state_7365__$1 = state_7365;
if(cljs.core.truth_(inst_7248)){
var statearr_7444_7503 = state_7365__$1;
(statearr_7444_7503[(1)] = (10));

} else {
var statearr_7445_7504 = state_7365__$1;
(statearr_7445_7504[(1)] = (11));

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
});})(c__6645__auto___7450,cs,m,dchan,dctr,done))
;
return ((function (switch__6557__auto__,c__6645__auto___7450,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6558__auto__ = null;
var cljs$core$async$mult_$_state_machine__6558__auto____0 = (function (){
var statearr_7446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7446[(0)] = cljs$core$async$mult_$_state_machine__6558__auto__);

(statearr_7446[(1)] = (1));

return statearr_7446;
});
var cljs$core$async$mult_$_state_machine__6558__auto____1 = (function (state_7365){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7447){if((e7447 instanceof Object)){
var ex__6561__auto__ = e7447;
var statearr_7448_7505 = state_7365;
(statearr_7448_7505[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7506 = state_7365;
state_7365 = G__7506;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6558__auto__ = function(state_7365){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6558__auto____1.call(this,state_7365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6558__auto____0;
cljs$core$async$mult_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6558__auto____1;
return cljs$core$async$mult_$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___7450,cs,m,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_7449 = f__6646__auto__.call(null);
(statearr_7449[(6)] = c__6645__auto___7450);

return statearr_7449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___7450,cs,m,dchan,dctr,done))
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
var G__7508 = arguments.length;
switch (G__7508) {
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
var len__4499__auto___7520 = arguments.length;
var i__4500__auto___7521 = (0);
while(true){
if((i__4500__auto___7521 < len__4499__auto___7520)){
args__4502__auto__.push((arguments[i__4500__auto___7521]));

var G__7522 = (i__4500__auto___7521 + (1));
i__4500__auto___7521 = G__7522;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7514){
var map__7515 = p__7514;
var map__7515__$1 = ((((!((map__7515 == null)))?(((((map__7515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);
var opts = map__7515__$1;
var statearr_7517_7523 = state;
(statearr_7517_7523[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__7515,map__7515__$1,opts){
return (function (val){
var statearr_7518_7524 = state;
(statearr_7518_7524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7515,map__7515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_7519_7525 = state;
(statearr_7519_7525[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7510){
var G__7511 = cljs.core.first.call(null,seq7510);
var seq7510__$1 = cljs.core.next.call(null,seq7510);
var G__7512 = cljs.core.first.call(null,seq7510__$1);
var seq7510__$2 = cljs.core.next.call(null,seq7510__$1);
var G__7513 = cljs.core.first.call(null,seq7510__$2);
var seq7510__$3 = cljs.core.next.call(null,seq7510__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7511,G__7512,G__7513,seq7510__$3);
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
if(typeof cljs.core.async.t_cljs$core$async7526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7526 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7527){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7527 = meta7527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7528,meta7527__$1){
var self__ = this;
var _7528__$1 = this;
return (new cljs.core.async.t_cljs$core$async7526(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7527__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7528){
var self__ = this;
var _7528__$1 = this;
return self__.meta7527;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async7526.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7527","meta7527",19585764,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7526";

cljs.core.async.t_cljs$core$async7526.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7526");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7526.
 */
cljs.core.async.__GT_t_cljs$core$async7526 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7527){
return (new cljs.core.async.t_cljs$core$async7526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7527));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7526(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6645__auto___7690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7630){
var state_val_7631 = (state_7630[(1)]);
if((state_val_7631 === (7))){
var inst_7545 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
var statearr_7632_7691 = state_7630__$1;
(statearr_7632_7691[(2)] = inst_7545);

(statearr_7632_7691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (20))){
var inst_7557 = (state_7630[(7)]);
var state_7630__$1 = state_7630;
var statearr_7633_7692 = state_7630__$1;
(statearr_7633_7692[(2)] = inst_7557);

(statearr_7633_7692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (27))){
var state_7630__$1 = state_7630;
var statearr_7634_7693 = state_7630__$1;
(statearr_7634_7693[(2)] = null);

(statearr_7634_7693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (1))){
var inst_7532 = (state_7630[(8)]);
var inst_7532__$1 = calc_state.call(null);
var inst_7534 = (inst_7532__$1 == null);
var inst_7535 = cljs.core.not.call(null,inst_7534);
var state_7630__$1 = (function (){var statearr_7635 = state_7630;
(statearr_7635[(8)] = inst_7532__$1);

return statearr_7635;
})();
if(inst_7535){
var statearr_7636_7694 = state_7630__$1;
(statearr_7636_7694[(1)] = (2));

} else {
var statearr_7637_7695 = state_7630__$1;
(statearr_7637_7695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (24))){
var inst_7581 = (state_7630[(9)]);
var inst_7590 = (state_7630[(10)]);
var inst_7604 = (state_7630[(11)]);
var inst_7604__$1 = inst_7581.call(null,inst_7590);
var state_7630__$1 = (function (){var statearr_7638 = state_7630;
(statearr_7638[(11)] = inst_7604__$1);

return statearr_7638;
})();
if(cljs.core.truth_(inst_7604__$1)){
var statearr_7639_7696 = state_7630__$1;
(statearr_7639_7696[(1)] = (29));

} else {
var statearr_7640_7697 = state_7630__$1;
(statearr_7640_7697[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (4))){
var inst_7548 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7548)){
var statearr_7641_7698 = state_7630__$1;
(statearr_7641_7698[(1)] = (8));

} else {
var statearr_7642_7699 = state_7630__$1;
(statearr_7642_7699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (15))){
var inst_7575 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7575)){
var statearr_7643_7700 = state_7630__$1;
(statearr_7643_7700[(1)] = (19));

} else {
var statearr_7644_7701 = state_7630__$1;
(statearr_7644_7701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (21))){
var inst_7580 = (state_7630[(12)]);
var inst_7580__$1 = (state_7630[(2)]);
var inst_7581 = cljs.core.get.call(null,inst_7580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7582 = cljs.core.get.call(null,inst_7580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7583 = cljs.core.get.call(null,inst_7580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7630__$1 = (function (){var statearr_7645 = state_7630;
(statearr_7645[(12)] = inst_7580__$1);

(statearr_7645[(9)] = inst_7581);

(statearr_7645[(13)] = inst_7582);

return statearr_7645;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7630__$1,(22),inst_7583);
} else {
if((state_val_7631 === (31))){
var inst_7612 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7612)){
var statearr_7646_7702 = state_7630__$1;
(statearr_7646_7702[(1)] = (32));

} else {
var statearr_7647_7703 = state_7630__$1;
(statearr_7647_7703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (32))){
var inst_7589 = (state_7630[(14)]);
var state_7630__$1 = state_7630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7630__$1,(35),out,inst_7589);
} else {
if((state_val_7631 === (33))){
var inst_7580 = (state_7630[(12)]);
var inst_7557 = inst_7580;
var state_7630__$1 = (function (){var statearr_7648 = state_7630;
(statearr_7648[(7)] = inst_7557);

return statearr_7648;
})();
var statearr_7649_7704 = state_7630__$1;
(statearr_7649_7704[(2)] = null);

(statearr_7649_7704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (13))){
var inst_7557 = (state_7630[(7)]);
var inst_7564 = inst_7557.cljs$lang$protocol_mask$partition0$;
var inst_7565 = (inst_7564 & (64));
var inst_7566 = inst_7557.cljs$core$ISeq$;
var inst_7567 = (cljs.core.PROTOCOL_SENTINEL === inst_7566);
var inst_7568 = ((inst_7565) || (inst_7567));
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7568)){
var statearr_7650_7705 = state_7630__$1;
(statearr_7650_7705[(1)] = (16));

} else {
var statearr_7651_7706 = state_7630__$1;
(statearr_7651_7706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (22))){
var inst_7590 = (state_7630[(10)]);
var inst_7589 = (state_7630[(14)]);
var inst_7588 = (state_7630[(2)]);
var inst_7589__$1 = cljs.core.nth.call(null,inst_7588,(0),null);
var inst_7590__$1 = cljs.core.nth.call(null,inst_7588,(1),null);
var inst_7591 = (inst_7589__$1 == null);
var inst_7592 = cljs.core._EQ_.call(null,inst_7590__$1,change);
var inst_7593 = ((inst_7591) || (inst_7592));
var state_7630__$1 = (function (){var statearr_7652 = state_7630;
(statearr_7652[(10)] = inst_7590__$1);

(statearr_7652[(14)] = inst_7589__$1);

return statearr_7652;
})();
if(cljs.core.truth_(inst_7593)){
var statearr_7653_7707 = state_7630__$1;
(statearr_7653_7707[(1)] = (23));

} else {
var statearr_7654_7708 = state_7630__$1;
(statearr_7654_7708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (36))){
var inst_7580 = (state_7630[(12)]);
var inst_7557 = inst_7580;
var state_7630__$1 = (function (){var statearr_7655 = state_7630;
(statearr_7655[(7)] = inst_7557);

return statearr_7655;
})();
var statearr_7656_7709 = state_7630__$1;
(statearr_7656_7709[(2)] = null);

(statearr_7656_7709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (29))){
var inst_7604 = (state_7630[(11)]);
var state_7630__$1 = state_7630;
var statearr_7657_7710 = state_7630__$1;
(statearr_7657_7710[(2)] = inst_7604);

(statearr_7657_7710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (6))){
var state_7630__$1 = state_7630;
var statearr_7658_7711 = state_7630__$1;
(statearr_7658_7711[(2)] = false);

(statearr_7658_7711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (28))){
var inst_7600 = (state_7630[(2)]);
var inst_7601 = calc_state.call(null);
var inst_7557 = inst_7601;
var state_7630__$1 = (function (){var statearr_7659 = state_7630;
(statearr_7659[(7)] = inst_7557);

(statearr_7659[(15)] = inst_7600);

return statearr_7659;
})();
var statearr_7660_7712 = state_7630__$1;
(statearr_7660_7712[(2)] = null);

(statearr_7660_7712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (25))){
var inst_7626 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
var statearr_7661_7713 = state_7630__$1;
(statearr_7661_7713[(2)] = inst_7626);

(statearr_7661_7713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (34))){
var inst_7624 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
var statearr_7662_7714 = state_7630__$1;
(statearr_7662_7714[(2)] = inst_7624);

(statearr_7662_7714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (17))){
var state_7630__$1 = state_7630;
var statearr_7663_7715 = state_7630__$1;
(statearr_7663_7715[(2)] = false);

(statearr_7663_7715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (3))){
var state_7630__$1 = state_7630;
var statearr_7664_7716 = state_7630__$1;
(statearr_7664_7716[(2)] = false);

(statearr_7664_7716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (12))){
var inst_7628 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7630__$1,inst_7628);
} else {
if((state_val_7631 === (2))){
var inst_7532 = (state_7630[(8)]);
var inst_7537 = inst_7532.cljs$lang$protocol_mask$partition0$;
var inst_7538 = (inst_7537 & (64));
var inst_7539 = inst_7532.cljs$core$ISeq$;
var inst_7540 = (cljs.core.PROTOCOL_SENTINEL === inst_7539);
var inst_7541 = ((inst_7538) || (inst_7540));
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7541)){
var statearr_7665_7717 = state_7630__$1;
(statearr_7665_7717[(1)] = (5));

} else {
var statearr_7666_7718 = state_7630__$1;
(statearr_7666_7718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (23))){
var inst_7589 = (state_7630[(14)]);
var inst_7595 = (inst_7589 == null);
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7595)){
var statearr_7667_7719 = state_7630__$1;
(statearr_7667_7719[(1)] = (26));

} else {
var statearr_7668_7720 = state_7630__$1;
(statearr_7668_7720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (35))){
var inst_7615 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
if(cljs.core.truth_(inst_7615)){
var statearr_7669_7721 = state_7630__$1;
(statearr_7669_7721[(1)] = (36));

} else {
var statearr_7670_7722 = state_7630__$1;
(statearr_7670_7722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (19))){
var inst_7557 = (state_7630[(7)]);
var inst_7577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7557);
var state_7630__$1 = state_7630;
var statearr_7671_7723 = state_7630__$1;
(statearr_7671_7723[(2)] = inst_7577);

(statearr_7671_7723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (11))){
var inst_7557 = (state_7630[(7)]);
var inst_7561 = (inst_7557 == null);
var inst_7562 = cljs.core.not.call(null,inst_7561);
var state_7630__$1 = state_7630;
if(inst_7562){
var statearr_7672_7724 = state_7630__$1;
(statearr_7672_7724[(1)] = (13));

} else {
var statearr_7673_7725 = state_7630__$1;
(statearr_7673_7725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (9))){
var inst_7532 = (state_7630[(8)]);
var state_7630__$1 = state_7630;
var statearr_7674_7726 = state_7630__$1;
(statearr_7674_7726[(2)] = inst_7532);

(statearr_7674_7726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (5))){
var state_7630__$1 = state_7630;
var statearr_7675_7727 = state_7630__$1;
(statearr_7675_7727[(2)] = true);

(statearr_7675_7727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (14))){
var state_7630__$1 = state_7630;
var statearr_7676_7728 = state_7630__$1;
(statearr_7676_7728[(2)] = false);

(statearr_7676_7728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (26))){
var inst_7590 = (state_7630[(10)]);
var inst_7597 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7590);
var state_7630__$1 = state_7630;
var statearr_7677_7729 = state_7630__$1;
(statearr_7677_7729[(2)] = inst_7597);

(statearr_7677_7729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (16))){
var state_7630__$1 = state_7630;
var statearr_7678_7730 = state_7630__$1;
(statearr_7678_7730[(2)] = true);

(statearr_7678_7730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (38))){
var inst_7620 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
var statearr_7679_7731 = state_7630__$1;
(statearr_7679_7731[(2)] = inst_7620);

(statearr_7679_7731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (30))){
var inst_7581 = (state_7630[(9)]);
var inst_7590 = (state_7630[(10)]);
var inst_7582 = (state_7630[(13)]);
var inst_7607 = cljs.core.empty_QMARK_.call(null,inst_7581);
var inst_7608 = inst_7582.call(null,inst_7590);
var inst_7609 = cljs.core.not.call(null,inst_7608);
var inst_7610 = ((inst_7607) && (inst_7609));
var state_7630__$1 = state_7630;
var statearr_7680_7732 = state_7630__$1;
(statearr_7680_7732[(2)] = inst_7610);

(statearr_7680_7732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (10))){
var inst_7532 = (state_7630[(8)]);
var inst_7553 = (state_7630[(2)]);
var inst_7554 = cljs.core.get.call(null,inst_7553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7555 = cljs.core.get.call(null,inst_7553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7556 = cljs.core.get.call(null,inst_7553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7557 = inst_7532;
var state_7630__$1 = (function (){var statearr_7681 = state_7630;
(statearr_7681[(16)] = inst_7555);

(statearr_7681[(7)] = inst_7557);

(statearr_7681[(17)] = inst_7554);

(statearr_7681[(18)] = inst_7556);

return statearr_7681;
})();
var statearr_7682_7733 = state_7630__$1;
(statearr_7682_7733[(2)] = null);

(statearr_7682_7733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (18))){
var inst_7572 = (state_7630[(2)]);
var state_7630__$1 = state_7630;
var statearr_7683_7734 = state_7630__$1;
(statearr_7683_7734[(2)] = inst_7572);

(statearr_7683_7734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (37))){
var state_7630__$1 = state_7630;
var statearr_7684_7735 = state_7630__$1;
(statearr_7684_7735[(2)] = null);

(statearr_7684_7735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7631 === (8))){
var inst_7532 = (state_7630[(8)]);
var inst_7550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7532);
var state_7630__$1 = state_7630;
var statearr_7685_7736 = state_7630__$1;
(statearr_7685_7736[(2)] = inst_7550);

(statearr_7685_7736[(1)] = (10));


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
});})(c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6557__auto__,c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6558__auto__ = null;
var cljs$core$async$mix_$_state_machine__6558__auto____0 = (function (){
var statearr_7686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7686[(0)] = cljs$core$async$mix_$_state_machine__6558__auto__);

(statearr_7686[(1)] = (1));

return statearr_7686;
});
var cljs$core$async$mix_$_state_machine__6558__auto____1 = (function (state_7630){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7687){if((e7687 instanceof Object)){
var ex__6561__auto__ = e7687;
var statearr_7688_7737 = state_7630;
(statearr_7688_7737[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7738 = state_7630;
state_7630 = G__7738;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6558__auto__ = function(state_7630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6558__auto____1.call(this,state_7630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6558__auto____0;
cljs$core$async$mix_$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6558__auto____1;
return cljs$core$async$mix_$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6647__auto__ = (function (){var statearr_7689 = f__6646__auto__.call(null);
(statearr_7689[(6)] = c__6645__auto___7690);

return statearr_7689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___7690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__7740 = arguments.length;
switch (G__7740) {
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
var G__7744 = arguments.length;
switch (G__7744) {
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
return (function (p1__7742_SHARP_){
if(cljs.core.truth_(p1__7742_SHARP_.call(null,topic))){
return p1__7742_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async7745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7746 = meta7746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7747,meta7746__$1){
var self__ = this;
var _7747__$1 = this;
return (new cljs.core.async.t_cljs$core$async7745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7747){
var self__ = this;
var _7747__$1 = this;
return self__.meta7746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7746","meta7746",-673962160,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7745";

cljs.core.async.t_cljs$core$async7745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7745");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7745.
 */
cljs.core.async.__GT_t_cljs$core$async7745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7746){
return (new cljs.core.async.t_cljs$core$async7745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6645__auto___7865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___7865,mults,ensure_mult,p){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___7865,mults,ensure_mult,p){
return (function (state_7819){
var state_val_7820 = (state_7819[(1)]);
if((state_val_7820 === (7))){
var inst_7815 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7821_7866 = state_7819__$1;
(statearr_7821_7866[(2)] = inst_7815);

(statearr_7821_7866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (20))){
var state_7819__$1 = state_7819;
var statearr_7822_7867 = state_7819__$1;
(statearr_7822_7867[(2)] = null);

(statearr_7822_7867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (1))){
var state_7819__$1 = state_7819;
var statearr_7823_7868 = state_7819__$1;
(statearr_7823_7868[(2)] = null);

(statearr_7823_7868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (24))){
var inst_7798 = (state_7819[(7)]);
var inst_7807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7798);
var state_7819__$1 = state_7819;
var statearr_7824_7869 = state_7819__$1;
(statearr_7824_7869[(2)] = inst_7807);

(statearr_7824_7869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (4))){
var inst_7750 = (state_7819[(8)]);
var inst_7750__$1 = (state_7819[(2)]);
var inst_7751 = (inst_7750__$1 == null);
var state_7819__$1 = (function (){var statearr_7825 = state_7819;
(statearr_7825[(8)] = inst_7750__$1);

return statearr_7825;
})();
if(cljs.core.truth_(inst_7751)){
var statearr_7826_7870 = state_7819__$1;
(statearr_7826_7870[(1)] = (5));

} else {
var statearr_7827_7871 = state_7819__$1;
(statearr_7827_7871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (15))){
var inst_7792 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7828_7872 = state_7819__$1;
(statearr_7828_7872[(2)] = inst_7792);

(statearr_7828_7872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (21))){
var inst_7812 = (state_7819[(2)]);
var state_7819__$1 = (function (){var statearr_7829 = state_7819;
(statearr_7829[(9)] = inst_7812);

return statearr_7829;
})();
var statearr_7830_7873 = state_7819__$1;
(statearr_7830_7873[(2)] = null);

(statearr_7830_7873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (13))){
var inst_7774 = (state_7819[(10)]);
var inst_7776 = cljs.core.chunked_seq_QMARK_.call(null,inst_7774);
var state_7819__$1 = state_7819;
if(inst_7776){
var statearr_7831_7874 = state_7819__$1;
(statearr_7831_7874[(1)] = (16));

} else {
var statearr_7832_7875 = state_7819__$1;
(statearr_7832_7875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (22))){
var inst_7804 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
if(cljs.core.truth_(inst_7804)){
var statearr_7833_7876 = state_7819__$1;
(statearr_7833_7876[(1)] = (23));

} else {
var statearr_7834_7877 = state_7819__$1;
(statearr_7834_7877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (6))){
var inst_7800 = (state_7819[(11)]);
var inst_7750 = (state_7819[(8)]);
var inst_7798 = (state_7819[(7)]);
var inst_7798__$1 = topic_fn.call(null,inst_7750);
var inst_7799 = cljs.core.deref.call(null,mults);
var inst_7800__$1 = cljs.core.get.call(null,inst_7799,inst_7798__$1);
var state_7819__$1 = (function (){var statearr_7835 = state_7819;
(statearr_7835[(11)] = inst_7800__$1);

(statearr_7835[(7)] = inst_7798__$1);

return statearr_7835;
})();
if(cljs.core.truth_(inst_7800__$1)){
var statearr_7836_7878 = state_7819__$1;
(statearr_7836_7878[(1)] = (19));

} else {
var statearr_7837_7879 = state_7819__$1;
(statearr_7837_7879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (25))){
var inst_7809 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7838_7880 = state_7819__$1;
(statearr_7838_7880[(2)] = inst_7809);

(statearr_7838_7880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (17))){
var inst_7774 = (state_7819[(10)]);
var inst_7783 = cljs.core.first.call(null,inst_7774);
var inst_7784 = cljs.core.async.muxch_STAR_.call(null,inst_7783);
var inst_7785 = cljs.core.async.close_BANG_.call(null,inst_7784);
var inst_7786 = cljs.core.next.call(null,inst_7774);
var inst_7760 = inst_7786;
var inst_7761 = null;
var inst_7762 = (0);
var inst_7763 = (0);
var state_7819__$1 = (function (){var statearr_7839 = state_7819;
(statearr_7839[(12)] = inst_7763);

(statearr_7839[(13)] = inst_7785);

(statearr_7839[(14)] = inst_7762);

(statearr_7839[(15)] = inst_7760);

(statearr_7839[(16)] = inst_7761);

return statearr_7839;
})();
var statearr_7840_7881 = state_7819__$1;
(statearr_7840_7881[(2)] = null);

(statearr_7840_7881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (3))){
var inst_7817 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7819__$1,inst_7817);
} else {
if((state_val_7820 === (12))){
var inst_7794 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7841_7882 = state_7819__$1;
(statearr_7841_7882[(2)] = inst_7794);

(statearr_7841_7882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (2))){
var state_7819__$1 = state_7819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7819__$1,(4),ch);
} else {
if((state_val_7820 === (23))){
var state_7819__$1 = state_7819;
var statearr_7842_7883 = state_7819__$1;
(statearr_7842_7883[(2)] = null);

(statearr_7842_7883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (19))){
var inst_7800 = (state_7819[(11)]);
var inst_7750 = (state_7819[(8)]);
var inst_7802 = cljs.core.async.muxch_STAR_.call(null,inst_7800);
var state_7819__$1 = state_7819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7819__$1,(22),inst_7802,inst_7750);
} else {
if((state_val_7820 === (11))){
var inst_7774 = (state_7819[(10)]);
var inst_7760 = (state_7819[(15)]);
var inst_7774__$1 = cljs.core.seq.call(null,inst_7760);
var state_7819__$1 = (function (){var statearr_7843 = state_7819;
(statearr_7843[(10)] = inst_7774__$1);

return statearr_7843;
})();
if(inst_7774__$1){
var statearr_7844_7884 = state_7819__$1;
(statearr_7844_7884[(1)] = (13));

} else {
var statearr_7845_7885 = state_7819__$1;
(statearr_7845_7885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (9))){
var inst_7796 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7846_7886 = state_7819__$1;
(statearr_7846_7886[(2)] = inst_7796);

(statearr_7846_7886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (5))){
var inst_7757 = cljs.core.deref.call(null,mults);
var inst_7758 = cljs.core.vals.call(null,inst_7757);
var inst_7759 = cljs.core.seq.call(null,inst_7758);
var inst_7760 = inst_7759;
var inst_7761 = null;
var inst_7762 = (0);
var inst_7763 = (0);
var state_7819__$1 = (function (){var statearr_7847 = state_7819;
(statearr_7847[(12)] = inst_7763);

(statearr_7847[(14)] = inst_7762);

(statearr_7847[(15)] = inst_7760);

(statearr_7847[(16)] = inst_7761);

return statearr_7847;
})();
var statearr_7848_7887 = state_7819__$1;
(statearr_7848_7887[(2)] = null);

(statearr_7848_7887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (14))){
var state_7819__$1 = state_7819;
var statearr_7852_7888 = state_7819__$1;
(statearr_7852_7888[(2)] = null);

(statearr_7852_7888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (16))){
var inst_7774 = (state_7819[(10)]);
var inst_7778 = cljs.core.chunk_first.call(null,inst_7774);
var inst_7779 = cljs.core.chunk_rest.call(null,inst_7774);
var inst_7780 = cljs.core.count.call(null,inst_7778);
var inst_7760 = inst_7779;
var inst_7761 = inst_7778;
var inst_7762 = inst_7780;
var inst_7763 = (0);
var state_7819__$1 = (function (){var statearr_7853 = state_7819;
(statearr_7853[(12)] = inst_7763);

(statearr_7853[(14)] = inst_7762);

(statearr_7853[(15)] = inst_7760);

(statearr_7853[(16)] = inst_7761);

return statearr_7853;
})();
var statearr_7854_7889 = state_7819__$1;
(statearr_7854_7889[(2)] = null);

(statearr_7854_7889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (10))){
var inst_7763 = (state_7819[(12)]);
var inst_7762 = (state_7819[(14)]);
var inst_7760 = (state_7819[(15)]);
var inst_7761 = (state_7819[(16)]);
var inst_7768 = cljs.core._nth.call(null,inst_7761,inst_7763);
var inst_7769 = cljs.core.async.muxch_STAR_.call(null,inst_7768);
var inst_7770 = cljs.core.async.close_BANG_.call(null,inst_7769);
var inst_7771 = (inst_7763 + (1));
var tmp7849 = inst_7762;
var tmp7850 = inst_7760;
var tmp7851 = inst_7761;
var inst_7760__$1 = tmp7850;
var inst_7761__$1 = tmp7851;
var inst_7762__$1 = tmp7849;
var inst_7763__$1 = inst_7771;
var state_7819__$1 = (function (){var statearr_7855 = state_7819;
(statearr_7855[(12)] = inst_7763__$1);

(statearr_7855[(14)] = inst_7762__$1);

(statearr_7855[(17)] = inst_7770);

(statearr_7855[(15)] = inst_7760__$1);

(statearr_7855[(16)] = inst_7761__$1);

return statearr_7855;
})();
var statearr_7856_7890 = state_7819__$1;
(statearr_7856_7890[(2)] = null);

(statearr_7856_7890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (18))){
var inst_7789 = (state_7819[(2)]);
var state_7819__$1 = state_7819;
var statearr_7857_7891 = state_7819__$1;
(statearr_7857_7891[(2)] = inst_7789);

(statearr_7857_7891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7820 === (8))){
var inst_7763 = (state_7819[(12)]);
var inst_7762 = (state_7819[(14)]);
var inst_7765 = (inst_7763 < inst_7762);
var inst_7766 = inst_7765;
var state_7819__$1 = state_7819;
if(cljs.core.truth_(inst_7766)){
var statearr_7858_7892 = state_7819__$1;
(statearr_7858_7892[(1)] = (10));

} else {
var statearr_7859_7893 = state_7819__$1;
(statearr_7859_7893[(1)] = (11));

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
});})(c__6645__auto___7865,mults,ensure_mult,p))
;
return ((function (switch__6557__auto__,c__6645__auto___7865,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_7860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7860[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_7860[(1)] = (1));

return statearr_7860;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_7819){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7861){if((e7861 instanceof Object)){
var ex__6561__auto__ = e7861;
var statearr_7862_7894 = state_7819;
(statearr_7862_7894[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7895 = state_7819;
state_7819 = G__7895;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_7819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_7819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___7865,mults,ensure_mult,p))
})();
var state__6647__auto__ = (function (){var statearr_7863 = f__6646__auto__.call(null);
(statearr_7863[(6)] = c__6645__auto___7865);

return statearr_7863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___7865,mults,ensure_mult,p))
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
var G__7897 = arguments.length;
switch (G__7897) {
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
var G__7900 = arguments.length;
switch (G__7900) {
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
var G__7903 = arguments.length;
switch (G__7903) {
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
var c__6645__auto___7970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7942){
var state_val_7943 = (state_7942[(1)]);
if((state_val_7943 === (7))){
var state_7942__$1 = state_7942;
var statearr_7944_7971 = state_7942__$1;
(statearr_7944_7971[(2)] = null);

(statearr_7944_7971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (1))){
var state_7942__$1 = state_7942;
var statearr_7945_7972 = state_7942__$1;
(statearr_7945_7972[(2)] = null);

(statearr_7945_7972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (4))){
var inst_7906 = (state_7942[(7)]);
var inst_7908 = (inst_7906 < cnt);
var state_7942__$1 = state_7942;
if(cljs.core.truth_(inst_7908)){
var statearr_7946_7973 = state_7942__$1;
(statearr_7946_7973[(1)] = (6));

} else {
var statearr_7947_7974 = state_7942__$1;
(statearr_7947_7974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (15))){
var inst_7938 = (state_7942[(2)]);
var state_7942__$1 = state_7942;
var statearr_7948_7975 = state_7942__$1;
(statearr_7948_7975[(2)] = inst_7938);

(statearr_7948_7975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (13))){
var inst_7931 = cljs.core.async.close_BANG_.call(null,out);
var state_7942__$1 = state_7942;
var statearr_7949_7976 = state_7942__$1;
(statearr_7949_7976[(2)] = inst_7931);

(statearr_7949_7976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (6))){
var state_7942__$1 = state_7942;
var statearr_7950_7977 = state_7942__$1;
(statearr_7950_7977[(2)] = null);

(statearr_7950_7977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (3))){
var inst_7940 = (state_7942[(2)]);
var state_7942__$1 = state_7942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7942__$1,inst_7940);
} else {
if((state_val_7943 === (12))){
var inst_7928 = (state_7942[(8)]);
var inst_7928__$1 = (state_7942[(2)]);
var inst_7929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7928__$1);
var state_7942__$1 = (function (){var statearr_7951 = state_7942;
(statearr_7951[(8)] = inst_7928__$1);

return statearr_7951;
})();
if(cljs.core.truth_(inst_7929)){
var statearr_7952_7978 = state_7942__$1;
(statearr_7952_7978[(1)] = (13));

} else {
var statearr_7953_7979 = state_7942__$1;
(statearr_7953_7979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (2))){
var inst_7905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7906 = (0);
var state_7942__$1 = (function (){var statearr_7954 = state_7942;
(statearr_7954[(7)] = inst_7906);

(statearr_7954[(9)] = inst_7905);

return statearr_7954;
})();
var statearr_7955_7980 = state_7942__$1;
(statearr_7955_7980[(2)] = null);

(statearr_7955_7980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (11))){
var inst_7906 = (state_7942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_7942,(10),Object,null,(9));
var inst_7915 = chs__$1.call(null,inst_7906);
var inst_7916 = done.call(null,inst_7906);
var inst_7917 = cljs.core.async.take_BANG_.call(null,inst_7915,inst_7916);
var state_7942__$1 = state_7942;
var statearr_7956_7981 = state_7942__$1;
(statearr_7956_7981[(2)] = inst_7917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (9))){
var inst_7906 = (state_7942[(7)]);
var inst_7919 = (state_7942[(2)]);
var inst_7920 = (inst_7906 + (1));
var inst_7906__$1 = inst_7920;
var state_7942__$1 = (function (){var statearr_7957 = state_7942;
(statearr_7957[(10)] = inst_7919);

(statearr_7957[(7)] = inst_7906__$1);

return statearr_7957;
})();
var statearr_7958_7982 = state_7942__$1;
(statearr_7958_7982[(2)] = null);

(statearr_7958_7982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (5))){
var inst_7926 = (state_7942[(2)]);
var state_7942__$1 = (function (){var statearr_7959 = state_7942;
(statearr_7959[(11)] = inst_7926);

return statearr_7959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7942__$1,(12),dchan);
} else {
if((state_val_7943 === (14))){
var inst_7928 = (state_7942[(8)]);
var inst_7933 = cljs.core.apply.call(null,f,inst_7928);
var state_7942__$1 = state_7942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7942__$1,(16),out,inst_7933);
} else {
if((state_val_7943 === (16))){
var inst_7935 = (state_7942[(2)]);
var state_7942__$1 = (function (){var statearr_7960 = state_7942;
(statearr_7960[(12)] = inst_7935);

return statearr_7960;
})();
var statearr_7961_7983 = state_7942__$1;
(statearr_7961_7983[(2)] = null);

(statearr_7961_7983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (10))){
var inst_7910 = (state_7942[(2)]);
var inst_7911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7942__$1 = (function (){var statearr_7962 = state_7942;
(statearr_7962[(13)] = inst_7910);

return statearr_7962;
})();
var statearr_7963_7984 = state_7942__$1;
(statearr_7963_7984[(2)] = inst_7911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7943 === (8))){
var inst_7924 = (state_7942[(2)]);
var state_7942__$1 = state_7942;
var statearr_7964_7985 = state_7942__$1;
(statearr_7964_7985[(2)] = inst_7924);

(statearr_7964_7985[(1)] = (5));


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
});})(c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6557__auto__,c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_7965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7965[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_7965[(1)] = (1));

return statearr_7965;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_7942){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_7942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e7966){if((e7966 instanceof Object)){
var ex__6561__auto__ = e7966;
var statearr_7967_7986 = state_7942;
(statearr_7967_7986[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7987 = state_7942;
state_7942 = G__7987;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_7942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_7942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_7968 = f__6646__auto__.call(null);
(statearr_7968[(6)] = c__6645__auto___7970);

return statearr_7968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___7970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__7990 = arguments.length;
switch (G__7990) {
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
var c__6645__auto___8044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8044,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8044,out){
return (function (state_8022){
var state_val_8023 = (state_8022[(1)]);
if((state_val_8023 === (7))){
var inst_8001 = (state_8022[(7)]);
var inst_8002 = (state_8022[(8)]);
var inst_8001__$1 = (state_8022[(2)]);
var inst_8002__$1 = cljs.core.nth.call(null,inst_8001__$1,(0),null);
var inst_8003 = cljs.core.nth.call(null,inst_8001__$1,(1),null);
var inst_8004 = (inst_8002__$1 == null);
var state_8022__$1 = (function (){var statearr_8024 = state_8022;
(statearr_8024[(7)] = inst_8001__$1);

(statearr_8024[(9)] = inst_8003);

(statearr_8024[(8)] = inst_8002__$1);

return statearr_8024;
})();
if(cljs.core.truth_(inst_8004)){
var statearr_8025_8045 = state_8022__$1;
(statearr_8025_8045[(1)] = (8));

} else {
var statearr_8026_8046 = state_8022__$1;
(statearr_8026_8046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (1))){
var inst_7991 = cljs.core.vec.call(null,chs);
var inst_7992 = inst_7991;
var state_8022__$1 = (function (){var statearr_8027 = state_8022;
(statearr_8027[(10)] = inst_7992);

return statearr_8027;
})();
var statearr_8028_8047 = state_8022__$1;
(statearr_8028_8047[(2)] = null);

(statearr_8028_8047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (4))){
var inst_7992 = (state_8022[(10)]);
var state_8022__$1 = state_8022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8022__$1,(7),inst_7992);
} else {
if((state_val_8023 === (6))){
var inst_8018 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
var statearr_8029_8048 = state_8022__$1;
(statearr_8029_8048[(2)] = inst_8018);

(statearr_8029_8048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (3))){
var inst_8020 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8022__$1,inst_8020);
} else {
if((state_val_8023 === (2))){
var inst_7992 = (state_8022[(10)]);
var inst_7994 = cljs.core.count.call(null,inst_7992);
var inst_7995 = (inst_7994 > (0));
var state_8022__$1 = state_8022;
if(cljs.core.truth_(inst_7995)){
var statearr_8031_8049 = state_8022__$1;
(statearr_8031_8049[(1)] = (4));

} else {
var statearr_8032_8050 = state_8022__$1;
(statearr_8032_8050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (11))){
var inst_7992 = (state_8022[(10)]);
var inst_8011 = (state_8022[(2)]);
var tmp8030 = inst_7992;
var inst_7992__$1 = tmp8030;
var state_8022__$1 = (function (){var statearr_8033 = state_8022;
(statearr_8033[(10)] = inst_7992__$1);

(statearr_8033[(11)] = inst_8011);

return statearr_8033;
})();
var statearr_8034_8051 = state_8022__$1;
(statearr_8034_8051[(2)] = null);

(statearr_8034_8051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (9))){
var inst_8002 = (state_8022[(8)]);
var state_8022__$1 = state_8022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8022__$1,(11),out,inst_8002);
} else {
if((state_val_8023 === (5))){
var inst_8016 = cljs.core.async.close_BANG_.call(null,out);
var state_8022__$1 = state_8022;
var statearr_8035_8052 = state_8022__$1;
(statearr_8035_8052[(2)] = inst_8016);

(statearr_8035_8052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (10))){
var inst_8014 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
var statearr_8036_8053 = state_8022__$1;
(statearr_8036_8053[(2)] = inst_8014);

(statearr_8036_8053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (8))){
var inst_7992 = (state_8022[(10)]);
var inst_8001 = (state_8022[(7)]);
var inst_8003 = (state_8022[(9)]);
var inst_8002 = (state_8022[(8)]);
var inst_8006 = (function (){var cs = inst_7992;
var vec__7997 = inst_8001;
var v = inst_8002;
var c = inst_8003;
return ((function (cs,vec__7997,v,c,inst_7992,inst_8001,inst_8003,inst_8002,state_val_8023,c__6645__auto___8044,out){
return (function (p1__7988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7988_SHARP_);
});
;})(cs,vec__7997,v,c,inst_7992,inst_8001,inst_8003,inst_8002,state_val_8023,c__6645__auto___8044,out))
})();
var inst_8007 = cljs.core.filterv.call(null,inst_8006,inst_7992);
var inst_7992__$1 = inst_8007;
var state_8022__$1 = (function (){var statearr_8037 = state_8022;
(statearr_8037[(10)] = inst_7992__$1);

return statearr_8037;
})();
var statearr_8038_8054 = state_8022__$1;
(statearr_8038_8054[(2)] = null);

(statearr_8038_8054[(1)] = (2));


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
});})(c__6645__auto___8044,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8044,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8039[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8039[(1)] = (1));

return statearr_8039;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8022){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8040){if((e8040 instanceof Object)){
var ex__6561__auto__ = e8040;
var statearr_8041_8055 = state_8022;
(statearr_8041_8055[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8056 = state_8022;
state_8022 = G__8056;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8044,out))
})();
var state__6647__auto__ = (function (){var statearr_8042 = f__6646__auto__.call(null);
(statearr_8042[(6)] = c__6645__auto___8044);

return statearr_8042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8044,out))
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
var G__8058 = arguments.length;
switch (G__8058) {
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
var c__6645__auto___8103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8103,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8103,out){
return (function (state_8082){
var state_val_8083 = (state_8082[(1)]);
if((state_val_8083 === (7))){
var inst_8064 = (state_8082[(7)]);
var inst_8064__$1 = (state_8082[(2)]);
var inst_8065 = (inst_8064__$1 == null);
var inst_8066 = cljs.core.not.call(null,inst_8065);
var state_8082__$1 = (function (){var statearr_8084 = state_8082;
(statearr_8084[(7)] = inst_8064__$1);

return statearr_8084;
})();
if(inst_8066){
var statearr_8085_8104 = state_8082__$1;
(statearr_8085_8104[(1)] = (8));

} else {
var statearr_8086_8105 = state_8082__$1;
(statearr_8086_8105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (1))){
var inst_8059 = (0);
var state_8082__$1 = (function (){var statearr_8087 = state_8082;
(statearr_8087[(8)] = inst_8059);

return statearr_8087;
})();
var statearr_8088_8106 = state_8082__$1;
(statearr_8088_8106[(2)] = null);

(statearr_8088_8106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (4))){
var state_8082__$1 = state_8082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8082__$1,(7),ch);
} else {
if((state_val_8083 === (6))){
var inst_8077 = (state_8082[(2)]);
var state_8082__$1 = state_8082;
var statearr_8089_8107 = state_8082__$1;
(statearr_8089_8107[(2)] = inst_8077);

(statearr_8089_8107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (3))){
var inst_8079 = (state_8082[(2)]);
var inst_8080 = cljs.core.async.close_BANG_.call(null,out);
var state_8082__$1 = (function (){var statearr_8090 = state_8082;
(statearr_8090[(9)] = inst_8079);

return statearr_8090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8082__$1,inst_8080);
} else {
if((state_val_8083 === (2))){
var inst_8059 = (state_8082[(8)]);
var inst_8061 = (inst_8059 < n);
var state_8082__$1 = state_8082;
if(cljs.core.truth_(inst_8061)){
var statearr_8091_8108 = state_8082__$1;
(statearr_8091_8108[(1)] = (4));

} else {
var statearr_8092_8109 = state_8082__$1;
(statearr_8092_8109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (11))){
var inst_8059 = (state_8082[(8)]);
var inst_8069 = (state_8082[(2)]);
var inst_8070 = (inst_8059 + (1));
var inst_8059__$1 = inst_8070;
var state_8082__$1 = (function (){var statearr_8093 = state_8082;
(statearr_8093[(10)] = inst_8069);

(statearr_8093[(8)] = inst_8059__$1);

return statearr_8093;
})();
var statearr_8094_8110 = state_8082__$1;
(statearr_8094_8110[(2)] = null);

(statearr_8094_8110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (9))){
var state_8082__$1 = state_8082;
var statearr_8095_8111 = state_8082__$1;
(statearr_8095_8111[(2)] = null);

(statearr_8095_8111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (5))){
var state_8082__$1 = state_8082;
var statearr_8096_8112 = state_8082__$1;
(statearr_8096_8112[(2)] = null);

(statearr_8096_8112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (10))){
var inst_8074 = (state_8082[(2)]);
var state_8082__$1 = state_8082;
var statearr_8097_8113 = state_8082__$1;
(statearr_8097_8113[(2)] = inst_8074);

(statearr_8097_8113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (8))){
var inst_8064 = (state_8082[(7)]);
var state_8082__$1 = state_8082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8082__$1,(11),out,inst_8064);
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
});})(c__6645__auto___8103,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8103,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8098[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8098[(1)] = (1));

return statearr_8098;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8082){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8099){if((e8099 instanceof Object)){
var ex__6561__auto__ = e8099;
var statearr_8100_8114 = state_8082;
(statearr_8100_8114[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8115 = state_8082;
state_8082 = G__8115;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8103,out))
})();
var state__6647__auto__ = (function (){var statearr_8101 = f__6646__auto__.call(null);
(statearr_8101[(6)] = c__6645__auto___8103);

return statearr_8101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8103,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8117 = (function (f,ch,meta8118){
this.f = f;
this.ch = ch;
this.meta8118 = meta8118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8119,meta8118__$1){
var self__ = this;
var _8119__$1 = this;
return (new cljs.core.async.t_cljs$core$async8117(self__.f,self__.ch,meta8118__$1));
});

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8119){
var self__ = this;
var _8119__$1 = this;
return self__.meta8118;
});

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async8120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8120 = (function (f,ch,meta8118,_,fn1,meta8121){
this.f = f;
this.ch = ch;
this.meta8118 = meta8118;
this._ = _;
this.fn1 = fn1;
this.meta8121 = meta8121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8122,meta8121__$1){
var self__ = this;
var _8122__$1 = this;
return (new cljs.core.async.t_cljs$core$async8120(self__.f,self__.ch,self__.meta8118,self__._,self__.fn1,meta8121__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8122){
var self__ = this;
var _8122__$1 = this;
return self__.meta8121;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8116_SHARP_){
return f1.call(null,(((p1__8116_SHARP_ == null))?null:self__.f.call(null,p1__8116_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8118","meta8118",10221883,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8117","cljs.core.async/t_cljs$core$async8117",804547184,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8121","meta8121",-1706939312,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8120";

cljs.core.async.t_cljs$core$async8120.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8120");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8120.
 */
cljs.core.async.__GT_t_cljs$core$async8120 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8120(f__$1,ch__$1,meta8118__$1,___$2,fn1__$1,meta8121){
return (new cljs.core.async.t_cljs$core$async8120(f__$1,ch__$1,meta8118__$1,___$2,fn1__$1,meta8121));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8120(self__.f,self__.ch,self__.meta8118,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8118","meta8118",10221883,null)], null);
});

cljs.core.async.t_cljs$core$async8117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8117";

cljs.core.async.t_cljs$core$async8117.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8117.
 */
cljs.core.async.__GT_t_cljs$core$async8117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8117(f__$1,ch__$1,meta8118){
return (new cljs.core.async.t_cljs$core$async8117(f__$1,ch__$1,meta8118));
});

}

return (new cljs.core.async.t_cljs$core$async8117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8123 = (function (f,ch,meta8124){
this.f = f;
this.ch = ch;
this.meta8124 = meta8124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8125,meta8124__$1){
var self__ = this;
var _8125__$1 = this;
return (new cljs.core.async.t_cljs$core$async8123(self__.f,self__.ch,meta8124__$1));
});

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8125){
var self__ = this;
var _8125__$1 = this;
return self__.meta8124;
});

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8124","meta8124",1120399525,null)], null);
});

cljs.core.async.t_cljs$core$async8123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8123";

cljs.core.async.t_cljs$core$async8123.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8123");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8123.
 */
cljs.core.async.__GT_t_cljs$core$async8123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8123(f__$1,ch__$1,meta8124){
return (new cljs.core.async.t_cljs$core$async8123(f__$1,ch__$1,meta8124));
});

}

return (new cljs.core.async.t_cljs$core$async8123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async8126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8126 = (function (p,ch,meta8127){
this.p = p;
this.ch = ch;
this.meta8127 = meta8127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8128,meta8127__$1){
var self__ = this;
var _8128__$1 = this;
return (new cljs.core.async.t_cljs$core$async8126(self__.p,self__.ch,meta8127__$1));
});

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8128){
var self__ = this;
var _8128__$1 = this;
return self__.meta8127;
});

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8127","meta8127",-2048173040,null)], null);
});

cljs.core.async.t_cljs$core$async8126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8126";

cljs.core.async.t_cljs$core$async8126.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8126");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8126.
 */
cljs.core.async.__GT_t_cljs$core$async8126 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8126(p__$1,ch__$1,meta8127){
return (new cljs.core.async.t_cljs$core$async8126(p__$1,ch__$1,meta8127));
});

}

return (new cljs.core.async.t_cljs$core$async8126(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8130 = arguments.length;
switch (G__8130) {
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
var c__6645__auto___8170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8170,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8170,out){
return (function (state_8151){
var state_val_8152 = (state_8151[(1)]);
if((state_val_8152 === (7))){
var inst_8147 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8153_8171 = state_8151__$1;
(statearr_8153_8171[(2)] = inst_8147);

(statearr_8153_8171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (1))){
var state_8151__$1 = state_8151;
var statearr_8154_8172 = state_8151__$1;
(statearr_8154_8172[(2)] = null);

(statearr_8154_8172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (4))){
var inst_8133 = (state_8151[(7)]);
var inst_8133__$1 = (state_8151[(2)]);
var inst_8134 = (inst_8133__$1 == null);
var state_8151__$1 = (function (){var statearr_8155 = state_8151;
(statearr_8155[(7)] = inst_8133__$1);

return statearr_8155;
})();
if(cljs.core.truth_(inst_8134)){
var statearr_8156_8173 = state_8151__$1;
(statearr_8156_8173[(1)] = (5));

} else {
var statearr_8157_8174 = state_8151__$1;
(statearr_8157_8174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (6))){
var inst_8133 = (state_8151[(7)]);
var inst_8138 = p.call(null,inst_8133);
var state_8151__$1 = state_8151;
if(cljs.core.truth_(inst_8138)){
var statearr_8158_8175 = state_8151__$1;
(statearr_8158_8175[(1)] = (8));

} else {
var statearr_8159_8176 = state_8151__$1;
(statearr_8159_8176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (3))){
var inst_8149 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8151__$1,inst_8149);
} else {
if((state_val_8152 === (2))){
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8151__$1,(4),ch);
} else {
if((state_val_8152 === (11))){
var inst_8141 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8160_8177 = state_8151__$1;
(statearr_8160_8177[(2)] = inst_8141);

(statearr_8160_8177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (9))){
var state_8151__$1 = state_8151;
var statearr_8161_8178 = state_8151__$1;
(statearr_8161_8178[(2)] = null);

(statearr_8161_8178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (5))){
var inst_8136 = cljs.core.async.close_BANG_.call(null,out);
var state_8151__$1 = state_8151;
var statearr_8162_8179 = state_8151__$1;
(statearr_8162_8179[(2)] = inst_8136);

(statearr_8162_8179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (10))){
var inst_8144 = (state_8151[(2)]);
var state_8151__$1 = (function (){var statearr_8163 = state_8151;
(statearr_8163[(8)] = inst_8144);

return statearr_8163;
})();
var statearr_8164_8180 = state_8151__$1;
(statearr_8164_8180[(2)] = null);

(statearr_8164_8180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8152 === (8))){
var inst_8133 = (state_8151[(7)]);
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8151__$1,(11),out,inst_8133);
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
});})(c__6645__auto___8170,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8170,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8165 = [null,null,null,null,null,null,null,null,null];
(statearr_8165[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8165[(1)] = (1));

return statearr_8165;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8151){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8166){if((e8166 instanceof Object)){
var ex__6561__auto__ = e8166;
var statearr_8167_8181 = state_8151;
(statearr_8167_8181[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8182 = state_8151;
state_8151 = G__8182;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8170,out))
})();
var state__6647__auto__ = (function (){var statearr_8168 = f__6646__auto__.call(null);
(statearr_8168[(6)] = c__6645__auto___8170);

return statearr_8168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8184 = arguments.length;
switch (G__8184) {
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
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto__){
return (function (state_8247){
var state_val_8248 = (state_8247[(1)]);
if((state_val_8248 === (7))){
var inst_8243 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
var statearr_8249_8287 = state_8247__$1;
(statearr_8249_8287[(2)] = inst_8243);

(statearr_8249_8287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (20))){
var inst_8213 = (state_8247[(7)]);
var inst_8224 = (state_8247[(2)]);
var inst_8225 = cljs.core.next.call(null,inst_8213);
var inst_8199 = inst_8225;
var inst_8200 = null;
var inst_8201 = (0);
var inst_8202 = (0);
var state_8247__$1 = (function (){var statearr_8250 = state_8247;
(statearr_8250[(8)] = inst_8200);

(statearr_8250[(9)] = inst_8224);

(statearr_8250[(10)] = inst_8199);

(statearr_8250[(11)] = inst_8202);

(statearr_8250[(12)] = inst_8201);

return statearr_8250;
})();
var statearr_8251_8288 = state_8247__$1;
(statearr_8251_8288[(2)] = null);

(statearr_8251_8288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (1))){
var state_8247__$1 = state_8247;
var statearr_8252_8289 = state_8247__$1;
(statearr_8252_8289[(2)] = null);

(statearr_8252_8289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (4))){
var inst_8188 = (state_8247[(13)]);
var inst_8188__$1 = (state_8247[(2)]);
var inst_8189 = (inst_8188__$1 == null);
var state_8247__$1 = (function (){var statearr_8253 = state_8247;
(statearr_8253[(13)] = inst_8188__$1);

return statearr_8253;
})();
if(cljs.core.truth_(inst_8189)){
var statearr_8254_8290 = state_8247__$1;
(statearr_8254_8290[(1)] = (5));

} else {
var statearr_8255_8291 = state_8247__$1;
(statearr_8255_8291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (15))){
var state_8247__$1 = state_8247;
var statearr_8259_8292 = state_8247__$1;
(statearr_8259_8292[(2)] = null);

(statearr_8259_8292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (21))){
var state_8247__$1 = state_8247;
var statearr_8260_8293 = state_8247__$1;
(statearr_8260_8293[(2)] = null);

(statearr_8260_8293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (13))){
var inst_8200 = (state_8247[(8)]);
var inst_8199 = (state_8247[(10)]);
var inst_8202 = (state_8247[(11)]);
var inst_8201 = (state_8247[(12)]);
var inst_8209 = (state_8247[(2)]);
var inst_8210 = (inst_8202 + (1));
var tmp8256 = inst_8200;
var tmp8257 = inst_8199;
var tmp8258 = inst_8201;
var inst_8199__$1 = tmp8257;
var inst_8200__$1 = tmp8256;
var inst_8201__$1 = tmp8258;
var inst_8202__$1 = inst_8210;
var state_8247__$1 = (function (){var statearr_8261 = state_8247;
(statearr_8261[(8)] = inst_8200__$1);

(statearr_8261[(14)] = inst_8209);

(statearr_8261[(10)] = inst_8199__$1);

(statearr_8261[(11)] = inst_8202__$1);

(statearr_8261[(12)] = inst_8201__$1);

return statearr_8261;
})();
var statearr_8262_8294 = state_8247__$1;
(statearr_8262_8294[(2)] = null);

(statearr_8262_8294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (22))){
var state_8247__$1 = state_8247;
var statearr_8263_8295 = state_8247__$1;
(statearr_8263_8295[(2)] = null);

(statearr_8263_8295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (6))){
var inst_8188 = (state_8247[(13)]);
var inst_8197 = f.call(null,inst_8188);
var inst_8198 = cljs.core.seq.call(null,inst_8197);
var inst_8199 = inst_8198;
var inst_8200 = null;
var inst_8201 = (0);
var inst_8202 = (0);
var state_8247__$1 = (function (){var statearr_8264 = state_8247;
(statearr_8264[(8)] = inst_8200);

(statearr_8264[(10)] = inst_8199);

(statearr_8264[(11)] = inst_8202);

(statearr_8264[(12)] = inst_8201);

return statearr_8264;
})();
var statearr_8265_8296 = state_8247__$1;
(statearr_8265_8296[(2)] = null);

(statearr_8265_8296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (17))){
var inst_8213 = (state_8247[(7)]);
var inst_8217 = cljs.core.chunk_first.call(null,inst_8213);
var inst_8218 = cljs.core.chunk_rest.call(null,inst_8213);
var inst_8219 = cljs.core.count.call(null,inst_8217);
var inst_8199 = inst_8218;
var inst_8200 = inst_8217;
var inst_8201 = inst_8219;
var inst_8202 = (0);
var state_8247__$1 = (function (){var statearr_8266 = state_8247;
(statearr_8266[(8)] = inst_8200);

(statearr_8266[(10)] = inst_8199);

(statearr_8266[(11)] = inst_8202);

(statearr_8266[(12)] = inst_8201);

return statearr_8266;
})();
var statearr_8267_8297 = state_8247__$1;
(statearr_8267_8297[(2)] = null);

(statearr_8267_8297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (3))){
var inst_8245 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8247__$1,inst_8245);
} else {
if((state_val_8248 === (12))){
var inst_8233 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
var statearr_8268_8298 = state_8247__$1;
(statearr_8268_8298[(2)] = inst_8233);

(statearr_8268_8298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (2))){
var state_8247__$1 = state_8247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8247__$1,(4),in$);
} else {
if((state_val_8248 === (23))){
var inst_8241 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
var statearr_8269_8299 = state_8247__$1;
(statearr_8269_8299[(2)] = inst_8241);

(statearr_8269_8299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (19))){
var inst_8228 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
var statearr_8270_8300 = state_8247__$1;
(statearr_8270_8300[(2)] = inst_8228);

(statearr_8270_8300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (11))){
var inst_8199 = (state_8247[(10)]);
var inst_8213 = (state_8247[(7)]);
var inst_8213__$1 = cljs.core.seq.call(null,inst_8199);
var state_8247__$1 = (function (){var statearr_8271 = state_8247;
(statearr_8271[(7)] = inst_8213__$1);

return statearr_8271;
})();
if(inst_8213__$1){
var statearr_8272_8301 = state_8247__$1;
(statearr_8272_8301[(1)] = (14));

} else {
var statearr_8273_8302 = state_8247__$1;
(statearr_8273_8302[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (9))){
var inst_8235 = (state_8247[(2)]);
var inst_8236 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8247__$1 = (function (){var statearr_8274 = state_8247;
(statearr_8274[(15)] = inst_8235);

return statearr_8274;
})();
if(cljs.core.truth_(inst_8236)){
var statearr_8275_8303 = state_8247__$1;
(statearr_8275_8303[(1)] = (21));

} else {
var statearr_8276_8304 = state_8247__$1;
(statearr_8276_8304[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (5))){
var inst_8191 = cljs.core.async.close_BANG_.call(null,out);
var state_8247__$1 = state_8247;
var statearr_8277_8305 = state_8247__$1;
(statearr_8277_8305[(2)] = inst_8191);

(statearr_8277_8305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (14))){
var inst_8213 = (state_8247[(7)]);
var inst_8215 = cljs.core.chunked_seq_QMARK_.call(null,inst_8213);
var state_8247__$1 = state_8247;
if(inst_8215){
var statearr_8278_8306 = state_8247__$1;
(statearr_8278_8306[(1)] = (17));

} else {
var statearr_8279_8307 = state_8247__$1;
(statearr_8279_8307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (16))){
var inst_8231 = (state_8247[(2)]);
var state_8247__$1 = state_8247;
var statearr_8280_8308 = state_8247__$1;
(statearr_8280_8308[(2)] = inst_8231);

(statearr_8280_8308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8248 === (10))){
var inst_8200 = (state_8247[(8)]);
var inst_8202 = (state_8247[(11)]);
var inst_8207 = cljs.core._nth.call(null,inst_8200,inst_8202);
var state_8247__$1 = state_8247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8247__$1,(13),out,inst_8207);
} else {
if((state_val_8248 === (18))){
var inst_8213 = (state_8247[(7)]);
var inst_8222 = cljs.core.first.call(null,inst_8213);
var state_8247__$1 = state_8247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8247__$1,(20),out,inst_8222);
} else {
if((state_val_8248 === (8))){
var inst_8202 = (state_8247[(11)]);
var inst_8201 = (state_8247[(12)]);
var inst_8204 = (inst_8202 < inst_8201);
var inst_8205 = inst_8204;
var state_8247__$1 = state_8247;
if(cljs.core.truth_(inst_8205)){
var statearr_8281_8309 = state_8247__$1;
(statearr_8281_8309[(1)] = (10));

} else {
var statearr_8282_8310 = state_8247__$1;
(statearr_8282_8310[(1)] = (11));

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
});})(c__6645__auto__))
;
return ((function (switch__6557__auto__,c__6645__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____0 = (function (){
var statearr_8283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__);

(statearr_8283[(1)] = (1));

return statearr_8283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____1 = (function (state_8247){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8284){if((e8284 instanceof Object)){
var ex__6561__auto__ = e8284;
var statearr_8285_8311 = state_8247;
(statearr_8285_8311[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8312 = state_8247;
state_8247 = G__8312;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__ = function(state_8247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____1.call(this,state_8247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6558__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_8286 = f__6646__auto__.call(null);
(statearr_8286[(6)] = c__6645__auto__);

return statearr_8286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8314 = arguments.length;
switch (G__8314) {
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
var G__8317 = arguments.length;
switch (G__8317) {
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
var G__8320 = arguments.length;
switch (G__8320) {
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
var c__6645__auto___8367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8367,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8367,out){
return (function (state_8344){
var state_val_8345 = (state_8344[(1)]);
if((state_val_8345 === (7))){
var inst_8339 = (state_8344[(2)]);
var state_8344__$1 = state_8344;
var statearr_8346_8368 = state_8344__$1;
(statearr_8346_8368[(2)] = inst_8339);

(statearr_8346_8368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (1))){
var inst_8321 = null;
var state_8344__$1 = (function (){var statearr_8347 = state_8344;
(statearr_8347[(7)] = inst_8321);

return statearr_8347;
})();
var statearr_8348_8369 = state_8344__$1;
(statearr_8348_8369[(2)] = null);

(statearr_8348_8369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (4))){
var inst_8324 = (state_8344[(8)]);
var inst_8324__$1 = (state_8344[(2)]);
var inst_8325 = (inst_8324__$1 == null);
var inst_8326 = cljs.core.not.call(null,inst_8325);
var state_8344__$1 = (function (){var statearr_8349 = state_8344;
(statearr_8349[(8)] = inst_8324__$1);

return statearr_8349;
})();
if(inst_8326){
var statearr_8350_8370 = state_8344__$1;
(statearr_8350_8370[(1)] = (5));

} else {
var statearr_8351_8371 = state_8344__$1;
(statearr_8351_8371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (6))){
var state_8344__$1 = state_8344;
var statearr_8352_8372 = state_8344__$1;
(statearr_8352_8372[(2)] = null);

(statearr_8352_8372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (3))){
var inst_8341 = (state_8344[(2)]);
var inst_8342 = cljs.core.async.close_BANG_.call(null,out);
var state_8344__$1 = (function (){var statearr_8353 = state_8344;
(statearr_8353[(9)] = inst_8341);

return statearr_8353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8344__$1,inst_8342);
} else {
if((state_val_8345 === (2))){
var state_8344__$1 = state_8344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8344__$1,(4),ch);
} else {
if((state_val_8345 === (11))){
var inst_8324 = (state_8344[(8)]);
var inst_8333 = (state_8344[(2)]);
var inst_8321 = inst_8324;
var state_8344__$1 = (function (){var statearr_8354 = state_8344;
(statearr_8354[(7)] = inst_8321);

(statearr_8354[(10)] = inst_8333);

return statearr_8354;
})();
var statearr_8355_8373 = state_8344__$1;
(statearr_8355_8373[(2)] = null);

(statearr_8355_8373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (9))){
var inst_8324 = (state_8344[(8)]);
var state_8344__$1 = state_8344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8344__$1,(11),out,inst_8324);
} else {
if((state_val_8345 === (5))){
var inst_8321 = (state_8344[(7)]);
var inst_8324 = (state_8344[(8)]);
var inst_8328 = cljs.core._EQ_.call(null,inst_8324,inst_8321);
var state_8344__$1 = state_8344;
if(inst_8328){
var statearr_8357_8374 = state_8344__$1;
(statearr_8357_8374[(1)] = (8));

} else {
var statearr_8358_8375 = state_8344__$1;
(statearr_8358_8375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (10))){
var inst_8336 = (state_8344[(2)]);
var state_8344__$1 = state_8344;
var statearr_8359_8376 = state_8344__$1;
(statearr_8359_8376[(2)] = inst_8336);

(statearr_8359_8376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8345 === (8))){
var inst_8321 = (state_8344[(7)]);
var tmp8356 = inst_8321;
var inst_8321__$1 = tmp8356;
var state_8344__$1 = (function (){var statearr_8360 = state_8344;
(statearr_8360[(7)] = inst_8321__$1);

return statearr_8360;
})();
var statearr_8361_8377 = state_8344__$1;
(statearr_8361_8377[(2)] = null);

(statearr_8361_8377[(1)] = (2));


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
});})(c__6645__auto___8367,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8367,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8362[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8362[(1)] = (1));

return statearr_8362;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8344){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8363){if((e8363 instanceof Object)){
var ex__6561__auto__ = e8363;
var statearr_8364_8378 = state_8344;
(statearr_8364_8378[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8379 = state_8344;
state_8344 = G__8379;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8367,out))
})();
var state__6647__auto__ = (function (){var statearr_8365 = f__6646__auto__.call(null);
(statearr_8365[(6)] = c__6645__auto___8367);

return statearr_8365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8367,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8381 = arguments.length;
switch (G__8381) {
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
var c__6645__auto___8447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8447,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8447,out){
return (function (state_8419){
var state_val_8420 = (state_8419[(1)]);
if((state_val_8420 === (7))){
var inst_8415 = (state_8419[(2)]);
var state_8419__$1 = state_8419;
var statearr_8421_8448 = state_8419__$1;
(statearr_8421_8448[(2)] = inst_8415);

(statearr_8421_8448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (1))){
var inst_8382 = (new Array(n));
var inst_8383 = inst_8382;
var inst_8384 = (0);
var state_8419__$1 = (function (){var statearr_8422 = state_8419;
(statearr_8422[(7)] = inst_8383);

(statearr_8422[(8)] = inst_8384);

return statearr_8422;
})();
var statearr_8423_8449 = state_8419__$1;
(statearr_8423_8449[(2)] = null);

(statearr_8423_8449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (4))){
var inst_8387 = (state_8419[(9)]);
var inst_8387__$1 = (state_8419[(2)]);
var inst_8388 = (inst_8387__$1 == null);
var inst_8389 = cljs.core.not.call(null,inst_8388);
var state_8419__$1 = (function (){var statearr_8424 = state_8419;
(statearr_8424[(9)] = inst_8387__$1);

return statearr_8424;
})();
if(inst_8389){
var statearr_8425_8450 = state_8419__$1;
(statearr_8425_8450[(1)] = (5));

} else {
var statearr_8426_8451 = state_8419__$1;
(statearr_8426_8451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (15))){
var inst_8409 = (state_8419[(2)]);
var state_8419__$1 = state_8419;
var statearr_8427_8452 = state_8419__$1;
(statearr_8427_8452[(2)] = inst_8409);

(statearr_8427_8452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (13))){
var state_8419__$1 = state_8419;
var statearr_8428_8453 = state_8419__$1;
(statearr_8428_8453[(2)] = null);

(statearr_8428_8453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (6))){
var inst_8384 = (state_8419[(8)]);
var inst_8405 = (inst_8384 > (0));
var state_8419__$1 = state_8419;
if(cljs.core.truth_(inst_8405)){
var statearr_8429_8454 = state_8419__$1;
(statearr_8429_8454[(1)] = (12));

} else {
var statearr_8430_8455 = state_8419__$1;
(statearr_8430_8455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (3))){
var inst_8417 = (state_8419[(2)]);
var state_8419__$1 = state_8419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8419__$1,inst_8417);
} else {
if((state_val_8420 === (12))){
var inst_8383 = (state_8419[(7)]);
var inst_8407 = cljs.core.vec.call(null,inst_8383);
var state_8419__$1 = state_8419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8419__$1,(15),out,inst_8407);
} else {
if((state_val_8420 === (2))){
var state_8419__$1 = state_8419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8419__$1,(4),ch);
} else {
if((state_val_8420 === (11))){
var inst_8399 = (state_8419[(2)]);
var inst_8400 = (new Array(n));
var inst_8383 = inst_8400;
var inst_8384 = (0);
var state_8419__$1 = (function (){var statearr_8431 = state_8419;
(statearr_8431[(7)] = inst_8383);

(statearr_8431[(10)] = inst_8399);

(statearr_8431[(8)] = inst_8384);

return statearr_8431;
})();
var statearr_8432_8456 = state_8419__$1;
(statearr_8432_8456[(2)] = null);

(statearr_8432_8456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (9))){
var inst_8383 = (state_8419[(7)]);
var inst_8397 = cljs.core.vec.call(null,inst_8383);
var state_8419__$1 = state_8419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8419__$1,(11),out,inst_8397);
} else {
if((state_val_8420 === (5))){
var inst_8383 = (state_8419[(7)]);
var inst_8387 = (state_8419[(9)]);
var inst_8392 = (state_8419[(11)]);
var inst_8384 = (state_8419[(8)]);
var inst_8391 = (inst_8383[inst_8384] = inst_8387);
var inst_8392__$1 = (inst_8384 + (1));
var inst_8393 = (inst_8392__$1 < n);
var state_8419__$1 = (function (){var statearr_8433 = state_8419;
(statearr_8433[(11)] = inst_8392__$1);

(statearr_8433[(12)] = inst_8391);

return statearr_8433;
})();
if(cljs.core.truth_(inst_8393)){
var statearr_8434_8457 = state_8419__$1;
(statearr_8434_8457[(1)] = (8));

} else {
var statearr_8435_8458 = state_8419__$1;
(statearr_8435_8458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (14))){
var inst_8412 = (state_8419[(2)]);
var inst_8413 = cljs.core.async.close_BANG_.call(null,out);
var state_8419__$1 = (function (){var statearr_8437 = state_8419;
(statearr_8437[(13)] = inst_8412);

return statearr_8437;
})();
var statearr_8438_8459 = state_8419__$1;
(statearr_8438_8459[(2)] = inst_8413);

(statearr_8438_8459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (10))){
var inst_8403 = (state_8419[(2)]);
var state_8419__$1 = state_8419;
var statearr_8439_8460 = state_8419__$1;
(statearr_8439_8460[(2)] = inst_8403);

(statearr_8439_8460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8420 === (8))){
var inst_8383 = (state_8419[(7)]);
var inst_8392 = (state_8419[(11)]);
var tmp8436 = inst_8383;
var inst_8383__$1 = tmp8436;
var inst_8384 = inst_8392;
var state_8419__$1 = (function (){var statearr_8440 = state_8419;
(statearr_8440[(7)] = inst_8383__$1);

(statearr_8440[(8)] = inst_8384);

return statearr_8440;
})();
var statearr_8441_8461 = state_8419__$1;
(statearr_8441_8461[(2)] = null);

(statearr_8441_8461[(1)] = (2));


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
});})(c__6645__auto___8447,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8447,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8442[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8442[(1)] = (1));

return statearr_8442;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8419){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8443){if((e8443 instanceof Object)){
var ex__6561__auto__ = e8443;
var statearr_8444_8462 = state_8419;
(statearr_8444_8462[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8463 = state_8419;
state_8419 = G__8463;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8447,out))
})();
var state__6647__auto__ = (function (){var statearr_8445 = f__6646__auto__.call(null);
(statearr_8445[(6)] = c__6645__auto___8447);

return statearr_8445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8447,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8465 = arguments.length;
switch (G__8465) {
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
var c__6645__auto___8535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___8535,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6557__auto__ = ((function (c__6645__auto___8535,out){
return (function (state_8507){
var state_val_8508 = (state_8507[(1)]);
if((state_val_8508 === (7))){
var inst_8503 = (state_8507[(2)]);
var state_8507__$1 = state_8507;
var statearr_8509_8536 = state_8507__$1;
(statearr_8509_8536[(2)] = inst_8503);

(statearr_8509_8536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (1))){
var inst_8466 = [];
var inst_8467 = inst_8466;
var inst_8468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8507__$1 = (function (){var statearr_8510 = state_8507;
(statearr_8510[(7)] = inst_8468);

(statearr_8510[(8)] = inst_8467);

return statearr_8510;
})();
var statearr_8511_8537 = state_8507__$1;
(statearr_8511_8537[(2)] = null);

(statearr_8511_8537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (4))){
var inst_8471 = (state_8507[(9)]);
var inst_8471__$1 = (state_8507[(2)]);
var inst_8472 = (inst_8471__$1 == null);
var inst_8473 = cljs.core.not.call(null,inst_8472);
var state_8507__$1 = (function (){var statearr_8512 = state_8507;
(statearr_8512[(9)] = inst_8471__$1);

return statearr_8512;
})();
if(inst_8473){
var statearr_8513_8538 = state_8507__$1;
(statearr_8513_8538[(1)] = (5));

} else {
var statearr_8514_8539 = state_8507__$1;
(statearr_8514_8539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (15))){
var inst_8497 = (state_8507[(2)]);
var state_8507__$1 = state_8507;
var statearr_8515_8540 = state_8507__$1;
(statearr_8515_8540[(2)] = inst_8497);

(statearr_8515_8540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (13))){
var state_8507__$1 = state_8507;
var statearr_8516_8541 = state_8507__$1;
(statearr_8516_8541[(2)] = null);

(statearr_8516_8541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (6))){
var inst_8467 = (state_8507[(8)]);
var inst_8492 = inst_8467.length;
var inst_8493 = (inst_8492 > (0));
var state_8507__$1 = state_8507;
if(cljs.core.truth_(inst_8493)){
var statearr_8517_8542 = state_8507__$1;
(statearr_8517_8542[(1)] = (12));

} else {
var statearr_8518_8543 = state_8507__$1;
(statearr_8518_8543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (3))){
var inst_8505 = (state_8507[(2)]);
var state_8507__$1 = state_8507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8507__$1,inst_8505);
} else {
if((state_val_8508 === (12))){
var inst_8467 = (state_8507[(8)]);
var inst_8495 = cljs.core.vec.call(null,inst_8467);
var state_8507__$1 = state_8507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8507__$1,(15),out,inst_8495);
} else {
if((state_val_8508 === (2))){
var state_8507__$1 = state_8507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8507__$1,(4),ch);
} else {
if((state_val_8508 === (11))){
var inst_8471 = (state_8507[(9)]);
var inst_8475 = (state_8507[(10)]);
var inst_8485 = (state_8507[(2)]);
var inst_8486 = [];
var inst_8487 = inst_8486.push(inst_8471);
var inst_8467 = inst_8486;
var inst_8468 = inst_8475;
var state_8507__$1 = (function (){var statearr_8519 = state_8507;
(statearr_8519[(7)] = inst_8468);

(statearr_8519[(11)] = inst_8485);

(statearr_8519[(12)] = inst_8487);

(statearr_8519[(8)] = inst_8467);

return statearr_8519;
})();
var statearr_8520_8544 = state_8507__$1;
(statearr_8520_8544[(2)] = null);

(statearr_8520_8544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (9))){
var inst_8467 = (state_8507[(8)]);
var inst_8483 = cljs.core.vec.call(null,inst_8467);
var state_8507__$1 = state_8507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8507__$1,(11),out,inst_8483);
} else {
if((state_val_8508 === (5))){
var inst_8468 = (state_8507[(7)]);
var inst_8471 = (state_8507[(9)]);
var inst_8475 = (state_8507[(10)]);
var inst_8475__$1 = f.call(null,inst_8471);
var inst_8476 = cljs.core._EQ_.call(null,inst_8475__$1,inst_8468);
var inst_8477 = cljs.core.keyword_identical_QMARK_.call(null,inst_8468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8478 = ((inst_8476) || (inst_8477));
var state_8507__$1 = (function (){var statearr_8521 = state_8507;
(statearr_8521[(10)] = inst_8475__$1);

return statearr_8521;
})();
if(cljs.core.truth_(inst_8478)){
var statearr_8522_8545 = state_8507__$1;
(statearr_8522_8545[(1)] = (8));

} else {
var statearr_8523_8546 = state_8507__$1;
(statearr_8523_8546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (14))){
var inst_8500 = (state_8507[(2)]);
var inst_8501 = cljs.core.async.close_BANG_.call(null,out);
var state_8507__$1 = (function (){var statearr_8525 = state_8507;
(statearr_8525[(13)] = inst_8500);

return statearr_8525;
})();
var statearr_8526_8547 = state_8507__$1;
(statearr_8526_8547[(2)] = inst_8501);

(statearr_8526_8547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (10))){
var inst_8490 = (state_8507[(2)]);
var state_8507__$1 = state_8507;
var statearr_8527_8548 = state_8507__$1;
(statearr_8527_8548[(2)] = inst_8490);

(statearr_8527_8548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8508 === (8))){
var inst_8471 = (state_8507[(9)]);
var inst_8475 = (state_8507[(10)]);
var inst_8467 = (state_8507[(8)]);
var inst_8480 = inst_8467.push(inst_8471);
var tmp8524 = inst_8467;
var inst_8467__$1 = tmp8524;
var inst_8468 = inst_8475;
var state_8507__$1 = (function (){var statearr_8528 = state_8507;
(statearr_8528[(7)] = inst_8468);

(statearr_8528[(14)] = inst_8480);

(statearr_8528[(8)] = inst_8467__$1);

return statearr_8528;
})();
var statearr_8529_8549 = state_8507__$1;
(statearr_8529_8549[(2)] = null);

(statearr_8529_8549[(1)] = (2));


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
});})(c__6645__auto___8535,out))
;
return ((function (switch__6557__auto__,c__6645__auto___8535,out){
return (function() {
var cljs$core$async$state_machine__6558__auto__ = null;
var cljs$core$async$state_machine__6558__auto____0 = (function (){
var statearr_8530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8530[(0)] = cljs$core$async$state_machine__6558__auto__);

(statearr_8530[(1)] = (1));

return statearr_8530;
});
var cljs$core$async$state_machine__6558__auto____1 = (function (state_8507){
while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_8507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6560__auto__;
}
break;
}
}catch (e8531){if((e8531 instanceof Object)){
var ex__6561__auto__ = e8531;
var statearr_8532_8550 = state_8507;
(statearr_8532_8550[(5)] = ex__6561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8551 = state_8507;
state_8507 = G__8551;
continue;
} else {
return ret_value__6559__auto__;
}
break;
}
});
cljs$core$async$state_machine__6558__auto__ = function(state_8507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6558__auto____1.call(this,state_8507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6558__auto____0;
cljs$core$async$state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6558__auto____1;
return cljs$core$async$state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6645__auto___8535,out))
})();
var state__6647__auto__ = (function (){var statearr_8533 = f__6646__auto__.call(null);
(statearr_8533[(6)] = c__6645__auto___8535);

return statearr_8533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___8535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

