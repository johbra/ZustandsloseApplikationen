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
var opt_wrapper_2655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_2656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_2657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_2657,opt_wrapper_2655,table_section_wrapper_2656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_2655,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_2656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_2656,cell_wrapper_2657,table_section_wrapper_2656,table_section_wrapper_2656]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__3911__auto__ = div.firstChild;
if(cljs.core.truth_(and__3911__auto__)){
return div.firstChild.childNodes;
} else {
return and__3911__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__2658 = cljs.core.seq.call(null,tbody);
var chunk__2659 = null;
var count__2660 = (0);
var i__2661 = (0);
while(true){
if((i__2661 < count__2660)){
var child = cljs.core._nth.call(null,chunk__2659,i__2661);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__2662 = seq__2658;
var G__2663 = chunk__2659;
var G__2664 = count__2660;
var G__2665 = (i__2661 + (1));
seq__2658 = G__2662;
chunk__2659 = G__2663;
count__2660 = G__2664;
i__2661 = G__2665;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2658);
if(temp__4657__auto__){
var seq__2658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2658__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2658__$1);
var G__2666 = cljs.core.chunk_rest.call(null,seq__2658__$1);
var G__2667 = c__4319__auto__;
var G__2668 = cljs.core.count.call(null,c__4319__auto__);
var G__2669 = (0);
seq__2658 = G__2666;
chunk__2659 = G__2667;
count__2660 = G__2668;
i__2661 = G__2669;
continue;
} else {
var child = cljs.core.first.call(null,seq__2658__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__2670 = cljs.core.next.call(null,seq__2658__$1);
var G__2671 = null;
var G__2672 = (0);
var G__2673 = (0);
seq__2658 = G__2670;
chunk__2659 = G__2671;
count__2660 = G__2672;
i__2661 = G__2673;
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
var vec__2674 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__2674,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__2674,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__2674,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__2677 = wrapper.lastChild;
var G__2678 = (level - (1));
wrapper = G__2677;
level = G__2678;
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
var len__4499__auto___2680 = arguments.length;
var i__4500__auto___2681 = (0);
while(true){
if((i__4500__auto___2681 < len__4499__auto___2680)){
args__4502__auto__.push((arguments[i__4500__auto___2681]));

var G__2682 = (i__4500__auto___2681 + (1));
i__4500__auto___2681 = G__2682;
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
domina.log_debug.cljs$lang$applyTo = (function (seq2679){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2679));
});

domina.log = (function domina$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2684 = arguments.length;
var i__4500__auto___2685 = (0);
while(true){
if((i__4500__auto___2685 < len__4499__auto___2684)){
args__4502__auto__.push((arguments[i__4500__auto___2685]));

var G__2686 = (i__4500__auto___2685 + (1));
i__4500__auto___2685 = G__2686;
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
domina.log.cljs$lang$applyTo = (function (seq2683){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2683));
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
var len__4499__auto___2688 = arguments.length;
var i__4500__auto___2689 = (0);
while(true){
if((i__4500__auto___2689 < len__4499__auto___2688)){
args__4502__auto__.push((arguments[i__4500__auto___2689]));

var G__2690 = (i__4500__auto___2689 + (1));
i__4500__auto___2689 = G__2690;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq2687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2687));
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
return cljs.core.map.call(null,(function (p1__2691_SHARP_){
return p1__2691_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2692_SHARP_,p2__2693_SHARP_){
return goog.dom.insertChildAt(p1__2692_SHARP_,p2__2693_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2695_SHARP_,p2__2694_SHARP_){
return goog.dom.insertSiblingBefore(p2__2694_SHARP_,p1__2695_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2697_SHARP_,p2__2696_SHARP_){
return goog.dom.insertSiblingAfter(p2__2696_SHARP_,p1__2697_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2699_SHARP_,p2__2698_SHARP_){
return goog.dom.replaceNode(p2__2698_SHARP_,p1__2699_SHARP_);
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
var len__4499__auto___2707 = arguments.length;
var i__4500__auto___2708 = (0);
while(true){
if((i__4500__auto___2708 < len__4499__auto___2707)){
args__4502__auto__.push((arguments[i__4500__auto___2708]));

var G__2709 = (i__4500__auto___2708 + (1));
i__4500__auto___2708 = G__2709;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__2703_2710 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2704_2711 = null;
var count__2705_2712 = (0);
var i__2706_2713 = (0);
while(true){
if((i__2706_2713 < count__2705_2712)){
var n_2714 = cljs.core._nth.call(null,chunk__2704_2711,i__2706_2713);
goog.style.setStyle(n_2714,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2715 = seq__2703_2710;
var G__2716 = chunk__2704_2711;
var G__2717 = count__2705_2712;
var G__2718 = (i__2706_2713 + (1));
seq__2703_2710 = G__2715;
chunk__2704_2711 = G__2716;
count__2705_2712 = G__2717;
i__2706_2713 = G__2718;
continue;
} else {
var temp__4657__auto___2719 = cljs.core.seq.call(null,seq__2703_2710);
if(temp__4657__auto___2719){
var seq__2703_2720__$1 = temp__4657__auto___2719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2703_2720__$1)){
var c__4319__auto___2721 = cljs.core.chunk_first.call(null,seq__2703_2720__$1);
var G__2722 = cljs.core.chunk_rest.call(null,seq__2703_2720__$1);
var G__2723 = c__4319__auto___2721;
var G__2724 = cljs.core.count.call(null,c__4319__auto___2721);
var G__2725 = (0);
seq__2703_2710 = G__2722;
chunk__2704_2711 = G__2723;
count__2705_2712 = G__2724;
i__2706_2713 = G__2725;
continue;
} else {
var n_2726 = cljs.core.first.call(null,seq__2703_2720__$1);
goog.style.setStyle(n_2726,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2727 = cljs.core.next.call(null,seq__2703_2720__$1);
var G__2728 = null;
var G__2729 = (0);
var G__2730 = (0);
seq__2703_2710 = G__2727;
chunk__2704_2711 = G__2728;
count__2705_2712 = G__2729;
i__2706_2713 = G__2730;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq2700){
var G__2701 = cljs.core.first.call(null,seq2700);
var seq2700__$1 = cljs.core.next.call(null,seq2700);
var G__2702 = cljs.core.first.call(null,seq2700__$1);
var seq2700__$2 = cljs.core.next.call(null,seq2700__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2701,G__2702,seq2700__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2738 = arguments.length;
var i__4500__auto___2739 = (0);
while(true){
if((i__4500__auto___2739 < len__4499__auto___2738)){
args__4502__auto__.push((arguments[i__4500__auto___2739]));

var G__2740 = (i__4500__auto___2739 + (1));
i__4500__auto___2739 = G__2740;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__2734_2741 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2735_2742 = null;
var count__2736_2743 = (0);
var i__2737_2744 = (0);
while(true){
if((i__2737_2744 < count__2736_2743)){
var n_2745 = cljs.core._nth.call(null,chunk__2735_2742,i__2737_2744);
n_2745.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2746 = seq__2734_2741;
var G__2747 = chunk__2735_2742;
var G__2748 = count__2736_2743;
var G__2749 = (i__2737_2744 + (1));
seq__2734_2741 = G__2746;
chunk__2735_2742 = G__2747;
count__2736_2743 = G__2748;
i__2737_2744 = G__2749;
continue;
} else {
var temp__4657__auto___2750 = cljs.core.seq.call(null,seq__2734_2741);
if(temp__4657__auto___2750){
var seq__2734_2751__$1 = temp__4657__auto___2750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2734_2751__$1)){
var c__4319__auto___2752 = cljs.core.chunk_first.call(null,seq__2734_2751__$1);
var G__2753 = cljs.core.chunk_rest.call(null,seq__2734_2751__$1);
var G__2754 = c__4319__auto___2752;
var G__2755 = cljs.core.count.call(null,c__4319__auto___2752);
var G__2756 = (0);
seq__2734_2741 = G__2753;
chunk__2735_2742 = G__2754;
count__2736_2743 = G__2755;
i__2737_2744 = G__2756;
continue;
} else {
var n_2757 = cljs.core.first.call(null,seq__2734_2751__$1);
n_2757.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2758 = cljs.core.next.call(null,seq__2734_2751__$1);
var G__2759 = null;
var G__2760 = (0);
var G__2761 = (0);
seq__2734_2741 = G__2758;
chunk__2735_2742 = G__2759;
count__2736_2743 = G__2760;
i__2737_2744 = G__2761;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq2731){
var G__2732 = cljs.core.first.call(null,seq2731);
var seq2731__$1 = cljs.core.next.call(null,seq2731);
var G__2733 = cljs.core.first.call(null,seq2731__$1);
var seq2731__$2 = cljs.core.next.call(null,seq2731__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2732,G__2733,seq2731__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__2762_2766 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2763_2767 = null;
var count__2764_2768 = (0);
var i__2765_2769 = (0);
while(true){
if((i__2765_2769 < count__2764_2768)){
var n_2770 = cljs.core._nth.call(null,chunk__2763_2767,i__2765_2769);
n_2770.removeAttribute(cljs.core.name.call(null,name));


var G__2771 = seq__2762_2766;
var G__2772 = chunk__2763_2767;
var G__2773 = count__2764_2768;
var G__2774 = (i__2765_2769 + (1));
seq__2762_2766 = G__2771;
chunk__2763_2767 = G__2772;
count__2764_2768 = G__2773;
i__2765_2769 = G__2774;
continue;
} else {
var temp__4657__auto___2775 = cljs.core.seq.call(null,seq__2762_2766);
if(temp__4657__auto___2775){
var seq__2762_2776__$1 = temp__4657__auto___2775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2762_2776__$1)){
var c__4319__auto___2777 = cljs.core.chunk_first.call(null,seq__2762_2776__$1);
var G__2778 = cljs.core.chunk_rest.call(null,seq__2762_2776__$1);
var G__2779 = c__4319__auto___2777;
var G__2780 = cljs.core.count.call(null,c__4319__auto___2777);
var G__2781 = (0);
seq__2762_2766 = G__2778;
chunk__2763_2767 = G__2779;
count__2764_2768 = G__2780;
i__2765_2769 = G__2781;
continue;
} else {
var n_2782 = cljs.core.first.call(null,seq__2762_2776__$1);
n_2782.removeAttribute(cljs.core.name.call(null,name));


var G__2783 = cljs.core.next.call(null,seq__2762_2776__$1);
var G__2784 = null;
var G__2785 = (0);
var G__2786 = (0);
seq__2762_2766 = G__2783;
chunk__2763_2767 = G__2784;
count__2764_2768 = G__2785;
i__2765_2769 = G__2786;
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
var vec__2787 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__2787,(0),null);
var v = cljs.core.nth.call(null,vec__2787,(1),null);
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
return (function (p1__2790_SHARP_){
var attr = attrs.item(p1__2790_SHARP_);
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
var seq__2791_2801 = cljs.core.seq.call(null,styles);
var chunk__2792_2802 = null;
var count__2793_2803 = (0);
var i__2794_2804 = (0);
while(true){
if((i__2794_2804 < count__2793_2803)){
var vec__2795_2805 = cljs.core._nth.call(null,chunk__2792_2802,i__2794_2804);
var name_2806 = cljs.core.nth.call(null,vec__2795_2805,(0),null);
var value_2807 = cljs.core.nth.call(null,vec__2795_2805,(1),null);
domina.set_style_BANG_.call(null,content,name_2806,value_2807);


var G__2808 = seq__2791_2801;
var G__2809 = chunk__2792_2802;
var G__2810 = count__2793_2803;
var G__2811 = (i__2794_2804 + (1));
seq__2791_2801 = G__2808;
chunk__2792_2802 = G__2809;
count__2793_2803 = G__2810;
i__2794_2804 = G__2811;
continue;
} else {
var temp__4657__auto___2812 = cljs.core.seq.call(null,seq__2791_2801);
if(temp__4657__auto___2812){
var seq__2791_2813__$1 = temp__4657__auto___2812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2791_2813__$1)){
var c__4319__auto___2814 = cljs.core.chunk_first.call(null,seq__2791_2813__$1);
var G__2815 = cljs.core.chunk_rest.call(null,seq__2791_2813__$1);
var G__2816 = c__4319__auto___2814;
var G__2817 = cljs.core.count.call(null,c__4319__auto___2814);
var G__2818 = (0);
seq__2791_2801 = G__2815;
chunk__2792_2802 = G__2816;
count__2793_2803 = G__2817;
i__2794_2804 = G__2818;
continue;
} else {
var vec__2798_2819 = cljs.core.first.call(null,seq__2791_2813__$1);
var name_2820 = cljs.core.nth.call(null,vec__2798_2819,(0),null);
var value_2821 = cljs.core.nth.call(null,vec__2798_2819,(1),null);
domina.set_style_BANG_.call(null,content,name_2820,value_2821);


var G__2822 = cljs.core.next.call(null,seq__2791_2813__$1);
var G__2823 = null;
var G__2824 = (0);
var G__2825 = (0);
seq__2791_2801 = G__2822;
chunk__2792_2802 = G__2823;
count__2793_2803 = G__2824;
i__2794_2804 = G__2825;
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
var seq__2826_2836 = cljs.core.seq.call(null,attrs);
var chunk__2827_2837 = null;
var count__2828_2838 = (0);
var i__2829_2839 = (0);
while(true){
if((i__2829_2839 < count__2828_2838)){
var vec__2830_2840 = cljs.core._nth.call(null,chunk__2827_2837,i__2829_2839);
var name_2841 = cljs.core.nth.call(null,vec__2830_2840,(0),null);
var value_2842 = cljs.core.nth.call(null,vec__2830_2840,(1),null);
domina.set_attr_BANG_.call(null,content,name_2841,value_2842);


var G__2843 = seq__2826_2836;
var G__2844 = chunk__2827_2837;
var G__2845 = count__2828_2838;
var G__2846 = (i__2829_2839 + (1));
seq__2826_2836 = G__2843;
chunk__2827_2837 = G__2844;
count__2828_2838 = G__2845;
i__2829_2839 = G__2846;
continue;
} else {
var temp__4657__auto___2847 = cljs.core.seq.call(null,seq__2826_2836);
if(temp__4657__auto___2847){
var seq__2826_2848__$1 = temp__4657__auto___2847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2826_2848__$1)){
var c__4319__auto___2849 = cljs.core.chunk_first.call(null,seq__2826_2848__$1);
var G__2850 = cljs.core.chunk_rest.call(null,seq__2826_2848__$1);
var G__2851 = c__4319__auto___2849;
var G__2852 = cljs.core.count.call(null,c__4319__auto___2849);
var G__2853 = (0);
seq__2826_2836 = G__2850;
chunk__2827_2837 = G__2851;
count__2828_2838 = G__2852;
i__2829_2839 = G__2853;
continue;
} else {
var vec__2833_2854 = cljs.core.first.call(null,seq__2826_2848__$1);
var name_2855 = cljs.core.nth.call(null,vec__2833_2854,(0),null);
var value_2856 = cljs.core.nth.call(null,vec__2833_2854,(1),null);
domina.set_attr_BANG_.call(null,content,name_2855,value_2856);


var G__2857 = cljs.core.next.call(null,seq__2826_2848__$1);
var G__2858 = null;
var G__2859 = (0);
var G__2860 = (0);
seq__2826_2836 = G__2857;
chunk__2827_2837 = G__2858;
count__2828_2838 = G__2859;
i__2829_2839 = G__2860;
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
var seq__2861_2865 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2862_2866 = null;
var count__2863_2867 = (0);
var i__2864_2868 = (0);
while(true){
if((i__2864_2868 < count__2863_2867)){
var node_2869 = cljs.core._nth.call(null,chunk__2862_2866,i__2864_2868);
goog.dom.classes.add(node_2869,class$);


var G__2870 = seq__2861_2865;
var G__2871 = chunk__2862_2866;
var G__2872 = count__2863_2867;
var G__2873 = (i__2864_2868 + (1));
seq__2861_2865 = G__2870;
chunk__2862_2866 = G__2871;
count__2863_2867 = G__2872;
i__2864_2868 = G__2873;
continue;
} else {
var temp__4657__auto___2874 = cljs.core.seq.call(null,seq__2861_2865);
if(temp__4657__auto___2874){
var seq__2861_2875__$1 = temp__4657__auto___2874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2861_2875__$1)){
var c__4319__auto___2876 = cljs.core.chunk_first.call(null,seq__2861_2875__$1);
var G__2877 = cljs.core.chunk_rest.call(null,seq__2861_2875__$1);
var G__2878 = c__4319__auto___2876;
var G__2879 = cljs.core.count.call(null,c__4319__auto___2876);
var G__2880 = (0);
seq__2861_2865 = G__2877;
chunk__2862_2866 = G__2878;
count__2863_2867 = G__2879;
i__2864_2868 = G__2880;
continue;
} else {
var node_2881 = cljs.core.first.call(null,seq__2861_2875__$1);
goog.dom.classes.add(node_2881,class$);


var G__2882 = cljs.core.next.call(null,seq__2861_2875__$1);
var G__2883 = null;
var G__2884 = (0);
var G__2885 = (0);
seq__2861_2865 = G__2882;
chunk__2862_2866 = G__2883;
count__2863_2867 = G__2884;
i__2864_2868 = G__2885;
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
var seq__2886_2890 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2887_2891 = null;
var count__2888_2892 = (0);
var i__2889_2893 = (0);
while(true){
if((i__2889_2893 < count__2888_2892)){
var node_2894 = cljs.core._nth.call(null,chunk__2887_2891,i__2889_2893);
goog.dom.classes.remove(node_2894,class$);


var G__2895 = seq__2886_2890;
var G__2896 = chunk__2887_2891;
var G__2897 = count__2888_2892;
var G__2898 = (i__2889_2893 + (1));
seq__2886_2890 = G__2895;
chunk__2887_2891 = G__2896;
count__2888_2892 = G__2897;
i__2889_2893 = G__2898;
continue;
} else {
var temp__4657__auto___2899 = cljs.core.seq.call(null,seq__2886_2890);
if(temp__4657__auto___2899){
var seq__2886_2900__$1 = temp__4657__auto___2899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2886_2900__$1)){
var c__4319__auto___2901 = cljs.core.chunk_first.call(null,seq__2886_2900__$1);
var G__2902 = cljs.core.chunk_rest.call(null,seq__2886_2900__$1);
var G__2903 = c__4319__auto___2901;
var G__2904 = cljs.core.count.call(null,c__4319__auto___2901);
var G__2905 = (0);
seq__2886_2890 = G__2902;
chunk__2887_2891 = G__2903;
count__2888_2892 = G__2904;
i__2889_2893 = G__2905;
continue;
} else {
var node_2906 = cljs.core.first.call(null,seq__2886_2900__$1);
goog.dom.classes.remove(node_2906,class$);


var G__2907 = cljs.core.next.call(null,seq__2886_2900__$1);
var G__2908 = null;
var G__2909 = (0);
var G__2910 = (0);
seq__2886_2890 = G__2907;
chunk__2887_2891 = G__2908;
count__2888_2892 = G__2909;
i__2889_2893 = G__2910;
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
var seq__2911_2915 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2912_2916 = null;
var count__2913_2917 = (0);
var i__2914_2918 = (0);
while(true){
if((i__2914_2918 < count__2913_2917)){
var node_2919 = cljs.core._nth.call(null,chunk__2912_2916,i__2914_2918);
goog.dom.classes.toggle(node_2919,class$);


var G__2920 = seq__2911_2915;
var G__2921 = chunk__2912_2916;
var G__2922 = count__2913_2917;
var G__2923 = (i__2914_2918 + (1));
seq__2911_2915 = G__2920;
chunk__2912_2916 = G__2921;
count__2913_2917 = G__2922;
i__2914_2918 = G__2923;
continue;
} else {
var temp__4657__auto___2924 = cljs.core.seq.call(null,seq__2911_2915);
if(temp__4657__auto___2924){
var seq__2911_2925__$1 = temp__4657__auto___2924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2911_2925__$1)){
var c__4319__auto___2926 = cljs.core.chunk_first.call(null,seq__2911_2925__$1);
var G__2927 = cljs.core.chunk_rest.call(null,seq__2911_2925__$1);
var G__2928 = c__4319__auto___2926;
var G__2929 = cljs.core.count.call(null,c__4319__auto___2926);
var G__2930 = (0);
seq__2911_2915 = G__2927;
chunk__2912_2916 = G__2928;
count__2913_2917 = G__2929;
i__2914_2918 = G__2930;
continue;
} else {
var node_2931 = cljs.core.first.call(null,seq__2911_2925__$1);
goog.dom.classes.toggle(node_2931,class$);


var G__2932 = cljs.core.next.call(null,seq__2911_2925__$1);
var G__2933 = null;
var G__2934 = (0);
var G__2935 = (0);
seq__2911_2915 = G__2932;
chunk__2912_2916 = G__2933;
count__2913_2917 = G__2934;
i__2914_2918 = G__2935;
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
var classes_2940__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__2936_2941 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2937_2942 = null;
var count__2938_2943 = (0);
var i__2939_2944 = (0);
while(true){
if((i__2939_2944 < count__2938_2943)){
var node_2945 = cljs.core._nth.call(null,chunk__2937_2942,i__2939_2944);
goog.dom.classes.set(node_2945,classes_2940__$1);


var G__2946 = seq__2936_2941;
var G__2947 = chunk__2937_2942;
var G__2948 = count__2938_2943;
var G__2949 = (i__2939_2944 + (1));
seq__2936_2941 = G__2946;
chunk__2937_2942 = G__2947;
count__2938_2943 = G__2948;
i__2939_2944 = G__2949;
continue;
} else {
var temp__4657__auto___2950 = cljs.core.seq.call(null,seq__2936_2941);
if(temp__4657__auto___2950){
var seq__2936_2951__$1 = temp__4657__auto___2950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2936_2951__$1)){
var c__4319__auto___2952 = cljs.core.chunk_first.call(null,seq__2936_2951__$1);
var G__2953 = cljs.core.chunk_rest.call(null,seq__2936_2951__$1);
var G__2954 = c__4319__auto___2952;
var G__2955 = cljs.core.count.call(null,c__4319__auto___2952);
var G__2956 = (0);
seq__2936_2941 = G__2953;
chunk__2937_2942 = G__2954;
count__2938_2943 = G__2955;
i__2939_2944 = G__2956;
continue;
} else {
var node_2957 = cljs.core.first.call(null,seq__2936_2951__$1);
goog.dom.classes.set(node_2957,classes_2940__$1);


var G__2958 = cljs.core.next.call(null,seq__2936_2951__$1);
var G__2959 = null;
var G__2960 = (0);
var G__2961 = (0);
seq__2936_2941 = G__2958;
chunk__2937_2942 = G__2959;
count__2938_2943 = G__2960;
i__2939_2944 = G__2961;
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
var seq__2962_2966 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2963_2967 = null;
var count__2964_2968 = (0);
var i__2965_2969 = (0);
while(true){
if((i__2965_2969 < count__2964_2968)){
var node_2970 = cljs.core._nth.call(null,chunk__2963_2967,i__2965_2969);
goog.dom.setTextContent(node_2970,value);


var G__2971 = seq__2962_2966;
var G__2972 = chunk__2963_2967;
var G__2973 = count__2964_2968;
var G__2974 = (i__2965_2969 + (1));
seq__2962_2966 = G__2971;
chunk__2963_2967 = G__2972;
count__2964_2968 = G__2973;
i__2965_2969 = G__2974;
continue;
} else {
var temp__4657__auto___2975 = cljs.core.seq.call(null,seq__2962_2966);
if(temp__4657__auto___2975){
var seq__2962_2976__$1 = temp__4657__auto___2975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2962_2976__$1)){
var c__4319__auto___2977 = cljs.core.chunk_first.call(null,seq__2962_2976__$1);
var G__2978 = cljs.core.chunk_rest.call(null,seq__2962_2976__$1);
var G__2979 = c__4319__auto___2977;
var G__2980 = cljs.core.count.call(null,c__4319__auto___2977);
var G__2981 = (0);
seq__2962_2966 = G__2978;
chunk__2963_2967 = G__2979;
count__2964_2968 = G__2980;
i__2965_2969 = G__2981;
continue;
} else {
var node_2982 = cljs.core.first.call(null,seq__2962_2976__$1);
goog.dom.setTextContent(node_2982,value);


var G__2983 = cljs.core.next.call(null,seq__2962_2976__$1);
var G__2984 = null;
var G__2985 = (0);
var G__2986 = (0);
seq__2962_2966 = G__2983;
chunk__2963_2967 = G__2984;
count__2964_2968 = G__2985;
i__2965_2969 = G__2986;
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
var seq__2987_2991 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2988_2992 = null;
var count__2989_2993 = (0);
var i__2990_2994 = (0);
while(true){
if((i__2990_2994 < count__2989_2993)){
var node_2995 = cljs.core._nth.call(null,chunk__2988_2992,i__2990_2994);
goog.dom.forms.setValue(node_2995,value);


var G__2996 = seq__2987_2991;
var G__2997 = chunk__2988_2992;
var G__2998 = count__2989_2993;
var G__2999 = (i__2990_2994 + (1));
seq__2987_2991 = G__2996;
chunk__2988_2992 = G__2997;
count__2989_2993 = G__2998;
i__2990_2994 = G__2999;
continue;
} else {
var temp__4657__auto___3000 = cljs.core.seq.call(null,seq__2987_2991);
if(temp__4657__auto___3000){
var seq__2987_3001__$1 = temp__4657__auto___3000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2987_3001__$1)){
var c__4319__auto___3002 = cljs.core.chunk_first.call(null,seq__2987_3001__$1);
var G__3003 = cljs.core.chunk_rest.call(null,seq__2987_3001__$1);
var G__3004 = c__4319__auto___3002;
var G__3005 = cljs.core.count.call(null,c__4319__auto___3002);
var G__3006 = (0);
seq__2987_2991 = G__3003;
chunk__2988_2992 = G__3004;
count__2989_2993 = G__3005;
i__2990_2994 = G__3006;
continue;
} else {
var node_3007 = cljs.core.first.call(null,seq__2987_3001__$1);
goog.dom.forms.setValue(node_3007,value);


var G__3008 = cljs.core.next.call(null,seq__2987_3001__$1);
var G__3009 = null;
var G__3010 = (0);
var G__3011 = (0);
seq__2987_2991 = G__3008;
chunk__2988_2992 = G__3009;
count__2989_2993 = G__3010;
i__2990_2994 = G__3011;
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
var value_3017 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__3013_3018 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__3014_3019 = null;
var count__3015_3020 = (0);
var i__3016_3021 = (0);
while(true){
if((i__3016_3021 < count__3015_3020)){
var node_3022 = cljs.core._nth.call(null,chunk__3014_3019,i__3016_3021);
node_3022.innerHTML = value_3017;


var G__3023 = seq__3013_3018;
var G__3024 = chunk__3014_3019;
var G__3025 = count__3015_3020;
var G__3026 = (i__3016_3021 + (1));
seq__3013_3018 = G__3023;
chunk__3014_3019 = G__3024;
count__3015_3020 = G__3025;
i__3016_3021 = G__3026;
continue;
} else {
var temp__4657__auto___3027 = cljs.core.seq.call(null,seq__3013_3018);
if(temp__4657__auto___3027){
var seq__3013_3028__$1 = temp__4657__auto___3027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3013_3028__$1)){
var c__4319__auto___3029 = cljs.core.chunk_first.call(null,seq__3013_3028__$1);
var G__3030 = cljs.core.chunk_rest.call(null,seq__3013_3028__$1);
var G__3031 = c__4319__auto___3029;
var G__3032 = cljs.core.count.call(null,c__4319__auto___3029);
var G__3033 = (0);
seq__3013_3018 = G__3030;
chunk__3014_3019 = G__3031;
count__3015_3020 = G__3032;
i__3016_3021 = G__3033;
continue;
} else {
var node_3034 = cljs.core.first.call(null,seq__3013_3028__$1);
node_3034.innerHTML = value_3017;


var G__3035 = cljs.core.next.call(null,seq__3013_3028__$1);
var G__3036 = null;
var G__3037 = (0);
var G__3038 = (0);
seq__3013_3018 = G__3035;
chunk__3014_3019 = G__3036;
count__3015_3020 = G__3037;
i__3016_3021 = G__3038;
continue;
}
} else {
}
}
break;
}
}catch (e3012){if((e3012 instanceof Error)){
var e_3039 = e3012;
domina.replace_children_BANG_.call(null,content,value_3017);
} else {
throw e3012;

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
var G__3041 = arguments.length;
switch (G__3041) {
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
var seq__3045_3049 = cljs.core.seq.call(null,children);
var chunk__3046_3050 = null;
var count__3047_3051 = (0);
var i__3048_3052 = (0);
while(true){
if((i__3048_3052 < count__3047_3051)){
var child_3053 = cljs.core._nth.call(null,chunk__3046_3050,i__3048_3052);
frag.appendChild(child_3053);


var G__3054 = seq__3045_3049;
var G__3055 = chunk__3046_3050;
var G__3056 = count__3047_3051;
var G__3057 = (i__3048_3052 + (1));
seq__3045_3049 = G__3054;
chunk__3046_3050 = G__3055;
count__3047_3051 = G__3056;
i__3048_3052 = G__3057;
continue;
} else {
var temp__4657__auto___3058 = cljs.core.seq.call(null,seq__3045_3049);
if(temp__4657__auto___3058){
var seq__3045_3059__$1 = temp__4657__auto___3058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3045_3059__$1)){
var c__4319__auto___3060 = cljs.core.chunk_first.call(null,seq__3045_3059__$1);
var G__3061 = cljs.core.chunk_rest.call(null,seq__3045_3059__$1);
var G__3062 = c__4319__auto___3060;
var G__3063 = cljs.core.count.call(null,c__4319__auto___3060);
var G__3064 = (0);
seq__3045_3049 = G__3061;
chunk__3046_3050 = G__3062;
count__3047_3051 = G__3063;
i__3048_3052 = G__3064;
continue;
} else {
var child_3065 = cljs.core.first.call(null,seq__3045_3059__$1);
frag.appendChild(child_3065);


var G__3066 = cljs.core.next.call(null,seq__3045_3059__$1);
var G__3067 = null;
var G__3068 = (0);
var G__3069 = (0);
seq__3045_3049 = G__3066;
chunk__3046_3050 = G__3067;
count__3047_3051 = G__3068;
i__3048_3052 = G__3069;
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
return (function (p1__3043_SHARP_,p2__3044_SHARP_){
return f.call(null,p1__3043_SHARP_,p2__3044_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__3071 = arguments.length;
switch (G__3071) {
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
var G__3074 = arguments.length;
switch (G__3074) {
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

//# sourceMappingURL=domina.js.map
