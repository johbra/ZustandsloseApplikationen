// Compiled by ClojureScript 1.10.238 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function enfocus$enlive$syntax$sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):enfocus.enlive.syntax.sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__10140_SHARP_){
return cljs.core.conj.call(null,p1__10140_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__10141_SHARP_){
return cljs.core.conj.call(null,p1__10141_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__10142_SHARP_){
return cljs.core.conj.call(null,p1__10142_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,enfocus.enlive.syntax.sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = enfocus.enlive.syntax.sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__10143_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__10143_SHARP_);
});})(x1,item,rest,end))
,enfocus.enlive.syntax.sel_to_str.call(null,item));
var iter__4292__auto__ = ((function (x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__10144(s__10145){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__10145__$1 = s__10145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10145__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var s = cljs.core.first.call(null,xs__5205__auto__);
var iterys__4288__auto__ = ((function (s__10145__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__10144_$_iter__10146(s__10147){
return (new cljs.core.LazySeq(null,((function (s__10145__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function (){
var s__10147__$1 = s__10147;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__10147__$1);
if(temp__4657__auto____$1){
var s__10147__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10147__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__10147__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__10149 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__10148 = (0);
while(true){
if((i__10148 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__10148);
cljs.core.chunk_append.call(null,b__10149,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__10150 = (i__10148 + (1));
i__10148 = G__10150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10149),enfocus$enlive$syntax$sel_to_str_$_iter__10144_$_iter__10146.call(null,cljs.core.chunk_rest.call(null,s__10147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10149),null);
}
} else {
var e = cljs.core.first.call(null,s__10147__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,enfocus$enlive$syntax$sel_to_str_$_iter__10144_$_iter__10146.call(null,cljs.core.rest.call(null,s__10147__$2)));
}
} else {
return null;
}
break;
}
});})(s__10145__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__10145__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,end));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,enfocus$enlive$syntax$sel_to_str_$_iter__10144.call(null,cljs.core.rest.call(null,s__10145__$1)));
} else {
var G__10151 = cljs.core.rest.call(null,s__10145__$1);
s__10145__$1 = G__10151;
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
var ts = (function (p__10152){
var vec__10153 = p__10152;
var x = cljs.core.nth.call(null,vec__10153,(0),null);
var y = cljs.core.nth.call(null,vec__10153,(1),null);
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),"='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"']"].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
enfocus.enlive.syntax.attr_QMARK_ = (function enfocus$enlive$syntax$attr_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10158 = arguments.length;
var i__4500__auto___10159 = (0);
while(true){
if((i__4500__auto___10159 < len__4499__auto___10158)){
args__4502__auto__.push((arguments[i__4500__auto___10159]));

var G__10160 = (i__4500__auto___10159 + (1));
i__4500__auto___10159 = G__10160;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__10156_SHARP_){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__10156_SHARP_)),"]"].join('');
}),elms));
});

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.enlive.syntax.attr_QMARK_.cljs$lang$applyTo = (function (seq10157){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10157));
});

enfocus.enlive.syntax.attr_EQ_ = (function enfocus$enlive$syntax$attr_EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10162 = arguments.length;
var i__4500__auto___10163 = (0);
while(true){
if((i__4500__auto___10163 < len__4499__auto___10162)){
args__4502__auto__.push((arguments[i__4500__auto___10163]));

var G__10164 = (i__4500__auto___10163 + (1));
i__4500__auto___10163 = G__10164;
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
enfocus.enlive.syntax.attr_EQ_.cljs$lang$applyTo = (function (seq10161){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10161));
});

enfocus.enlive.syntax.attr_has = (function enfocus$enlive$syntax$attr_has(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10167 = arguments.length;
var i__4500__auto___10168 = (0);
while(true){
if((i__4500__auto___10168 < len__4499__auto___10167)){
args__4502__auto__.push((arguments[i__4500__auto___10168]));

var G__10169 = (i__4500__auto___10168 + (1));
i__4500__auto___10168 = G__10169;
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
enfocus.enlive.syntax.attr_has.cljs$lang$applyTo = (function (seq10165){
var G__10166 = cljs.core.first.call(null,seq10165);
var seq10165__$1 = cljs.core.next.call(null,seq10165);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10166,seq10165__$1);
});

enfocus.enlive.syntax.attr_starts = (function enfocus$enlive$syntax$attr_starts(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10171 = arguments.length;
var i__4500__auto___10172 = (0);
while(true){
if((i__4500__auto___10172 < len__4499__auto___10171)){
args__4502__auto__.push((arguments[i__4500__auto___10172]));

var G__10173 = (i__4500__auto___10172 + (1));
i__4500__auto___10172 = G__10173;
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
enfocus.enlive.syntax.attr_starts.cljs$lang$applyTo = (function (seq10170){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10170));
});

enfocus.enlive.syntax.attr_ends = (function enfocus$enlive$syntax$attr_ends(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10175 = arguments.length;
var i__4500__auto___10176 = (0);
while(true){
if((i__4500__auto___10176 < len__4499__auto___10175)){
args__4502__auto__.push((arguments[i__4500__auto___10176]));

var G__10177 = (i__4500__auto___10176 + (1));
i__4500__auto___10176 = G__10177;
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
enfocus.enlive.syntax.attr_ends.cljs$lang$applyTo = (function (seq10174){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10174));
});

enfocus.enlive.syntax.attr_contains = (function enfocus$enlive$syntax$attr_contains(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10179 = arguments.length;
var i__4500__auto___10180 = (0);
while(true){
if((i__4500__auto___10180 < len__4499__auto___10179)){
args__4502__auto__.push((arguments[i__4500__auto___10180]));

var G__10181 = (i__4500__auto___10180 + (1));
i__4500__auto___10180 = G__10181;
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
enfocus.enlive.syntax.attr_contains.cljs$lang$applyTo = (function (seq10178){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10178));
});

enfocus.enlive.syntax.attr_BAR__EQ_ = (function enfocus$enlive$syntax$attr_BAR__EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10183 = arguments.length;
var i__4500__auto___10184 = (0);
while(true){
if((i__4500__auto___10184 < len__4499__auto___10183)){
args__4502__auto__.push((arguments[i__4500__auto___10184]));

var G__10185 = (i__4500__auto___10184 + (1));
i__4500__auto___10184 = G__10185;
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
enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$applyTo = (function (seq10182){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10182));
});

enfocus.enlive.syntax.nth_op = (function enfocus$enlive$syntax$nth_op(var_args){
var G__10187 = arguments.length;
switch (G__10187) {
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
var G__10190 = arguments.length;
switch (G__10190) {
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
var G__10193 = arguments.length;
switch (G__10193) {
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
var G__10196 = arguments.length;
switch (G__10196) {
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
var G__10199 = arguments.length;
switch (G__10199) {
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
var len__4499__auto___10202 = arguments.length;
var i__4500__auto___10203 = (0);
while(true){
if((i__4500__auto___10203 < len__4499__auto___10202)){
args__4502__auto__.push((arguments[i__4500__auto___10203]));

var G__10204 = (i__4500__auto___10203 + (1));
i__4500__auto___10203 = G__10204;
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
enfocus.enlive.syntax.but.cljs$lang$applyTo = (function (seq10201){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10201));
});

