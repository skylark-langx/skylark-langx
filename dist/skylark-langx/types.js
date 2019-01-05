/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var n,t=(n={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t){n["[object "+t+"]"]=t.toLowerCase()}),function(t){return null==t?String(t):n[toString.call(t)]||"object"});function o(n){var t;for(t in n)if(null!==n[t])return!1;return!0}function r(n){return"function"==t(n)}function i(n){return n&&n instanceof Node}function e(n){return"object"==t(n)}function u(n){return"string"==typeof n}function c(n){return n&&n==n.window}return{isArray:function(n){return n&&n.constructor===Array},isArrayLike:function(n){return!u(n)&&!i(n)&&"number"==typeof n.length&&!r(n)},isBoolean:function(n){return"boolean"==typeof n},isDefined:function(n){return void 0!==n},isDocument:function(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE},isEmpty:o,isEmptyObject:o,isFunction:r,isHtmlNode:i,isNull:function(n){return"null"===t(n)},isNumber:function(n){return"number"==typeof n},isObject:e,isPlainObject:function(n){return e(n)&&!c(n)&&Object.getPrototypeOf(n)==Object.prototype},isString:u,isSameOrigin:function(n){if(n){var t=location.protocol+"//"+location.hostname;return location.port&&(t+=":"+location.port),n.startsWith(t)}},isSymbol:function(n){return"symbol"==typeof n||isObjectLike(n)&&objectToString.call(n)==symbolTag},isUndefined:function(n){return void 0===n},isWindow:c,type:t}});
//# sourceMappingURL=sourcemaps/types.js.map
