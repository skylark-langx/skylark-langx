/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var e={isBrowser:!0,isNode:null,global:this,browser:null,node:null};"object"==typeof process&&process.versions&&process.versions.node&&process.versions.v8&&(e.isNode=!0,e.isBrowser=!1),e.global=function(){return"undefined"!=typeof global&&"function"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this}();var n=null;return Object.defineProperty(e,"document",function(){if(!n){var e="undefined"==typeof window?require("html-element"):window;n=e.document}return n}),e});
//# sourceMappingURL=sourcemaps/hoster.js.map