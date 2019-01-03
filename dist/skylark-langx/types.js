/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var n,t=(n={},"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(t){n["[object "+t+"]"]=t.toLowerCase()}),function(t){return null==t?String(t):n[toString.call(t)]||"object"});function r(n){return"function"==t(n)}function o(n){return n&&n instanceof Node}function e(n){return"object"==t(n)}function i(n){return"string"==typeof n}function u(n){return n&&n==n.window}return{isArray:function(n){return n&&n.constructor===Array},isArrayLike:function(n){return!i(n)&&!o(n)&&"number"==typeof n.length&&!r(n)},isBoolean:function(n){return"boolean"==typeof n},isDefined:function(n){return void 0!==n},isDocument:function(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE},isEmptyObject:function(n){var t;for(t in n)if(null!==n[t])return!1;return!0},isFunction:r,isHtmlNode:o,isNumber:function(n){return"number"==typeof n},isObject:e,isPlainObject:function(n){return e(n)&&!u(n)&&Object.getPrototypeOf(n)==Object.prototype},isString:i,isSameOrigin:function(n){if(n){var t=location.protocol+"//"+location.hostname;return location.port&&(t+=":"+location.port),n.startsWith(t)}},isWindow:u,type:t}});
//# sourceMappingURL=sourcemaps/types.js.map
