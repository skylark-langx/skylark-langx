/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(r,n){var t=Array.prototype.filter,e=r.isArrayLike;function f(r,n,t,e){for(var f=r.length,u=t+(e?1:-1);e?u--:++u<f;)if(n(r[u],u,r))return u;return-1}function u(r){return r!=r}function i(r){if(e(r)){for(var n=[],t=0;t<r.length;t++){var f=r[t];if(e(f))for(var u=0;u<f.length;u++)n.push(f[u]);else n.push(f)}return n}return r}return{baseFindIndex:f,baseIndexOf:function(r,n,t){if(n!=n)return f(r,u,t);for(var e=t-1,i=r.length;++e<i;)if(r[e]===n)return e;return-1},compact:function(r){return t.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},flatten:i,inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1},makeArray:function(r,n,t){return e(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var t=0;t<r.length;t++)n(r[t],t)},map:function(r,n){var t,f,u,o=[];if(e(r))for(f=0;f<r.length;f++)null!=(t=n.call(r[f],r[f],f))&&o.push(t);else for(u in r)null!=(t=n.call(r[u],r[u],u))&&o.push(t);return i(o)},uniq:function(r){return t.call(r,function(n,t){return r.indexOf(n)==t})}}});
//# sourceMappingURL=sourcemaps/arrays.js.map
