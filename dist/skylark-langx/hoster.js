/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var e={isBrowser:!0,isNode:null,global:this,browser:null,node:null};"object"==typeof process&&process.versions&&process.versions.node&&process.versions.v8&&(e.isNode=!0,e.isBrowser=!1),e.global=function(){return"undefined"!=typeof global&&"function"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this}();var o=null;if(Object.defineProperty(e,"document",function(){if(!o){var e="undefined"==typeof window?require("html-element"):window;o=e.document}return o}),e.isBrowser){var r=function(e){e=e.toLowerCase();var o=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[1]||"",version:o[2]||"0"}}(navigator.userAgent),n=e.browser={};r.browser&&(n[r.browser]=!0,n.version=r.version),n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0)}return e});
//# sourceMappingURL=sourcemaps/hoster.js.map
