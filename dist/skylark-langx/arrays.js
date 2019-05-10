/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(r,n){var e=Array.prototype.filter,t=r.isArrayLike;function u(r,n,e,t){for(var u=r.length,f=e+(t?1:-1);t?f--:++f<u;)if(n(r[f],f,r))return f;return-1}function f(r){return r!=r}function i(r){if(t(r)){for(var n=[],e=0;e<r.length;e++){var u=r[e];if(t(u))for(var f=0;f<u.length;f++)n.push(u[f]);else n.push(u)}return n}return r}return{baseFindIndex:u,baseIndexOf:function(r,n,e){if(n!=n)return u(r,f,e);for(var t=e-1,i=r.length;++t<i;)if(r[t]===n)return t;return-1},compact:function(r){return e.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},filter:function(r,n){return e.call(r,n)},flatten:i,inArray:function(r,n){if(!n)return-1;var e;if(n.indexOf)return n.indexOf(r);for(e=n.length;e--;)if(n[e]===r)return e;return-1},makeArray:function(r,n,e){return t(r)?(e||[]).concat(Array.prototype.slice.call(r,n||0)):[r]},merge:function(r,n){var e=n.length,t=r.length,u=0;if("number"==typeof e)for(;u<e;u++)r[t++]=n[u];else for(;void 0!==n[u];)r[t++]=n[u++];return r.length=t,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var e=0;e<r.length;e++)n(r[e],e)},map:function(r,n){var e,u,f,o=[];if(t(r))for(u=0;u<r.length;u++)null!=(e=n.call(r[u],r[u],u))&&o.push(e);else for(f in r)null!=(e=n.call(r[f],r[f],f))&&o.push(e);return i(o)},reduce:function(r,n,e){return Array.prototype.reduce.call(r,n,e)},uniq:function(r){return e.call(r,function(n,e){return r.indexOf(n)==e})}}});
//# sourceMappingURL=sourcemaps/arrays.js.map
