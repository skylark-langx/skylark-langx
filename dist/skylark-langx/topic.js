/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./Evented"],function(n){var e=new n;return{publish:function(n,r,t){var i=[].slice.call(arguments,1);return e.trigger({type:n,data:i})},subscribe:function(n,r,t){var i=function(n){r.apply(t,n.data)};return e.on(n,i),{remove:function(){e.off(n,i)}}}}});
//# sourceMappingURL=sourcemaps/topic.js.map
