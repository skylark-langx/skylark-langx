/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,r,e,n,i,o,a,u,s,c,f,l,p,y,d,w,v){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var A=p.mixin,g=p.safeMixin,h=v.isFunction;var k=1;function m(){return m}return A(m,{createEvent:function(t,r){var e=new CustomEvent(t,r);return g(e,r)},funcArg:function(t,r,e,n){return h(r)?r.call(t,e,n):r},getQueryParams:function(t){var r=(t=t||window.location.href).split("?"),e={};return r.length>1&&r[1].split("&").forEach(function(t){var r=t.split("=");e[r[0]]=r[1]}),e},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=k++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),A(m,r,n,o,s,l,p,d,v,{ArrayStore:e,async:i,Deferred:a,Evented:u,hoster:c,klass:f,Stateful:Stateful,topic:w}),t.langx=m});
//# sourceMappingURL=sourcemaps/langx.js.map
