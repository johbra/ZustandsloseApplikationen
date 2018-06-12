// Compiled by ClojureScript 1.10.238 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_4306 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_4307 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_4308 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_4308,opt_wrapper_4306,table_section_wrapper_4307,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_4306,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_4307,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_4307,cell_wrapper_4308,table_section_wrapper_4307,table_section_wrapper_4307]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__3911__auto__ = div.firstChild;
if(cljs.core.truth_(and__3911__auto__)){
return div.firstChild.childNodes;
} else {
return and__3911__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__4309 = cljs.core.seq.call(null,tbody);
var chunk__4310 = null;
var count__4311 = (0);
var i__4312 = (0);
while(true){
if((i__4312 < count__4311)){
var child = cljs.core._nth.call(null,chunk__4310,i__4312);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__4313 = seq__4309;
var G__4314 = chunk__4310;
var G__4315 = count__4311;
var G__4316 = (i__4312 + (1));
seq__4309 = G__4313;
chunk__4310 = G__4314;
count__4311 = G__4315;
i__4312 = G__4316;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__4309);
if(temp__4657__auto__){
var seq__4309__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4309__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4309__$1);
var G__4317 = cljs.core.chunk_rest.call(null,seq__4309__$1);
var G__4318 = c__4319__auto__;
var G__4319 = cljs.core.count.call(null,c__4319__auto__);
var G__4320 = (0);
seq__4309 = G__4317;
chunk__4310 = G__4318;
count__4311 = G__4319;
i__4312 = G__4320;
continue;
} else {
var child = cljs.core.first.call(null,seq__4309__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__4321 = cljs.core.next.call(null,seq__4309__$1);
var G__4322 = null;
var G__4323 = (0);
var G__4324 = (0);
seq__4309 = G__4321;
chunk__4310 = G__4322;
count__4311 = G__4323;
i__4312 = G__4324;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__4325 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__4325,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__4325,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__4325,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__4328 = wrapper.lastChild;
var G__4329 = (level - (1));
wrapper = G__4328;
level = G__4329;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__3911__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3911__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if(((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4211__auto__ = (((content == null))?null:content);
var m__4212__auto__ = (domina.nodes[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,content);
} else {
var m__4212__auto____$1 = (domina.nodes["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if(((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4211__auto__ = (((nodeseq == null))?null:nodeseq);
var m__4212__auto__ = (domina.single_node[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,nodeseq);
} else {
var m__4212__auto____$1 = (domina.single_node["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4331 = arguments.length;
var i__4500__auto___4332 = (0);
while(true){
if((i__4500__auto___4332 < len__4499__auto___4331)){
args__4502__auto__.push((arguments[i__4500__auto___4332]));

var G__4333 = (i__4500__auto___4332 + (1));
i__4500__auto___4332 = G__4333;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined))))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log_debug.cljs$lang$applyTo = (function (seq4330){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4330));
});

domina.log = (function domina$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4335 = arguments.length;
var i__4500__auto___4336 = (0);
while(true){
if((i__4500__auto___4336 < len__4499__auto___4335)){
args__4502__auto__.push((arguments[i__4500__auto___4336]));

var G__4337 = (i__4500__auto___4336 + (1));
i__4500__auto___4336 = G__4337;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log.cljs$lang$applyTo = (function (seq4334){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4334));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4339 = arguments.length;
var i__4500__auto___4340 = (0);
while(true){
if((i__4500__auto___4340 < len__4499__auto___4339)){
args__4502__auto__.push((arguments[i__4500__auto___4340]));

var G__4341 = (i__4500__auto___4340 + (1));
i__4500__auto___4340 = G__4341;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.common_ancestor.cljs$lang$applyTo = (function (seq4338){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4338));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__4342_SHARP_){
return p1__4342_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__4343_SHARP_,p2__4344_SHARP_){
return goog.dom.insertChildAt(p1__4343_SHARP_,p2__4344_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4346_SHARP_,p2__4345_SHARP_){
return goog.dom.insertSiblingBefore(p2__4345_SHARP_,p1__4346_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4348_SHARP_,p2__4347_SHARP_){
return goog.dom.insertSiblingAfter(p2__4347_SHARP_,p1__4348_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4350_SHARP_,p2__4349_SHARP_){
return goog.dom.replaceNode(p2__4349_SHARP_,p1__4350_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4358 = arguments.length;
var i__4500__auto___4359 = (0);
while(true){
if((i__4500__auto___4359 < len__4499__auto___4358)){
args__4502__auto__.push((arguments[i__4500__auto___4359]));

var G__4360 = (i__4500__auto___4359 + (1));
i__4500__auto___4359 = G__4360;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__4354_4361 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4355_4362 = null;
var count__4356_4363 = (0);
var i__4357_4364 = (0);
while(true){
if((i__4357_4364 < count__4356_4363)){
var n_4365 = cljs.core._nth.call(null,chunk__4355_4362,i__4357_4364);
goog.style.setStyle(n_4365,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__4366 = seq__4354_4361;
var G__4367 = chunk__4355_4362;
var G__4368 = count__4356_4363;
var G__4369 = (i__4357_4364 + (1));
seq__4354_4361 = G__4366;
chunk__4355_4362 = G__4367;
count__4356_4363 = G__4368;
i__4357_4364 = G__4369;
continue;
} else {
var temp__4657__auto___4370 = cljs.core.seq.call(null,seq__4354_4361);
if(temp__4657__auto___4370){
var seq__4354_4371__$1 = temp__4657__auto___4370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4354_4371__$1)){
var c__4319__auto___4372 = cljs.core.chunk_first.call(null,seq__4354_4371__$1);
var G__4373 = cljs.core.chunk_rest.call(null,seq__4354_4371__$1);
var G__4374 = c__4319__auto___4372;
var G__4375 = cljs.core.count.call(null,c__4319__auto___4372);
var G__4376 = (0);
seq__4354_4361 = G__4373;
chunk__4355_4362 = G__4374;
count__4356_4363 = G__4375;
i__4357_4364 = G__4376;
continue;
} else {
var n_4377 = cljs.core.first.call(null,seq__4354_4371__$1);
goog.style.setStyle(n_4377,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__4378 = cljs.core.next.call(null,seq__4354_4371__$1);
var G__4379 = null;
var G__4380 = (0);
var G__4381 = (0);
seq__4354_4361 = G__4378;
chunk__4355_4362 = G__4379;
count__4356_4363 = G__4380;
i__4357_4364 = G__4381;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq4351){
var G__4352 = cljs.core.first.call(null,seq4351);
var seq4351__$1 = cljs.core.next.call(null,seq4351);
var G__4353 = cljs.core.first.call(null,seq4351__$1);
var seq4351__$2 = cljs.core.next.call(null,seq4351__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4352,G__4353,seq4351__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4389 = arguments.length;
var i__4500__auto___4390 = (0);
while(true){
if((i__4500__auto___4390 < len__4499__auto___4389)){
args__4502__auto__.push((arguments[i__4500__auto___4390]));

var G__4391 = (i__4500__auto___4390 + (1));
i__4500__auto___4390 = G__4391;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__4385_4392 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4386_4393 = null;
var count__4387_4394 = (0);
var i__4388_4395 = (0);
while(true){
if((i__4388_4395 < count__4387_4394)){
var n_4396 = cljs.core._nth.call(null,chunk__4386_4393,i__4388_4395);
n_4396.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__4397 = seq__4385_4392;
var G__4398 = chunk__4386_4393;
var G__4399 = count__4387_4394;
var G__4400 = (i__4388_4395 + (1));
seq__4385_4392 = G__4397;
chunk__4386_4393 = G__4398;
count__4387_4394 = G__4399;
i__4388_4395 = G__4400;
continue;
} else {
var temp__4657__auto___4401 = cljs.core.seq.call(null,seq__4385_4392);
if(temp__4657__auto___4401){
var seq__4385_4402__$1 = temp__4657__auto___4401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4385_4402__$1)){
var c__4319__auto___4403 = cljs.core.chunk_first.call(null,seq__4385_4402__$1);
var G__4404 = cljs.core.chunk_rest.call(null,seq__4385_4402__$1);
var G__4405 = c__4319__auto___4403;
var G__4406 = cljs.core.count.call(null,c__4319__auto___4403);
var G__4407 = (0);
seq__4385_4392 = G__4404;
chunk__4386_4393 = G__4405;
count__4387_4394 = G__4406;
i__4388_4395 = G__4407;
continue;
} else {
var n_4408 = cljs.core.first.call(null,seq__4385_4402__$1);
n_4408.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__4409 = cljs.core.next.call(null,seq__4385_4402__$1);
var G__4410 = null;
var G__4411 = (0);
var G__4412 = (0);
seq__4385_4392 = G__4409;
chunk__4386_4393 = G__4410;
count__4387_4394 = G__4411;
i__4388_4395 = G__4412;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq4382){
var G__4383 = cljs.core.first.call(null,seq4382);
var seq4382__$1 = cljs.core.next.call(null,seq4382);
var G__4384 = cljs.core.first.call(null,seq4382__$1);
var seq4382__$2 = cljs.core.next.call(null,seq4382__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4383,G__4384,seq4382__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__4413_4417 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4414_4418 = null;
var count__4415_4419 = (0);
var i__4416_4420 = (0);
while(true){
if((i__4416_4420 < count__4415_4419)){
var n_4421 = cljs.core._nth.call(null,chunk__4414_4418,i__4416_4420);
n_4421.removeAttribute(cljs.core.name.call(null,name));


var G__4422 = seq__4413_4417;
var G__4423 = chunk__4414_4418;
var G__4424 = count__4415_4419;
var G__4425 = (i__4416_4420 + (1));
seq__4413_4417 = G__4422;
chunk__4414_4418 = G__4423;
count__4415_4419 = G__4424;
i__4416_4420 = G__4425;
continue;
} else {
var temp__4657__auto___4426 = cljs.core.seq.call(null,seq__4413_4417);
if(temp__4657__auto___4426){
var seq__4413_4427__$1 = temp__4657__auto___4426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4413_4427__$1)){
var c__4319__auto___4428 = cljs.core.chunk_first.call(null,seq__4413_4427__$1);
var G__4429 = cljs.core.chunk_rest.call(null,seq__4413_4427__$1);
var G__4430 = c__4319__auto___4428;
var G__4431 = cljs.core.count.call(null,c__4319__auto___4428);
var G__4432 = (0);
seq__4413_4417 = G__4429;
chunk__4414_4418 = G__4430;
count__4415_4419 = G__4431;
i__4416_4420 = G__4432;
continue;
} else {
var n_4433 = cljs.core.first.call(null,seq__4413_4427__$1);
n_4433.removeAttribute(cljs.core.name.call(null,name));


var G__4434 = cljs.core.next.call(null,seq__4413_4427__$1);
var G__4435 = null;
var G__4436 = (0);
var G__4437 = (0);
seq__4413_4417 = G__4434;
chunk__4414_4418 = G__4435;
count__4415_4419 = G__4436;
i__4416_4420 = G__4437;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__4438 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__4438,(0),null);
var v = cljs.core.nth.call(null,vec__4438,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = k;
if(cljs.core.truth_(and__3911__auto__)){
return v;
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__4441_SHARP_){
var attr = attrs.item(p1__4441_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__4442_4452 = cljs.core.seq.call(null,styles);
var chunk__4443_4453 = null;
var count__4444_4454 = (0);
var i__4445_4455 = (0);
while(true){
if((i__4445_4455 < count__4444_4454)){
var vec__4446_4456 = cljs.core._nth.call(null,chunk__4443_4453,i__4445_4455);
var name_4457 = cljs.core.nth.call(null,vec__4446_4456,(0),null);
var value_4458 = cljs.core.nth.call(null,vec__4446_4456,(1),null);
domina.set_style_BANG_.call(null,content,name_4457,value_4458);


var G__4459 = seq__4442_4452;
var G__4460 = chunk__4443_4453;
var G__4461 = count__4444_4454;
var G__4462 = (i__4445_4455 + (1));
seq__4442_4452 = G__4459;
chunk__4443_4453 = G__4460;
count__4444_4454 = G__4461;
i__4445_4455 = G__4462;
continue;
} else {
var temp__4657__auto___4463 = cljs.core.seq.call(null,seq__4442_4452);
if(temp__4657__auto___4463){
var seq__4442_4464__$1 = temp__4657__auto___4463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4442_4464__$1)){
var c__4319__auto___4465 = cljs.core.chunk_first.call(null,seq__4442_4464__$1);
var G__4466 = cljs.core.chunk_rest.call(null,seq__4442_4464__$1);
var G__4467 = c__4319__auto___4465;
var G__4468 = cljs.core.count.call(null,c__4319__auto___4465);
var G__4469 = (0);
seq__4442_4452 = G__4466;
chunk__4443_4453 = G__4467;
count__4444_4454 = G__4468;
i__4445_4455 = G__4469;
continue;
} else {
var vec__4449_4470 = cljs.core.first.call(null,seq__4442_4464__$1);
var name_4471 = cljs.core.nth.call(null,vec__4449_4470,(0),null);
var value_4472 = cljs.core.nth.call(null,vec__4449_4470,(1),null);
domina.set_style_BANG_.call(null,content,name_4471,value_4472);


var G__4473 = cljs.core.next.call(null,seq__4442_4464__$1);
var G__4474 = null;
var G__4475 = (0);
var G__4476 = (0);
seq__4442_4452 = G__4473;
chunk__4443_4453 = G__4474;
count__4444_4454 = G__4475;
i__4445_4455 = G__4476;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__4477_4487 = cljs.core.seq.call(null,attrs);
var chunk__4478_4488 = null;
var count__4479_4489 = (0);
var i__4480_4490 = (0);
while(true){
if((i__4480_4490 < count__4479_4489)){
var vec__4481_4491 = cljs.core._nth.call(null,chunk__4478_4488,i__4480_4490);
var name_4492 = cljs.core.nth.call(null,vec__4481_4491,(0),null);
var value_4493 = cljs.core.nth.call(null,vec__4481_4491,(1),null);
domina.set_attr_BANG_.call(null,content,name_4492,value_4493);


var G__4494 = seq__4477_4487;
var G__4495 = chunk__4478_4488;
var G__4496 = count__4479_4489;
var G__4497 = (i__4480_4490 + (1));
seq__4477_4487 = G__4494;
chunk__4478_4488 = G__4495;
count__4479_4489 = G__4496;
i__4480_4490 = G__4497;
continue;
} else {
var temp__4657__auto___4498 = cljs.core.seq.call(null,seq__4477_4487);
if(temp__4657__auto___4498){
var seq__4477_4499__$1 = temp__4657__auto___4498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4477_4499__$1)){
var c__4319__auto___4500 = cljs.core.chunk_first.call(null,seq__4477_4499__$1);
var G__4501 = cljs.core.chunk_rest.call(null,seq__4477_4499__$1);
var G__4502 = c__4319__auto___4500;
var G__4503 = cljs.core.count.call(null,c__4319__auto___4500);
var G__4504 = (0);
seq__4477_4487 = G__4501;
chunk__4478_4488 = G__4502;
count__4479_4489 = G__4503;
i__4480_4490 = G__4504;
continue;
} else {
var vec__4484_4505 = cljs.core.first.call(null,seq__4477_4499__$1);
var name_4506 = cljs.core.nth.call(null,vec__4484_4505,(0),null);
var value_4507 = cljs.core.nth.call(null,vec__4484_4505,(1),null);
domina.set_attr_BANG_.call(null,content,name_4506,value_4507);


var G__4508 = cljs.core.next.call(null,seq__4477_4499__$1);
var G__4509 = null;
var G__4510 = (0);
var G__4511 = (0);
seq__4477_4487 = G__4508;
chunk__4478_4488 = G__4509;
count__4479_4489 = G__4510;
i__4480_4490 = G__4511;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__4512_4516 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4513_4517 = null;
var count__4514_4518 = (0);
var i__4515_4519 = (0);
while(true){
if((i__4515_4519 < count__4514_4518)){
var node_4520 = cljs.core._nth.call(null,chunk__4513_4517,i__4515_4519);
goog.dom.classes.add(node_4520,class$);


var G__4521 = seq__4512_4516;
var G__4522 = chunk__4513_4517;
var G__4523 = count__4514_4518;
var G__4524 = (i__4515_4519 + (1));
seq__4512_4516 = G__4521;
chunk__4513_4517 = G__4522;
count__4514_4518 = G__4523;
i__4515_4519 = G__4524;
continue;
} else {
var temp__4657__auto___4525 = cljs.core.seq.call(null,seq__4512_4516);
if(temp__4657__auto___4525){
var seq__4512_4526__$1 = temp__4657__auto___4525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4512_4526__$1)){
var c__4319__auto___4527 = cljs.core.chunk_first.call(null,seq__4512_4526__$1);
var G__4528 = cljs.core.chunk_rest.call(null,seq__4512_4526__$1);
var G__4529 = c__4319__auto___4527;
var G__4530 = cljs.core.count.call(null,c__4319__auto___4527);
var G__4531 = (0);
seq__4512_4516 = G__4528;
chunk__4513_4517 = G__4529;
count__4514_4518 = G__4530;
i__4515_4519 = G__4531;
continue;
} else {
var node_4532 = cljs.core.first.call(null,seq__4512_4526__$1);
goog.dom.classes.add(node_4532,class$);


var G__4533 = cljs.core.next.call(null,seq__4512_4526__$1);
var G__4534 = null;
var G__4535 = (0);
var G__4536 = (0);
seq__4512_4516 = G__4533;
chunk__4513_4517 = G__4534;
count__4514_4518 = G__4535;
i__4515_4519 = G__4536;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__4537_4541 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4538_4542 = null;
var count__4539_4543 = (0);
var i__4540_4544 = (0);
while(true){
if((i__4540_4544 < count__4539_4543)){
var node_4545 = cljs.core._nth.call(null,chunk__4538_4542,i__4540_4544);
goog.dom.classes.remove(node_4545,class$);


var G__4546 = seq__4537_4541;
var G__4547 = chunk__4538_4542;
var G__4548 = count__4539_4543;
var G__4549 = (i__4540_4544 + (1));
seq__4537_4541 = G__4546;
chunk__4538_4542 = G__4547;
count__4539_4543 = G__4548;
i__4540_4544 = G__4549;
continue;
} else {
var temp__4657__auto___4550 = cljs.core.seq.call(null,seq__4537_4541);
if(temp__4657__auto___4550){
var seq__4537_4551__$1 = temp__4657__auto___4550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4537_4551__$1)){
var c__4319__auto___4552 = cljs.core.chunk_first.call(null,seq__4537_4551__$1);
var G__4553 = cljs.core.chunk_rest.call(null,seq__4537_4551__$1);
var G__4554 = c__4319__auto___4552;
var G__4555 = cljs.core.count.call(null,c__4319__auto___4552);
var G__4556 = (0);
seq__4537_4541 = G__4553;
chunk__4538_4542 = G__4554;
count__4539_4543 = G__4555;
i__4540_4544 = G__4556;
continue;
} else {
var node_4557 = cljs.core.first.call(null,seq__4537_4551__$1);
goog.dom.classes.remove(node_4557,class$);


var G__4558 = cljs.core.next.call(null,seq__4537_4551__$1);
var G__4559 = null;
var G__4560 = (0);
var G__4561 = (0);
seq__4537_4541 = G__4558;
chunk__4538_4542 = G__4559;
count__4539_4543 = G__4560;
i__4540_4544 = G__4561;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__4562_4566 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4563_4567 = null;
var count__4564_4568 = (0);
var i__4565_4569 = (0);
while(true){
if((i__4565_4569 < count__4564_4568)){
var node_4570 = cljs.core._nth.call(null,chunk__4563_4567,i__4565_4569);
goog.dom.classes.toggle(node_4570,class$);


var G__4571 = seq__4562_4566;
var G__4572 = chunk__4563_4567;
var G__4573 = count__4564_4568;
var G__4574 = (i__4565_4569 + (1));
seq__4562_4566 = G__4571;
chunk__4563_4567 = G__4572;
count__4564_4568 = G__4573;
i__4565_4569 = G__4574;
continue;
} else {
var temp__4657__auto___4575 = cljs.core.seq.call(null,seq__4562_4566);
if(temp__4657__auto___4575){
var seq__4562_4576__$1 = temp__4657__auto___4575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4562_4576__$1)){
var c__4319__auto___4577 = cljs.core.chunk_first.call(null,seq__4562_4576__$1);
var G__4578 = cljs.core.chunk_rest.call(null,seq__4562_4576__$1);
var G__4579 = c__4319__auto___4577;
var G__4580 = cljs.core.count.call(null,c__4319__auto___4577);
var G__4581 = (0);
seq__4562_4566 = G__4578;
chunk__4563_4567 = G__4579;
count__4564_4568 = G__4580;
i__4565_4569 = G__4581;
continue;
} else {
var node_4582 = cljs.core.first.call(null,seq__4562_4576__$1);
goog.dom.classes.toggle(node_4582,class$);


var G__4583 = cljs.core.next.call(null,seq__4562_4576__$1);
var G__4584 = null;
var G__4585 = (0);
var G__4586 = (0);
seq__4562_4566 = G__4583;
chunk__4563_4567 = G__4584;
count__4564_4568 = G__4585;
i__4565_4569 = G__4586;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_4591__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__4587_4592 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4588_4593 = null;
var count__4589_4594 = (0);
var i__4590_4595 = (0);
while(true){
if((i__4590_4595 < count__4589_4594)){
var node_4596 = cljs.core._nth.call(null,chunk__4588_4593,i__4590_4595);
goog.dom.classes.set(node_4596,classes_4591__$1);


var G__4597 = seq__4587_4592;
var G__4598 = chunk__4588_4593;
var G__4599 = count__4589_4594;
var G__4600 = (i__4590_4595 + (1));
seq__4587_4592 = G__4597;
chunk__4588_4593 = G__4598;
count__4589_4594 = G__4599;
i__4590_4595 = G__4600;
continue;
} else {
var temp__4657__auto___4601 = cljs.core.seq.call(null,seq__4587_4592);
if(temp__4657__auto___4601){
var seq__4587_4602__$1 = temp__4657__auto___4601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4587_4602__$1)){
var c__4319__auto___4603 = cljs.core.chunk_first.call(null,seq__4587_4602__$1);
var G__4604 = cljs.core.chunk_rest.call(null,seq__4587_4602__$1);
var G__4605 = c__4319__auto___4603;
var G__4606 = cljs.core.count.call(null,c__4319__auto___4603);
var G__4607 = (0);
seq__4587_4592 = G__4604;
chunk__4588_4593 = G__4605;
count__4589_4594 = G__4606;
i__4590_4595 = G__4607;
continue;
} else {
var node_4608 = cljs.core.first.call(null,seq__4587_4602__$1);
goog.dom.classes.set(node_4608,classes_4591__$1);


var G__4609 = cljs.core.next.call(null,seq__4587_4602__$1);
var G__4610 = null;
var G__4611 = (0);
var G__4612 = (0);
seq__4587_4592 = G__4609;
chunk__4588_4593 = G__4610;
count__4589_4594 = G__4611;
i__4590_4595 = G__4612;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__4613_4617 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4614_4618 = null;
var count__4615_4619 = (0);
var i__4616_4620 = (0);
while(true){
if((i__4616_4620 < count__4615_4619)){
var node_4621 = cljs.core._nth.call(null,chunk__4614_4618,i__4616_4620);
goog.dom.setTextContent(node_4621,value);


var G__4622 = seq__4613_4617;
var G__4623 = chunk__4614_4618;
var G__4624 = count__4615_4619;
var G__4625 = (i__4616_4620 + (1));
seq__4613_4617 = G__4622;
chunk__4614_4618 = G__4623;
count__4615_4619 = G__4624;
i__4616_4620 = G__4625;
continue;
} else {
var temp__4657__auto___4626 = cljs.core.seq.call(null,seq__4613_4617);
if(temp__4657__auto___4626){
var seq__4613_4627__$1 = temp__4657__auto___4626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4613_4627__$1)){
var c__4319__auto___4628 = cljs.core.chunk_first.call(null,seq__4613_4627__$1);
var G__4629 = cljs.core.chunk_rest.call(null,seq__4613_4627__$1);
var G__4630 = c__4319__auto___4628;
var G__4631 = cljs.core.count.call(null,c__4319__auto___4628);
var G__4632 = (0);
seq__4613_4617 = G__4629;
chunk__4614_4618 = G__4630;
count__4615_4619 = G__4631;
i__4616_4620 = G__4632;
continue;
} else {
var node_4633 = cljs.core.first.call(null,seq__4613_4627__$1);
goog.dom.setTextContent(node_4633,value);


var G__4634 = cljs.core.next.call(null,seq__4613_4627__$1);
var G__4635 = null;
var G__4636 = (0);
var G__4637 = (0);
seq__4613_4617 = G__4634;
chunk__4614_4618 = G__4635;
count__4615_4619 = G__4636;
i__4616_4620 = G__4637;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__4638_4642 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4639_4643 = null;
var count__4640_4644 = (0);
var i__4641_4645 = (0);
while(true){
if((i__4641_4645 < count__4640_4644)){
var node_4646 = cljs.core._nth.call(null,chunk__4639_4643,i__4641_4645);
goog.dom.forms.setValue(node_4646,value);


var G__4647 = seq__4638_4642;
var G__4648 = chunk__4639_4643;
var G__4649 = count__4640_4644;
var G__4650 = (i__4641_4645 + (1));
seq__4638_4642 = G__4647;
chunk__4639_4643 = G__4648;
count__4640_4644 = G__4649;
i__4641_4645 = G__4650;
continue;
} else {
var temp__4657__auto___4651 = cljs.core.seq.call(null,seq__4638_4642);
if(temp__4657__auto___4651){
var seq__4638_4652__$1 = temp__4657__auto___4651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4638_4652__$1)){
var c__4319__auto___4653 = cljs.core.chunk_first.call(null,seq__4638_4652__$1);
var G__4654 = cljs.core.chunk_rest.call(null,seq__4638_4652__$1);
var G__4655 = c__4319__auto___4653;
var G__4656 = cljs.core.count.call(null,c__4319__auto___4653);
var G__4657 = (0);
seq__4638_4642 = G__4654;
chunk__4639_4643 = G__4655;
count__4640_4644 = G__4656;
i__4641_4645 = G__4657;
continue;
} else {
var node_4658 = cljs.core.first.call(null,seq__4638_4652__$1);
goog.dom.forms.setValue(node_4658,value);


var G__4659 = cljs.core.next.call(null,seq__4638_4652__$1);
var G__4660 = null;
var G__4661 = (0);
var G__4662 = (0);
seq__4638_4642 = G__4659;
chunk__4639_4643 = G__4660;
count__4640_4644 = G__4661;
i__4641_4645 = G__4662;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_)))) && (!(special_tag_QMARK_)))){
var value_4668 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__4664_4669 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4665_4670 = null;
var count__4666_4671 = (0);
var i__4667_4672 = (0);
while(true){
if((i__4667_4672 < count__4666_4671)){
var node_4673 = cljs.core._nth.call(null,chunk__4665_4670,i__4667_4672);
node_4673.innerHTML = value_4668;


var G__4674 = seq__4664_4669;
var G__4675 = chunk__4665_4670;
var G__4676 = count__4666_4671;
var G__4677 = (i__4667_4672 + (1));
seq__4664_4669 = G__4674;
chunk__4665_4670 = G__4675;
count__4666_4671 = G__4676;
i__4667_4672 = G__4677;
continue;
} else {
var temp__4657__auto___4678 = cljs.core.seq.call(null,seq__4664_4669);
if(temp__4657__auto___4678){
var seq__4664_4679__$1 = temp__4657__auto___4678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4664_4679__$1)){
var c__4319__auto___4680 = cljs.core.chunk_first.call(null,seq__4664_4679__$1);
var G__4681 = cljs.core.chunk_rest.call(null,seq__4664_4679__$1);
var G__4682 = c__4319__auto___4680;
var G__4683 = cljs.core.count.call(null,c__4319__auto___4680);
var G__4684 = (0);
seq__4664_4669 = G__4681;
chunk__4665_4670 = G__4682;
count__4666_4671 = G__4683;
i__4667_4672 = G__4684;
continue;
} else {
var node_4685 = cljs.core.first.call(null,seq__4664_4679__$1);
node_4685.innerHTML = value_4668;


var G__4686 = cljs.core.next.call(null,seq__4664_4679__$1);
var G__4687 = null;
var G__4688 = (0);
var G__4689 = (0);
seq__4664_4669 = G__4686;
chunk__4665_4670 = G__4687;
count__4666_4671 = G__4688;
i__4667_4672 = G__4689;
continue;
}
} else {
}
}
break;
}
}catch (e4663){if((e4663 instanceof Error)){
var e_4690 = e4663;
domina.replace_children_BANG_.call(null,content,value_4668);
} else {
throw e4663;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__4692 = arguments.length;
switch (G__4692) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3911__auto__ = bubble;
if(cljs.core.truth_(and__3911__auto__)){
return (value == null);
} else {
return and__3911__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__3922__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__4696_4700 = cljs.core.seq.call(null,children);
var chunk__4697_4701 = null;
var count__4698_4702 = (0);
var i__4699_4703 = (0);
while(true){
if((i__4699_4703 < count__4698_4702)){
var child_4704 = cljs.core._nth.call(null,chunk__4697_4701,i__4699_4703);
frag.appendChild(child_4704);


var G__4705 = seq__4696_4700;
var G__4706 = chunk__4697_4701;
var G__4707 = count__4698_4702;
var G__4708 = (i__4699_4703 + (1));
seq__4696_4700 = G__4705;
chunk__4697_4701 = G__4706;
count__4698_4702 = G__4707;
i__4699_4703 = G__4708;
continue;
} else {
var temp__4657__auto___4709 = cljs.core.seq.call(null,seq__4696_4700);
if(temp__4657__auto___4709){
var seq__4696_4710__$1 = temp__4657__auto___4709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4696_4710__$1)){
var c__4319__auto___4711 = cljs.core.chunk_first.call(null,seq__4696_4710__$1);
var G__4712 = cljs.core.chunk_rest.call(null,seq__4696_4710__$1);
var G__4713 = c__4319__auto___4711;
var G__4714 = cljs.core.count.call(null,c__4319__auto___4711);
var G__4715 = (0);
seq__4696_4700 = G__4712;
chunk__4697_4701 = G__4713;
count__4698_4702 = G__4714;
i__4699_4703 = G__4715;
continue;
} else {
var child_4716 = cljs.core.first.call(null,seq__4696_4710__$1);
frag.appendChild(child_4716);


var G__4717 = cljs.core.next.call(null,seq__4696_4710__$1);
var G__4718 = null;
var G__4719 = (0);
var G__4720 = (0);
seq__4696_4700 = G__4717;
chunk__4697_4701 = G__4718;
count__4698_4702 = G__4719;
i__4699_4703 = G__4720;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__4694_SHARP_,p2__4695_SHARP_){
return f.call(null,p1__4694_SHARP_,p2__4695_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__4722 = arguments.length;
switch (G__4722) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__4725 = arguments.length;
switch (G__4725) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__3911__auto__ = obj;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3911__auto____$1){
return obj.length;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}
