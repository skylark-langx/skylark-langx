/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types","./objects"],function(r,n){function t(r){return c.call(r,function(r){return null!=r})}function e(r){if(a(r)){for(var n=[],t=0;t<r.length;t++){var e=r[t];if(a(e))for(var u=0;u<e.length;u++)n.push(e[u]);else n.push(e)}return n}return r}function u(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1}function i(r,n,t){return a(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]}function f(r,n){var t,u,i,f=[];if(a(r))for(u=0;u<r.length;u++)t=n.call(r[u],r[u],u),null!=t&&f.push(t);else for(i in r)t=n.call(r[i],r[i],i),null!=t&&f.push(t);return e(f)}function l(r){return c.call(r,function(n,t){return r.indexOf(n)==t})}var c=Array.prototype.filter,a=r.isArrayLike;return{compact:t,first:function(r,n){return n?r.slice(0,n):r[0]},each:n.each,flatten:e,inArray:u,makeArray:i,map:f,uniq:l}});
//# sourceMappingURL=sourcemaps/arrays.js.map
