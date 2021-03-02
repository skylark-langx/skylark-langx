/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./binary","./constructs","./datetimes","./Deferred","./Emitter","./Evented","./events","./funcs","./globals","./hoster","./klass","./maths","./numerics","./objects","./Stateful","./strings","./topic","./types"],function(t,e,r,n,i,a,o,s,c,u,f,l,y,p,d,v,w,m,A,E,g,h,k){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var x=A.mixin,b=(A.safeMixin,k.isFunction);var S=1;function L(){return L}return x(L,{createEvent:u.createEvent,funcArg:function(t,e,r,n){return b(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=S++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),x(L,e,n,s,y,m,A,g,k,{ArrayStore:r,async:i,Deferred:c,Emitter:u,Evented:f,hoster:d,klass:v,Stateful:E,topic:h}),t.langx=L});
//# sourceMappingURL=sourcemaps/langx.js.map
