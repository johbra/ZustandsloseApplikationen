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
var G__3169 = arguments.length;
switch (G__3169) {
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
var G__3172 = arguments.length;
switch (G__3172) {
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

return cljs.core.mapcat.call(null,(function (p1__3174_SHARP_){
if(typeof p1__3174_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__3174_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__3174_SHARP_);

}
}),values);
});
/**
 * Sets property name to a value on a element and	Returns the original object
 */
enfocus.core.style_set = (function enfocus$core$style_set(obj,values){
var seq__3175_3185 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__3176_3186 = null;
var count__3177_3187 = (0);
var i__3178_3188 = (0);
while(true){
if((i__3178_3188 < count__3177_3187)){
var vec__3179_3189 = cljs.core._nth.call(null,chunk__3176_3186,i__3178_3188);
var attr_3190 = cljs.core.nth.call(null,vec__3179_3189,(0),null);
var value_3191 = cljs.core.nth.call(null,vec__3179_3189,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_3190),value_3191);


var G__3192 = seq__3175_3185;
var G__3193 = chunk__3176_3186;
var G__3194 = count__3177_3187;
var G__3195 = (i__3178_3188 + (1));
seq__3175_3185 = G__3192;
chunk__3176_3186 = G__3193;
count__3177_3187 = G__3194;
i__3178_3188 = G__3195;
continue;
} else {
var temp__4657__auto___3196 = cljs.core.seq.call(null,seq__3175_3185);
if(temp__4657__auto___3196){
var seq__3175_3197__$1 = temp__4657__auto___3196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3175_3197__$1)){
var c__4319__auto___3198 = cljs.core.chunk_first.call(null,seq__3175_3197__$1);
var G__3199 = cljs.core.chunk_rest.call(null,seq__3175_3197__$1);
var G__3200 = c__4319__auto___3198;
var G__3201 = cljs.core.count.call(null,c__4319__auto___3198);
var G__3202 = (0);
seq__3175_3185 = G__3199;
chunk__3176_3186 = G__3200;
count__3177_3187 = G__3201;
i__3178_3188 = G__3202;
continue;
} else {
var vec__3182_3203 = cljs.core.first.call(null,seq__3175_3197__$1);
var attr_3204 = cljs.core.nth.call(null,vec__3182_3203,(0),null);
var value_3205 = cljs.core.nth.call(null,vec__3182_3203,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_3204),value_3205);


var G__3206 = cljs.core.next.call(null,seq__3175_3197__$1);
var G__3207 = null;
var G__3208 = (0);
var G__3209 = (0);
seq__3175_3185 = G__3206;
chunk__3176_3186 = G__3207;
count__3177_3187 = G__3208;
i__3178_3188 = G__3209;
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
var seq__3210 = cljs.core.seq.call(null,values);
var chunk__3211 = null;
var count__3212 = (0);
var i__3213 = (0);
while(true){
if((i__3213 < count__3212)){
var attr = cljs.core._nth.call(null,chunk__3211,i__3213);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}


var G__3214 = seq__3210;
var G__3215 = chunk__3211;
var G__3216 = count__3212;
var G__3217 = (i__3213 + (1));
seq__3210 = G__3214;
chunk__3211 = G__3215;
count__3212 = G__3216;
i__3213 = G__3217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3210);
if(temp__4657__auto__){
var seq__3210__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3210__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3210__$1);
var G__3218 = cljs.core.chunk_rest.call(null,seq__3210__$1);
var G__3219 = c__4319__auto__;
var G__3220 = cljs.core.count.call(null,c__4319__auto__);
var G__3221 = (0);
seq__3210 = G__3218;
chunk__3211 = G__3219;
count__3212 = G__3220;
i__3213 = G__3221;
continue;
} else {
var attr = cljs.core.first.call(null,seq__3210__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}


var G__3222 = cljs.core.next.call(null,seq__3210__$1);
var G__3223 = null;
var G__3224 = (0);
var G__3225 = (0);
seq__3210 = G__3222;
chunk__3211 = G__3223;
count__3212 = G__3224;
i__3213 = G__3225;
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
var G__3227 = arguments.length;
switch (G__3227) {
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
var seq__3228_3239 = cljs.core.seq.call(null,ats);
var chunk__3229_3240 = null;
var count__3230_3241 = (0);
var i__3231_3242 = (0);
while(true){
if((i__3231_3242 < count__3230_3241)){
var vec__3232_3243 = cljs.core._nth.call(null,chunk__3229_3240,i__3231_3242);
var k_3244 = cljs.core.nth.call(null,vec__3232_3243,(0),null);
var v_3245 = cljs.core.nth.call(null,vec__3232_3243,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_3244,v_3245);


var G__3246 = seq__3228_3239;
var G__3247 = chunk__3229_3240;
var G__3248 = count__3230_3241;
var G__3249 = (i__3231_3242 + (1));
seq__3228_3239 = G__3246;
chunk__3229_3240 = G__3247;
count__3230_3241 = G__3248;
i__3231_3242 = G__3249;
continue;
} else {
var temp__4657__auto___3250 = cljs.core.seq.call(null,seq__3228_3239);
if(temp__4657__auto___3250){
var seq__3228_3251__$1 = temp__4657__auto___3250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3228_3251__$1)){
var c__4319__auto___3252 = cljs.core.chunk_first.call(null,seq__3228_3251__$1);
var G__3253 = cljs.core.chunk_rest.call(null,seq__3228_3251__$1);
var G__3254 = c__4319__auto___3252;
var G__3255 = cljs.core.count.call(null,c__4319__auto___3252);
var G__3256 = (0);
seq__3228_3239 = G__3253;
chunk__3229_3240 = G__3254;
count__3230_3241 = G__3255;
i__3231_3242 = G__3256;
continue;
} else {
var vec__3235_3257 = cljs.core.first.call(null,seq__3228_3251__$1);
var k_3258 = cljs.core.nth.call(null,vec__3235_3257,(0),null);
var v_3259 = cljs.core.nth.call(null,vec__3235_3257,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_3258,v_3259);


var G__3260 = cljs.core.next.call(null,seq__3228_3251__$1);
var G__3261 = null;
var G__3262 = (0);
var G__3263 = (0);
seq__3228_3239 = G__3260;
chunk__3229_3240 = G__3261;
count__3230_3241 = G__3262;
i__3231_3242 = G__3263;
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

var seq__3264_3268 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__3265_3269 = null;
var count__3266_3270 = (0);
var i__3267_3271 = (0);
while(true){
if((i__3267_3271 < count__3266_3270)){
var node_3272 = cljs.core._nth.call(null,chunk__3265_3269,i__3267_3271);
goog.dom.appendChild(div,node_3272);


var G__3273 = seq__3264_3268;
var G__3274 = chunk__3265_3269;
var G__3275 = count__3266_3270;
var G__3276 = (i__3267_3271 + (1));
seq__3264_3268 = G__3273;
chunk__3265_3269 = G__3274;
count__3266_3270 = G__3275;
i__3267_3271 = G__3276;
continue;
} else {
var temp__4657__auto___3277 = cljs.core.seq.call(null,seq__3264_3268);
if(temp__4657__auto___3277){
var seq__3264_3278__$1 = temp__4657__auto___3277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3264_3278__$1)){
var c__4319__auto___3279 = cljs.core.chunk_first.call(null,seq__3264_3278__$1);
var G__3280 = cljs.core.chunk_rest.call(null,seq__3264_3278__$1);
var G__3281 = c__4319__auto___3279;
var G__3282 = cljs.core.count.call(null,c__4319__auto___3279);
var G__3283 = (0);
seq__3264_3268 = G__3280;
chunk__3265_3269 = G__3281;
count__3266_3270 = G__3282;
i__3267_3271 = G__3283;
continue;
} else {
var node_3284 = cljs.core.first.call(null,seq__3264_3278__$1);
goog.dom.appendChild(div,node_3284);


var G__3285 = cljs.core.next.call(null,seq__3264_3278__$1);
var G__3286 = null;
var G__3287 = (0);
var G__3288 = (0);
seq__3264_3268 = G__3285;
chunk__3265_3269 = G__3286;
count__3266_3270 = G__3287;
i__3267_3271 = G__3288;
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
var G__3290 = arguments.length;
switch (G__3290) {
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
return (function (p1__3292_SHARP_){
var id = p1__3292_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__3292_SHARP_.setAttribute("id",rid);
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
var vec__3293 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__3293,(0),null);
var txt = cljs.core.nth.call(null,vec__3293,(1),null);
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

var seq__3296_3300 = cljs.core.seq.call(null,dfa);
var chunk__3297_3301 = null;
var count__3298_3302 = (0);
var i__3299_3303 = (0);
while(true){
if((i__3299_3303 < count__3298_3302)){
var df_3304 = cljs.core._nth.call(null,chunk__3297_3301,i__3299_3303);
goog.dom.append(frag,df_3304);


var G__3305 = seq__3296_3300;
var G__3306 = chunk__3297_3301;
var G__3307 = count__3298_3302;
var G__3308 = (i__3299_3303 + (1));
seq__3296_3300 = G__3305;
chunk__3297_3301 = G__3306;
count__3298_3302 = G__3307;
i__3299_3303 = G__3308;
continue;
} else {
var temp__4657__auto___3309 = cljs.core.seq.call(null,seq__3296_3300);
if(temp__4657__auto___3309){
var seq__3296_3310__$1 = temp__4657__auto___3309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3296_3310__$1)){
var c__4319__auto___3311 = cljs.core.chunk_first.call(null,seq__3296_3310__$1);
var G__3312 = cljs.core.chunk_rest.call(null,seq__3296_3310__$1);
var G__3313 = c__4319__auto___3311;
var G__3314 = cljs.core.count.call(null,c__4319__auto___3311);
var G__3315 = (0);
seq__3296_3300 = G__3312;
chunk__3297_3301 = G__3313;
count__3298_3302 = G__3314;
i__3299_3303 = G__3315;
continue;
} else {
var df_3316 = cljs.core.first.call(null,seq__3296_3310__$1);
goog.dom.append(frag,df_3316);


var G__3317 = cljs.core.next.call(null,seq__3296_3310__$1);
var G__3318 = null;
var G__3319 = (0);
var G__3320 = (0);
seq__3296_3300 = G__3317;
chunk__3297_3301 = G__3318;
count__3298_3302 = G__3319;
i__3299_3303 = G__3320;
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
var vec__3322 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__3322,(0),null);
var tdom = cljs.core.nth.call(null,vec__3322,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__3322,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__3321_SHARP_){
return p1__3321_SHARP_.outerHTML;
});})(vec__3322,sym,tdom,dom,tsnip,sel_str,cache))
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
var G__3326 = arguments.length;
switch (G__3326) {
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
if(typeof enfocus.core.t_enfocus$core3327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core3327 = (function (func,filt,trans,meta3328){
this.func = func;
this.filt = filt;
this.trans = trans;
this.meta3328 = meta3328;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core3327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_3329,meta3328__$1){
var self__ = this;
var _3329__$1 = this;
return (new enfocus.core.t_enfocus$core3327(self__.func,self__.filt,self__.trans,meta3328__$1));
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_3329){
var self__ = this;
var _3329__$1 = this;
return self__.meta3328;
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core3327.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.call = ((function (trans){
return (function() {
var G__3332 = null;
var G__3332__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__3332__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__3332 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__3332__2.call(this,self__,nodes);
case 3:
return G__3332__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3332.cljs$core$IFn$_invoke$arity$2 = G__3332__2;
G__3332.cljs$core$IFn$_invoke$arity$3 = G__3332__3;
return G__3332;
})()
;})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.apply = ((function (trans){
return (function (self__,args3330){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3330)));
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3327.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3327.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"filt","filt",1809760609,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta3328","meta3328",571444395,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core3327.cljs$lang$type = true;

enfocus.core.t_enfocus$core3327.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core3327";

enfocus.core.t_enfocus$core3327.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core3327");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core3327.
 */
enfocus.core.__GT_t_enfocus$core3327 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core3327(func__$1,filt__$1,trans__$1,meta3328){
return (new enfocus.core.t_enfocus$core3327(func__$1,filt__$1,trans__$1,meta3328));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core3327(func,filt,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.extr_multi_node.cljs$lang$maxFixedArity = 2;

/**
 * Allows standard domina functions to be chainable
 */
enfocus.core.multi_node_chain = (function enfocus$core$multi_node_chain(var_args){
var G__3335 = arguments.length;
switch (G__3335) {
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
if(typeof enfocus.core.t_enfocus$core3336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core3336 = (function (func,trans,meta3337){
this.func = func;
this.trans = trans;
this.meta3337 = meta3337;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core3336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_3338,meta3337__$1){
var self__ = this;
var _3338__$1 = this;
return (new enfocus.core.t_enfocus$core3336(self__.func,self__.trans,meta3337__$1));
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_3338){
var self__ = this;
var _3338__$1 = this;
return self__.meta3337;
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core3336.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.call = ((function (trans){
return (function() {
var G__3345 = null;
var G__3345__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__3345__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__3345 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__3345__2.call(this,self__,nodes);
case 3:
return G__3345__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3345.cljs$core$IFn$_invoke$arity$2 = G__3345__2;
G__3345.cljs$core$IFn$_invoke$arity$3 = G__3345__3;
return G__3345;
})()
;})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.apply = ((function (trans){
return (function (self__,args3339){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3339)));
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3336.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3336.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta3337","meta3337",1486758182,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core3336.cljs$lang$type = true;

enfocus.core.t_enfocus$core3336.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core3336";

enfocus.core.t_enfocus$core3336.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core3336");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core3336.
 */
enfocus.core.__GT_t_enfocus$core3336 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core3336(func__$1,trans__$1,meta3337){
return (new enfocus.core.t_enfocus$core3336(func__$1,trans__$1,meta3337));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core3336(func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__3333_SHARP_){
return domina.nodes.call(null,p1__3333_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core3340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core3340 = (function (values,func,trans,meta3341){
this.values = values;
this.func = func;
this.trans = trans;
this.meta3341 = meta3341;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core3340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_3342,meta3341__$1){
var self__ = this;
var _3342__$1 = this;
return (new enfocus.core.t_enfocus$core3340(self__.values,self__.func,self__.trans,meta3341__$1));
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_3342){
var self__ = this;
var _3342__$1 = this;
return self__.meta3341;
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core3340.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.call = ((function (trans){
return (function() {
var G__3346 = null;
var G__3346__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__3346__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__3346 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__3346__2.call(this,self__,nodes);
case 3:
return G__3346__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3346.cljs$core$IFn$_invoke$arity$2 = G__3346__2;
G__3346.cljs$core$IFn$_invoke$arity$3 = G__3346__3;
return G__3346;
})()
;})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.apply = ((function (trans){
return (function (self__,args3343){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3343)));
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3340.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3340.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta3341","meta3341",1368910355,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core3340.cljs$lang$type = true;

enfocus.core.t_enfocus$core3340.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core3340";

enfocus.core.t_enfocus$core3340.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core3340");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core3340.
 */
enfocus.core.__GT_t_enfocus$core3340 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core3340(values__$1,func__$1,trans__$1,meta3341){
return (new enfocus.core.t_enfocus$core3340(values__$1,func__$1,trans__$1,meta3341));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core3340(values,func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$lang$maxFixedArity = 2;

/**
 * Replaces the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.content = (function enfocus$core$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3350 = arguments.length;
var i__4500__auto___3351 = (0);
while(true){
if((i__4500__auto___3351 < len__4499__auto___3350)){
args__4502__auto__.push((arguments[i__4500__auto___3351]));

var G__3352 = (i__4500__auto___3351 + (1));
i__4500__auto___3351 = G__3352;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3347_SHARP_,p2__3348_SHARP_){
domina.destroy_children_BANG_.call(null,p1__3347_SHARP_);

return domina.append_BANG_.call(null,p1__3347_SHARP_,p2__3348_SHARP_);
}));
});

enfocus.core.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.content.cljs$lang$applyTo = (function (seq3349){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3349));
});

/**
 * Replaces the content of the element with the dom structure represented by the html string passed
 */
enfocus.core.html_content = (function enfocus$core$html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__3353_SHARP_){
return domina.set_html_BANG_.call(null,p1__3353_SHARP_,txt);
}));
});
/**
 * Assocs attributes and values on the selected element.
 */
enfocus.core.set_attr = (function enfocus$core$set_attr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3366 = arguments.length;
var i__4500__auto___3367 = (0);
while(true){
if((i__4500__auto___3367 < len__4499__auto___3366)){
args__4502__auto__.push((arguments[i__4500__auto___3367]));

var G__3368 = (i__4500__auto___3367 + (1));
i__4500__auto___3367 = G__3368;
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
return (function (p1__3354_SHARP_){
var seq__3356 = cljs.core.seq.call(null,pairs);
var chunk__3357 = null;
var count__3358 = (0);
var i__3359 = (0);
while(true){
if((i__3359 < count__3358)){
var vec__3360 = cljs.core._nth.call(null,chunk__3357,i__3359);
var name = cljs.core.nth.call(null,vec__3360,(0),null);
var value = cljs.core.nth.call(null,vec__3360,(1),null);
domina.set_attr_BANG_.call(null,p1__3354_SHARP_,name,value);


var G__3369 = seq__3356;
var G__3370 = chunk__3357;
var G__3371 = count__3358;
var G__3372 = (i__3359 + (1));
seq__3356 = G__3369;
chunk__3357 = G__3370;
count__3358 = G__3371;
i__3359 = G__3372;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3356);
if(temp__4657__auto__){
var seq__3356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3356__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3356__$1);
var G__3373 = cljs.core.chunk_rest.call(null,seq__3356__$1);
var G__3374 = c__4319__auto__;
var G__3375 = cljs.core.count.call(null,c__4319__auto__);
var G__3376 = (0);
seq__3356 = G__3373;
chunk__3357 = G__3374;
count__3358 = G__3375;
i__3359 = G__3376;
continue;
} else {
var vec__3363 = cljs.core.first.call(null,seq__3356__$1);
var name = cljs.core.nth.call(null,vec__3363,(0),null);
var value = cljs.core.nth.call(null,vec__3363,(1),null);
domina.set_attr_BANG_.call(null,p1__3354_SHARP_,name,value);


var G__3377 = cljs.core.next.call(null,seq__3356__$1);
var G__3378 = null;
var G__3379 = (0);
var G__3380 = (0);
seq__3356 = G__3377;
chunk__3357 = G__3378;
count__3358 = G__3379;
i__3359 = G__3380;
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
enfocus.core.set_attr.cljs$lang$applyTo = (function (seq3355){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3355));
});

/**
 * Dissocs attributes on the selected element.
 */
enfocus.core.remove_attr = (function enfocus$core$remove_attr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3387 = arguments.length;
var i__4500__auto___3388 = (0);
while(true){
if((i__4500__auto___3388 < len__4499__auto___3387)){
args__4502__auto__.push((arguments[i__4500__auto___3388]));

var G__3389 = (i__4500__auto___3388 + (1));
i__4500__auto___3388 = G__3389;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__3381_SHARP_){
var seq__3383 = cljs.core.seq.call(null,values);
var chunk__3384 = null;
var count__3385 = (0);
var i__3386 = (0);
while(true){
if((i__3386 < count__3385)){
var name = cljs.core._nth.call(null,chunk__3384,i__3386);
domina.remove_attr_BANG_.call(null,p1__3381_SHARP_,name);


var G__3390 = seq__3383;
var G__3391 = chunk__3384;
var G__3392 = count__3385;
var G__3393 = (i__3386 + (1));
seq__3383 = G__3390;
chunk__3384 = G__3391;
count__3385 = G__3392;
i__3386 = G__3393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3383);
if(temp__4657__auto__){
var seq__3383__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3383__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3383__$1);
var G__3394 = cljs.core.chunk_rest.call(null,seq__3383__$1);
var G__3395 = c__4319__auto__;
var G__3396 = cljs.core.count.call(null,c__4319__auto__);
var G__3397 = (0);
seq__3383 = G__3394;
chunk__3384 = G__3395;
count__3385 = G__3396;
i__3386 = G__3397;
continue;
} else {
var name = cljs.core.first.call(null,seq__3383__$1);
domina.remove_attr_BANG_.call(null,p1__3381_SHARP_,name);


var G__3398 = cljs.core.next.call(null,seq__3383__$1);
var G__3399 = null;
var G__3400 = (0);
var G__3401 = (0);
seq__3383 = G__3398;
chunk__3384 = G__3399;
count__3385 = G__3400;
i__3386 = G__3401;
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
enfocus.core.remove_attr.cljs$lang$applyTo = (function (seq3382){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3382));
});

enfocus.core.set_prop = (function enfocus$core$set_prop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3407 = arguments.length;
var i__4500__auto___3408 = (0);
while(true){
if((i__4500__auto___3408 < len__4499__auto___3407)){
args__4502__auto__.push((arguments[i__4500__auto___3408]));

var G__3409 = (i__4500__auto___3408 + (1));
i__4500__auto___3408 = G__3409;
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
var h = cljs.core.mapcat.call(null,(function (p__3403){
var vec__3404 = p__3403;
var n = cljs.core.nth.call(null,vec__3404,(0),null);
var v = cljs.core.nth.call(null,vec__3404,(1),null);
return (new cljs.core.List(null,cljs.core.name.call(null,n),(new cljs.core.List(null,v,null,(1),null)),(2),null));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
});

enfocus.core.set_prop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_prop.cljs$lang$applyTo = (function (seq3402){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3402));
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
var len__4499__auto___3416 = arguments.length;
var i__4500__auto___3417 = (0);
while(true){
if((i__4500__auto___3417 < len__4499__auto___3416)){
args__4502__auto__.push((arguments[i__4500__auto___3417]));

var G__3418 = (i__4500__auto___3417 + (1));
i__4500__auto___3417 = G__3418;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__3410_SHARP_){
var seq__3412 = cljs.core.seq.call(null,values);
var chunk__3413 = null;
var count__3414 = (0);
var i__3415 = (0);
while(true){
if((i__3415 < count__3414)){
var val = cljs.core._nth.call(null,chunk__3413,i__3415);
domina.add_class_BANG_.call(null,p1__3410_SHARP_,val);


var G__3419 = seq__3412;
var G__3420 = chunk__3413;
var G__3421 = count__3414;
var G__3422 = (i__3415 + (1));
seq__3412 = G__3419;
chunk__3413 = G__3420;
count__3414 = G__3421;
i__3415 = G__3422;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3412);
if(temp__4657__auto__){
var seq__3412__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3412__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3412__$1);
var G__3423 = cljs.core.chunk_rest.call(null,seq__3412__$1);
var G__3424 = c__4319__auto__;
var G__3425 = cljs.core.count.call(null,c__4319__auto__);
var G__3426 = (0);
seq__3412 = G__3423;
chunk__3413 = G__3424;
count__3414 = G__3425;
i__3415 = G__3426;
continue;
} else {
var val = cljs.core.first.call(null,seq__3412__$1);
domina.add_class_BANG_.call(null,p1__3410_SHARP_,val);


var G__3427 = cljs.core.next.call(null,seq__3412__$1);
var G__3428 = null;
var G__3429 = (0);
var G__3430 = (0);
seq__3412 = G__3427;
chunk__3413 = G__3428;
count__3414 = G__3429;
i__3415 = G__3430;
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
enfocus.core.add_class.cljs$lang$applyTo = (function (seq3411){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3411));
});

/**
 * Removes the specified classes from the selected element.
 */
enfocus.core.remove_class = (function enfocus$core$remove_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3437 = arguments.length;
var i__4500__auto___3438 = (0);
while(true){
if((i__4500__auto___3438 < len__4499__auto___3437)){
args__4502__auto__.push((arguments[i__4500__auto___3438]));

var G__3439 = (i__4500__auto___3438 + (1));
i__4500__auto___3438 = G__3439;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__3431_SHARP_){
var seq__3433 = cljs.core.seq.call(null,values);
var chunk__3434 = null;
var count__3435 = (0);
var i__3436 = (0);
while(true){
if((i__3436 < count__3435)){
var val = cljs.core._nth.call(null,chunk__3434,i__3436);
domina.remove_class_BANG_.call(null,p1__3431_SHARP_,val);


var G__3440 = seq__3433;
var G__3441 = chunk__3434;
var G__3442 = count__3435;
var G__3443 = (i__3436 + (1));
seq__3433 = G__3440;
chunk__3434 = G__3441;
count__3435 = G__3442;
i__3436 = G__3443;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3433);
if(temp__4657__auto__){
var seq__3433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3433__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3433__$1);
var G__3444 = cljs.core.chunk_rest.call(null,seq__3433__$1);
var G__3445 = c__4319__auto__;
var G__3446 = cljs.core.count.call(null,c__4319__auto__);
var G__3447 = (0);
seq__3433 = G__3444;
chunk__3434 = G__3445;
count__3435 = G__3446;
i__3436 = G__3447;
continue;
} else {
var val = cljs.core.first.call(null,seq__3433__$1);
domina.remove_class_BANG_.call(null,p1__3431_SHARP_,val);


var G__3448 = cljs.core.next.call(null,seq__3433__$1);
var G__3449 = null;
var G__3450 = (0);
var G__3451 = (0);
seq__3433 = G__3448;
chunk__3434 = G__3449;
count__3435 = G__3450;
i__3436 = G__3451;
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
enfocus.core.remove_class.cljs$lang$applyTo = (function (seq3432){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3432));
});

/**
 * Sets the specified classes on the selected element
 */
enfocus.core.set_class = (function enfocus$core$set_class(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3454 = arguments.length;
var i__4500__auto___3455 = (0);
while(true){
if((i__4500__auto___3455 < len__4499__auto___3454)){
args__4502__auto__.push((arguments[i__4500__auto___3455]));

var G__3456 = (i__4500__auto___3455 + (1));
i__4500__auto___3455 = G__3456;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__3452_SHARP_){
return domina.set_classes_BANG_.call(null,p1__3452_SHARP_,values);
}));
});

enfocus.core.set_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.set_class.cljs$lang$applyTo = (function (seq3453){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3453));
});

enfocus.core.do__GT_ = (function enfocus$core$do__GT_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3462 = arguments.length;
var i__4500__auto___3463 = (0);
while(true){
if((i__4500__auto___3463 < len__4499__auto___3462)){
args__4502__auto__.push((arguments[i__4500__auto___3463]));

var G__3464 = (i__4500__auto___3463 + (1));
i__4500__auto___3463 = G__3464;
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
var seq__3458 = cljs.core.seq.call(null,forms);
var chunk__3459 = null;
var count__3460 = (0);
var i__3461 = (0);
while(true){
if((i__3461 < count__3460)){
var fun = cljs.core._nth.call(null,chunk__3459,i__3461);
enfocus.core.apply_transform.call(null,fun,pnod);


var G__3465 = seq__3458;
var G__3466 = chunk__3459;
var G__3467 = count__3460;
var G__3468 = (i__3461 + (1));
seq__3458 = G__3465;
chunk__3459 = G__3466;
count__3460 = G__3467;
i__3461 = G__3468;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3458);
if(temp__4657__auto__){
var seq__3458__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3458__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3458__$1);
var G__3469 = cljs.core.chunk_rest.call(null,seq__3458__$1);
var G__3470 = c__4319__auto__;
var G__3471 = cljs.core.count.call(null,c__4319__auto__);
var G__3472 = (0);
seq__3458 = G__3469;
chunk__3459 = G__3470;
count__3460 = G__3471;
i__3461 = G__3472;
continue;
} else {
var fun = cljs.core.first.call(null,seq__3458__$1);
enfocus.core.apply_transform.call(null,fun,pnod);


var G__3473 = cljs.core.next.call(null,seq__3458__$1);
var G__3474 = null;
var G__3475 = (0);
var G__3476 = (0);
seq__3458 = G__3473;
chunk__3459 = G__3474;
count__3460 = G__3475;
i__3461 = G__3476;
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
enfocus.core.do__GT_.cljs$lang$applyTo = (function (seq3457){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3457));
});

/**
 * Appends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.append = (function enfocus$core$append(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3480 = arguments.length;
var i__4500__auto___3481 = (0);
while(true){
if((i__4500__auto___3481 < len__4499__auto___3480)){
args__4502__auto__.push((arguments[i__4500__auto___3481]));

var G__3482 = (i__4500__auto___3481 + (1));
i__4500__auto___3481 = G__3482;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3477_SHARP_,p2__3478_SHARP_){
return domina.append_BANG_.call(null,p1__3477_SHARP_,p2__3478_SHARP_);
}));
});

enfocus.core.append.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.append.cljs$lang$applyTo = (function (seq3479){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3479));
});

/**
 * Prepends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.prepend = (function enfocus$core$prepend(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3486 = arguments.length;
var i__4500__auto___3487 = (0);
while(true){
if((i__4500__auto___3487 < len__4499__auto___3486)){
args__4502__auto__.push((arguments[i__4500__auto___3487]));

var G__3488 = (i__4500__auto___3487 + (1));
i__4500__auto___3487 = G__3488;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3483_SHARP_,p2__3484_SHARP_){
return domina.prepend_BANG_.call(null,p1__3483_SHARP_,p2__3484_SHARP_);
}));
});

enfocus.core.prepend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.prepend.cljs$lang$applyTo = (function (seq3485){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3485));
});

/**
 * inserts the content before the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.before = (function enfocus$core$before(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3492 = arguments.length;
var i__4500__auto___3493 = (0);
while(true){
if((i__4500__auto___3493 < len__4499__auto___3492)){
args__4502__auto__.push((arguments[i__4500__auto___3493]));

var G__3494 = (i__4500__auto___3493 + (1));
i__4500__auto___3493 = G__3494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3489_SHARP_,p2__3490_SHARP_){
return domina.insert_before_BANG_.call(null,p1__3489_SHARP_,p2__3490_SHARP_);
}));
});

enfocus.core.before.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.before.cljs$lang$applyTo = (function (seq3491){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3491));
});

/**
 * inserts the content after the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.after = (function enfocus$core$after(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3498 = arguments.length;
var i__4500__auto___3499 = (0);
while(true){
if((i__4500__auto___3499 < len__4499__auto___3498)){
args__4502__auto__.push((arguments[i__4500__auto___3499]));

var G__3500 = (i__4500__auto___3499 + (1));
i__4500__auto___3499 = G__3500;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3495_SHARP_,p2__3496_SHARP_){
return domina.insert_after_BANG_.call(null,p1__3495_SHARP_,p2__3496_SHARP_);
}));
});

enfocus.core.after.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.after.cljs$lang$applyTo = (function (seq3497){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3497));
});

/**
 * substitutes the content for the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.substitute = (function enfocus$core$substitute(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3504 = arguments.length;
var i__4500__auto___3505 = (0);
while(true){
if((i__4500__auto___3505 < len__4499__auto___3504)){
args__4502__auto__.push((arguments[i__4500__auto___3505]));

var G__3506 = (i__4500__auto___3505 + (1));
i__4500__auto___3505 = G__3506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__3501_SHARP_,p2__3502_SHARP_){
return domina.swap_content_BANG_.call(null,p1__3501_SHARP_,p2__3502_SHARP_);
}));
});

enfocus.core.substitute.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
enfocus.core.substitute.cljs$lang$applyTo = (function (seq3503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3503));
});

/**
 * removes the selected nodes from the dom
 */
enfocus.core.remove_node = (function enfocus$core$remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__3507_SHARP_){
return domina.detach_BANG_.call(null,p1__3507_SHARP_);
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
var len__4499__auto___3520 = arguments.length;
var i__4500__auto___3521 = (0);
while(true){
if((i__4500__auto___3521 < len__4499__auto___3520)){
args__4502__auto__.push((arguments[i__4500__auto___3521]));

var G__3522 = (i__4500__auto___3521 + (1));
i__4500__auto___3521 = G__3522;
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
return (function (p1__3508_SHARP_){
var seq__3510 = cljs.core.seq.call(null,pairs);
var chunk__3511 = null;
var count__3512 = (0);
var i__3513 = (0);
while(true){
if((i__3513 < count__3512)){
var vec__3514 = cljs.core._nth.call(null,chunk__3511,i__3513);
var name = cljs.core.nth.call(null,vec__3514,(0),null);
var value = cljs.core.nth.call(null,vec__3514,(1),null);
domina.set_style_BANG_.call(null,p1__3508_SHARP_,name,value);


var G__3523 = seq__3510;
var G__3524 = chunk__3511;
var G__3525 = count__3512;
var G__3526 = (i__3513 + (1));
seq__3510 = G__3523;
chunk__3511 = G__3524;
count__3512 = G__3525;
i__3513 = G__3526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3510);
if(temp__4657__auto__){
var seq__3510__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3510__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3510__$1);
var G__3527 = cljs.core.chunk_rest.call(null,seq__3510__$1);
var G__3528 = c__4319__auto__;
var G__3529 = cljs.core.count.call(null,c__4319__auto__);
var G__3530 = (0);
seq__3510 = G__3527;
chunk__3511 = G__3528;
count__3512 = G__3529;
i__3513 = G__3530;
continue;
} else {
var vec__3517 = cljs.core.first.call(null,seq__3510__$1);
var name = cljs.core.nth.call(null,vec__3517,(0),null);
var value = cljs.core.nth.call(null,vec__3517,(1),null);
domina.set_style_BANG_.call(null,p1__3508_SHARP_,name,value);


var G__3531 = cljs.core.next.call(null,seq__3510__$1);
var G__3532 = null;
var G__3533 = (0);
var G__3534 = (0);
seq__3510 = G__3531;
chunk__3511 = G__3532;
count__3512 = G__3533;
i__3513 = G__3534;
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
enfocus.core.set_style.cljs$lang$applyTo = (function (seq3509){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3509));
});

/**
 * remove a list style elements from the selected nodes. note: you can only remove styles that are inline
 */
enfocus.core.remove_style = (function enfocus$core$remove_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3536 = arguments.length;
var i__4500__auto___3537 = (0);
while(true){
if((i__4500__auto___3537 < len__4499__auto___3536)){
args__4502__auto__.push((arguments[i__4500__auto___3537]));

var G__3538 = (i__4500__auto___3537 + (1));
i__4500__auto___3537 = G__3538;
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
enfocus.core.remove_style.cljs$lang$applyTo = (function (seq3535){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3535));
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
return enfocus.core.multi_node_chain.call(null,(function (p1__3539_SHARP_){
return domina.set_data_BANG_.call(null,p1__3539_SHARP_,ky,val);
}));
});
/**
 * delays and action by a set timeout, note this is an async operations
 */
enfocus.core.delay = (function enfocus$core$delay(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3542 = arguments.length;
var i__4500__auto___3543 = (0);
while(true){
if((i__4500__auto___3543 < len__4499__auto___3542)){
args__4502__auto__.push((arguments[i__4500__auto___3543]));

var G__3544 = (i__4500__auto___3543 + (1));
i__4500__auto___3543 = G__3544;
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
enfocus.core.delay.cljs$lang$applyTo = (function (seq3540){
var G__3541 = cljs.core.first.call(null,seq3540);
var seq3540__$1 = cljs.core.next.call(null,seq3540);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3541,seq3540__$1);
});

/**
 * replaces entries like the following ${var1} in attributes and text
 */
enfocus.core.replace_vars = (function enfocus$core$replace_vars(vars){
var rep_str = (function enfocus$core$replace_vars_$_rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__3546_SHARP_,p2__3545_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__3545_SHARP_));
}));
});
return (function enfocus$core$replace_vars_$_rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__3547_3555 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__3548_3556 = null;
var count__3549_3557 = (0);
var i__3550_3558 = (0);
while(true){
if((i__3550_3558 < count__3549_3557)){
var idx_3559 = cljs.core._nth.call(null,chunk__3548_3556,i__3550_3558);
var attr_3560 = pnod.attributes.item(idx_3559);
if(cljs.core.truth_(attr_3560.specified)){
attr_3560.value = rep_str.call(null,attr_3560.value);
} else {
}


var G__3561 = seq__3547_3555;
var G__3562 = chunk__3548_3556;
var G__3563 = count__3549_3557;
var G__3564 = (i__3550_3558 + (1));
seq__3547_3555 = G__3561;
chunk__3548_3556 = G__3562;
count__3549_3557 = G__3563;
i__3550_3558 = G__3564;
continue;
} else {
var temp__4657__auto___3565 = cljs.core.seq.call(null,seq__3547_3555);
if(temp__4657__auto___3565){
var seq__3547_3566__$1 = temp__4657__auto___3565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3547_3566__$1)){
var c__4319__auto___3567 = cljs.core.chunk_first.call(null,seq__3547_3566__$1);
var G__3568 = cljs.core.chunk_rest.call(null,seq__3547_3566__$1);
var G__3569 = c__4319__auto___3567;
var G__3570 = cljs.core.count.call(null,c__4319__auto___3567);
var G__3571 = (0);
seq__3547_3555 = G__3568;
chunk__3548_3556 = G__3569;
count__3549_3557 = G__3570;
i__3550_3558 = G__3571;
continue;
} else {
var idx_3572 = cljs.core.first.call(null,seq__3547_3566__$1);
var attr_3573 = pnod.attributes.item(idx_3572);
if(cljs.core.truth_(attr_3573.specified)){
attr_3573.value = rep_str.call(null,attr_3573.value);
} else {
}


var G__3574 = cljs.core.next.call(null,seq__3547_3566__$1);
var G__3575 = null;
var G__3576 = (0);
var G__3577 = (0);
seq__3547_3555 = G__3574;
chunk__3548_3556 = G__3575;
count__3549_3557 = G__3576;
i__3550_3558 = G__3577;
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
var seq__3551 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__3552 = null;
var count__3553 = (0);
var i__3554 = (0);
while(true){
if((i__3554 < count__3553)){
var cnode = cljs.core._nth.call(null,chunk__3552,i__3554);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);


var G__3578 = seq__3551;
var G__3579 = chunk__3552;
var G__3580 = count__3553;
var G__3581 = (i__3554 + (1));
seq__3551 = G__3578;
chunk__3552 = G__3579;
count__3553 = G__3580;
i__3554 = G__3581;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3551);
if(temp__4657__auto__){
var seq__3551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3551__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3551__$1);
var G__3582 = cljs.core.chunk_rest.call(null,seq__3551__$1);
var G__3583 = c__4319__auto__;
var G__3584 = cljs.core.count.call(null,c__4319__auto__);
var G__3585 = (0);
seq__3551 = G__3582;
chunk__3552 = G__3583;
count__3553 = G__3584;
i__3554 = G__3585;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__3551__$1);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);


var G__3586 = cljs.core.next.call(null,seq__3551__$1);
var G__3587 = null;
var G__3588 = (0);
var G__3589 = (0);
seq__3551 = G__3586;
chunk__3552 = G__3587;
count__3553 = G__3588;
i__3554 = G__3589;
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
var seq__3590 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__3591 = null;
var count__3592 = (0);
var i__3593 = (0);
while(true){
if((i__3593 < count__3592)){
var idx = cljs.core._nth.call(null,chunk__3591,i__3593);
var el_3594 = (form_node.elements[idx]);
var ky_3595 = cljs.core.keyword.call(null,el_3594.name);
var val_3596 = ky_3595.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_3595)){
var val_3597__$1 = (cljs.core.truth_(val_3596)?val_3596:"");
enfocus.core.set_form_input.call(null,val_3597__$1).call(null,el_3594);
} else {
}


var G__3598 = seq__3590;
var G__3599 = chunk__3591;
var G__3600 = count__3592;
var G__3601 = (i__3593 + (1));
seq__3590 = G__3598;
chunk__3591 = G__3599;
count__3592 = G__3600;
i__3593 = G__3601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3590);
if(temp__4657__auto__){
var seq__3590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3590__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3590__$1);
var G__3602 = cljs.core.chunk_rest.call(null,seq__3590__$1);
var G__3603 = c__4319__auto__;
var G__3604 = cljs.core.count.call(null,c__4319__auto__);
var G__3605 = (0);
seq__3590 = G__3602;
chunk__3591 = G__3603;
count__3592 = G__3604;
i__3593 = G__3605;
continue;
} else {
var idx = cljs.core.first.call(null,seq__3590__$1);
var el_3606 = (form_node.elements[idx]);
var ky_3607 = cljs.core.keyword.call(null,el_3606.name);
var val_3608 = ky_3607.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_3607)){
var val_3609__$1 = (cljs.core.truth_(val_3608)?val_3608:"");
enfocus.core.set_form_input.call(null,val_3609__$1).call(null,el_3606);
} else {
}


var G__3610 = cljs.core.next.call(null,seq__3590__$1);
var G__3611 = null;
var G__3612 = (0);
var G__3613 = (0);
seq__3590 = G__3610;
chunk__3591 = G__3611;
count__3592 = G__3612;
i__3593 = G__3613;
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
var vec__3614 = node_spec;
var seq__3615 = cljs.core.seq.call(null,vec__3614);
var first__3616 = cljs.core.first.call(null,seq__3615);
var seq__3615__$1 = cljs.core.next.call(null,seq__3615);
var tag = first__3616;
var vec__3617 = seq__3615__$1;
var seq__3618 = cljs.core.seq.call(null,vec__3617);
var first__3619 = cljs.core.first.call(null,seq__3618);
var seq__3618__$1 = cljs.core.next.call(null,seq__3618);
var m = first__3619;
var ms = seq__3618__$1;
var more = vec__3617;
var vec__3620 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var seq__3621 = cljs.core.seq.call(null,vec__3620);
var first__3622 = cljs.core.first.call(null,seq__3621);
var seq__3621__$1 = cljs.core.next.call(null,seq__3621);
var tag_name = first__3622;
var segments = seq__3621__$1;
var id = cljs.core.some.call(null,((function (vec__3614,seq__3615,first__3616,seq__3615__$1,tag,vec__3617,seq__3618,first__3619,seq__3618__$1,m,ms,more,vec__3620,seq__3621,first__3622,seq__3621__$1,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__3614,seq__3615,first__3616,seq__3615__$1,tag,vec__3617,seq__3618,first__3619,seq__3618__$1,m,ms,more,vec__3620,seq__3621,first__3622,seq__3621__$1,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__3614,seq__3615,first__3616,seq__3615__$1,tag,vec__3617,seq__3618,first__3619,seq__3618__$1,m,ms,more,vec__3620,seq__3621,first__3622,seq__3621__$1,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__3614,seq__3615,first__3616,seq__3615__$1,tag,vec__3617,seq__3618,first__3619,seq__3618__$1,m,ms,more,vec__3620,seq__3621,first__3622,seq__3621__$1,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus.core.html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__3623_3633 = cljs.core.seq.call(null,attrs__$2);
var chunk__3624_3634 = null;
var count__3625_3635 = (0);
var i__3626_3636 = (0);
while(true){
if((i__3626_3636 < count__3625_3635)){
var vec__3627_3637 = cljs.core._nth.call(null,chunk__3624_3634,i__3626_3636);
var key_3638 = cljs.core.nth.call(null,vec__3627_3637,(0),null);
var val_3639 = cljs.core.nth.call(null,vec__3627_3637,(1),null);
node.setAttribute(cljs.core.name.call(null,key_3638),val_3639);


var G__3640 = seq__3623_3633;
var G__3641 = chunk__3624_3634;
var G__3642 = count__3625_3635;
var G__3643 = (i__3626_3636 + (1));
seq__3623_3633 = G__3640;
chunk__3624_3634 = G__3641;
count__3625_3635 = G__3642;
i__3626_3636 = G__3643;
continue;
} else {
var temp__4657__auto___3644 = cljs.core.seq.call(null,seq__3623_3633);
if(temp__4657__auto___3644){
var seq__3623_3645__$1 = temp__4657__auto___3644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3623_3645__$1)){
var c__4319__auto___3646 = cljs.core.chunk_first.call(null,seq__3623_3645__$1);
var G__3647 = cljs.core.chunk_rest.call(null,seq__3623_3645__$1);
var G__3648 = c__4319__auto___3646;
var G__3649 = cljs.core.count.call(null,c__4319__auto___3646);
var G__3650 = (0);
seq__3623_3633 = G__3647;
chunk__3624_3634 = G__3648;
count__3625_3635 = G__3649;
i__3626_3636 = G__3650;
continue;
} else {
var vec__3630_3651 = cljs.core.first.call(null,seq__3623_3645__$1);
var key_3652 = cljs.core.nth.call(null,vec__3630_3651,(0),null);
var val_3653 = cljs.core.nth.call(null,vec__3630_3651,(1),null);
node.setAttribute(cljs.core.name.call(null,key_3652),val_3653);


var G__3654 = cljs.core.next.call(null,seq__3623_3645__$1);
var G__3655 = null;
var G__3656 = (0);
var G__3657 = (0);
seq__3623_3633 = G__3654;
chunk__3624_3634 = G__3655;
count__3625_3635 = G__3656;
i__3626_3636 = G__3657;
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
var G__3659 = arguments.length;
switch (G__3659) {
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
return (function (p1__3662_SHARP_,p2__3661_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__3661_SHARP_));
if(((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))){
return cljs.core.into.call(null,p1__3662_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__3662_SHARP_,vals);
} else {
return p1__3662_SHARP_;
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
if(typeof enfocus.core.t_enfocus$core3663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core3663 = (function (trans,meta3664){
this.trans = trans;
this.meta3664 = meta3664;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
enfocus.core.t_enfocus$core3663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_3665,meta3664__$1){
var self__ = this;
var _3665__$1 = this;
return (new enfocus.core.t_enfocus$core3663(self__.trans,meta3664__$1));
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_3665){
var self__ = this;
var _3665__$1 = this;
return self__.meta3664;
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core3663.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.call = ((function (trans){
return (function() {
var G__3667 = null;
var G__3667__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__3667__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__3667 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__3667__2.call(this,self__,nodes);
case 3:
return G__3667__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3667.cljs$core$IFn$_invoke$arity$2 = G__3667__2;
G__3667.cljs$core$IFn$_invoke$arity$3 = G__3667__3;
return G__3667;
})()
;})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.apply = ((function (trans){
return (function (self__,args3666){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3666)));
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core3663.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core3663.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta3664","meta3664",-406227137,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core3663.cljs$lang$type = true;

enfocus.core.t_enfocus$core3663.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core3663";

enfocus.core.t_enfocus$core3663.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"enfocus.core/t_enfocus$core3663");
});})(trans))
;

/**
 * Positional factory function for enfocus.core/t_enfocus$core3663.
 */
enfocus.core.__GT_t_enfocus$core3663 = ((function (trans){
return (function enfocus$core$read_form_input_$___GT_t_enfocus$core3663(trans__$1,meta3664){
return (new enfocus.core.t_enfocus$core3663(trans__$1,meta3664));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core3663(trans,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns a map of the form values tied to name of input fields.
 * {:name1 'value1' name2 #{'select1' 'select2'}}
 */
enfocus.core.read_form = (function enfocus$core$read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__3669_SHARP_,p2__3668_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__3668_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__3669_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__3668_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__3668_SHARP_)));
} else {
return p1__3669_SHARP_;
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
var G__3672 = arguments.length;
switch (G__3672) {
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3670_SHARP_){
if((p1__3670_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__3670_SHARP_);
} else {
if((p1__3670_SHARP_ instanceof cljs.core.Keyword)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__3670_SHARP_).replace("#",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__3670_SHARP_)){
return enfocus.core.create_sel_str.call(null,p1__3670_SHARP_);
} else {
if(typeof p1__3670_SHARP_ === 'string'){
return p1__3670_SHARP_.replace("#",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join(''));
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
var G__3675 = arguments.length;
switch (G__3675) {
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
var len__4499__auto___3695 = arguments.length;
var i__4500__auto___3696 = (0);
while(true){
if((i__4500__auto___3696 < len__4499__auto___3695)){
args__4502__auto__.push((arguments[i__4500__auto___3696]));

var G__3697 = (i__4500__auto___3696 + (1));
i__4500__auto___3696 = G__3697;
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
var vec__3682 = ((sel_QMARK_)?(new cljs.core.List(null,document,(new cljs.core.List(null,cljs.core.conj.call(null,trans,node),null,(1),null)),(2),null)):(new cljs.core.List(null,node,(new cljs.core.List(null,trans,null,(1),null)),(2),null)));
var node__$1 = cljs.core.nth.call(null,vec__3682,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__3682,(1),null);
var seq__3685 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__3686 = null;
var count__3687 = (0);
var i__3688 = (0);
while(true){
if((i__3688 < count__3687)){
var vec__3689 = cljs.core._nth.call(null,chunk__3686,i__3688);
var sel = cljs.core.nth.call(null,vec__3689,(0),null);
var t = cljs.core.nth.call(null,vec__3689,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));


var G__3698 = seq__3685;
var G__3699 = chunk__3686;
var G__3700 = count__3687;
var G__3701 = (i__3688 + (1));
seq__3685 = G__3698;
chunk__3686 = G__3699;
count__3687 = G__3700;
i__3688 = G__3701;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3685);
if(temp__4657__auto__){
var seq__3685__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3685__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3685__$1);
var G__3702 = cljs.core.chunk_rest.call(null,seq__3685__$1);
var G__3703 = c__4319__auto__;
var G__3704 = cljs.core.count.call(null,c__4319__auto__);
var G__3705 = (0);
seq__3685 = G__3702;
chunk__3686 = G__3703;
count__3687 = G__3704;
i__3688 = G__3705;
continue;
} else {
var vec__3692 = cljs.core.first.call(null,seq__3685__$1);
var sel = cljs.core.nth.call(null,vec__3692,(0),null);
var t = cljs.core.nth.call(null,vec__3692,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));


var G__3706 = cljs.core.next.call(null,seq__3685__$1);
var G__3707 = null;
var G__3708 = (0);
var G__3709 = (0);
seq__3685 = G__3706;
chunk__3686 = G__3707;
count__3687 = G__3708;
i__3688 = G__3709;
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
enfocus.core.i_at.cljs$lang$applyTo = (function (seq3677){
var G__3678 = cljs.core.first.call(null,seq3677);
var seq3677__$1 = cljs.core.next.call(null,seq3677);
var G__3679 = cljs.core.first.call(null,seq3677__$1);
var seq3677__$2 = cljs.core.next.call(null,seq3677__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3678,G__3679,seq3677__$2);
});

enfocus.core.at = (function enfocus$core$at(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3712 = arguments.length;
var i__4500__auto___3713 = (0);
while(true){
if((i__4500__auto___3713 < len__4499__auto___3712)){
args__4502__auto__.push((arguments[i__4500__auto___3713]));

var G__3714 = (i__4500__auto___3713 + (1));
i__4500__auto___3713 = G__3714;
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
enfocus.core.at.cljs$lang$applyTo = (function (seq3710){
var G__3711 = cljs.core.first.call(null,seq3710);
var seq3710__$1 = cljs.core.next.call(null,seq3710);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3711,seq3710__$1);
});

enfocus.core.from = (function enfocus$core$from(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3725 = arguments.length;
var i__4500__auto___3726 = (0);
while(true){
if((i__4500__auto___3726 < len__4499__auto___3725)){
args__4502__auto__.push((arguments[i__4500__auto___3726]));

var G__3727 = (i__4500__auto___3726 + (1));
i__4500__auto___3726 = G__3727;
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
var vec__3718 = ((sel_QMARK_)?(new cljs.core.List(null,document,(new cljs.core.List(null,cljs.core.conj.call(null,trans,node),null,(1),null)),(2),null)):(new cljs.core.List(null,node,(new cljs.core.List(null,trans,null,(1),null)),(2),null)));
var node__$1 = cljs.core.nth.call(null,vec__3718,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__3718,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__3718,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__3721){
var vec__3722 = p__3721;
var ky = cljs.core.nth.call(null,vec__3722,(0),null);
var sel = cljs.core.nth.call(null,vec__3722,(1),null);
var ext = cljs.core.nth.call(null,vec__3722,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__3718,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
});

enfocus.core.from.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
enfocus.core.from.cljs$lang$applyTo = (function (seq3715){
var G__3716 = cljs.core.first.call(null,seq3715);
var seq3715__$1 = cljs.core.next.call(null,seq3715);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3716,seq3715__$1);
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
var G__3728 = null;
var G__3728__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__3728__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__3728__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__3728 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__3728__1.call(this,this$);
case 2:
return G__3728__2.call(this,this$,root);
case 3:
return G__3728__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3728.cljs$core$IFn$_invoke$arity$1 = G__3728__1;
G__3728.cljs$core$IFn$_invoke$arity$2 = G__3728__2;
G__3728.cljs$core$IFn$_invoke$arity$3 = G__3728__3;
return G__3728;
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
var G__3729 = null;
var G__3729__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__3729__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__3729__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__3729 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__3729__1.call(this,this$);
case 2:
return G__3729__2.call(this,this$,root);
case 3:
return G__3729__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3729.cljs$core$IFn$_invoke$arity$1 = G__3729__1;
G__3729.cljs$core$IFn$_invoke$arity$2 = G__3729__2;
G__3729.cljs$core$IFn$_invoke$arity$3 = G__3729__3;
return G__3729;
})()
);

goog.object.set(enfocus.core.ISelector,"null",true);

goog.object.set(enfocus.core.select,"null",(function() {
var G__3730 = null;
var G__3730__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__3730__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__3730__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__3730 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__3730__1.call(this,this$);
case 2:
return G__3730__2.call(this,this$,root);
case 3:
return G__3730__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3730.cljs$core$IFn$_invoke$arity$1 = G__3730__1;
G__3730.cljs$core$IFn$_invoke$arity$2 = G__3730__2;
G__3730.cljs$core$IFn$_invoke$arity$3 = G__3730__3;
return G__3730;
})()
);
goog.object.set(enfocus.core.ITransform,"function",true);

goog.object.set(enfocus.core.apply_transform,"function",(function() {
var G__3731 = null;
var G__3731__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__3731__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__3731 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__3731__2.call(this,trans,nodes);
case 3:
return G__3731__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3731.cljs$core$IFn$_invoke$arity$2 = G__3731__2;
G__3731.cljs$core$IFn$_invoke$arity$3 = G__3731__3;
return G__3731;
})()
);

goog.object.set(enfocus.core.ITransform,"null",true);

goog.object.set(enfocus.core.apply_transform,"null",(function() {
var G__3732 = null;
var G__3732__2 = (function (trans,nodes){
return nodes;
});
var G__3732__3 = (function (trans,nodes,chain){
return nodes;
});
G__3732 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__3732__2.call(this,trans,nodes);
case 3:
return G__3732__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3732.cljs$core$IFn$_invoke$arity$2 = G__3732__2;
G__3732.cljs$core$IFn$_invoke$arity$3 = G__3732__3;
return G__3732;
})()
);

//# sourceMappingURL=core.js.map
