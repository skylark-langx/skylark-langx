/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(t){var e=t.isObject,r=t.isSymbol,n=1/0,i=1.7976931348623157e308,f=NaN,u=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;function p(t){return t?(t=v(t))===n||t===-n?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}function v(t){if("number"==typeof t)return t;if(r(t))return f;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=s.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):o.test(t)?f:+t}return{toFinite:p,toNumber:v,toInteger:function(t){var e=p(t),r=e%1;return e==e?r?e-r:e:0}}});
//# sourceMappingURL=sourcemaps/numbers.js.map
