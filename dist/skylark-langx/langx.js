/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./array-store","./aspect","./async","./binary","./constructs","./datetimes","./deferred","./emitter","./evented","./events","./funcs","./globals","./hoster","./klass","./maths","./numerics","./objects","./stateful","./strings","./topic","./types","./urls"],function(t,e,r,n,a,i,s,o,c,u,l,f,y,d,p,v,w,h,m,g,A,k,x,E){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var b=m.mixin,L=(m.safeMixin,x.isFunction);var R=1;var U=t.attach("langx");return b(U,{createEvent:u.createEvent,funcArg:function(t,e,r,n){return L(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=R++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),b(U,e,n,o,y,h,m,A,x,{ArrayStore:r,async:a,Deferred:c,Emitter:u,Evented:l,hoster:p,klass:v,Stateful:g,topic:k}),U});
//# sourceMappingURL=sourcemaps/langx.js.map
