/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./Evented","./strings","./objects"],function(t,i,e){var n=e.isEqual,r=e.mixin,s=e.result,h=e.isEmptyObject,u=e.clone,a=i.uniqueId;return t.inherit({_construct:function(t,i){var e=t||{};i||(i={}),this.cid=a(this.cidPrefix),this.attributes={},i.collection&&(this.collection=i.collection),i.parse&&(e=this.parse(e,i)||{});var n=s(this,"defaults");e=r({},n,e),this.set(e,i),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return u(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,i,e){if(null==t)return this;var r;if("object"==typeof t?(r=t,e=i):(r={})[t]=i,e||(e={}),!this._validate(r,e))return!1;var s=e.unset,h=e.silent,a=[],o=this._changing;this._changing=!0,o||(this._previousAttributes=u(this.attributes),this.changed={});var c=this.attributes,d=this.changed,l=this._previousAttributes;for(var g in r)i=r[g],n(c[g],i)||a.push(g),n(l[g],i)?delete d[g]:d[g]=i,s?delete c[g]:c[g]=i;if(this.idAttribute in r&&(this.id=this.get(this.idAttribute)),!h){a.length&&(this._pending=e);for(var v=0;v<a.length;v++)this.trigger("change:"+a[v],this,c[a[v]],e)}if(o)return this;if(!h)for(;this._pending;)e=this._pending,this._pending=!1,this.trigger("change",this,e);return this._pending=!1,this._changing=!1,this},unset:function(t,i){return this.set(t,void 0,r({},i,{unset:!0}))},clear:function(t){var i={};for(var e in this.attributes)i[e]=void 0;return this.set(i,r({},t,{unset:!0}))},hasChanged:function(t){return null==t?!h(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&u(this.changed);var i=this._changing?this._previousAttributes:this.attributes,e={};for(var r in t){var s=t[r];n(i[r],s)||(e[r]=s)}return!h(e)&&e},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return u(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},r({},t,{validate:!0}))},_validate:function(t,i){if(!i.validate||!this.validate)return!0;t=r({},this.attributes,t);var e=this.validationError=this.validate(t,i)||null;return!e||(this.trigger("invalid",this,e,r(i,{validationError:e})),!1)}})});
//# sourceMappingURL=sourcemaps/Stateful.js.map
