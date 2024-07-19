/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals,define,require) {
  var isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define("skylark-langx/skylark",["skylark-langx-ns"],function(t){return t}),define("skylark-langx/arrays",["skylark-langx-arrays"],function(t){return t}),define("skylark-langx/klass",["skylark-langx-klass"],function(t){return t}),define("skylark-langx/array-store",["./klass"],function(t){function s(e){var i;return e&&((i=!!e.then)&&(e=Object.delegate(e)),t("forEach"),t("filter"),t("map"),null==e.total)&&(e.total=Deferred.when(e,function(t){return t.length})),e;function t(r){e[r]=function(){var n=arguments,t=Deferred.when(e,function(t){return s(Array.prototype[r].apply(t,n))});if("forEach"!==r||i)return t}}}return t({klassName:"ArrayStore",queryEngine:function(r,e){switch(typeof r){default:throw new Error("Can not query with a "+typeof r);case"object":case"undefined":var i=r;r=function(t){for(var n in i){var r=i[n];if(r&&r.test){if(!r.test(t[n],t))return!1}else if(r!=t[n])return!1}return!0};break;case"string":if(!this[r])throw new Error("No filter function "+r+" was found in store");r=this[r];case"function":}function t(t){var n,t=function(t,n,r){var e,i=0,s=t&&t.length||0,a=[];if(s&&"string"==typeof t&&(t=t.split("")),"string"==typeof n&&(n=cache[n]||buildFn(n)),r)for(;i<s;++i)e=t[i],n.call(r,e,i,t)&&a.push(e);else for(;i<s;++i)n(e=t[i],i,t)&&a.push(e);return a}(t,r),a=e&&e.sort;return a&&t.sort("function"==typeof a?a:function(t,n){for(var r,e=0;r=a[e];e++){var i=t[r.attribute],s=n[r.attribute];if((i=null!=i?i.valueOf():i)!=(s=null!=s?s.valueOf():s))return!!r.descending==(null==i||s<i)?-1:1}return 0}),e&&(e.start||e.count)&&(n=t.length,(t=t.slice(e.start||0,(e.start||0)+(e.count||1/0))).total=n),t}return t.matches=r,t},idProperty:"id",get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,n){var r=this.data,e=this.index,i=this.idProperty,i=t[i]=n&&"id"in n?n.id:i in t?t[i]:Math.random();if(i in e){if(n&&!1===n.overwrite)throw new Error("Object already exists");r[e[i]]=t}else e[i]=r.push(t)-1;return i},add:function(t,n){return(n=n||{}).overwrite=!1,this.put(t,n)},remove:function(t){var n=this.index,r=this.data;if(t in n)return r.splice(n[t],1),this.setData(r),!0},query:function(t,n){return s(this.queryEngine(t,n)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var n=0,r=t.length;n<r;n++)this.index[t[n][this.idProperty]]=n},init:function(t){for(var n in t)this[n]=t[n];this.setData(this.data||[])}})}),define("skylark-langx/aspect",["skylark-langx-aspect"],function(t){return t}),define("skylark-langx/async",["skylark-langx-async"],function(t){return t}),define("skylark-langx/binary",["skylark-langx-binary"],function(t){return t}),define("skylark-langx/chars",["skylark-langx-chars"],function(t){return t}),define("skylark-langx/constructs",["skylark-langx-constructs"],function(t){return t}),define("skylark-langx/datetimes",["skylark-langx-datetimes"],function(t){return t}),define("skylark-langx/deferred",["skylark-langx-async"],function(t){return t.Deferred}),define("skylark-langx/emitter",["skylark-langx-events"],function(t){return t.Emitter}),define("skylark-langx/evented",["./emitter"],function(t){return t}),define("skylark-langx/events",["skylark-langx-events"],function(t){return t}),define("skylark-langx/funcs",["skylark-langx-funcs"],function(t){return t}),define("skylark-langx/globals",["skylark-langx-globals"],function(t){return t}),define("skylark-langx/hoster",["skylark-langx-hoster"],function(t){return t}),define("skylark-langx/maths",["skylark-langx-maths"],function(t){return t}),define("skylark-langx/numerics",["skylark-langx-numerics"],function(t){return t}),define("skylark-langx/objects",["skylark-langx-objects"],function(t){return t}),define("skylark-langx/paths",["skylark-langx-paths"],function(t){return t}),define("skylark-langx/Evented",["./emitter"],function(t){return t}),define("skylark-langx/strings",["skylark-langx-strings"],function(t){return t}),define("skylark-langx/stateful",["./Evented","./strings","./objects"],function(t,n,r){var h=r.isEqual,e=r.mixin,i=r.result,s=r.isEmptyObject,d=r.clone,a=n.uniqueId;return t.inherit({_construct:function(t,n){var t=t||{},r=(n=n||{},this.cid=a(this.cidPrefix),this.attributes={},n.collection&&(this.collection=n.collection),n.parse&&(t=this.parse(t,n)||{}),i(this,"defaults")),t=e({},r,t);this.set(t,n),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return d(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,n,r){if(null!=t){var e;if("object"==typeof t?(e=t,r=n):(e={})[t]=n,!this._validate(e,r=r||{}))return!1;var i,s=r.unset,t=r.silent,a=[],u=this._changing,l=(this._changing=!0,u||(this._previousAttributes=d(this.attributes),this.changed={}),this.attributes),o=this.changed,f=this._previousAttributes;for(i in e)n=e[i],h(l[i],n)||a.push(i),h(f[i],n)?delete o[i]:o[i]=n,s?delete l[i]:l[i]=n;if(this.idAttribute in e&&(this.id=this.get(this.idAttribute)),!t){a.length&&(this._pending=r);for(var c=0;c<a.length;c++)this.trigger("change:"+a[c],this,l[a[c]],r)}if(!u){if(!t)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);this._pending=!1,this._changing=!1}}return this},unset:function(t,n){return this.set(t,void 0,e({},n,{unset:!0}))},clear:function(t){var n,r={};for(n in this.attributes)r[n]=void 0;return this.set(r,e({},t,{unset:!0}))},hasChanged:function(t){return null==t?!s(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&d(this.changed);var n,r=this._changing?this._previousAttributes:this.attributes,e={};for(n in t){var i=t[n];h(r[n],i)||(e[n]=i)}return!s(e)&&e},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return d(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},e({},t,{validate:!0}))},_validate:function(t,n){if(!n.validate||!this.validate)return!0;t=e({},this.attributes,t);t=this.validationError=this.validate(t,n)||null;return!t||(this.trigger("invalid",this,t,e(n,{validationError:t})),!1)}})}),define("skylark-langx/topic",["skylark-langx-topic"],function(t){return t}),define("skylark-langx/types",["skylark-langx-types"],function(t){return t}),define("skylark-langx/urls",["skylark-langx-urls"],function(t){return t}),define("skylark-langx/langx",["./skylark","./arrays","./array-store","./aspect","./async","./binary","./chars","./constructs","./datetimes","./deferred","./emitter","./evented","./events","./funcs","./globals","./hoster","./klass","./maths","./numerics","./objects","./paths","./stateful","./strings","./topic","./types","./urls"],function(t,n,r,e,i,s,a,u,l,o,f,c,h,d,k,g,y,x,p,v,b,m,w,_,A,E){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var P=v.mixin,j=(v.safeMixin,A.isFunction);var D=1;t=t.attach("langx");return P(t,{createEvent:h.createEvent,funcArg:function(t,n,r,e){return j(n)?n.call(t,r,e):n},getQueryParams:function(t){var t=(t=t||window.location.href).split("?"),n={};return 1<t.length&&t[1].split("&").forEach(function(t){t=t.split("=");n[t[0]]=t[1]}),n},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=D++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),P(t,n,e,l,d,p,v,w,A,{ArrayStore:r,async:i,Deferred:o,Emitter:f,Evented:c,hoster:g,klass:y,Stateful:m,topic:_}),t}),define("skylark-langx/main",["./langx"],function(t){return t}),define("skylark-langx",["skylark-langx/main"],function(t){return t});
},this,define,require);
//# sourceMappingURL=sourcemaps/skylark-langx.js.map
