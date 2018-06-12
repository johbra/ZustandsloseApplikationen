// Compiled by ClojureScript 1.10.238 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function enfocus$enlive$syntax$sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):enfocus.enlive.syntax.sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__3101_SHARP_){
return cljs.core.conj.call(null,p1__3101_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__3102_SHARP_){
return cljs.core.conj.call(null,p1__3102_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__3103_SHARP_){
return cljs.core.conj.call(null,p1__3103_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,enfocus.enlive.syntax.sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = enfocus.enlive.syntax.sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__3104_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__3104_SHARP_);
});})(x1,item,rest,end))
,enfocus.enlive.syntax.sel_to_str.call(null,item));
var iter__4292__auto__ = ((function (x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__3105(s__3106){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__3106__$1 = s__3106;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3106__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var s = cljs.core.first.call(null,xs__5205__auto__);
var iterys__4288__auto__ = ((function (s__3106__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__3105_$_iter__3107(s__3108){
return (new cljs.core.LazySeq(null,((function (s__3106__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function (){
var s__3108__$1 = s__3108;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__3108__$1);
if(temp__4657__auto____$1){
var s__3108__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3108__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3108__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3110 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3109 = (0);
while(true){
if((i__3109 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__3109);
cljs.core.chunk_append.call(null,b__3110,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__3111 = (i__3109 + (1));
i__3109 = G__3111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3110),enfocus$enlive$syntax$sel_to_str_$_iter__3105_$_iter__3107.call(null,cljs.core.chunk_rest.call(null,s__3108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3110),null);
}
} else {
var e = cljs.core.first.call(null,s__3108__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,enfocus$enlive$syntax$sel_to_str_$_iter__3105_$_iter__3107.call(null,cljs.core.rest.call(null,s__3108__$2)));
}
} else {
return null;
}
break;
}
});})(s__3106__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__3106__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,end));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,enfocus$enlive$syntax$sel_to_str_$_iter__3105.call(null,cljs.core.rest.call(null,s__3106__$1)));
} else {
var G__3112 = cljs.core.rest.call(null,s__3106__$1);
s__3106__$1 = G__3112;
continue;
}
} else {
return null;
}
break;
}
});})(x1,sub,item,rest,end))
,null,null));
});})(x1,sub,item,rest,end))
;
return iter__4292__auto__.call(null,sub);
} else {
return input;

}
}
}
}
});
enfocus.enlive.syntax.convert = (function enfocus$enlive$syntax$convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
var temp__4655__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var ors = temp__4655__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function enfocus$enlive$syntax$attr_pairs(op,elms){
var ts = (function (p__3113){
var vec__3114 = p__3113;
var x = cljs.core.nth.call(null,vec__3114,(0),null);
var y = cljs.core.nth.call(null,vec__3114,(1),null);
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),"='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"']"].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
enfocus.enlive.syntax.attr_QMARK_ = (function enfocus$enlive$syntax$attr_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3119 = arguments.length;
var i__4500__auto___3120 = (0);
while(true){
if((i__4500__auto___3120 < len__4499__auto___3119)){
args__4502__auto__.push((arguments[i__4500__auto___3120]));

var G__3121 = (i__4500__auto___3120 + (1));
i__4500__auto___3120 = G__3121;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3117_SHARP_){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__3117_SHARP_)),"]"].join('');
}),elms));
});

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_QMARK_.cljs$lang$applyTo = (function (seq3118){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3118));
});

enfocus.enlive.syntax.attr_EQ_ = (function enfocus$enlive$syntax$attr_EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3123 = arguments.length;
var i__4500__auto___3124 = (0);
while(true){
if((i__4500__auto___3124 < len__4499__auto___3123)){
args__4502__auto__.push((arguments[i__4500__auto___3124]));

var G__3125 = (i__4500__auto___3124 + (1));
i__4500__auto___3124 = G__3125;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
});

enfocus.enlive.syntax.attr_EQ_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_EQ_.cljs$lang$applyTo = (function (seq3122){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3122));
});

