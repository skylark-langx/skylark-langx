/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./types"],function(n,t){var e=n.mixin,r=Array.prototype.slice,u=t.isFunction,i=t.isString;return{debounce:function(n,t){var e;return function(){var r=this,u=arguments;e&&clearTimeout(e),e=setTimeout(function(){e=null,n.apply(r,u)},t)}},delegate:function(){function n(){}return function(t,r){n.prototype=t;var u=new n;return n.prototype=null,r&&e(u,r),u}}(),defer:function(n){return requestAnimationFrame?requestAnimationFrame(n):setTimeoutout(n),this},noop:function(){},proxy:function n(t,e){var o=2 in arguments&&r.call(arguments,2);if(u(t))return function(){return t.apply(e,o?o.concat(r.call(arguments)):arguments)};if(i(e))return o?(o.unshift(t[e],t),n.apply(null,o)):n(t[e],t);throw new TypeError("expected function")},returnTrue:function(){return!0},returnFalse:function(){return!1}}});
//# sourceMappingURL=sourcemaps/funcs.js.map
