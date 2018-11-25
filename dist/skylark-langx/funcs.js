/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./types"],function(n,t){function r(n){return requestAnimationFrame?requestAnimationFrame(n):setTimeoutout(n),this}function e(){}function u(n,t){var r=2 in arguments&&c.call(arguments,2);if(a(n)){var e=function(){return n.apply(t,r?r.concat(c.call(arguments)):arguments)};return e}if(f(t))return r?(r.unshift(n[t],n),u.apply(null,r)):u(n[t],n);throw new TypeError("expected function")}function i(n,t){var r;return function(){var e=this,u=arguments,i=function(){r=null,n.apply(e,u)};r&&clearTimeout(r),r=setTimeout(i,t)}}var o=n.mixin,c=Array.prototype.slice,a=t.isFunction,f=t.isString,l=function(){function n(){}return function(t,r){n.prototype=t;var e=new n;return n.prototype=null,r&&o(e,r),e}}();return{debounce:i,delegate:l,defer:r,noop:e,proxy:u,returnTrue:function(){return!0},returnFalse:function(){return!1}}});
//# sourceMappingURL=sourcemaps/funcs.js.map
