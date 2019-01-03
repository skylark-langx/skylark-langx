/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var e,r=0;function n(n){return function(t,i,a,u){var o,v=t[i];v&&v.target==t||(t[i]=o=function(){for(var n=r,t=arguments,i=o.before;i;)t=i.advice.apply(this,t)||t,i=i.next;if(o.around)var a=o.around.advice(this,t);for(var u=o.after;u&&u.id<n;){if(u.receiveArguments){var v=u.advice.apply(this,t);a=v===e?a:v}else a=u.advice.call(this,a,t);u=u.next}return a},v&&(o.around={advice:function(e,r){return v.apply(e,r)}}),o.target=t);var f=function(e,n,t,i){var a,u=e[n],o="around"==n;if(o){var v=t(function(){return u.advice(this,arguments)});a={remove:function(){v&&(v=e=t=null)},advice:function(e,r){return v?v.apply(e,r):u.advice(e,r)}}}else a={remove:function(){if(a.advice){var r=a.previous,i=a.next;i||r?(r?r.next=i:e[n]=i,i&&(i.previous=r)):delete e[n],e=t=a.advice=null}},id:r++,advice:t,receiveArguments:i};if(u&&!o)if("after"==n){for(;u.next&&(u=u.next););u.next=a,a.previous=u}else"before"==n&&(e[n]=a,a.next=u,u.previous=a);else e[n]=a;return a}(o||v,n,a,u);return a=null,f}}return{after:n("after"),around:n("around"),before:n("before")}});
//# sourceMappingURL=sourcemaps/aspect.js.map
