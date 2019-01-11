/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./Deferred","./objects"],function(n,e){var r=e.each;return{parallel:function(e,u,l){var t=[];return l=l||null,u=u||[],r(e,function(n,e){t.push(e.apply(l,u))}),n.all(t)},series:function(e,u,l){var t=[],i=new n,o=i.promise;return l=l||null,u=u||[],i.resolve(),r(e,function(n,e){o=o.then(function(){return e.apply(l,u)}),t.push(o)}),n.all(t)},waterful:function(e,u,l){var t=new n,i=t.promise;return l=l||null,u=u||[],t.resolveWith(l,u),r(e,function(n,e){i=i.then(e)}),i}}});
//# sourceMappingURL=sourcemaps/async.js.map
