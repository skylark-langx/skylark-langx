/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Restful","./Stateful","./strings","./types","./Xhr"],function(t,r,e,n,i,o,a,s,u,f,c,l,y,d,p,w,v,h){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var A=y.mixin,g=y.safeMixin,k=v.isFunction;var m=1;function x(){return x}return A(x,{createEvent:function(t,r){var e=new CustomEvent(t,r);return g(e,r)},funcArg:function(t,r,e,n){return k(r)?r.call(t,e,n):r},getQueryParams:function(t){var r=(t=t||window.location.href).split("?"),e={};return r.length>1&&r[1].split("&").forEach(function(t){var r=t.split("=");e[r[0]]=r[1]}),e},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=m++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),A(x,r,n,o,u,l,y,w,v,{ArrayStore:e,async:i,Deferred:a,Evented:s,hoster:f,klass:c,Restful:d,Stateful:p,Xhr:h}),t.langx=x});
//# sourceMappingURL=sourcemaps/langx.js.map
