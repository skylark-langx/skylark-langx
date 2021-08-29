define([
    "./skylark",
    "./arrays",
    "./array-store",
    "./aspect",
    "./async",
    "./binary",
    "./constructs",
    "./datetimes",
    "./deferred",
    "./emitter",
    "./evented",
    "./events",
    "./funcs",
    "./globals",
    "./hoster",
    "./klass",
    "./maths",
    "./numerics",
    "./objects",
    "./stateful",
    "./strings",
    "./topic",
    "./types",
    "./urls"
], function(
    skylark,
    arrays,
    ArrayStore,
    aspect,
    async,
    binary,
    constructs,
    datetimes,
    Deferred,
    Emitter,
    Evented,
    events,
    funcs,
    globals,
    hoster,
    klass,
    maths,
    numerics,
    objects,
    Stateful,
    strings,
    topic,
    types,
    urls
) {
    "use strict";
    var toString = {}.toString,
        concat = Array.prototype.concat,
        indexOf = Array.prototype.indexOf,
        slice = Array.prototype.slice,
        filter = Array.prototype.filter,
        mixin = objects.mixin,
        safeMixin = objects.safeMixin,
        isFunction = types.isFunction;


    function funcArg(context, arg, idx, payload) {
        return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }

    function getQueryParams(url) {
        var url = url || window.location.href,
            segs = url.split("?"),
            params = {};

        if (segs.length > 1) {
            segs[1].split("&").forEach(function(queryParam) {
                var nv = queryParam.split('=');
                params[nv[0]] = nv[1];
            });
        }
        return params;
    }


    function toPixel(value) {
        // style values can be floats, client code may want
        // to round for integer pixels.
        return parseFloat(value) || 0;
    }


    var _uid = 1;

    function uid(obj) {
        return obj._uid || (obj._uid = _uid++);
    }

    function langx() {
        return langx;
    }

    mixin(langx, {
        createEvent : Emitter.createEvent,

        funcArg: funcArg,

        getQueryParams: getQueryParams,

        toPixel: toPixel,

        uid: uid,

        URL: typeof window !== "undefined" ? window.URL || window.webkitURL : null

    });


    mixin(langx, arrays,aspect,datetimes,funcs,numerics,objects,strings,types,{
        ArrayStore : ArrayStore,

        async : async,
        
        Deferred: Deferred,

        Emitter: Emitter,

        Evented: Evented,

        hoster : hoster,

        klass : klass,
       
        Stateful: Stateful,

        topic : topic
    });

    return skylark.langx = langx;
});