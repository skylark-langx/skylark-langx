/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types","./objects"],function(r,n){var t=Array.prototype.filter,e=r.isArrayLike;function u(r){if(e(r)){for(var n=[],t=0;t<r.length;t++){var u=r[t];if(e(u))for(var i=0;i<u.length;i++)n.push(u[i]);else n.push(u)}return n}return r}return{compact:function(r){return t.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},each:n.each,flatten:u,inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1},makeArray:function(r,n,t){return e(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]},map:function(r,n){var t,i,f,l=[];if(e(r))for(i=0;i<r.length;i++)null!=(t=n.call(r[i],r[i],i))&&l.push(t);else for(f in r)null!=(t=n.call(r[f],r[f],f))&&l.push(t);return u(l)},uniq:function(r){return t.call(r,function(n,t){return r.indexOf(n)==t})}}});
//# sourceMappingURL=sourcemaps/arrays.js.map
