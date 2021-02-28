/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./binary","./datetimes","./Deferred","./Emitter","./Evented","./events","./funcs","./globals","./hoster","./klass","./maths","./numerics","./objects","./Stateful","./strings","./topic","./types"],function(t,e,r,n,i,a,o,s,c,u,f,l,y,p,d,v,w,m,A,E,g,h){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var k=m.mixin,x=(m.safeMixin,h.isFunction);var b=1;function S(){return S}return k(S,{createEvent:c.createEvent,funcArg:function(t,e,r,n){return x(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=b++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),k(S,e,n,o,l,w,m,E,h,{ArrayStore:r,async:i,Deferred:s,Emitter:c,Evented:u,hoster:p,klass:d,Stateful:A,topic:g}),t.langx=S});
//# sourceMappingURL=sourcemaps/langx.js.map
