// Compiled by ClojureScript 1.10.238 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('enfocus.enlive.syntax');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.style');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.Timer');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('domina');
goog.require('domina.css');
goog.require('domina.xpath');







/**
 * @interface
 */
enfocus.core.ISelector = function(){};

/**
 * takes root node and returns a domina node list
 */
enfocus.core.select = (function enfocus$core$select(var_args){
var G__10353 = arguments.length;
switch (G__10353) {
case 1:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$1 == null))))){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (enfocus.core.select[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (enfocus.core.select["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$2 = (function (this$,root){
if(((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$2 == null))))){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (enfocus.core.select[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,root);
} else {
var m__4212__auto____$1 = (enfocus.core.select["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,root);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$3 = (function (this$,root,id_mask){
if(((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$3 == null))))){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (enfocus.core.select[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,root,id_mask);
} else {
var m__4212__auto____$1 = (enfocus.core.select["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,root,id_mask);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
enfocus.core.ITransform = function(){};

/**
 * takes a set of nodes and performs a transform on them
 */
enfocus.core.apply_transform = (function enfocus$core$apply_transform(var_args){
var G__10356 = arguments.length;
switch (G__10356) {
case 2:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2 = (function (this$,nodes){
if(((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$2 == null))))){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,nodes);
} else {
var m__4212__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3 = (function (this$,nodes,callback){
if(((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$3 == null))))){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,nodes,callback);
} else {
var m__4212__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,nodes,callback);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$lang$maxFixedArity = 3;


enfocus.core.debug = false;
enfocus.core.log_debug = (function enfocus$core$log_debug(mesg){
if(((enfocus.core.debug) && (!(cljs.core._EQ_.call(null,window.console,undefined))))){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function enfocus$core$setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function enfocus$core$node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function enfocus$core$nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
 * coverts a nodelist, node into a collection
 */
enfocus.core.nodes__GT_coll = (function enfocus$core$nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function enfocus$core$flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__10358_SHARP_){
if(typeof p1__10358_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__10358_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__10358_SHARP_);

}
}),values);
});
/**
 * Sets property name to a value on a element and	Returns the original object
 */
enfocus.core.style_set = (function enfocus$core$style_set(obj,values){
var seq__10359_10369 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__10360_10370 = null;
var count__10361_10371 = (0);
var i__10362_10372 = (0);
while(true){
if((i__10362_10372 < count__10361_10371)){
var vec__10363_10373 = cljs.core._nth.call(null,chunk__10360_10370,i__10362_10372);
var attr_10374 = cljs.core.nth.call(null,vec__10363_10373,(0),null);
var value_10375 = cljs.core.nth.call(null,vec__10363_10373,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_10374),value_10375);


var G__10376 = seq__10359_10369;
var G__10377 = chunk__10360_10370;
var G__10378 = count__10361_10371;
var G__10379 = (i__10362_10372 + (1));
seq__10359_10369 = G__10376;
chunk__10360_10370 = G__10377;
count__10361_10371 = G__10378;
i__10362_10372 = G__10379;
continue;
} else {
var temp__4657__auto___10380 = cljs.core.seq.call(null,seq__10359_10369);
if(temp__4657__auto___10380){
var seq__10359_10381__$1 = temp__4657__auto___10380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10359_10381__$1)){
var c__4319__auto___10382 = cljs.core.chunk_first.call(null,seq__10359_10381__$1);
var G__10383 = cljs.core.chunk_rest.call(null,seq__10359_10381__$1);
var G__10384 = c__4319__auto___10382;
var G__10385 = cljs.core.count.call(null,c__4319__auto___10382);
var G__10386 = (0);
seq__10359_10369 = G__10383;
chunk__10360_10370 = G__10384;
count__10361_10371 = G__10385;
i__10362_10372 = G__10386;
continue;
} else {
var vec__10366_10387 = cljs.core.first.call(null,seq__10359_10381__$1);
var attr_10388 = cljs.core.nth.call(null,vec__10366_10387,(0),null);
var value_10389 = cljs.core.nth.call(null,vec__10366_10387,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_10388),value_10389);


var G__10390 = cljs.core.next.call(null,seq__10359_10381__$1);
var G__10391 = null;
var G__10392 = (0);
var G__10393 = (0);
seq__10359_10369 = G__10390;
chunk__10360_10370 = G__10391;
count__10361_10371 = G__10392;
i__10362_10372 = G__10393;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
 * removes the property value from an elements style obj.
 */
enfocus.core.style_remove = (function enfocus$core$style_remove(obj,values){
var seq__10394 = cljs.core.seq.call(null,values);
var chunk__10395 = null;
var count__10396 = (0);
var i__10397 = (0);
while(true){
if((i__10397 < count__10396)){
var attr = cljs.core._nth.call(null,chunk__10395,i__10397);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}


var G__10398 = seq__10394;
var G__10399 = chunk__10395;
var G__10400 = count__10396;
var G__10401 = (i__10397 + (1));
seq__10394 = G__10398;
chunk__10395 = G__10399;
count__10396 = G__10400;
i__10397 = G__10401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10394);
if(temp__4657__auto__){
var seq__10394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10394__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10394__$1);
var G__10402 = cljs.core.chunk_rest.call(null,seq__10394__$1);
var G__10403 = c__4319__auto__;
var G__10404 = cljs.core.count.call(null,c__4319__auto__);
var G__10405 = (0);
seq__10394 = G__10402;
chunk__10395 = G__10403;
count__10396 = G__10404;
i__10397 = G__10405;
continue;
} else {
var attr = cljs.core.first.call(null,seq__10394__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}


var G__10406 = cljs.core.next.call(null,seq__10394__$1);
var G__10407 = null;
var G__10408 = (0);
var G__10409 = (0);
seq__10394 = G__10406;
chunk__10395 = G__10407;
count__10396 = G__10408;
i__10397 = G__10409;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function enfocus$core$get_eff_prop_name(etype){
return ["__ef_effect_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype)].join('');
});
enfocus.core.get_mills = (function enfocus$core$get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function enfocus$core$pix_round(step){
if((step < (0))){
return Math.floor(step);
} else {
return Math.ceil(step);
}
});
enfocus.core.add_map_attrs = (function enfocus$core$add_map_attrs(var_args){
var G__10411 = arguments.length;
switch (G__10411) {
case 2:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__10412_10423 = cljs.core.seq.call(null,ats);
var chunk__10413_10424 = null;
var count__10414_10425 = (0);
var i__10415_10426 = (0);
while(true){
if((i__10415_10426 < count__10414_10425)){
var vec__10416_10427 = cljs.core._nth.call(null,chunk__10413_10424,i__10415_10426);
var k_10428 = cljs.core.nth.call(null,vec__10416_10427,(0),null);
var v_10429 = cljs.core.nth.call(null,vec__10416_10427,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_10428,v_10429);


var G__10430 = seq__10412_10423;
var G__10431 = chunk__10413_10424;
var G__10432 = count__10414_10425;
var G__10433 = (i__10415_10426 + (1));
seq__10412_10423 = G__10430;
chunk__10413_10424 = G__10431;
count__10414_10425 = G__10432;
i__10415_10426 = G__10433;
continue;
} else {
var temp__4657__auto___10434 = cljs.core.seq.call(null,seq__10412_10423);
if(temp__4657__auto___10434){
var seq__10412_10435__$1 = temp__4657__auto___10434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10412_10435__$1)){
var c__4319__auto___10436 = cljs.core.chunk_first.call(null,seq__10412_10435__$1);
var G__10437 = cljs.core.chunk_rest.call(null,seq__10412_10435__$1);
var G__10438 = c__4319__auto___10436;
var G__10439 = cljs.core.count.call(null,c__4319__auto___10436);
var G__10440 = (0);
seq__10412_10423 = G__10437;
chunk__10413_10424 = G__10438;
count__10414_10425 = G__10439;
i__10415_10426 = G__10440;
continue;
} else {
var vec__10419_10441 = cljs.core.first.call(null,seq__10412_10435__$1);
var k_10442 = cljs.core.nth.call(null,vec__10419_10441,(0),null);
var v_10443 = cljs.core.nth.call(null,vec__10419_10441,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_10442,v_10443);


var G__10444 = cljs.core.next.call(null,seq__10412_10435__$1);
var G__10445 = null;
var G__10446 = (0);
var G__10447 = (0);
seq__10412_10423 = G__10444;
chunk__10413_10424 = G__10445;
count__10414_10425 = G__10446;
i__10415_10426 = G__10447;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});

enfocus.core.add_map_attrs.cljs$lang$maxFixedArity = 3;

/**
 * this is incremented everytime a remote template is loaded and decremented when
 * it is added to the dom cache
 */
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
 * cache for the remote templates
 */
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
 * Add a hidden div to hold the dom as we are transforming it this has to be done
 * because css selectors do not work unless we have it in the main dom
 */
enfocus.core.create_hidden_dom = (function enfocus$core$create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__10448_10452 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__10449_10453 = null;
var count__10450_10454 = (0);
var i__10451_10455 = (0);
while(true){
if((i__10451_10455 < count__10450_10454)){
var node_10456 = cljs.core._nth.call(null,chunk__10449_10453,i__10451_10455);
goog.dom.appendChild(div,node_10456);


var G__10457 = seq__10448_10452;
var G__10458 = chunk__10449_10453;
var G__10459 = count__10450_10454;
var G__10460 = (i__10451_10455 + (1));
seq__10448_10452 = G__10457;
chunk__10449_10453 = G__10458;
count__10450_10454 = G__10459;
i__10451_10455 = G__10460;
continue;
} else {
var temp__4657__auto___10461 = cljs.core.seq.call(null,seq__10448_10452);
if(temp__4657__auto___10461){
var seq__10448_10462__$1 = temp__4657__auto___10461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10448_10462__$1)){
var c__4319__auto___10463 = cljs.core.chunk_first.call(null,seq__10448_10462__$1);
var G__10464 = cljs.core.chunk_rest.call(null,seq__10448_10462__$1);
var G__10465 = c__4319__auto___10463;
var G__10466 = cljs.core.count.call(null,c__4319__auto___10463);
var G__10467 = (0);
seq__10448_10452 = G__10464;
chunk__10449_10453 = G__10465;
count__10450_10454 = G__10466;
i__10451_10455 = G__10467;
continue;
} else {
var node_10468 = cljs.core.first.call(null,seq__10448_10462__$1);
goog.dom.appendChild(div,node_10468);


var G__10469 = cljs.core.next.call(null,seq__10448_10462__$1);
var G__10470 = null;
var G__10471 = (0);
var G__10472 = (0);
seq__10448_10452 = G__10469;
chunk__10449_10453 = G__10470;
count__10450_10454 = G__10471;
i__10451_10455 = G__10472;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
 * removes the hidden div and returns the children
 */
enfocus.core.remove_node_return_child = (function enfocus$core$remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function enfocus$core$last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
 * replaces all the ids in a string html fragement/template with a generated
 * symbol appended on to a existing id this is done to make sure we don't have
 * id colisions during the transformation process
 */
enfocus.core.replace_ids = (function enfocus$core$replace_ids(var_args){
var G__10474 = arguments.length;
switch (G__10474) {
case 1:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1 = (function (text){
return enfocus.core.replace_ids.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),"_"].join(''),text);
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('');
});})(re))
)], null);
});

enfocus.core.replace_ids.cljs$lang$maxFixedArity = 2;

/**
 * before adding the dom back into the live dom we reset the masked ids to orig vals
 */
enfocus.core.reset_ids = (function enfocus$core$reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__10476_SHARP_){
var id = p1__10476_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__10476_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
 * loads a remote file into the cache, and masks the ids to avoid collisions
 */
enfocus.core.load_remote_dom = (function enfocus$core$load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__10477 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__10477,(0),null);
var txt = cljs.core.nth.call(null,vec__10477,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function enfocus$core$html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__10480_10484 = cljs.core.seq.call(null,dfa);
var chunk__10481_10485 = null;
var count__10482_10486 = (0);
var i__10483_10487 = (0);
while(true){
if((i__10483_10487 < count__10482_10486)){
var df_10488 = cljs.core._nth.call(null,chunk__10481_10485,i__10483_10487);
goog.dom.append(frag,df_10488);


var G__10489 = seq__10480_10484;
var G__10490 = chunk__10481_10485;
var G__10491 = count__10482_10486;
var G__10492 = (i__10483_10487 + (1));
seq__10480_10484 = G__10489;
chunk__10481_10485 = G__10490;
count__10482_10486 = G__10491;
i__10483_10487 = G__10492;
continue;
} else {
var temp__4657__auto___10493 = cljs.core.seq.call(null,seq__10480_10484);
if(temp__4657__auto___10493){
var seq__10480_10494__$1 = temp__4657__auto___10493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10480_10494__$1)){
var c__4319__auto___10495 = cljs.core.chunk_first.call(null,seq__10480_10494__$1);
var G__10496 = cljs.core.chunk_rest.call(null,seq__10480_10494__$1);
var G__10497 = c__4319__auto___10495;
var G__10498 = cljs.core.count.call(null,c__4319__auto___10495);
var G__10499 = (0);
seq__10480_10484 = G__10496;
chunk__10481_10485 = G__10497;
count__10482_10486 = G__10498;
i__10483_10487 = G__10499;
continue;
} else {
var df_10500 = cljs.core.first.call(null,seq__10480_10494__$1);
goog.dom.append(frag,df_10500);


var G__10501 = cljs.core.next.call(null,seq__10480_10494__$1);
var G__10502 = null;
var G__10503 = (0);
var G__10504 = (0);
seq__10480_10484 = G__10501;
chunk__10481_10485 = G__10502;
count__10482_10486 = G__10503;
i__10483_10487 = G__10504;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
 * returns and dom from the cache and symbol used to scope the ids
 */
enfocus.core.get_cached_dom = (function enfocus$core$get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
 * returns the cached snippet or creates one and adds it to the cache if needed
 */
enfocus.core.get_cached_snippet = (function enfocus$core$get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__10506 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__10506,(0),null);
var tdom = cljs.core.nth.call(null,vec__10506,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__10506,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__10505_SHARP_){
return p1__10505_SHARP_.outerHTML;
});})(vec__10506,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
 * wrapper function for extractors that maps the extraction to
 * all nodes returned by the selector
 */
enfocus.core.extr_multi_node = (function enfocus$core$extr_multi_node(var_args){
var G__10510 = arguments.length;
switch (G__10510) {
case 1:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1 = (function (func){
return enfocus.core.extr_multi_node.call(null,func,null);
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2 = (function (func,filt){
var trans = (function enfocus$core$trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t_enfocus$core10511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core10511 = (function (func,filt,trans,meta10512){
this.func = func;
this.filt = filt;
this.trans = trans;
this.meta10512 = meta10512;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core10511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_10513,meta10512__$1){
var self__ = this;
var _10513__$1 = this;
return (new enfocus.core.t_enfocus$core10511(self__.func,self__.filt,self__.trans,meta10512__$1));
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_10513){
var self__ = this;
var _10513__$1 = this;
return self__.meta10512;
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core10511.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.call = ((function (trans){
return (function() {
var G__10516 = null;
var G__10516__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__10516__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__10516 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10516__2.call(this,self__,nodes);
case 3:
return G__10516__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10516.cljs$core$IFn$_invoke$arity$2 = G__10516__2;
G__10516.cljs$core$IFn$_invoke$arity$3 = G__10516__3;
return G__10516;
})()
;})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.apply = ((function (trans){
return (function (self__,args10514){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10514)));
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10511.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10511.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"filt","filt",1809760609,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta10512","meta10512",620248524,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core10511.cljs$lang$type = true;

enfocus.core.t_enfocus$core10511.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core10511";

enfocus.core.t_enfocus$core10511.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core10511");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core10511.
 */
enfocus.core.__GT_t_enfocus$core10511 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core10511(func__$1,filt__$1,trans__$1,meta10512){
return (new enfocus.core.t_enfocus$core10511(func__$1,filt__$1,trans__$1,meta10512));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core10511(func,filt,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.extr_multi_node.cljs$lang$maxFixedArity = 2;

/**
 * Allows standard domina functions to be chainable
 */
enfocus.core.multi_node_chain = (function enfocus$core$multi_node_chain(var_args){
var G__10519 = arguments.length;
switch (G__10519) {
case 1:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core10520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core10520 = (function (func,trans,meta10521){
this.func = func;
this.trans = trans;
this.meta10521 = meta10521;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core10520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_10522,meta10521__$1){
var self__ = this;
var _10522__$1 = this;
return (new enfocus.core.t_enfocus$core10520(self__.func,self__.trans,meta10521__$1));
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_10522){
var self__ = this;
var _10522__$1 = this;
return self__.meta10521;
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core10520.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.call = ((function (trans){
return (function() {
var G__10529 = null;
var G__10529__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__10529__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__10529 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10529__2.call(this,self__,nodes);
case 3:
return G__10529__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10529.cljs$core$IFn$_invoke$arity$2 = G__10529__2;
G__10529.cljs$core$IFn$_invoke$arity$3 = G__10529__3;
return G__10529;
})()
;})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.apply = ((function (trans){
return (function (self__,args10523){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10523)));
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10520.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10520.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta10521","meta10521",-1366686641,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core10520.cljs$lang$type = true;

enfocus.core.t_enfocus$core10520.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core10520";

enfocus.core.t_enfocus$core10520.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core10520");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core10520.
 */
enfocus.core.__GT_t_enfocus$core10520 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core10520(func__$1,trans__$1,meta10521){
return (new enfocus.core.t_enfocus$core10520(func__$1,trans__$1,meta10521));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core10520(func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__10517_SHARP_){
return domina.nodes.call(null,p1__10517_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core10524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core10524 = (function (values,func,trans,meta10525){
this.values = values;
this.func = func;
this.trans = trans;
this.meta10525 = meta10525;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core10524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_10526,meta10525__$1){
var self__ = this;
var _10526__$1 = this;
return (new enfocus.core.t_enfocus$core10524(self__.values,self__.func,self__.trans,meta10525__$1));
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_10526){
var self__ = this;
var _10526__$1 = this;
return self__.meta10525;
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core10524.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.call = ((function (trans){
return (function() {
var G__10530 = null;
var G__10530__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__10530__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__10530 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10530__2.call(this,self__,nodes);
case 3:
return G__10530__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10530.cljs$core$IFn$_invoke$arity$2 = G__10530__2;
G__10530.cljs$core$IFn$_invoke$arity$3 = G__10530__3;
return G__10530;
})()
;})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.apply = ((function (trans){
return (function (self__,args10527){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10527)));
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10524.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10524.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta10525","meta10525",-1407840234,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core10524.cljs$lang$type = true;

enfocus.core.t_enfocus$core10524.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core10524";

enfocus.core.t_enfocus$core10524.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core10524");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core10524.
 */
enfocus.core.__GT_t_enfocus$core10524 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core10524(values__$1,func__$1,trans__$1,meta10525){
return (new enfocus.core.t_enfocus$core10524(values__$1,func__$1,trans__$1,meta10525));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core10524(values,func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$lang$maxFixedArity = 2;

/**
 * Replaces the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.content = (function enfocus$core$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10534 = arguments.length;
var i__4500__auto___10535 = (0);
while(true){
if((i__4500__auto___10535 < len__4499__auto___10534)){
args__4502__auto__.push((arguments[i__4500__auto___10535]));

var G__10536 = (i__4500__auto___10535 + (1));
i__4500__auto___10535 = G__10536;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10531_SHARP_,p2__10532_SHARP_){
domina.destroy_children_BANG_.call(null,p1__10531_SHARP_);

return domina.append_BANG_.call(null,p1__10531_SHARP_,p2__10532_SHARP_);
}));
});

enfocus.core.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.content.cljs$lang$applyTo = (function (seq10533){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10533));
});

/**
 * Replaces the content of the element with the dom structure represented by the html string passed
 */
enfocus.core.html_content = (function enfocus$core$html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__10537_SHARP_){
return domina.set_html_BANG_.call(null,p1__10537_SHARP_,txt);
}));
});
/**
 * Assocs attributes and values on the selected element.
 */
enfocus.core.set_attr = (function enfocus$core$set_attr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10550 = arguments.length;
var i__4500__auto___10551 = (0);
while(true){
if((i__4500__auto___10551 < len__4499__auto___10550)){
args__4502__auto__.push((arguments[i__4500__auto___10551]));

var G__10552 = (i__4500__auto___10551 + (1));
i__4500__auto___10551 = G__10552;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__10538_SHARP_){
var seq__10540 = cljs.core.seq.call(null,pairs);
var chunk__10541 = null;
var count__10542 = (0);
var i__10543 = (0);
while(true){
if((i__10543 < count__10542)){
var vec__10544 = cljs.core._nth.call(null,chunk__10541,i__10543);
var name = cljs.core.nth.call(null,vec__10544,(0),null);
var value = cljs.core.nth.call(null,vec__10544,(1),null);
domina.set_attr_BANG_.call(null,p1__10538_SHARP_,name,value);


var G__10553 = seq__10540;
var G__10554 = chunk__10541;
var G__10555 = count__10542;
var G__10556 = (i__10543 + (1));
seq__10540 = G__10553;
chunk__10541 = G__10554;
count__10542 = G__10555;
i__10543 = G__10556;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10540);
if(temp__4657__auto__){
var seq__10540__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10540__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10540__$1);
var G__10557 = cljs.core.chunk_rest.call(null,seq__10540__$1);
var G__10558 = c__4319__auto__;
var G__10559 = cljs.core.count.call(null,c__4319__auto__);
var G__10560 = (0);
seq__10540 = G__10557;
chunk__10541 = G__10558;
count__10542 = G__10559;
i__10543 = G__10560;
continue;
} else {
var vec__10547 = cljs.core.first.call(null,seq__10540__$1);
var name = cljs.core.nth.call(null,vec__10547,(0),null);
var value = cljs.core.nth.call(null,vec__10547,(1),null);
domina.set_attr_BANG_.call(null,p1__10538_SHARP_,name,value);


var G__10561 = cljs.core.next.call(null,seq__10540__$1);
var G__10562 = null;
var G__10563 = (0);
var G__10564 = (0);
seq__10540 = G__10561;
chunk__10541 = G__10562;
count__10542 = G__10563;
i__10543 = G__10564;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_attr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_attr.cljs$lang$applyTo = (function (seq10539){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10539));
});

/**
 * Dissocs attributes on the selected element.
 */
enfocus.core.remove_attr = (function enfocus$core$remove_attr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10571 = arguments.length;
var i__4500__auto___10572 = (0);
while(true){
if((i__4500__auto___10572 < len__4499__auto___10571)){
args__4502__auto__.push((arguments[i__4500__auto___10572]));

var G__10573 = (i__4500__auto___10572 + (1));
i__4500__auto___10572 = G__10573;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__10565_SHARP_){
var seq__10567 = cljs.core.seq.call(null,values);
var chunk__10568 = null;
var count__10569 = (0);
var i__10570 = (0);
while(true){
if((i__10570 < count__10569)){
var name = cljs.core._nth.call(null,chunk__10568,i__10570);
domina.remove_attr_BANG_.call(null,p1__10565_SHARP_,name);


var G__10574 = seq__10567;
var G__10575 = chunk__10568;
var G__10576 = count__10569;
var G__10577 = (i__10570 + (1));
seq__10567 = G__10574;
chunk__10568 = G__10575;
count__10569 = G__10576;
i__10570 = G__10577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10567);
if(temp__4657__auto__){
var seq__10567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10567__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10567__$1);
var G__10578 = cljs.core.chunk_rest.call(null,seq__10567__$1);
var G__10579 = c__4319__auto__;
var G__10580 = cljs.core.count.call(null,c__4319__auto__);
var G__10581 = (0);
seq__10567 = G__10578;
chunk__10568 = G__10579;
count__10569 = G__10580;
i__10570 = G__10581;
continue;
} else {
var name = cljs.core.first.call(null,seq__10567__$1);
domina.remove_attr_BANG_.call(null,p1__10565_SHARP_,name);


var G__10582 = cljs.core.next.call(null,seq__10567__$1);
var G__10583 = null;
var G__10584 = (0);
var G__10585 = (0);
seq__10567 = G__10582;
chunk__10568 = G__10583;
count__10569 = G__10584;
i__10570 = G__10585;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_attr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.remove_attr.cljs$lang$applyTo = (function (seq10566){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10566));
});

enfocus.core.set_prop = (function enfocus$core$set_prop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10591 = arguments.length;
var i__4500__auto___10592 = (0);
while(true){
if((i__4500__auto___10592 < len__4499__auto___10591)){
args__4502__auto__.push((arguments[i__4500__auto___10592]));

var G__10593 = (i__4500__auto___10592 + (1));
i__4500__auto___10592 = G__10593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__10587){
var vec__10588 = p__10587;
var n = cljs.core.nth.call(null,vec__10588,(0),null);
var v = cljs.core.nth.call(null,vec__10588,(1),null);
return (new cljs.core.List(null,cljs.core.name.call(null,n),(new cljs.core.List(null,v,null,(1),null)),(2),null));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
});

enfocus.core.set_prop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_prop.cljs$lang$applyTo = (function (seq10586){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10586));
});

/**
 * returns true if the element has a given class
 */
enfocus.core.has_class = (function enfocus$core$has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
 * Adds the specified classes to the selected element.
 */
enfocus.core.add_class = (function enfocus$core$add_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10600 = arguments.length;
var i__4500__auto___10601 = (0);
while(true){
if((i__4500__auto___10601 < len__4499__auto___10600)){
args__4502__auto__.push((arguments[i__4500__auto___10601]));

var G__10602 = (i__4500__auto___10601 + (1));
i__4500__auto___10601 = G__10602;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__10594_SHARP_){
var seq__10596 = cljs.core.seq.call(null,values);
var chunk__10597 = null;
var count__10598 = (0);
var i__10599 = (0);
while(true){
if((i__10599 < count__10598)){
var val = cljs.core._nth.call(null,chunk__10597,i__10599);
domina.add_class_BANG_.call(null,p1__10594_SHARP_,val);


var G__10603 = seq__10596;
var G__10604 = chunk__10597;
var G__10605 = count__10598;
var G__10606 = (i__10599 + (1));
seq__10596 = G__10603;
chunk__10597 = G__10604;
count__10598 = G__10605;
i__10599 = G__10606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10596);
if(temp__4657__auto__){
var seq__10596__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10596__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10596__$1);
var G__10607 = cljs.core.chunk_rest.call(null,seq__10596__$1);
var G__10608 = c__4319__auto__;
var G__10609 = cljs.core.count.call(null,c__4319__auto__);
var G__10610 = (0);
seq__10596 = G__10607;
chunk__10597 = G__10608;
count__10598 = G__10609;
i__10599 = G__10610;
continue;
} else {
var val = cljs.core.first.call(null,seq__10596__$1);
domina.add_class_BANG_.call(null,p1__10594_SHARP_,val);


var G__10611 = cljs.core.next.call(null,seq__10596__$1);
var G__10612 = null;
var G__10613 = (0);
var G__10614 = (0);
seq__10596 = G__10611;
chunk__10597 = G__10612;
count__10598 = G__10613;
i__10599 = G__10614;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.add_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.add_class.cljs$lang$applyTo = (function (seq10595){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10595));
});

/**
 * Removes the specified classes from the selected element.
 */
enfocus.core.remove_class = (function enfocus$core$remove_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10621 = arguments.length;
var i__4500__auto___10622 = (0);
while(true){
if((i__4500__auto___10622 < len__4499__auto___10621)){
args__4502__auto__.push((arguments[i__4500__auto___10622]));

var G__10623 = (i__4500__auto___10622 + (1));
i__4500__auto___10622 = G__10623;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__10615_SHARP_){
var seq__10617 = cljs.core.seq.call(null,values);
var chunk__10618 = null;
var count__10619 = (0);
var i__10620 = (0);
while(true){
if((i__10620 < count__10619)){
var val = cljs.core._nth.call(null,chunk__10618,i__10620);
domina.remove_class_BANG_.call(null,p1__10615_SHARP_,val);


var G__10624 = seq__10617;
var G__10625 = chunk__10618;
var G__10626 = count__10619;
var G__10627 = (i__10620 + (1));
seq__10617 = G__10624;
chunk__10618 = G__10625;
count__10619 = G__10626;
i__10620 = G__10627;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10617);
if(temp__4657__auto__){
var seq__10617__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10617__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10617__$1);
var G__10628 = cljs.core.chunk_rest.call(null,seq__10617__$1);
var G__10629 = c__4319__auto__;
var G__10630 = cljs.core.count.call(null,c__4319__auto__);
var G__10631 = (0);
seq__10617 = G__10628;
chunk__10618 = G__10629;
count__10619 = G__10630;
i__10620 = G__10631;
continue;
} else {
var val = cljs.core.first.call(null,seq__10617__$1);
domina.remove_class_BANG_.call(null,p1__10615_SHARP_,val);


var G__10632 = cljs.core.next.call(null,seq__10617__$1);
var G__10633 = null;
var G__10634 = (0);
var G__10635 = (0);
seq__10617 = G__10632;
chunk__10618 = G__10633;
count__10619 = G__10634;
i__10620 = G__10635;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.remove_class.cljs$lang$applyTo = (function (seq10616){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10616));
});

/**
 * Sets the specified classes on the selected element
 */
enfocus.core.set_class = (function enfocus$core$set_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10638 = arguments.length;
var i__4500__auto___10639 = (0);
while(true){
if((i__4500__auto___10639 < len__4499__auto___10638)){
args__4502__auto__.push((arguments[i__4500__auto___10639]));

var G__10640 = (i__4500__auto___10639 + (1));
i__4500__auto___10639 = G__10640;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__10636_SHARP_){
return domina.set_classes_BANG_.call(null,p1__10636_SHARP_,values);
}));
});

enfocus.core.set_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_class.cljs$lang$applyTo = (function (seq10637){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10637));
});

enfocus.core.do__GT_ = (function enfocus$core$do__GT_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10646 = arguments.length;
var i__4500__auto___10647 = (0);
while(true){
if((i__4500__auto___10647 < len__4499__auto___10646)){
args__4502__auto__.push((arguments[i__4500__auto___10647]));

var G__10648 = (i__4500__auto___10647 + (1));
i__4500__auto___10647 = G__10648;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (forms){

return (function (pnod){
var seq__10642 = cljs.core.seq.call(null,forms);
var chunk__10643 = null;
var count__10644 = (0);
var i__10645 = (0);
while(true){
if((i__10645 < count__10644)){
var fun = cljs.core._nth.call(null,chunk__10643,i__10645);
enfocus.core.apply_transform.call(null,fun,pnod);


var G__10649 = seq__10642;
var G__10650 = chunk__10643;
var G__10651 = count__10644;
var G__10652 = (i__10645 + (1));
seq__10642 = G__10649;
chunk__10643 = G__10650;
count__10644 = G__10651;
i__10645 = G__10652;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10642);
if(temp__4657__auto__){
var seq__10642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10642__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10642__$1);
var G__10653 = cljs.core.chunk_rest.call(null,seq__10642__$1);
var G__10654 = c__4319__auto__;
var G__10655 = cljs.core.count.call(null,c__4319__auto__);
var G__10656 = (0);
seq__10642 = G__10653;
chunk__10643 = G__10654;
count__10644 = G__10655;
i__10645 = G__10656;
continue;
} else {
var fun = cljs.core.first.call(null,seq__10642__$1);
enfocus.core.apply_transform.call(null,fun,pnod);


var G__10657 = cljs.core.next.call(null,seq__10642__$1);
var G__10658 = null;
var G__10659 = (0);
var G__10660 = (0);
seq__10642 = G__10657;
chunk__10643 = G__10658;
count__10644 = G__10659;
i__10645 = G__10660;
continue;
}
} else {
return null;
}
}
break;
}
});
});

enfocus.core.do__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.do__GT_.cljs$lang$applyTo = (function (seq10641){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10641));
});

/**
 * Appends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.append = (function enfocus$core$append(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10664 = arguments.length;
var i__4500__auto___10665 = (0);
while(true){
if((i__4500__auto___10665 < len__4499__auto___10664)){
args__4502__auto__.push((arguments[i__4500__auto___10665]));

var G__10666 = (i__4500__auto___10665 + (1));
i__4500__auto___10665 = G__10666;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10661_SHARP_,p2__10662_SHARP_){
return domina.append_BANG_.call(null,p1__10661_SHARP_,p2__10662_SHARP_);
}));
});

enfocus.core.append.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.append.cljs$lang$applyTo = (function (seq10663){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10663));
});

/**
 * Prepends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.prepend = (function enfocus$core$prepend(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10670 = arguments.length;
var i__4500__auto___10671 = (0);
while(true){
if((i__4500__auto___10671 < len__4499__auto___10670)){
args__4502__auto__.push((arguments[i__4500__auto___10671]));

var G__10672 = (i__4500__auto___10671 + (1));
i__4500__auto___10671 = G__10672;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10667_SHARP_,p2__10668_SHARP_){
return domina.prepend_BANG_.call(null,p1__10667_SHARP_,p2__10668_SHARP_);
}));
});

enfocus.core.prepend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.prepend.cljs$lang$applyTo = (function (seq10669){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10669));
});

/**
 * inserts the content before the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.before = (function enfocus$core$before(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10676 = arguments.length;
var i__4500__auto___10677 = (0);
while(true){
if((i__4500__auto___10677 < len__4499__auto___10676)){
args__4502__auto__.push((arguments[i__4500__auto___10677]));

var G__10678 = (i__4500__auto___10677 + (1));
i__4500__auto___10677 = G__10678;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10673_SHARP_,p2__10674_SHARP_){
return domina.insert_before_BANG_.call(null,p1__10673_SHARP_,p2__10674_SHARP_);
}));
});

enfocus.core.before.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.before.cljs$lang$applyTo = (function (seq10675){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10675));
});

/**
 * inserts the content after the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.after = (function enfocus$core$after(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10682 = arguments.length;
var i__4500__auto___10683 = (0);
while(true){
if((i__4500__auto___10683 < len__4499__auto___10682)){
args__4502__auto__.push((arguments[i__4500__auto___10683]));

var G__10684 = (i__4500__auto___10683 + (1));
i__4500__auto___10683 = G__10684;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10679_SHARP_,p2__10680_SHARP_){
return domina.insert_after_BANG_.call(null,p1__10679_SHARP_,p2__10680_SHARP_);
}));
});

enfocus.core.after.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.after.cljs$lang$applyTo = (function (seq10681){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10681));
});

/**
 * substitutes the content for the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.substitute = (function enfocus$core$substitute(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10688 = arguments.length;
var i__4500__auto___10689 = (0);
while(true){
if((i__4500__auto___10689 < len__4499__auto___10688)){
args__4502__auto__.push((arguments[i__4500__auto___10689]));

var G__10690 = (i__4500__auto___10689 + (1));
i__4500__auto___10689 = G__10690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__10685_SHARP_,p2__10686_SHARP_){
return domina.swap_content_BANG_.call(null,p1__10685_SHARP_,p2__10686_SHARP_);
}));
});

enfocus.core.substitute.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.substitute.cljs$lang$applyTo = (function (seq10687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10687));
});

/**
 * removes the selected nodes from the dom
 */
enfocus.core.remove_node = (function enfocus$core$remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__10691_SHARP_){
return domina.detach_BANG_.call(null,p1__10691_SHARP_);
}));
});
/**
 * wrap and element in a new element defined as :div {:class 'temp'}
 */
enfocus.core.wrap = (function enfocus$core$wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
 * replaces a node with all its children
 */
enfocus.core.unwrap = (function enfocus$core$unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
 * set a list of style elements from the selected nodes
 */
enfocus.core.set_style = (function enfocus$core$set_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10704 = arguments.length;
var i__4500__auto___10705 = (0);
while(true){
if((i__4500__auto___10705 < len__4499__auto___10704)){
args__4502__auto__.push((arguments[i__4500__auto___10705]));

var G__10706 = (i__4500__auto___10705 + (1));
i__4500__auto___10705 = G__10706;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__10692_SHARP_){
var seq__10694 = cljs.core.seq.call(null,pairs);
var chunk__10695 = null;
var count__10696 = (0);
var i__10697 = (0);
while(true){
if((i__10697 < count__10696)){
var vec__10698 = cljs.core._nth.call(null,chunk__10695,i__10697);
var name = cljs.core.nth.call(null,vec__10698,(0),null);
var value = cljs.core.nth.call(null,vec__10698,(1),null);
domina.set_style_BANG_.call(null,p1__10692_SHARP_,name,value);


var G__10707 = seq__10694;
var G__10708 = chunk__10695;
var G__10709 = count__10696;
var G__10710 = (i__10697 + (1));
seq__10694 = G__10707;
chunk__10695 = G__10708;
count__10696 = G__10709;
i__10697 = G__10710;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10694);
if(temp__4657__auto__){
var seq__10694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10694__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10694__$1);
var G__10711 = cljs.core.chunk_rest.call(null,seq__10694__$1);
var G__10712 = c__4319__auto__;
var G__10713 = cljs.core.count.call(null,c__4319__auto__);
var G__10714 = (0);
seq__10694 = G__10711;
chunk__10695 = G__10712;
count__10696 = G__10713;
i__10697 = G__10714;
continue;
} else {
var vec__10701 = cljs.core.first.call(null,seq__10694__$1);
var name = cljs.core.nth.call(null,vec__10701,(0),null);
var value = cljs.core.nth.call(null,vec__10701,(1),null);
domina.set_style_BANG_.call(null,p1__10692_SHARP_,name,value);


var G__10715 = cljs.core.next.call(null,seq__10694__$1);
var G__10716 = null;
var G__10717 = (0);
var G__10718 = (0);
seq__10694 = G__10715;
chunk__10695 = G__10716;
count__10696 = G__10717;
i__10697 = G__10718;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_style.cljs$lang$applyTo = (function (seq10693){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10693));
});

/**
 * remove a list style elements from the selected nodes. note: you can only remove styles that are inline
 */
enfocus.core.remove_style = (function enfocus$core$remove_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10720 = arguments.length;
var i__4500__auto___10721 = (0);
while(true){
if((i__4500__auto___10721 < len__4499__auto___10720)){
args__4502__auto__.push((arguments[i__4500__auto___10721]));

var G__10722 = (i__4500__auto___10721 + (1));
i__4500__auto___10721 = G__10722;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
});

enfocus.core.remove_style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.remove_style.cljs$lang$applyTo = (function (seq10719){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10719));
});

/**
 * calls the focus function on the selected node
 */
enfocus.core.focus = (function enfocus$core$focus(){
return (function (node){
return node.focus();
});
});
/**
 * calls the blur function on the selected node
 */
enfocus.core.blur = (function enfocus$core$blur(){
return (function (node){
return node.blur();
});
});
/**
 * addes key value pair of data to the selected nodes. Only use clojure data structures when setting
 */
enfocus.core.set_data = (function enfocus$core$set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__10723_SHARP_){
return domina.set_data_BANG_.call(null,p1__10723_SHARP_,ky,val);
}));
});
/**
 * delays and action by a set timeout, note this is an async operations
 */
enfocus.core.delay = (function enfocus$core$delay(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10726 = arguments.length;
var i__4500__auto___10727 = (0);
while(true){
if((i__4500__auto___10727 < len__4499__auto___10726)){
args__4502__auto__.push((arguments[i__4500__auto___10727]));

var G__10728 = (i__4500__auto___10727 + (1));
i__4500__auto___10727 = G__10728;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic = (function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
});

enfocus.core.delay.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
enfocus.core.delay.cljs$lang$applyTo = (function (seq10724){
var G__10725 = cljs.core.first.call(null,seq10724);
var seq10724__$1 = cljs.core.next.call(null,seq10724);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10725,seq10724__$1);
});

/**
 * replaces entries like the following ${var1} in attributes and text
 */
enfocus.core.replace_vars = (function enfocus$core$replace_vars(vars){
var rep_str = (function enfocus$core$replace_vars_$_rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__10730_SHARP_,p2__10729_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__10729_SHARP_));
}));
});
return (function enfocus$core$replace_vars_$_rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__10731_10739 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__10732_10740 = null;
var count__10733_10741 = (0);
var i__10734_10742 = (0);
while(true){
if((i__10734_10742 < count__10733_10741)){
var idx_10743 = cljs.core._nth.call(null,chunk__10732_10740,i__10734_10742);
var attr_10744 = pnod.attributes.item(idx_10743);
if(cljs.core.truth_(attr_10744.specified)){
attr_10744.value = rep_str.call(null,attr_10744.value);
} else {
}


var G__10745 = seq__10731_10739;
var G__10746 = chunk__10732_10740;
var G__10747 = count__10733_10741;
var G__10748 = (i__10734_10742 + (1));
seq__10731_10739 = G__10745;
chunk__10732_10740 = G__10746;
count__10733_10741 = G__10747;
i__10734_10742 = G__10748;
continue;
} else {
var temp__4657__auto___10749 = cljs.core.seq.call(null,seq__10731_10739);
if(temp__4657__auto___10749){
var seq__10731_10750__$1 = temp__4657__auto___10749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10731_10750__$1)){
var c__4319__auto___10751 = cljs.core.chunk_first.call(null,seq__10731_10750__$1);
var G__10752 = cljs.core.chunk_rest.call(null,seq__10731_10750__$1);
var G__10753 = c__4319__auto___10751;
var G__10754 = cljs.core.count.call(null,c__4319__auto___10751);
var G__10755 = (0);
seq__10731_10739 = G__10752;
chunk__10732_10740 = G__10753;
count__10733_10741 = G__10754;
i__10734_10742 = G__10755;
continue;
} else {
var idx_10756 = cljs.core.first.call(null,seq__10731_10750__$1);
var attr_10757 = pnod.attributes.item(idx_10756);
if(cljs.core.truth_(attr_10757.specified)){
attr_10757.value = rep_str.call(null,attr_10757.value);
} else {
}


var G__10758 = cljs.core.next.call(null,seq__10731_10750__$1);
var G__10759 = null;
var G__10760 = (0);
var G__10761 = (0);
seq__10731_10739 = G__10758;
chunk__10732_10740 = G__10759;
count__10733_10741 = G__10760;
i__10734_10742 = G__10761;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__10735 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__10736 = null;
var count__10737 = (0);
var i__10738 = (0);
while(true){
if((i__10738 < count__10737)){
var cnode = cljs.core._nth.call(null,chunk__10736,i__10738);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);


var G__10762 = seq__10735;
var G__10763 = chunk__10736;
var G__10764 = count__10737;
var G__10765 = (i__10738 + (1));
seq__10735 = G__10762;
chunk__10736 = G__10763;
count__10737 = G__10764;
i__10738 = G__10765;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10735);
if(temp__4657__auto__){
var seq__10735__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10735__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10735__$1);
var G__10766 = cljs.core.chunk_rest.call(null,seq__10735__$1);
var G__10767 = c__4319__auto__;
var G__10768 = cljs.core.count.call(null,c__4319__auto__);
var G__10769 = (0);
seq__10735 = G__10766;
chunk__10736 = G__10767;
count__10737 = G__10768;
i__10738 = G__10769;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__10735__$1);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);


var G__10770 = cljs.core.next.call(null,seq__10735__$1);
var G__10771 = null;
var G__10772 = (0);
var G__10773 = (0);
seq__10735 = G__10770;
chunk__10736 = G__10771;
count__10737 = G__10772;
i__10738 = G__10773;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function enfocus$core$exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([val]),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
 * sets the value of a form input (text,select,checkbox,etc...)
 *   format (at node (set-form-input value))
 */
enfocus.core.set_form_input = (function enfocus$core$set_form_input(val){
return (function (el){
if(((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio")))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = ((((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string'))))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
 * sets the values of a form based on a map
 *   (set-form {:val1 'val' :val2 'val'})
 */
enfocus.core.set_form = (function enfocus$core$set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__10774 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__10775 = null;
var count__10776 = (0);
var i__10777 = (0);
while(true){
if((i__10777 < count__10776)){
var idx = cljs.core._nth.call(null,chunk__10775,i__10777);
var el_10778 = (form_node.elements[idx]);
var ky_10779 = cljs.core.keyword.call(null,el_10778.name);
var val_10780 = ky_10779.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_10779)){
var val_10781__$1 = (cljs.core.truth_(val_10780)?val_10780:"");
enfocus.core.set_form_input.call(null,val_10781__$1).call(null,el_10778);
} else {
}


var G__10782 = seq__10774;
var G__10783 = chunk__10775;
var G__10784 = count__10776;
var G__10785 = (i__10777 + (1));
seq__10774 = G__10782;
chunk__10775 = G__10783;
count__10776 = G__10784;
i__10777 = G__10785;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10774);
if(temp__4657__auto__){
var seq__10774__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10774__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10774__$1);
var G__10786 = cljs.core.chunk_rest.call(null,seq__10774__$1);
var G__10787 = c__4319__auto__;
var G__10788 = cljs.core.count.call(null,c__4319__auto__);
var G__10789 = (0);
seq__10774 = G__10786;
chunk__10775 = G__10787;
count__10776 = G__10788;
i__10777 = G__10789;
continue;
} else {
var idx = cljs.core.first.call(null,seq__10774__$1);
var el_10790 = (form_node.elements[idx]);
var ky_10791 = cljs.core.keyword.call(null,el_10790.name);
var val_10792 = ky_10791.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_10791)){
var val_10793__$1 = (cljs.core.truth_(val_10792)?val_10792:"");
enfocus.core.set_form_input.call(null,val_10793__$1).call(null,el_10790);
} else {
}


var G__10794 = cljs.core.next.call(null,seq__10774__$1);
var G__10795 = null;
var G__10796 = (0);
var G__10797 = (0);
seq__10774 = G__10794;
chunk__10775 = G__10795;
count__10776 = G__10796;
i__10777 = G__10797;
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
});
});
/**
 * takes clojure data structure and emits a document element
 */
enfocus.core.html = (function enfocus$core$html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__10798 = node_spec;
var seq__10799 = cljs.core.seq.call(null,vec__10798);
var first__10800 = cljs.core.first.call(null,seq__10799);
var seq__10799__$1 = cljs.core.next.call(null,seq__10799);
var tag = first__10800;
var vec__10801 = seq__10799__$1;
var seq__10802 = cljs.core.seq.call(null,vec__10801);
var first__10803 = cljs.core.first.call(null,seq__10802);
var seq__10802__$1 = cljs.core.next.call(null,seq__10802);
var m = first__10803;
var ms = seq__10802__$1;
var more = vec__10801;
var vec__10804 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var seq__10805 = cljs.core.seq.call(null,vec__10804);
var first__10806 = cljs.core.first.call(null,seq__10805);
var seq__10805__$1 = cljs.core.next.call(null,seq__10805);
var tag_name = first__10806;
var segments = seq__10805__$1;
var id = cljs.core.some.call(null,((function (vec__10798,seq__10799,first__10800,seq__10799__$1,tag,vec__10801,seq__10802,first__10803,seq__10802__$1,m,ms,more,vec__10804,seq__10805,first__10806,seq__10805__$1,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__10798,seq__10799,first__10800,seq__10799__$1,tag,vec__10801,seq__10802,first__10803,seq__10802__$1,m,ms,more,vec__10804,seq__10805,first__10806,seq__10805__$1,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__10798,seq__10799,first__10800,seq__10799__$1,tag,vec__10801,seq__10802,first__10803,seq__10802__$1,m,ms,more,vec__10804,seq__10805,first__10806,seq__10805__$1,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__10798,seq__10799,first__10800,seq__10799__$1,tag,vec__10801,seq__10802,first__10803,seq__10802__$1,m,ms,more,vec__10804,seq__10805,first__10806,seq__10805__$1,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus.core.html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__10807_10817 = cljs.core.seq.call(null,attrs__$2);
var chunk__10808_10818 = null;
var count__10809_10819 = (0);
var i__10810_10820 = (0);
while(true){
if((i__10810_10820 < count__10809_10819)){
var vec__10811_10821 = cljs.core._nth.call(null,chunk__10808_10818,i__10810_10820);
var key_10822 = cljs.core.nth.call(null,vec__10811_10821,(0),null);
var val_10823 = cljs.core.nth.call(null,vec__10811_10821,(1),null);
node.setAttribute(cljs.core.name.call(null,key_10822),val_10823);


var G__10824 = seq__10807_10817;
var G__10825 = chunk__10808_10818;
var G__10826 = count__10809_10819;
var G__10827 = (i__10810_10820 + (1));
seq__10807_10817 = G__10824;
chunk__10808_10818 = G__10825;
count__10809_10819 = G__10826;
i__10810_10820 = G__10827;
continue;
} else {
var temp__4657__auto___10828 = cljs.core.seq.call(null,seq__10807_10817);
if(temp__4657__auto___10828){
var seq__10807_10829__$1 = temp__4657__auto___10828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10807_10829__$1)){
var c__4319__auto___10830 = cljs.core.chunk_first.call(null,seq__10807_10829__$1);
var G__10831 = cljs.core.chunk_rest.call(null,seq__10807_10829__$1);
var G__10832 = c__4319__auto___10830;
var G__10833 = cljs.core.count.call(null,c__4319__auto___10830);
var G__10834 = (0);
seq__10807_10817 = G__10831;
chunk__10808_10818 = G__10832;
count__10809_10819 = G__10833;
i__10810_10820 = G__10834;
continue;
} else {
var vec__10814_10835 = cljs.core.first.call(null,seq__10807_10829__$1);
var key_10836 = cljs.core.nth.call(null,vec__10814_10835,(0),null);
var val_10837 = cljs.core.nth.call(null,vec__10814_10835,(1),null);
node.setAttribute(cljs.core.name.call(null,key_10836),val_10837);


var G__10838 = cljs.core.next.call(null,seq__10807_10829__$1);
var G__10839 = null;
var G__10840 = (0);
var G__10841 = (0);
seq__10807_10817 = G__10838;
chunk__10808_10818 = G__10839;
count__10809_10819 = G__10840;
i__10810_10820 = G__10841;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus.core.html,node_spec));
} else {
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_spec)].join(''));

}
}
}
});
/**
 * returns the attribute on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_attr = (function enfocus$core$get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
 * returns the text value of the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_text = (function enfocus$core$get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
 * returns the data on a selected node for a given key. If bubble is set will look at parent
 */
enfocus.core.get_data = (function enfocus$core$get_data(var_args){
var G__10843 = arguments.length;
switch (G__10843) {
case 1:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return enfocus.core.get_data.call(null,ky,false);
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});

enfocus.core.get_data.cljs$lang$maxFixedArity = 2;

/**
 * returns the property on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_prop = (function enfocus$core$get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
 * this function takes a map, key and value.  It will check if
 * the value exists and create a seq of values if one exits.
 */
enfocus.core.merge_form_val = (function enfocus$core$merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if(((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val)))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.createAsIfByAssoc([mval,val]));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
 * returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
 */
enfocus.core.read_form_input = (function enfocus$core$read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__10846_SHARP_,p2__10845_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__10845_SHARP_));
if(((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))){
return cljs.core.into.call(null,p1__10846_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__10846_SHARP_,vals);
} else {
return p1__10846_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if(((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type))))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t_enfocus$core10847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core10847 = (function (trans,meta10848){
this.trans = trans;
this.meta10848 = meta10848;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core10847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_10849,meta10848__$1){
var self__ = this;
var _10849__$1 = this;
return (new enfocus.core.t_enfocus$core10847(self__.trans,meta10848__$1));
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_10849){
var self__ = this;
var _10849__$1 = this;
return self__.meta10848;
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core10847.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.call = ((function (trans){
return (function() {
var G__10851 = null;
var G__10851__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__10851__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__10851 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10851__2.call(this,self__,nodes);
case 3:
return G__10851__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10851.cljs$core$IFn$_invoke$arity$2 = G__10851__2;
G__10851.cljs$core$IFn$_invoke$arity$3 = G__10851__3;
return G__10851;
})()
;})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.apply = ((function (trans){
return (function (self__,args10850){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10850)));
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core10847.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core10847.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta10848","meta10848",-610723906,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core10847.cljs$lang$type = true;

enfocus.core.t_enfocus$core10847.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core10847";

enfocus.core.t_enfocus$core10847.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core10847");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core10847.
 */
enfocus.core.__GT_t_enfocus$core10847 = ((function (trans){
return (function enfocus$core$read_form_input_$___GT_t_enfocus$core10847(trans__$1,meta10848){
return (new enfocus.core.t_enfocus$core10847(trans__$1,meta10848));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core10847(trans,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns a map of the form values tied to name of input fields.
 * {:name1 'value1' name2 #{'select1' 'select2'}}
 */
enfocus.core.read_form = (function enfocus$core$read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__10853_SHARP_,p2__10852_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__10852_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__10853_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__10852_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__10852_SHARP_)));
} else {
return p1__10853_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * filter allows you to apply function to futhur scope down what is returned by a selector
 */
enfocus.core.filter = (function enfocus$core$filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var enfocus$core$filter_$_filt = null;
var enfocus$core$filter_$_filt__1 = (function (pnodes){
return enfocus$core$filter_$_filt.call(null,pnodes,null);
});
var enfocus$core$filter_$_filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
enfocus$core$filter_$_filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$filter_$_filt__1.call(this,pnodes);
case 2:
return enfocus$core$filter_$_filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$1 = enfocus$core$filter_$_filt__1;
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$2 = enfocus$core$filter_$_filt__2;
return enfocus$core$filter_$_filt;
})()
);
});
/**
 * registers a filter for a given keyword
 */
enfocus.core.register_filter = (function enfocus$core$register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
 * takes a list of options and returns the selected ones. 
 */
enfocus.core.selected_options = (function enfocus$core$selected_options(pnod){
return pnod.selected;
});
/**
 * takes a list of radio or checkboxes and returns the checked ones
 */
enfocus.core.checked_radio_checkbox = (function enfocus$core$checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function enfocus$core$match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
 * converts keywords, symbols and strings used in the enlive selector
 * syntax to a string representing a standard css selector.  It also
 * applys id masking if mask provided
 */
enfocus.core.create_sel_str = (function enfocus$core$create_sel_str(var_args){
var G__10856 = arguments.length;
switch (G__10856) {
case 1:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.create_sel_str.call(null,"",css_sel);
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__10854_SHARP_){
if((p1__10854_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__10854_SHARP_);
} else {
if((p1__10854_SHARP_ instanceof cljs.core.Keyword)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__10854_SHARP_).replace("#",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__10854_SHARP_)){
return enfocus.core.create_sel_str.call(null,p1__10854_SHARP_);
} else {
if(typeof p1__10854_SHARP_ === 'string'){
return p1__10854_SHARP_.replace("#",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});

enfocus.core.create_sel_str.cljs$lang$maxFixedArity = 2;

/**
 * takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
 */
enfocus.core.css_select = (function enfocus$core$css_select(var_args){
var G__10859 = arguments.length;
switch (G__10859) {
case 1:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.css_select.call(null,"",document,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 = (function (dom_node,css_sel){
return enfocus.core.css_select.call(null,"",dom_node,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});

enfocus.core.css_select.cljs$lang$maxFixedArity = 3;

enfocus.core.nil_t = (function enfocus$core$nil_t(func){
var or__3922__auto__ = func;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return enfocus.core.remove_node;
}
});
enfocus.core.i_at = (function enfocus$core$i_at(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10879 = arguments.length;
var i__4500__auto___10880 = (0);
while(true){
if((i__4500__auto___10880 < len__4499__auto___10879)){
args__4502__auto__.push((arguments[i__4500__auto___10880]));

var G__10881 = (i__4500__auto___10880 + (1));
i__4500__auto___10880 = G__10881;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic = (function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__3911__auto__ = !((node == null));
if(and__3911__auto__){
if(!((node == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === node.enfocus$core$ISelector$)))){
return true;
} else {
if((!node.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
}
} else {
return and__3911__auto__;
}
})();
if(((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt)))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__10866 = ((sel_QMARK_)?(new cljs.core.List(null,document,(new cljs.core.List(null,cljs.core.conj.call(null,trans,node),null,(1),null)),(2),null)):(new cljs.core.List(null,node,(new cljs.core.List(null,trans,null,(1),null)),(2),null)));
var node__$1 = cljs.core.nth.call(null,vec__10866,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__10866,(1),null);
var seq__10869 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__10870 = null;
var count__10871 = (0);
var i__10872 = (0);
while(true){
if((i__10872 < count__10871)){
var vec__10873 = cljs.core._nth.call(null,chunk__10870,i__10872);
var sel = cljs.core.nth.call(null,vec__10873,(0),null);
var t = cljs.core.nth.call(null,vec__10873,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));


var G__10882 = seq__10869;
var G__10883 = chunk__10870;
var G__10884 = count__10871;
var G__10885 = (i__10872 + (1));
seq__10869 = G__10882;
chunk__10870 = G__10883;
count__10871 = G__10884;
i__10872 = G__10885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10869);
if(temp__4657__auto__){
var seq__10869__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10869__$1);
var G__10886 = cljs.core.chunk_rest.call(null,seq__10869__$1);
var G__10887 = c__4319__auto__;
var G__10888 = cljs.core.count.call(null,c__4319__auto__);
var G__10889 = (0);
seq__10869 = G__10886;
chunk__10870 = G__10887;
count__10871 = G__10888;
i__10872 = G__10889;
continue;
} else {
var vec__10876 = cljs.core.first.call(null,seq__10869__$1);
var sel = cljs.core.nth.call(null,vec__10876,(0),null);
var t = cljs.core.nth.call(null,vec__10876,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));


var G__10890 = cljs.core.next.call(null,seq__10869__$1);
var G__10891 = null;
var G__10892 = (0);
var G__10893 = (0);
seq__10869 = G__10890;
chunk__10870 = G__10891;
count__10871 = G__10892;
i__10872 = G__10893;
continue;
}
} else {
return null;
}
}
break;
}
}
});

enfocus.core.i_at.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
enfocus.core.i_at.cljs$lang$applyTo = (function (seq10861){
var G__10862 = cljs.core.first.call(null,seq10861);
var seq10861__$1 = cljs.core.next.call(null,seq10861);
var G__10863 = cljs.core.first.call(null,seq10861__$1);
var seq10861__$2 = cljs.core.next.call(null,seq10861__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10862,G__10863,seq10861__$2);
});

enfocus.core.at = (function enfocus$core$at(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10896 = arguments.length;
var i__4500__auto___10897 = (0);
while(true){
if((i__4500__auto___10897 < len__4499__auto___10896)){
args__4502__auto__.push((arguments[i__4500__auto___10897]));

var G__10898 = (i__4500__auto___10897 + (1));
i__4500__auto___10897 = G__10898;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
});

enfocus.core.at.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
enfocus.core.at.cljs$lang$applyTo = (function (seq10894){
var G__10895 = cljs.core.first.call(null,seq10894);
var seq10894__$1 = cljs.core.next.call(null,seq10894);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10895,seq10894__$1);
});

enfocus.core.from = (function enfocus$core$from(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10909 = arguments.length;
var i__4500__auto___10910 = (0);
while(true){
if((i__4500__auto___10910 < len__4499__auto___10909)){
args__4502__auto__.push((arguments[i__4500__auto___10910]));

var G__10911 = (i__4500__auto___10910 + (1));
i__4500__auto___10910 = G__10911;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = ((!((node == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === node.enfocus$core$ISelector$))))?true:(((!node.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node):false)):cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node));
if(((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt)))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__10902 = ((sel_QMARK_)?(new cljs.core.List(null,document,(new cljs.core.List(null,cljs.core.conj.call(null,trans,node),null,(1),null)),(2),null)):(new cljs.core.List(null,node,(new cljs.core.List(null,trans,null,(1),null)),(2),null)));
var node__$1 = cljs.core.nth.call(null,vec__10902,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__10902,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__10902,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__10905){
var vec__10906 = p__10905;
var ky = cljs.core.nth.call(null,vec__10906,(0),null);
var sel = cljs.core.nth.call(null,vec__10906,(1),null);
var ext = cljs.core.nth.call(null,vec__10906,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__10902,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
});

enfocus.core.from.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
enfocus.core.from.cljs$lang$applyTo = (function (seq10899){
var G__10900 = cljs.core.first.call(null,seq10899);
var seq10899__$1 = cljs.core.next.call(null,seq10899);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10900,seq10899__$1);
});

enfocus.core.xpath = (function enfocus$core$xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",["@ID='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask)].join(''));
var mpath = path.replace("@id='",["@id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function enfocus$core$this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
goog.object.set(enfocus.core.ISelector,"function",true);

goog.object.set(enfocus.core.select,"function",(function() {
var G__10912 = null;
var G__10912__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__10912__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__10912__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__10912 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10912__1.call(this,this$);
case 2:
return G__10912__2.call(this,this$,root);
case 3:
return G__10912__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10912.cljs$core$IFn$_invoke$arity$1 = G__10912__1;
G__10912.cljs$core$IFn$_invoke$arity$2 = G__10912__2;
G__10912.cljs$core$IFn$_invoke$arity$3 = G__10912__3;
return G__10912;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

goog.object.set(enfocus.core.ISelector,"string",true);

goog.object.set(enfocus.core.select,"string",(function() {
var G__10913 = null;
var G__10913__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__10913__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__10913__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__10913 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10913__1.call(this,this$);
case 2:
return G__10913__2.call(this,this$,root);
case 3:
return G__10913__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10913.cljs$core$IFn$_invoke$arity$1 = G__10913__1;
G__10913.cljs$core$IFn$_invoke$arity$2 = G__10913__2;
G__10913.cljs$core$IFn$_invoke$arity$3 = G__10913__3;
return G__10913;
})()
);

goog.object.set(enfocus.core.ISelector,"null",true);

goog.object.set(enfocus.core.select,"null",(function() {
var G__10914 = null;
var G__10914__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__10914__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__10914__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__10914 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10914__1.call(this,this$);
case 2:
return G__10914__2.call(this,this$,root);
case 3:
return G__10914__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10914.cljs$core$IFn$_invoke$arity$1 = G__10914__1;
G__10914.cljs$core$IFn$_invoke$arity$2 = G__10914__2;
G__10914.cljs$core$IFn$_invoke$arity$3 = G__10914__3;
return G__10914;
})()
);
goog.object.set(enfocus.core.ITransform,"function",true);

goog.object.set(enfocus.core.apply_transform,"function",(function() {
var G__10915 = null;
var G__10915__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__10915__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__10915 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10915__2.call(this,trans,nodes);
case 3:
return G__10915__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10915.cljs$core$IFn$_invoke$arity$2 = G__10915__2;
G__10915.cljs$core$IFn$_invoke$arity$3 = G__10915__3;
return G__10915;
})()
);

goog.object.set(enfocus.core.ITransform,"null",true);

goog.object.set(enfocus.core.apply_transform,"null",(function() {
var G__10916 = null;
var G__10916__2 = (function (trans,nodes){
return nodes;
});
var G__10916__3 = (function (trans,nodes,chain){
return nodes;
});
G__10916 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10916__2.call(this,trans,nodes);
case 3:
return G__10916__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10916.cljs$core$IFn$_invoke$arity$2 = G__10916__2;
G__10916.cljs$core$IFn$_invoke$arity$3 = G__10916__3;
return G__10916;
})()
);
