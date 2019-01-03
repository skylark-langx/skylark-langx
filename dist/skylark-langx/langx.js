/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./klass","./objects","./Restful","./Stateful","./strings","./types","./Xhr"],function(r,t,e,n,i,a,u,o,s,f,c,l,d,y,p,v){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var w=c.mixin,A=c.safeMixin,g=p.isFunction;var h=1;var k=0;function x(){return x}return w(x,{createEvent:function(r,t){var e=new CustomEvent(r,t);return A(e,t)},funcArg:function(r,t,e,n){return g(t)?t.call(r,e,n):t},getQueryParams:function(r){var t=(r=r||window.location.href).split("?"),e={};return t.length>1&&t[1].split("&").forEach(function(r){var t=r.split("=");e[t[0]]=t[1]}),e},toPixel:function(r){return parseFloat(r)||0},uid:function(r){return r._uid||(r._uid=h++)},uniqueId:function(r){var t=++k+"";return r?r+t:t},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),w(x,t,n,a,s,c,y,p,{ArrayStore:e,async:i,Deferred:u,Evented:o,klass:f,Restful:l,Stateful:d,Xhr:v}),r.langx=x});
//# sourceMappingURL=sourcemaps/langx.js.map
