/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Emitter","./Evented","./events","./funcs","./hoster","./klass","./maths","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,e,r,n,i,a,o,s,u,c,f,l,p,y,d,v,w,m,A,E){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var h=v.mixin,g=(v.safeMixin,E.isFunction);var k=1;function x(){return x}return h(x,{createEvent:s.createEvent,funcArg:function(t,e,r,n){return g(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=k++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),h(x,e,n,a,f,d,v,m,E,{ArrayStore:r,async:i,Deferred:o,Emitter:s,Evented:u,hoster:l,klass:p,Stateful:w,topic:A}),t.langx=x});
//# sourceMappingURL=sourcemaps/langx.js.map
