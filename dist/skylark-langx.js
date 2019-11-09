/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,r){var n=r.define,e=r.require,i="function"==typeof n&&n.amd,s=!i&&"undefined"!=typeof exports;if(!i&&!n){var a={};n=r.define=function(t,r,n){"function"==typeof n?(a[t]={factory:n,deps:r.map(function(r){return function(t,r){if("."!==t[0])return t;var n=r.split("/"),e=t.split("/");n.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?n.pop():n.push(e[i]));return n.join("/")}(r,t)}),resolved:!1,exports:null},e(t)):a[t]={factory:null,resolved:!0,exports:n}},e=r.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=a[t];if(!n.resolved){var i=[];n.deps.forEach(function(t){i.push(e(t))}),n.exports=n.factory.apply(r,i)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,r){t("skylark-langx/skylark",["skylark-langx-ns"],function(t){return t}),t("skylark-langx/arrays",["skylark-langx-arrays"],function(t){return t}),t("skylark-langx/klass",["skylark-langx-klass"],function(t){return t}),t("skylark-langx/ArrayStore",["./klass"],function(t){var r=function(t){if(!t)return t;var n=!!t.then;function e(e){t[e]=function(){var i=arguments,s=Deferred.when(t,function(t){return r(Array.prototype[e].apply(t,i))});if("forEach"!==e||n)return s}}return n&&(t=Object.delegate(t)),e("forEach"),e("filter"),e("map"),null==t.total&&(t.total=Deferred.when(t,function(t){return t.length})),t},n=t({klassName:"ArrayStore",queryEngine:function(t,r){switch(typeof t){default:throw new Error("Can not query with a "+typeof t);case"object":case"undefined":var n=t;t=function(t){for(var r in n){var e=n[r];if(e&&e.test){if(!e.test(t[r],t))return!1}else if(e!=t[r])return!1}return!0};break;case"string":if(!this[t])throw new Error("No filter function "+t+" was found in store");t=this[t];case"function":}function e(n){var e=function(t,r,n){var e,i=0,s=t&&t.length||0,a=[];s&&"string"==typeof t&&(t=t.split(""));"string"==typeof r&&(r=cache[r]||buildFn(r));if(n)for(;i<s;++i)e=t[i],r.call(n,e,i,t)&&a.push(e);else for(;i<s;++i)e=t[i],r(e,i,t)&&a.push(e);return a}(n,t),i=r&&r.sort;if(i&&e.sort("function"==typeof i?i:function(t,r){for(var n,e=0;n=i[e];e++){var s=t[n.attribute],a=r[n.attribute];if(s=null!=s?s.valueOf():s,a=null!=a?a.valueOf():a,s!=a)return!!n.descending==(null==s||s>a)?-1:1}return 0}),r&&(r.start||r.count)){var s=e.length;(e=e.slice(r.start||0,(r.start||0)+(r.count||1/0))).total=s}return e}return e.matches=t,e},idProperty:"id",get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,r){var n=this.data,e=this.index,i=this.idProperty,s=t[i]=r&&"id"in r?r.id:i in t?t[i]:Math.random();if(s in e){if(r&&!1===r.overwrite)throw new Error("Object already exists");n[e[s]]=t}else e[s]=n.push(t)-1;return s},add:function(t,r){return(r=r||{}).overwrite=!1,this.put(t,r)},remove:function(t){var r=this.index,n=this.data;if(t in r)return n.splice(r[t],1),this.setData(n),!0},query:function(t,n){return r(this.queryEngine(t,n)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var r=0,n=t.length;r<n;r++)this.index[t[r][this.idProperty]]=r},init:function(t){for(var r in t)this[r]=t[r];this.setData(this.data||[])}});return n}),t("skylark-langx/aspect",["skylark-langx-aspect"],function(t){return t}),t("skylark-langx/async",["skylark-langx-async"],function(t){return t}),t("skylark-langx/datetimes",["skylark-langx-datetimes"],function(t){return t}),t("skylark-langx/Deferred",["skylark-langx-async/Deferred"],function(t){return t}),t("skylark-langx/Emitter",["skylark-langx-emitter"],function(t){return t}),t("skylark-langx/Evented",["skylark-langx-emitter"],function(t){return t}),t("skylark-langx/funcs",["skylark-langx-funcs"],function(t){return t}),t("skylark-langx/hoster",["skylark-langx-hoster"],function(t){return t}),t("skylark-langx/numbers",["skylark-langx-numbers"],function(t){return t}),t("skylark-langx/objects",["skylark-langx-objects"],function(t){return t}),t("skylark-langx/strings",["skylark-langx-strings"],function(t){return t}),t("skylark-langx/Stateful",["./Evented","./strings","./objects"],function(t,r,n){var e=n.isEqual,i=n.mixin,s=n.result,a=n.isEmptyObject,u=n.clone,o=r.uniqueId,l=t.inherit({_construct:function(t,r){var n=t||{};r||(r={}),this.cid=o(this.cidPrefix),this.attributes={},r.collection&&(this.collection=r.collection),r.parse&&(n=this.parse(n,r)||{});var e=s(this,"defaults");n=i({},e,n),this.set(n,r),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return u(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,r,n){if(null==t)return this;var i;if("object"==typeof t?(i=t,n=r):(i={})[t]=r,n||(n={}),!this._validate(i,n))return!1;var s=n.unset,a=n.silent,o=[],l=this._changing;this._changing=!0,l||(this._previousAttributes=u(this.attributes),this.changed={});var f=this.attributes,c=this.changed,h=this._previousAttributes;for(var d in i)r=i[d],e(f[d],r)||o.push(d),e(h[d],r)?delete c[d]:c[d]=r,s?delete f[d]:f[d]=r;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!a){o.length&&(this._pending=n);for(var y=0;y<o.length;y++)this.trigger("change:"+o[y],this,f[o[y]],n)}if(l)return this;if(!a)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,r){return this.set(t,void 0,i({},r,{unset:!0}))},clear:function(t){var r={};for(var n in this.attributes)r[n]=void 0;return this.set(r,i({},t,{unset:!0}))},hasChanged:function(t){return null==t?!a(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&u(this.changed);var r=this._changing?this._previousAttributes:this.attributes,n={};for(var i in t){var s=t[i];e(r[i],s)||(n[i]=s)}return!a(n)&&n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return u(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i({},t,{validate:!0}))},_validate:function(t,r){if(!r.validate||!this.validate)return!0;t=i({},this.attributes,t);var n=this.validationError=this.validate(t,r)||null;return!n||(this.trigger("invalid",this,n,i(r,{validationError:n})),!1)}});return l}),t("skylark-langx/topic",["skylark-langx-topic"],function(t){return t}),t("skylark-langx/types",["skylark-langx-types"],function(t){return t}),t("skylark-langx/langx",["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Emitter","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,r,n,e,i,s,a,u,o,l,f,c,h,d,y,g,k,p){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var v=d.mixin,x=(d.safeMixin,p.isFunction);var b=1;function w(){return w}return v(w,{createEvent:u.createEvent,funcArg:function(t,r,n,e){return x(r)?r.call(t,n,e):r},getQueryParams:function(t){var r=(t=t||window.location.href).split("?"),n={};r.length>1&&r[1].split("&").forEach(function(t){var r=t.split("=");n[r[0]]=r[1]});return n},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=b++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),v(w,r,e,s,l,h,d,g,p,{ArrayStore:n,async:i,Deferred:a,Emitter:u,Evented:o,hoster:f,klass:c,Stateful:y,topic:k}),t.langx=w}),t("skylark-langx/main",["./skylark","./langx"],function(t){return t}),t("skylark-langx",["skylark-langx/main"],function(t){return t})}(n),!i){var u=e("skylark-langx/skylark");s?module.exports=u:r.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx.js.map