enfocus.enlive.syntax.attr_has = (function enfocus$enlive$syntax$attr_has(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3128 = arguments.length;
var i__4500__auto___3129 = (0);
while(true){
if((i__4500__auto___3129 < len__4499__auto___3128)){
args__4502__auto__.push((arguments[i__4500__auto___3129]));

var G__3130 = (i__4500__auto___3129 + (1));
i__4500__auto___3129 = G__3130;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic = (function (x,vals){
var ts = (function (y){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x)),"~='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"']"].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
});

enfocus.enlive.syntax.attr_has.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
enfocus.enlive.syntax.attr_has.cljs$lang$applyTo = (function (seq3126){
var G__3127 = cljs.core.first.call(null,seq3126);
var seq3126__$1 = cljs.core.next.call(null,seq3126);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3127,seq3126__$1);
});

enfocus.enlive.syntax.attr_starts = (function enfocus$enlive$syntax$attr_starts(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3132 = arguments.length;
var i__4500__auto___3133 = (0);
while(true){
if((i__4500__auto___3133 < len__4499__auto___3132)){
args__4502__auto__.push((arguments[i__4500__auto___3133]));

var G__3134 = (i__4500__auto___3133 + (1));
i__4500__auto___3133 = G__3134;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
});

enfocus.enlive.syntax.attr_starts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_starts.cljs$lang$applyTo = (function (seq3131){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3131));
});

enfocus.enlive.syntax.attr_ends = (function enfocus$enlive$syntax$attr_ends(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3136 = arguments.length;
var i__4500__auto___3137 = (0);
while(true){
if((i__4500__auto___3137 < len__4499__auto___3136)){
args__4502__auto__.push((arguments[i__4500__auto___3137]));

var G__3138 = (i__4500__auto___3137 + (1));
i__4500__auto___3137 = G__3138;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
});

enfocus.enlive.syntax.attr_ends.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_ends.cljs$lang$applyTo = (function (seq3135){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3135));
});

enfocus.enlive.syntax.attr_contains = (function enfocus$enlive$syntax$attr_contains(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3140 = arguments.length;
var i__4500__auto___3141 = (0);
while(true){
if((i__4500__auto___3141 < len__4499__auto___3140)){
args__4502__auto__.push((arguments[i__4500__auto___3141]));

var G__3142 = (i__4500__auto___3141 + (1));
i__4500__auto___3141 = G__3142;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
});

enfocus.enlive.syntax.attr_contains.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_contains.cljs$lang$applyTo = (function (seq3139){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3139));
});

enfocus.enlive.syntax.attr_BAR__EQ_ = (function enfocus$enlive$syntax$attr_BAR__EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3144 = arguments.length;
var i__4500__auto___3145 = (0);
while(true){
if((i__4500__auto___3145 < len__4499__auto___3144)){
args__4502__auto__.push((arguments[i__4500__auto___3145]));

var G__3146 = (i__4500__auto___3145 + (1));
i__4500__auto___3145 = G__3146;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$applyTo = (function (seq3143){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3143));
});

enfocus.enlive.syntax.nth_op = (function enfocus$enlive$syntax$nth_op(var_args){
var G__3148 = arguments.length;
switch (G__3148) {
case 2:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2 = (function (op,x){
return [":nth-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3 = (function (op,x,y){
return [":nth-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y > (0)))?"+":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});

enfocus.enlive.syntax.nth_op.cljs$lang$maxFixedArity = 3;

enfocus.enlive.syntax.nth_child = (function enfocus$enlive$syntax$nth_child(var_args){
var G__3151 = arguments.length;
switch (G__3151) {
case 1:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});

enfocus.enlive.syntax.nth_child.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_last_child = (function enfocus$enlive$syntax$nth_last_child(var_args){
var G__3154 = arguments.length;
switch (G__3154) {
case 1:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});

enfocus.enlive.syntax.nth_last_child.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_of_type = (function enfocus$enlive$syntax$nth_of_type(var_args){
var G__3157 = arguments.length;
switch (G__3157) {
case 1:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});

enfocus.enlive.syntax.nth_of_type.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_last_of_type = (function enfocus$enlive$syntax$nth_last_of_type(var_args){
var G__3160 = arguments.length;
switch (G__3160) {
case 1:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.but = (function enfocus$enlive$syntax$but(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3163 = arguments.length;
var i__4500__auto___3164 = (0);
while(true){
if((i__4500__auto___3164 < len__4499__auto___3163)){
args__4502__auto__.push((arguments[i__4500__auto___3164]));

var G__3165 = (i__4500__auto___3164 + (1));
i__4500__auto___3164 = G__3165;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic = (function (sel){
return ["not(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(enfocus.enlive.syntax.convert.call(null,sel)),")"].join('');
});

enfocus.enlive.syntax.but.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.but.cljs$lang$applyTo = (function (seq3162){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3162));
});


//# sourceMappingURL=syntax.js.map
