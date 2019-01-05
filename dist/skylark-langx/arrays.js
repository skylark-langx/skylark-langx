/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(r,n){var t=Array.prototype.filter,e=r.isArrayLike;function u(r,n,t,e){for(var u=r.length,f=t+(e?1:-1);e?f--:++f<u;)if(n(r[f],f,r))return f;return-1}function f(r){return r!=r}function i(r){if(e(r)){for(var n=[],t=0;t<r.length;t++){var u=r[t];if(e(u))for(var f=0;f<u.length;f++)n.push(u[f]);else n.push(u)}return n}return r}return{baseFindIndex:u,baseIndexOf:function(r,n,t){if(n!=n)return u(r,f,t);for(var e=t-1,i=r.length;++e<i;)if(r[e]===n)return e;return-1},compact:function(r){return t.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},flatten:i,inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1},makeArray:function(r,n,t){return e(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]},map:function(r,n){var t,u,f,l=[];if(e(r))for(u=0;u<r.length;u++)null!=(t=n.call(r[u],r[u],u))&&l.push(t);else for(f in r)null!=(t=n.call(r[f],r[f],f))&&l.push(t);return i(l)},uniq:function(r){return t.call(r,function(n,t){return r.indexOf(n)==t})}}});
//# sourceMappingURL=sourcemaps/arrays.js.map
