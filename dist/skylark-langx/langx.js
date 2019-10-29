/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,e,r,n,i,o,a,u,s,c,f,l,p,y,d,w,v){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var A=p.mixin,g=p.safeMixin,h=v.isFunction;var k=1;function m(){return m}return A(m,{createEvent:function(t,e){var r=new CustomEvent(t,e);return g(r,e)},funcArg:function(t,e,r,n){return h(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=k++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),A(m,e,n,o,s,l,p,d,v,{ArrayStore:r,async:i,Deferred:a,Evented:u,hoster:c,klass:f,Restful:Restful,Stateful:Stateful,topic:w}),t.langx=m});
//# sourceMappingURL=sourcemaps/langx.js.map
