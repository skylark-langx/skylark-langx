/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Restful","./Stateful","./strings","./topic","./types","./Xhr"],function(t,r,e,n,i,o,a,s,u,c,f,l,p,y,d,w,v,h,A){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var g=p.mixin,k=p.safeMixin,m=h.isFunction;var x=1;function E(){return E}return g(E,{createEvent:function(t,r){var e=new CustomEvent(t,r);return k(e,r)},funcArg:function(t,r,e,n){return m(r)?r.call(t,e,n):r},getQueryParams:function(t){var r=(t=t||window.location.href).split("?"),e={};return r.length>1&&r[1].split("&").forEach(function(t){var r=t.split("=");e[r[0]]=r[1]}),e},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=x++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),g(E,r,n,o,u,l,p,w,h,{ArrayStore:e,async:i,Deferred:a,Evented:s,hoster:c,klass:f,Restful:y,Stateful:d,topic:v,Xhr:A}),t.langx=E});
//# sourceMappingURL=sourcemaps/langx.js.map
