/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(r,n){var e=Array.prototype.filter,t=r.isArrayLike;function f(r,n,e,t){for(var f=r.length,u=e+(t?1:-1);t?u--:++u<f;)if(n(r[u],u,r))return u;return-1}function u(r){return r!=r}function i(r){if(t(r)){for(var n=[],e=0;e<r.length;e++){var f=r[e];if(t(f))for(var u=0;u<f.length;u++)n.push(f[u]);else n.push(f)}return n}return r}return{baseFindIndex:f,baseIndexOf:function(r,n,e){if(n!=n)return f(r,u,e);for(var t=e-1,i=r.length;++t<i;)if(r[t]===n)return t;return-1},compact:function(r){return e.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},flatten:i,inArray:function(r,n){if(!n)return-1;var e;if(n.indexOf)return n.indexOf(r);for(e=n.length;e--;)if(n[e]===r)return e;return-1},makeArray:function(r,n,e){return t(r)?(e||[]).concat(Array.prototype.slice.call(r,n||0)):[r]},merge:function(r,n){var e=n.length,t=r.length,f=0;if("number"==typeof e)for(;f<e;f++)r[t++]=n[f];else for(;void 0!==n[f];)r[t++]=n[f++];return r.length=t,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var e=0;e<r.length;e++)n(r[e],e)},map:function(r,n){var e,f,u,o=[];if(t(r))for(f=0;f<r.length;f++)null!=(e=n.call(r[f],r[f],f))&&o.push(e);else for(u in r)null!=(e=n.call(r[u],r[u],u))&&o.push(e);return i(o)},uniq:function(r){return e.call(r,function(n,e){return r.indexOf(n)==e})}}});
//# sourceMappingURL=sourcemaps/arrays.js.map
