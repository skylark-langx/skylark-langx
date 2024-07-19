/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./array-store","./aspect","./async","./binary","./chars","./constructs","./datetimes","./deferred","./emitter","./evented","./events","./funcs","./globals","./hoster","./klass","./maths","./numerics","./objects","./paths","./stateful","./strings","./topic","./types","./urls"],function(t,e,r,n,a,i,s,o,c,u,l,f,p,y,d,h,w,v,m,g,A,k,x,E,b,L){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var R=g.mixin,U=(g.safeMixin,b.isFunction);var F=1;t=t.attach("langx");return R(t,{createEvent:p.createEvent,funcArg:function(t,e,r,n){return U(e)?e.call(t,r,n):e},getQueryParams:function(t){var t=(t=t||window.location.href).split("?"),e={};return 1<t.length&&t[1].split("&").forEach(function(t){t=t.split("=");e[t[0]]=t[1]}),e},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=F++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),R(t,e,n,c,y,m,g,x,b,{ArrayStore:r,async:a,Deferred:u,Emitter:l,Evented:f,hoster:h,klass:w,Stateful:k,topic:E}),t});
//# sourceMappingURL=sourcemaps/langx.js.map
