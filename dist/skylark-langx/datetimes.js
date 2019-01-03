/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){return{parseMilliSeconds:function(e){var s=e.split(" "),a=parseInt(s[0]);if(isNaN(a))return 0;switch(s[1].trim().replace(/\./g,"")){case"minutes":case"minute":case"min":case"mm":case"m":return 6e4*a;case"hours":case"hour":case"HH":case"hh":case"h":case"H":return 36e5*a;case"seconds":case"second":case"sec":case"ss":case"s":return 1e3*a;case"days":case"day":case"DD":case"dd":case"d":return 864e5*a;case"months":case"month":case"MM":case"M":return 24192e5*a;case"weeks":case"week":case"W":case"w":return 6048e5*a;case"years":case"year":case"yyyy":case"yy":case"y":return 31536e6*a;default:return 0}}}});
//# sourceMappingURL=sourcemaps/datetimes.js.map
