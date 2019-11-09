/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Emitter","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,e,r,n,i,o,a,s,u,c,f,l,p,y,d,w,v,A){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var E=y.mixin,m=(y.safeMixin,A.isFunction);var g=1;function h(){return h}return E(h,{createEvent:s.createEvent,funcArg:function(t,e,r,n){return m(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=g++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),E(h,e,n,o,c,p,y,w,A,{ArrayStore:r,async:i,Deferred:a,Emitter:s,Evented:u,hoster:f,klass:l,Stateful:d,topic:v}),t.langx=h});
//# sourceMappingURL=sourcemaps/langx.js.map
