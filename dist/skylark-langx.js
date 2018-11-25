/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){function r(t,e){if("."!==t[0])return t;var r=e.split("/"),n=t.split("/");r.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?r.pop():r.push(n[i]));return r.join("/")}var n=e.define,i=e.require,o="function"==typeof n&&n.amd,s=!o&&"undefined"!=typeof exports;if(!o&&!n){var a={};n=e.define=function(t,e,n){"function"==typeof n?(a[t]={factory:n,deps:e.map(function(e){return r(e,t)}),exports:null},i(t)):a[t]=n},i=e.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var r=a[t];if(!r.exports){var n=[];r.deps.forEach(function(t){n.push(i(t))}),r.exports=r.factory.apply(e,n)}return r.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(t(n,i),!o){var u=i("skylark-langx/skylark");s?module.exports=u:e.skylarkjs=u}}(function(define,require){define("skylark-langx/skylark",[],function(){var t={};return t}),define("skylark-langx/types",[],function(){function t(t){return t&&t.constructor===Array}function e(t){return!f(t)&&!a(t)&&"number"==typeof t.length&&!s(t)}function r(t){return"boolean"==typeof t}function n(t){return"undefined"!=typeof t}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){var e;for(e in t)if(null!==t[e])return!1;return!0}function s(t){return"function"==d(t)}function a(t){return t&&t instanceof Node}function u(t){return"number"==typeof t}function c(t){return"object"==d(t)}function l(t){return c(t)&&!p(t)&&Object.getPrototypeOf(t)==Object.prototype}function f(t){return"string"==typeof t}function p(t){return t&&t==t.window}function h(t){if(t){var e=location.protocol+"//"+location.hostname;return location.port&&(e+=":"+location.port),t.startsWith(e)}}var d=function(){var t={};return"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e){t["[object "+e+"]"]=e.toLowerCase()}),function(e){return null==e?String(e):t[toString.call(e)]||"object"}}();return{isArray:t,isArrayLike:e,isBoolean:r,isDefined:n,isDocument:i,isEmptyObject:o,isFunction:s,isHtmlNode:a,isNumber:u,isObject:c,isPlainObject:l,isString:f,isSameOrigin:h,isWindow:p,type:d}}),define("skylark-langx/objects",["./types"],function(t){function e(t,e){return function(r){var n=arguments.length;if(e&&(r=Object(r)),n<2||null==r)return r;for(var i=1;i<n;i++)for(var o=arguments[i],s=t(o),a=s.length,u=0;u<a;u++){var c=s[u];e&&void 0!==r[c]||(r[c]=o[c])}return r}}function r(t){if(!w(t))return[];var e=[];for(var r in t)e.push(r);return e}function n(t,e){var r,n,i,o,s;if(t)if(r=t.length,r===o){for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],e.call(s,n,s)===!1))break}else for(i=0;i<r&&(s=t[i],e.call(s,i,s)!==!1);i++);return this}function i(t){var e,r=b.call(arguments,1);return"boolean"==typeof t&&(e=t,t=r.shift()),0==r.length&&(r=[t],t=this),r.forEach(function(r){f(t,r,e)}),t}function o(t){if(w(t))return[];var e=[];for(var r in t)s(t,r)&&e.push(r);return e}function s(t,e){if(!A(e))return null!=t&&m.call(t,e);for(var r=e.length,n=0;n<r;n++){var i=e[n];if(null==t||!m.call(t,i))return!1;t=t[i]}return!!r}function a(t,e){return g(t,e)}function u(t,e){var r=r(e),n=r.length;if(null==t)return!n;for(var i=Object(t),o=0;o<n;o++){var s=r[o];if(e[s]!==i[s]||!(s in i))return!1}return!0}function c(t,e,r,n){for(var i in e)n&&void 0!==t[i]||(r&&(E(e[i])||A(e[i]))?(E(e[i])&&!E(t[i])&&(t[i]={}),A(e[i])&&!A(t[i])&&(t[i]=[]),c(t[i],e[i],r,n)):void 0!==e[i]&&(t[i]=e[i]));return t}function l(t){var e=b.call(arguments,0),r=e.shift(),n=!1;return j(e[e.length-1])&&(n=e.pop()),{target:r,sources:e,deep:n}}function f(){var t=l.apply(this,arguments);return t.sources.forEach(function(e){c(t.target,e,t.deep,!1)}),t.target}function p(t,e){if(A(t)){var r=t.indexOf(e);r!=-1&&t.splice(r,1)}else if(E(t))for(var n in t)if(t[n]==e){delete t[n];break}return this}function h(t,e,r){A(e)||(e=[e]);var n=e.length;if(!n)return k(r)?r.call(t):r;for(var i=0;i<n;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=r,i=n),t=k(o)?o.call(t):o}return t}function d(){var t=l.apply(this,arguments);return t.sources.forEach(function(e){c(t.target,e,t.deep,!0)}),t.target}function v(t){for(var e=_.keys(t),r=e.length,n=Array(r),i=0;i<r;i++)n[i]=t[e[i]];return n}function y(t,e){var r;if(void 0===t||null===t)r=t;else if(e&&t.clone)r=t.clone();else if(A(t)){r=[];for(var n=0;n<t.length;n++)r.push(y(t[n]))}else if(E(t)){r={};for(var i in t)r[i]=y(t[i])}else r=t;return r}var g,x,m=Object.prototype.hasOwnProperty,b=Array.prototype.slice,j=t.isBoolean,k=t.isFunction,w=t.isObject,E=t.isPlainObject,A=t.isArray,T="undefined"!=typeof Symbol?Symbol.prototype:null;return g=function(t,e,r,n){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return!1;if(t!==t)return e!==e;var i=typeof t;return("function"===i||"object"===i||"object"==typeof e)&&x(t,e,r,n)},x=function(t,e,r,n){var i=toString.call(t);if(i!==toString.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;case"[object Date]":case"[object Boolean]":return+t===+e;case"[object Symbol]":return T.valueOf.call(t)===T.valueOf.call(e)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var s=t.constructor,a=e.constructor;if(s!==a&&!(k(s)&&s instanceof s&&k(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1}r=r||[],n=n||[];for(var u=r.length;u--;)if(r[u]===t)return n[u]===e;if(r.push(t),n.push(e),o){if(u=t.length,u!==e.length)return!1;for(;u--;)if(!g(t[u],e[u],r,n))return!1}else{var c,l=Object.keys(t);if(u=l.length,Object.keys(e).length!==u)return!1;for(;u--;)if(c=l[u],void 0===e[c]||!g(t[c],e[c],r,n))return!1}return r.pop(),n.pop(),!0},{allKeys:r,clone:y,defaults:e(r,!0),each:n,extend:i,has:s,isEqual:a,isMatch:u,keys:o,mixin:f,removeItem:p,result:h,safeMixin:d,values:v}}),define("skylark-langx/arrays",["./types","./objects"],function(t,e){function r(t){return u.call(t,function(t){return null!=t})}function n(t){if(c(t)){for(var e=[],r=0;r<t.length;r++){var n=t[r];if(c(n))for(var i=0;i<n.length;i++)e.push(n[i]);else e.push(n)}return e}return t}function i(t,e){if(!e)return-1;var r;if(e.indexOf)return e.indexOf(t);for(r=e.length;r--;)if(e[r]===t)return r;return-1}function o(t,e,r){return c(t)?(r||[]).concat(Array.prototype.slice.call(t,e||0)):[t]}function s(t,e){var r,i,o,s=[];if(c(t))for(i=0;i<t.length;i++)r=e.call(t[i],t[i],i),null!=r&&s.push(r);else for(o in t)r=e.call(t[o],t[o],o),null!=r&&s.push(r);return n(s)}function a(t){return u.call(t,function(e,r){return t.indexOf(e)==r})}var u=Array.prototype.filter,c=t.isArrayLike;return{compact:r,first:function(t,e){return e?t.slice(0,e):t[0]},each:e.each,flatten:n,inArray:i,makeArray:o,map:s,uniq:a}}),define("skylark-langx/klass",["./arrays","./objects","./types"],function(t,e,r){var n=t.uniq,i=e.has,o=e.mixin,s=r.isArray,a=r.isDefined,u=function(){function t(t,e,r){var n=t.prototype,i=t.superclass.prototype,o=r&&r.noOverrided;for(var s in e)if("constructor"!==s){var a=e[s];"function"==typeof e[s]?n[s]=a._constructor||o||"function"!=typeof i[s]?a:function(t,e,r){return function(){var t=this.overrided;this.overrided=r;var n=e.apply(this,arguments);return this.overrided=t,n}}(s,a,i[s]):"object"==typeof a&&null!==a&&a.get?Object.defineProperty(n,s,a):n[s]=a}return t}function e(t,e){var r=[];return e.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var e=[];t;)e.unshift(t),t=t.superclass;r=r.concat(e)}),r=n(r),r=r.filter(function(e){for(var r=t;r;){if(e===r)return!1;if(i(r,"__mixins__"))for(var n=r.__mixins__,o=0;o<n.length;o++)if(n[o]===e)return!1;r=r.superclass}return!0}),r.length>0&&r}function r(t,e){for(var r=t,n=0;n<e.length;n++){var i=new Function;i.prototype=Object.create(r.prototype),i.__proto__=r,i.superclass=null,o(i.prototype,e[n].prototype),i.prototype.__mixin__=e[n],r=i}return r}function u(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function c(n,i,o,l){s(i)&&(l=o,o=i,i=null),i=i||Object,a(o)&&!s(o)&&(l=o,o=!1);var f=i;o&&(o=e(f,o)),o&&(f=r(f,o));var p=n.klassName||"",h=new Function("return function "+p+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return h.prototype=Object.create(f.prototype),h.prototype.constructor=h,h.superclass=i,h.__proto__=f,h._constructor||(h._constructor=u),o&&(h.__mixins__=o),h.partial||(h.partial=function(e,r){return t(this,e,r)}),h.inherit||(h.inherit=function(t,e,r){return c(t,this,e,r)}),h.partial(n,l),h}},c=u();return c}),define("skylark-langx/ArrayStore",["./klass"],function(t){var e=function(t,e){function r(t,e,r){var n,i=0,o=t&&t.length||0,s=[];if(o&&"string"==typeof t&&(t=t.split("")),"string"==typeof e&&(e=cache[e]||buildFn(e)),r)for(;i<o;++i)n=t[i],e.call(r,n,i,t)&&s.push(n);else for(;i<o;++i)n=t[i],e(n,i,t)&&s.push(n);return s}function n(n){var i=r(n,t),o=e&&e.sort;if(o&&i.sort("function"==typeof o?o:function(t,e){for(var r,n=0;r=o[n];n++){var i=t[r.attribute],s=e[r.attribute];if(i=null!=i?i.valueOf():i,s=null!=s?s.valueOf():s,i!=s)return!!r.descending==(null==i||i>s)?-1:1}return 0}),e&&(e.start||e.count)){var s=i.length;i=i.slice(e.start||0,(e.start||0)+(e.count||1/0)),i.total=s}return i}switch(typeof t){default:throw new Error("Can not query with a "+typeof t);case"object":case"undefined":var i=t;t=function(t){for(var e in i){var r=i[e];if(r&&r.test){if(!r.test(t[e],t))return!1}else if(r!=t[e])return!1}return!0};break;case"string":if(!this[t])throw new Error("No filter function "+t+" was found in store");t=this[t];case"function":}return n.matches=t,n},r=function(t){function e(e){t[e]=function(){var i=arguments,o=Deferred.when(t,function(t){return r(Array.prototype[e].apply(t,i))});if("forEach"!==e||n)return o}}if(!t)return t;var n=!!t.then;return n&&(t=Object.delegate(t)),e("forEach"),e("filter"),e("map"),null==t.total&&(t.total=Deferred.when(t,function(t){return t.length})),t},n=t({klassName:"ArrayStore",queryEngine:e,idProperty:"id",get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,e){var r=this.data,n=this.index,i=this.idProperty,o=t[i]=e&&"id"in e?e.id:i in t?t[i]:Math.random();if(o in n){if(e&&e.overwrite===!1)throw new Error("Object already exists");r[n[o]]=t}else n[o]=r.push(t)-1;return o},add:function(t,e){return(e=e||{}).overwrite=!1,this.put(t,e)},remove:function(t){var e=this.index,r=this.data;if(t in e)return r.splice(e[t],1),this.setData(r),!0},query:function(t,e){return r(this.queryEngine(t,e)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var e=0,r=t.length;e<r;e++)this.index[t[e][this.idProperty]]=e},init:function(t){for(var e in t)this[e]=t[e];this.setData(this.data||[])}});return n}),define("skylark-langx/aspect",[],function(){function t(t,e,r,i){var o,s=t[e],a="around"==e;if(a){var u=r(function(){return s.advice(this,arguments)});o={remove:function(){u&&(u=t=r=null)},advice:function(t,e){return u?u.apply(t,e):s.advice(t,e)}}}else o={remove:function(){if(o.advice){var n=o.previous,i=o.next;i||n?(n?n.next=i:t[e]=i,i&&(i.previous=n)):delete t[e],t=r=o.advice=null}},id:n++,advice:r,receiveArguments:i};if(s&&!a)if("after"==e){for(;s.next&&(s=s.next););s.next=o,o.previous=s}else"before"==e&&(t[e]=o,o.next=s,s.previous=o);else t[e]=o;return o}function e(e){return function(i,o,s,a){var u,c=i[o];c&&c.target==i||(i[o]=u=function(){for(var t=n,e=arguments,i=u.before;i;)e=i.advice.apply(this,e)||e,i=i.next;if(u.around)var o=u.around.advice(this,e);for(var s=u.after;s&&s.id<t;){if(s.receiveArguments){var a=s.advice.apply(this,e);o=a===r?o:a}else o=s.advice.call(this,o,e);s=s.next}return o},c&&(u.around={advice:function(t,e){return c.apply(t,e)}}),u.target=i);var l=t(u||c,e,s,a);return s=null,l}}var r,n=0;return{after:e("after"),around:e("around"),before:e("before")}}),define("skylark-langx/funcs",["./objects","./types"],function(t,e){function r(t){return requestAnimationFrame?requestAnimationFrame(t):setTimeoutout(t),this}function n(){}function i(t,e){var r=2 in arguments&&a.call(arguments,2);if(u(t)){var n=function(){return t.apply(e,r?r.concat(a.call(arguments)):arguments)};return n}if(c(e))return r?(r.unshift(t[e],t),i.apply(null,r)):i(t[e],t);throw new TypeError("expected function")}function o(t,e){var r;return function(){var n=this,i=arguments,o=function(){r=null,t.apply(n,i)};r&&clearTimeout(r),r=setTimeout(o,e)}}var s=t.mixin,a=Array.prototype.slice,u=e.isFunction,c=e.isString,l=function(){function t(){}return function(e,r){t.prototype=e;var n=new t;return t.prototype=null,r&&s(n,r),n}}();return{debounce:o,delegate:l,defer:r,noop:n,proxy:i,returnTrue:function(){return!0},returnFalse:function(){return!1}}}),define("skylark-langx/Deferred",["./arrays","./funcs","./objects"],function(t,e,r){"use strict";function n(t,e){var r={state:function(){return e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},then:function(t,e,n){return n&&this.progress(n),c(Promise.prototype.then.call(this,t&&function(e){return e&&void 0!==e.__ctx__?t.apply(e.__ctx__,e):t(e)},e&&function(t){return t&&void 0!==t.__ctx__?e.apply(t.__ctx__,t):e(t)}),r)},progress:function(t){return e[i].push(t),this}};return r.pipe=r.then,c(t,r)}var i=Symbol?Symbol():"__pglisteners",o=Array.prototype.slice,s=e.proxy,a=t.makeArray,u=r.result,c=r.mixin;c(Promise.prototype,{always:function(t){return this.then(t,t),this},done:function(t){return this.then(t),this},fail:function(t){return this["catch"](t),this}});var l=function(){var t=this,e=this.promise=new Promise(function(e,r){t._resolve=e,t._reject=r});n(e,t),this[i]=[]};return l.prototype.resolve=function(t){var e=o.call(arguments);return this.resolveWith(null,e)},l.prototype.resolveWith=function(t,e){return e=e?a(e):[],e.__ctx__=t,this._resolve(e),this._resolved=!0,this},l.prototype.progress=function(t){try{return this[i].forEach(function(e){return e(t)})}catch(e){this.reject(e)}return this},l.prototype.reject=function(t){var e=o.call(arguments);return this.rejectWith(null,e)},l.prototype.rejectWith=function(t,e){return e=e?a(e):[],e.__ctx__=t,this._reject(e),this._rejected=!0,this},l.prototype.isResolved=function(){return!!this._resolved},l.prototype.isRejected=function(){return!!this._rejected},l.prototype.then=function(t,e,r){var n=u(this,"promise");return n.then(t,e,r)},l.prototype.done=l.prototype.then,l.all=function(t){return n(Promise.all(t))},l.first=function(t){return n(Promise.race(t))},l.when=function(t,e,r,n){var i=t&&"function"==typeof t.then,o=i&&t instanceof Promise;if(!i)return arguments.length>1?e?e(t):t:(new l).resolve(t);if(!o){var a=new l(t.cancel);t.then(s(a.resolve,a),s(a.reject,a),a.progress),t=a.promise}return e||r||n?t.then(e,r,n):t},l.reject=function(t){var e=new l;return e.reject(t),e.promise},l.resolve=function(t){var e=new l;return e.resolve.apply(e,arguments),e.promise},l.immediate=l.resolve,l}),define("skylark-langx/async",["./Deferred","./arrays"],function(t,e){var r=e.each,n={parallel:function(e,n,i){var o=[];return i=i||null,n=n||[],r(e,function(t,e){o.push(e.apply(i,n))}),t.all(o)},series:function(e,n,i){var o=[],s=new t,a=s.promise;return i=i||null,n=n||[],s.resolve(),r(e,function(t,e){a=a.then(function(){return e.apply(i,n)}),o.push(a)}),t.all(o)},waterful:function(e,n,i){var o=new t,s=o.promise;return i=i||null,n=n||[],o.resolveWith(i,n),r(e,function(t,e){s=s.then(e)}),s}};return n}),define("skylark-langx/Evented",["./klass","./objects","./types"],function(t,e,r){var n=Array.prototype.slice,i=r.isDefined,o=r.isPlainObject,s=r.isFunction,a=r.isString,u=r.isEmptyObject,c=e.mixin,l=t({on:function(t,e,r,n,i,u){var c=this,l=this._hub||(this._hub={});return o(t)?(i=n,each(t,function(t,n){c.on(t,e,r,n,i,u)}),this):(a(e)||s(n)||(i=n,n=r,r=e,e=void 0),s(r)&&(i=n,n=r,r=null),a(t)&&(t=t.split(/\s/)),t.forEach(function(t){(l[t]||(l[t]=[])).push({fn:n,selector:e,data:r,ctx:i,one:u})}),this)},one:function(t,e,r,n,i){return this.on(t,e,r,n,i,1)},trigger:function(t){if(!this._hub)return this;var e=this;a(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var r=n.call(arguments,1);return r=i(r)?[t].concat(r):[t],[t.type||t.name,"all"].forEach(function(n){var i=e._hub[n];if(i){for(var o=i.length,s=!1,a=0;a<o;a++){var u=i[a];t.data?u.data&&(t.data=c({},u.data,t.data)):t.data=u.data||null,u.fn.apply(u.ctx,r),u.one&&(i[a]=null,s=!0)}s&&(e._hub[n]=compact(i))}}),this},listened:function(t){var e=(this._hub||(this._events={}))[t]||[];return e.length>0},listenTo:function(t,e,r,n){if(!t)return this;a(r)&&(r=this[r]),n?t.one(e,r,this):t.on(e,r,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),s=0;s<o.length;s++)if(o[s].obj==t){i=o[s];break}i||o.push(i={obj:t,events:{}});var u=i.events,c=u[e]=u[e]||[];return c.indexOf(r)==-1&&c.push(r),this},listenToOnce:function(t,e,r){return this.listenTo(t,e,r,1)},off:function(t,e){var r=this._hub||(this._hub={});return a(t)&&(t=t.split(/\s/)),t.forEach(function(t){var n=r[t],i=[];if(n&&e)for(var o=0,s=n.length;o<s;o++)n[o].fn!==e&&n[o].fn._!==e&&i.push(n[o]);i.length?r[t]=i:delete r[t]}),this},unlistenTo:function(t,e,r){var n=this._listeningTo;if(!n)return this;for(var i=0;i<n.length;i++){var o=n[i];if(!t||t==o.obj){var s=o.events;for(var a in s)if(!e||e==a){for(var c=s[a],l=0;l<c.length;l++)r&&r!=c[i]||(o.obj.off(a,c[i],this),c[i]=null);c=s[a]=compact(c),u(c)&&(s[a]=null)}u(s)&&(n[i]=null)}}return n=this._listeningTo=compact(n),u(n)&&(this._listeningTo=null),this}});return l}),define("skylark-langx/strings",[],function(){function t(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function e(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?JSON.parse(t):t):t}catch(e){return t}}function r(t){return null==t?"":String.prototype.trim.call(t)}function n(t,e,r,n){function i(t,e){if(t.match(/\./)){var r,n=function(t,e){var i=t.pop();return i?e[i]?n(t,r=e[i]):null:r};return n(t.split(".").reverse(),e)}return e[t]}return n=n||window,r=r?proxy(n,r):function(t){return t},t.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,o,s){var a=i(o,e);return s&&(a=i(s,n).call(n,a,o)),r(a,o).toString()})}return{camelCase:function(t){return t.replace(/-([\da-z])/g,function(t){return t.toUpperCase().replace("-","")})},dasherize:t,deserializeValue:e,lowerFirst:function(t){return t.charAt(0).toLowerCase()+t.slice(1)},serializeValue:function(t){return JSON.stringify(t)},substitute:n,trim:r,upperFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}),define("skylark-langx/Xhr",["./arrays","./Deferred","./Evented","./objects","./funcs","./types"],function(arrays,Deferred,Evented,objects,funcs,types){var each=arrays.each,mixin=objects.mixin,noop=funcs.noop,isArray=types.isArray,isFunction=types.isFunction,isPlainObject=types.isPlainObject,type=types.type,getAbsoluteUrl=function(){var t;return function(e){return t||(t=document.createElement("a")),t.href=e,t.href}}(),Xhr=function(){function mimeToDataType(t){if(t&&(t=t.split(";",2)[0]),t){if(t==htmlType)return"html";if(t==jsonType)return"json";if(scriptTypeRE.test(t))return"script";if(xmlTypeRE.test(t))return"xml"}return"text"}function appendQuery(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function serializeData(t){t.data=t.data||t.query,t.processData&&t.data&&"string"!=type(t.data)&&(t.data=param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=appendQuery(t.url,t.data),t.data=void 0)}function serialize(t,e,r,n){var i,o=isArray(e),s=isPlainObject(e);each(e,function(e,a){i=type(a),n&&(e=r?n:n+"["+(s||"object"==i||"array"==i?e:"")+"]"),!n&&o?t.add(a.name,a.value):"array"==i||!r&&"object"==i?serialize(t,a,r,e):t.add(e,a)})}var jsonpID=0,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/,XhrDefaultOptions={async:!0,type:"GET",beforeSend:noop,success:noop,error:noop,complete:noop,context:null,global:!0,accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,xhrFields:{withCredentials:!0}},param=function(t,e){var r=[];return r.add=function(t,e){isFunction(e)&&(e=e()),null==e&&(e=""),this.push(escape(t)+"="+escape(e))},serialize(r,t,e),r.join("&").replace(/%20/g,"+")},Xhr=Evented.inherit({klassName:"Xhr",_request:function(args){var _=this._,self=this,options=mixin({},XhrDefaultOptions,_.options,args),xhr=_.xhr=new XMLHttpRequest;serializeData(options);var dataType=options.dataType||options.handleAs,mime=options.mimeType||options.accepts[dataType],headers=options.headers,xhrFields=options.xhrFields,isFormData=options.data&&options.data instanceof FormData,basicAuthorizationToken=options.basicAuthorizationToken,type=options.type,url=options.url,async=options.async,user=options.user,password=options.password,deferred=new Deferred,contentType=!isFormData&&"application/x-www-form-urlencoded";if(xhrFields)for(name in xhrFields)xhr[name]=xhrFields[name];mime&&mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),mime&&xhr.overrideMimeType&&xhr.overrideMimeType(mime);var finish=function(){xhr.onloadend=noop,xhr.onabort=noop,xhr.onprogress=noop,xhr.ontimeout=noop,xhr=null},onloadend=function(){var result,error=!1;if(xhr.status>=200&&xhr.status<300||304==xhr.status||0==xhr.status&&getAbsoluteUrl(url).startsWith("file:")){dataType=dataType||mimeToDataType(options.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{"script"==dataType?eval(result):"xml"==dataType?result=xhr.responseXML:"json"==dataType?result=blankRE.test(result)?null:JSON.parse(result):"blob"==dataType?result=Blob([xhrObj.response]):"arraybuffer"==dataType&&(result=xhr.reponse)}catch(e){error=e}error?deferred.reject(error,xhr.status,xhr):deferred.resolve(result,xhr.status,xhr)}else deferred.reject(new Error(xhr.statusText),xhr.status,xhr);finish()},onabort=function(){deferred&&deferred.reject(new Error("abort"),xhr.status,xhr),finish()},ontimeout=function(){deferred&&deferred.reject(new Error("timeout"),xhr.status,xhr),finish()},onprogress=function(t){deferred&&deferred.progress(t,xhr.status,xhr)};if(xhr.onloadend=onloadend,xhr.onabort=onabort,xhr.ontimeout=ontimeout,xhr.onprogress=onprogress,xhr.open(type,url,async,user,password),headers)for(var key in headers){var value=headers[key];"content-type"===key.toLowerCase()?contentType=headers[hdr]:xhr.setRequestHeader(key,value)}return contentType&&contentType!==!1&&xhr.setRequestHeader("Content-Type",contentType),headers&&"X-Requested-With"in headers||xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),basicAuthorizationToken&&xhr.setRequestHeader("Authorization",basicAuthorizationToken),xhr.send(options.data?options.data:null),deferred.promise},abort:function(){var t=this._,e=t.xhr;e&&e.abort()},request:function(t){return this._request(t)},get:function(t){return t=t||{},t.type="GET",this._request(t)},post:function(t){return t=t||{},t.type="POST",this._request(t)},patch:function(t){return t=t||{},t.type="PATCH",this._request(t)},put:function(t){return t=t||{},t.type="PUT",this._request(t)},del:function(t){return t=t||{},t.type="DELETE",this._request(t)},init:function(t){this._={options:t||{}}}});return["request","get","post","put","del","patch"].forEach(function(t){Xhr[t]=function(e,r){var n=new Xhr({url:e});return n[t](r)}}),Xhr.defaultOptions=XhrDefaultOptions,Xhr.param=param,Xhr}();return Xhr}),define("skylark-langx/Restful",["./Evented","./objects","./strings","./Xhr"],function(t,e,r,n){var i=e.mixin,o=r.substitute,s=t.inherit({klassName:"Restful",idAttribute:"id",getBaseUrl:function(t){var e=o(this.baseEndpoint,t),r=this.server+this.basePath+e;return void 0!==t[this.idAttribute]&&(r=r+"/"+t[this.idAttribute]),r},_head:function(t){},_get:function(t){return n.get(this.getBaseUrl(t),t)},_post:function(t,e){var r=this.getBaseUrl(t);return e&&(r=r+"/"+e),n.post(r,t)},_put:function(t,e){var r=this.getBaseUrl(t);return e&&(r=r+"/"+e),n.put(r,t)},_delete:function(t){var e=this.getBaseUrl(t);return n.del(e)},_patch:function(t){var e=this.getBaseUrl(t);return n.patch(e,t)},query:function(t){return this._post(t)},retrieve:function(t){return this._get(t)},create:function(t){return this._post(t)},update:function(t){return this._put(t)},"delete":function(t){return this._delete(t)},patch:function(t){return this._patch(t)},init:function(t){i(this,t)}});return s}),define("skylark-langx/Stateful",["./Evented"],function(t){var e=t.inherit({init:function(t,e){var r=t||{};e||(e={}),this.cid=uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{});var n=result(this,"defaults");r=mixin({},n,r),this.set(r,e),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return clone(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,e,r){if(null==t)return this;var n;if("object"==typeof t?(n=t,r=e):(n={})[t]=e,r||(r={}),!this._validate(n,r))return!1;var i=r.unset,o=r.silent,s=[],a=this._changing;this._changing=!0,a||(this._previousAttributes=clone(this.attributes),this.changed={});var u=this.attributes,c=this.changed,l=this._previousAttributes;for(var f in n)e=n[f],isEqual(u[f],e)||s.push(f),isEqual(l[f],e)?delete c[f]:c[f]=e,i?delete u[f]:u[f]=e;if(this.idAttribute in n&&(this.id=this.get(this.idAttribute)),!o){s.length&&(this._pending=r);for(var p=0;p<s.length;p++)this.trigger("change:"+s[p],this,u[s[p]],r)}if(a)return this;if(!o)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,mixin({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,mixin({},t,{unset:!0}))},hasChanged:function(t){return null==t?!isEmptyObject(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&clone(this.changed);var e=this._changing?this._previousAttributes:this.attributes,r={};for(var n in t){var i=t[n];isEqual(e[n],i)||(r[n]=i)}return!isEmptyObject(r)&&r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return clone(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},mixin({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=mixin({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return!r||(this.trigger("invalid",this,r,mixin(e,{validationError:r})),!1)}});return e}),define("skylark-langx/langx",["./skylark","./arrays","./ArrayStore","./aspect","./async","./Deferred","./Evented","./funcs","./klass","./objects","./Restful","./Stateful","./strings","./types","./Xhr"],function(t,e,r,n,i,o,s,a,u,c,l,f,p,h,d){"use strict";function v(t,e){var r=new CustomEvent(t,e);return k(r,e)}function y(t,e,r,n){return w(e)?e.call(t,r,n):e}function g(t){var t=t||window.location.href,e=t.split("?"),r={};return e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r}function x(t){return parseFloat(t)||0}function m(t){return t._uid||(t._uid=E++)}function b(t){var e=++A+"";return t?t+e:e}function _(){return _}var j=({}.toString,Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter,c.mixin),k=c.safeMixin,w=h.isFunction,E=1,A=0;return j(_,{createEvent:v,funcArg:y,getQueryParams:g,toPixel:x,uid:m,uniqueId:b,URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),j(_,e,n,a,c,p,h,{ArrayStore:r,async:i,Deferred:o,Evented:s,klass:u,Restful:l,Stateful:f,Xhr:d}),t.langx=_}),define("skylark-langx/main",["./skylark","./langx"],function(t){return t}),define("skylark-langx",["skylark-langx/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-langx.js.map
