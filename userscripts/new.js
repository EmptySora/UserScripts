/**** START POLYFILL SECTION ****/
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=
1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&
10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==
b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",
12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,
"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();
g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":
m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==
(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=
D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=
b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,
b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===
w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&
window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);


String.prototype.startsWith = function(search, pos) {
    pos = !pos || pos < 0 ? 0 : +pos;
    return this.substring(pos, pos + search.length) === search;
};
String.prototype.endsWith = function(search, this_len) {
	if (this_len === undefined || this_len > this.length) {
		this_len = this.length;
	}
	return this.substring(this_len - search.length, this_len) === search;
};
String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.trimStart = function () {
    return this.replace(/^[\s\uFEFF\xA0]+/g, '');
};
String.prototype.trimEnd = function () {
    return this.replace(/[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.trimLeft = function () {
    return this.replace(/^[\s\uFEFF\xA0]+/g, '');
};
String.prototype.trimRight = function () {
    return this.replace(/[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.repeat = function(count) {
    if (this === null) {
        throw new TypeError('can\'t convert ' + this + ' to object');
    }

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count) {
        count = 0;
    }

    if (count < 0) {
        throw new RangeError('repeat count must be non-negative');
    }

    if (count == Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }

    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
        return '';
    }

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
        throw new RangeError('repeat count must not overflow maximum string size');
    }

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
String.prototype.padStart = function(targetLength, padString) {
    targetLength = targetLength >> 0; 
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length >= targetLength) {
        return String(this);
    } else {
        targetLength = targetLength - this.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(this);
    }
};
String.prototype.padEnd = function(targetLength,padString) {
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
        return String(this);
    }
    else {
        targetLength = targetLength-this.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
        }
        return String(this) + padString.slice(0,targetLength);
    }
};
String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
        start = 0;
    }

    if (start + search.length > this.length) {
        return false;
    } else {
        return this.indexOf(search, start) !== -1;
    }
};
Array.prototype.copyWithin = function(target, start, end) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    var relativeTarget = target >> 0;
    var to = relativeTarget < 0 ? Math.max(len + relativeTarget, 0) : Math.min(relativeTarget, len);
    var relativeStart = start >> 0;
    var from = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
    var relativeEnd = end === undefined ? len : end >> 0;
    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
    var count = Math.min(final - from, len - to);
    var direction = 1;
    if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
    }
    while (count > 0) {
        if (from in O) {
            O[to] = O[from];
        } else {
            O[to] = undefined; //not sure if "delete" will work
        }
        from += direction;
        to += direction;
        count--;
    }
    return O;
};
Array.prototype.fill = function(value) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    var start = arguments[1];
    var relativeStart = start >> 0;
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;
    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
    while (k < final) {
        O[k] = value;
        k++;
    }
    return O;
};
Array.prototype.includes = function(valueToFind, fromIndex) {
    function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
    }
    if (this == null) {
        throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (len === 0) {
        return false;
    }
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
        if (sameValueZero(o[k], valueToFind)) {
            return true;
        }
        k++;
    }
    return false;
};
Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (this == null) {
        throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (len === 0) {
        return -1;
    }
    var n = fromIndex | 0;
    if (n >= len) {
        return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
        if (k in o && o[k] === searchElement) {
            return k;
        }
        k++;
    }
    return -1;
};
Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    if (this === void 0 || this === null) {
        throw new TypeError();
    }

    var n, k, t = Object(this), len = t.length >>> 0;
    if (len === 0) {
        return -1;
    }
    n = len - 1;
    if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) {
            n = 0;
        } else if (n != 0 && n != (1/0) && n != -(1/0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
        if (k in t && t[k] === searchElement) {
            return k;
        }
    }
    return -1;
};
Array.prototype.every = function(callbackfn, thisArg) {
    var T, k;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callbackfn !== 'function') {
        throw new TypeError();
    }
    if (arguments.length > 1) {
        T = thisArg;
    }
    k = 0;
    var kValue;
    var testResult;
    while (k < len) {
        if (k in O) {
            kValue = O[k];
            testResult = callbackfn.call(T, kValue, k, O);
            if (!testResult) {
                return false;
            }
        }
        k++;
    }
    return true;
};
Array.prototype.filter = function(func, thisArg) {
    if ( ! ((typeof func === 'function') && this) ) {
        throw new TypeError();
    }
    var len = this.length >>> 0;
    var res = [];
    var i = -1;
    while (++i !== len) {
        if ((i in this) && (func.call(thisArg, this[i], i, this))) {
            res.push(this[i]);
        }
    }
    return res;
};
Array.prototype.find = function(predicate) {
    if (this == null) {
        throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
    }
    var thisArg = arguments[1];
    var k = 0;
    while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
        }
        k++;
    }
    return undefined;
};
Array.prototype.findIndex = function(predicate) {
    if (this == null) {
        throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
    }
    var thisArg = arguments[1];
    var k = 0;
    while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
            return k;
        }
        k++;
    }
    return -1;
};
Array.prototype.forEach = function(callback/*, thisArg*/) {
    var T, k;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = arguments[1];
    }
    k = 0;
    while (k < len) {
        var kValue;
        if (k in O) {
            kValue = O[k];
            callback.call(T, kValue, k, O);
        }
        k++;
    }
};
Array.prototype.map = function(callback/*, thisArg*/) {
    var T, A, k;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = arguments[1];
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
        var kValue, mappedValue;
        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        k++;
    }
    return A;
};
Array.prototype.some = function(fun, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
    }
    if (typeof fun !== 'function') {
        throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;
    for (var i = 0; i < len; i++) {
        if (i in t && fun.call(thisArg, t[i], i, t)) {
            return true;
        }
    }
    return false;
};
Function.prototype.bind = function() {
    var thatFunc = this, thatArg = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    return function () {
        args.push.apply(args, arguments);
        return thatFunc.apply(thatArg, args);
    };
};
/****  END  POLYFILL SECTION ****/



//Microsoft JScript file

//new ActiveXObject("COM NAME");

//WScript.Echo

//jesus christ finding references for old jscript is a pain in the ass

//Goddamn look here: https://docs.microsoft.com/en-us/previous-versions//z2b05k8s%28v%3dvs.85%29

//For COM objects, create them with "new ActiveXObject("OLE COM NAME")".
//We might need "WScript.CreateObject("OLE COM NAME")" instead

//Windows Script Host will bind the interface to javascript.
//Fields and properties will be accessed like fields
//Functions are self explanatory.

//Honestly, through COM, you could actually use DOT NET
//which is probably the basis of JScript .NET

/* argument list:
--template [template name]
--name[-locale] [name]
--description[-locale] [description]
[] --include [url]


any property besides 



*/

var default_template = {
    configuration: {
        "name": "Demo UserScript",
        "description": "Demonstration of webhosted userscript",
        "run-at": "document-start",
        "include": [
            "*://*.emptysora.com/*",
            "*://emptysora.com/*",
            "*://*.emptysora.com/",
            "*://emptysora.com/"
        ],
        "grant": "unsafeWindow",
        "version": "1"
    },
    script: "//this is the contents of the script\r\n" +
        "function main(){\r\n" +
        "    //Your Script here\r\n" +
        "}\r\n" +
        "if (document.readyState !== \"complete\") {\r\n" +
        "    window.addEventListener(\"load\",main);\r\n" +  
        "} else {\r\n" +
        "    main();\r\n" +
        "}"
};
var output_path = "C:\\xampp7\\userscripts\\";
var script_name = "script.user.js";
var config_name = "config.json";

var fso = WScript.CreateObject("Scripting.FileSystemObject");

function WriteFile(file,contents) {
    var stream = fso.CreateTextFile(file, true);
    stream.WriteLine(contents);
    stream.Close();
}
function ReadFile(file) {
    var stream = fso.OpenAsTextStream(file, 1);
    var ret = stream.ReadAll();
    stream.Close();
    return ret;
}
function CreateDirectory(path) {
    fso.CreateFolder(path);
}
function CopyFile(source,destination) {
    fso.CopyFile(source,destination,true);
}
function Exists(path) {
    return fso.FileExists(path) || fso.FolderExists(path);
}
function IsDirectory(path) {
    return fso.FolderExists(path);
}

function GetNextScriptId() {
    WScript.Echo("Getting next script id...");
    var id = 0;
    var path = output_path + id + "\\";
    while(true) {
        if (!IsDirectory(path)) {
            break;
        }
        id += 1;
        path = output_path + id + "\\";
    }
    WScript.Echo("NEXT ID: " + id);
    return id;
}

function outputDefaultScript() {
    //default_template.configuration.script
    WScript.Echo("Creating a new script from the default template");
    var id = GetNextScriptId();
    var path = output_path + id + "\\";
    CreateDirectory(path);
    WriteFile(path + config_name, JSON.stringify(default_template.configuration));
    WriteFile(path + script_name, default_template.script);
}

function main() {
/*
    WScript.Echo();
    WScript.Echo("Dumping stuff...");
    Dump(Object);
    return;
*/
    var arguments = WScript.Arguments;
    var shell = WScript.CreateObject("WScript.Shell");
    //WScript.Echo("Total Arguments: " + arguments.length);
    //var arglist = [];
    //var i;

    //for (i = 0; i < arguments.length; i += 1) {
    //    arglist.push(arguments(i));
    //}

    //WScript.Echo("ARGUMENTS: " + arglist.join(" "));

    //WScript.Echo();
    //WScript.Echo("Testing wmi...");
    var cmdline = getCommandLineArguments();
    //WScript.Echo("Calculated Arguments: " + cmdline);


    //WScript.Echo();
    //WScript.Echo("Testing script host parse...");
    cmdline = parseCommandLineArguments(cmdline);
    //dumpArguments(cmdline);
    WScript.Echo();
    WScript.Echo("Arguments: " + cmdline.indexed.length);
    //WScript.Echo("JSON: " + JSON.stringify(cmdline));
    if (cmdline.indexed.length === 0) {
        outputDefaultScript();
    }
    /*
    Commandline stress test:
        rnew testeast asd //nologo """//nologo" " //nologo" astet se "asdf" /asdfas /a:b --abc=d --abc=" asdf" --abc:"def" --def "abc" --ghi hkl --enable-myshit --yay --fun --no-way "blah" --edge-casing="--edge-casing=\"--edge-casing=\\\"\\\"\"" --disable-myshit --myshit "real" "tight" --like=a "boss" yo --bonkers yo yo yo a a --no a a a
    */
}

function dumpArguments(cmdline) {
    var i;
    var j;
    var value;
    var key;

    //indexed, named, keys
    WScript.Echo("Indexed Parameters");
    for (i = 0; i < cmdline.indexed.length; i += 1) {
        if (cmdline.indexed[i].name !== undefined) {
            if (typeof cmdline.indexed[i].value === "boolean") {
                WScript.Echo(cmdline.indexed[i].name + ": " +  (cmdline.indexed[i].value ? "true" : "false"));
            } else {
                WScript.Echo(cmdline.indexed[i].name + ": \"" + cmdline.indexed[i].value + "\"");
            }
        } else {
            WScript.Echo("\"" + cmdline.indexed[i].value + "\"");
        }
    }
    WScript.Echo();
    WScript.Echo("Named Parameters");
    for (i = 0; i < cmdline.keys.length; i += 1) {
        key = cmdline.keys[i];
        value = cmdline.named[key];
        if (value.constructor && value.constructor === Array) {
            WScript.Echo(key + ": ");
            for (j = 0; j < value.length; j += 1) {
                if (typeof value[j] === "boolean") {
                    WScript.Echo("    " +  (value[j] ? "true" : "false"));
                } else {
                    WScript.Echo("    \"" + value[j] + "\"");
                }
            }
        } else {
            if (typeof value === "boolean") {
                WScript.Echo(key + ": " +  (value ? "true" : "false"));
            } else {
                WScript.Echo(key + ": \"" + value + "\"");
            }
        }
    }
}
/*
Usage:
cscript "filename" /nologo [arguments]
wscript "filename" /nologo [arguments]

CSCRIPT is console
WSCRIPT is window

WScript
    WshArguments Arguments
    BuildVersion
    FullName
    Interactive
    Name
    Path
    ScriptFullName
    ScriptName
    StdErr
    StdIn
    StdOut
    Version
    ConnectObject()
    COM_Object CreateObject(string Name)
    DisconnectObject()
    Echo()
    GetObject()
    Quit()
    Sleep()

WshArguments
    string Item(number index)
    Length
    Named
    Unnamed
    Count()
    ShowUsage()
*/


//Jesus, the hell you have to go through to do this...
//And annoyingly, it prepends with "CScript "new.js" //nologo"
function getCommandLineArguments() {
    //We need a child process to locate the current script.
    var FLAG_PROCESS = "winver.exe";
    
    //WMI Constants
    var wbemFlagForwardOnly = 32;
    
    //Generate a unique value to be used as a flag
    var guid = WScript.CreateObject("Scriptlet.TypeLib").GUID.substr(0,38);

    //Start a process using the indicated flag inside its command line
    WScript.CreateObject("WScript.Shell").Run("\"" + FLAG_PROCESS + "\" " + guid, 0, false);

    //To retrieve process information a WMI reference is needed
    var wmi = GetObject("winmgmts:{impersonationLevel=impersonate}!\\\\.\\root\\cimv2");
    //var wmi = GetObject("winmgmts:{impersonationLevel=impersonate}!Root/CIMv2/");

    //Query the list of processes with the flag in its command line, retrieve the
    //process ID of its parent process ( our script! ) and terminate the process
    var process;
    var myProcessID;
    
    var colProcess = wmi.ExecQuery(
        "SELECT ParentProcessID From Win32_Process WHERE Name='" + FLAG_PROCESS + "' AND CommandLine LIKE '%" + guid + "%'",
        "WQL",
        wbemFlagForwardOnly
    );

    var enumerator = new Enumerator(colProcess);
    for (;!enumerator.atEnd();enumerator.moveNext()) {
        process = enumerator.item();
        myProcessID = process.ParentProcessID;
        process.Terminate();
    }

    //Knowing the process id of our script we can query the process list
    //and retrieve its command line
    var commandLine;

    colProcess = wmi.ExecQuery(
        "SELECT CommandLine From Win32_Process WHERE ProcessID=" + myProcessID,
        "WQL",
        wbemFlagForwardOnly
    );

    var enumerator = new Enumerator(colProcess);
    for (;!enumerator.atEnd();enumerator.moveNext()) {
        process = enumerator.item();
        commandLine = process.CommandLine;
    }

    return commandLine;
}
/*
fuck you microsoft... this was hell to make
*/
//fails to recognize an argument like: "--a b c" interprets as "--a true b c"
function parseCommandLineArguments(args) {
    //goal, remove the first two arguments, and then any additional arguments
    //that start with "//"
    var ret = args.split(""); //because JScript for some reason doesn't
    //allow you to enumerate strings?

    var argument_list = [];
    var argument_list_temp = [];
    var i;
    var c;
    var j;

    var current_argument_origin = "";
    var in_quotes = false;
    var in_argument = false;

    for (i = 0; i < ret.length; i += 1) {
        c = ret[i];
        if (!in_argument) {
            if (c !== " ") {
                in_argument = true;
                if (current_argument_origin.length > 0) {
                    argument_list.push(current_argument_origin);
                    current_argument_origin = "";
                }
                if (c == "\"") {
                    in_quotes = true;
                }
            }
        } else if (in_quotes) {
            if (c === "\"") {
                in_quotes = false;
            }
        } else if (c === "\"") {
            in_quotes = true;
        } else if (c === " ") {
            if (current_argument_origin.length > 0) {
                argument_list.push(current_argument_origin);
                current_argument_origin = "";
            }
            in_argument = false;
        }
        current_argument_origin += c;
    }
    if (current_argument_origin.length > 0) {
        argument_list.push(current_argument_origin);
        current_argument_origin = "";
    }

    for (i = 0, j = 0; i < argument_list.length; i += 1) {
        //WScript.Echo("Checking: \"" + argument_list[i] + "\"");
        if (!argument_list[i].replace(/\"/g,"").startsWith("//")) {
            if (j >= 2) { //skip the first two arguments
                argument_list_temp.push(argument_list[i]);
            } else if (argument_list[i].replace(/\s+/g,"").length === 0) {
                argument_list_temp.push(argument_list[i]);
            }
        }
        if (argument_list[i].replace(/\s+/g,"").length > 0) {
            j++;
        }
    }
    argument_list = argument_list_temp;
    ret = argument_list.join("");
    //this should make ret now only contain the arguments that were not
    //pulled by cscript or wscript. In addition, all whitespace should be
    //preserved as well.

    var regexp = /(^|\b|\B)(((\-\-?|\/)([a-zA-Z\-_01-9]|\\.)+)([\:\=]((\"([^\\\"]|\\.)*\")|([^\s\\\"]+))|\s+((\"([^\\\"]|\\.)*\")|([^\s\\\"\-\/][^\s\\\"]+)))?|((\"([^\\\"]|\\.)*\")|([^\s\"]+)))($|\b|\B)/g;
    var regb = /[\:\=]\s+/g;
    var matches = ret.match(regb);
    if (matches && matches.length > 0) {
        WScript.Echo("Invalid commandline");
        WScript.Quit();
        return undefined;
    }
    if(ret.replace(regexp,"").replace(/\s+/g,"").length > 0) {
        WScript.Echo("Invalid commandline");
        WScript.Quit();
        return undefined;
    }
    matches = ret.match(regexp);

    var parameters_object = [];
    var matchj;
    var arg_name = "";
    var arg_value = "";
    var escaping = false;
    var quoting = false;
    var valuing = false;
    var separating = false;
    var doneing = false;
    var last_key = null;
    //--enable-[a]
    //--disable-[a]
    //-e[a]
    //-d[a]
    //-[a]y
    //-[a]n
    //-[a]
    if (matches) {
        for (i = 0; i < matches.length; i += 1) {
            arg_name = "";
            arg_value = "";
            escaping = false;
            quoting = false;
            valuing = false;
            separating = false;
            doneing = false;
            matchj = matches[i].replace(/(^[\s\/\-]+|\s+$)/g,"").split("");
            for (j = 0; j < matchj.length; j += 1) {
                c = matchj[j];
                if (escaping) {
                    if (valuing) {
                        arg_value += c;
                    } else {
                        arg_name += c;
                    }
                    escaping = false;
                    continue;
                } else if (c === "\\") {
                    escaping = true;
                    continue;
                }
                if (doneing && c !== " ") {
                    WScript.Echo("Invalid commandline");
                    WScript.Quit();
                    return undefined;
                }
                if (valuing) {
                    if (arg_value.length === 0) {
                        if (c === "\"") {
                            quoting = true;
                            continue;
                        }
                    }
                    if (c === "\"") {
                        if (!quoting) {
                            WScript.Echo("Invalid commandline");
                            WScript.Quit();
                            return undefined;
                        } else {
                            doneing = true;
                        }
                    } else {
                        arg_value += c;
                    }
                } else {
                    if (c === " " || c === "=" || c === ":") {
                        valuing = true;
                        while (true) {
                            j += 1;
                            c = matchj[j];
                            if (c !== " ") {
                                break;
                            }
                        }
                        j -= 1;
                    } else if (c === "\"") {
                        valuing = true;
                        quoting = true;
                        if (arg_name.length > 0) {
                            WScript.Echo("Invalid commandline");
                            WScript.Quit();
                            return undefined;
                        }
                    } else {
                        arg_name += c;
                    }
                }
            }
            if (arg_value.length > 0) {
                if (arg_name !== undefined && arg_name.trim().length > 0) {
                    parameters_object.push({name: arg_name, value: arg_value});
                    last_key = arg_name;
                    echo("Setting last key to: " + arg_name);
                    echo("Setting last value to: " + arg_value);
                } else if (last_key !== null) {
                    parameters_object.push({name: last_key, value: arg_value});
                    echo("Propagating against: " + last_key);
                } else {
                    parameters_object.push({name: undefined, value: arg_value});
                }
            } else if (matches[i].startsWith("-") || matches[i].startsWith("/")) {
                parameters_object.push({name: arg_name, value: true});
                last_key = arg_name;
                echo("Setting last key to: " + arg_name);
                echo("Setting last value to: true");
            } else {
                if (last_key !== null) {
                    parameters_object.push({name: last_key, value: arg_name});
                    echo("Propagating against: " + last_key);
                } else {
                    parameters_object.push({name: undefined, value: arg_name});
                }
                
            }
            if (escaping) {
                WScript.Echo("Invalid commandline");
                WScript.Quit();
                return undefined;
            }
            //WScript.Echo(arg_name + ": \"" + arg_value + "\"");
        }

        for (i = 0; i < parameters_object.length; i += 1) {
            matchj = parameters_object[i];
            if (matchj.name && (matchj.name.startsWith("enable-") || matchj.name.startsWith("disable-"))) {
                if (matchj.name.startsWith("enable-")) {
                    parameters_object[i].name = parameters_object[i].name.replace("enable-","");
                    parameters_object[i].value = true;
                } else {
                    parameters_object[i].name = parameters_object[i].name.replace("disable-","");
                    parameters_object[i].value = false;
                }
            }
            if ((typeof parameters_object[i].name !== "undefined") && parameters_object[i].name.length === 0) {
                parameters_object[i].name = undefined;
            }
        }
    }
    var matches = {
        indexed: parameters_object,
        named: {},
        keys: []
    };
    for (i = 0; i < parameters_object.length; i += 1) {
        matchj = parameters_object[i];
        if (matchj.name !== undefined) {
            if (!(matchj.name in matches.named)) {
                matches.keys.push(matchj.name);
                matches.named[matchj.name] = matchj.value;
                continue;
            }
            if (typeof matches.named[matchj.name] === "string" || typeof matches.named[matchj.name] === "boolean") {
                matches.named[matchj.name] = [matches.named[matchj.name]];
            }
            matches.named[matchj.name].push(matchj.value);
        }
    }
    return matches;
    /*
    Rationale:
        Types:
            Flags
            Switches
                "On"/"Off"
                "Enable"/"Disable"
            Parameters
                Quoted
                Unquoted
                Equals Quoted
                Equals Unquoted
                Colon Quoted
                Colon Unquoted
        Shorthands:
            -a  (flag "a")
            -an (switch "a" off)
            -ay (switch "a" on)
            -ea (switch "a" enable)
            -da (switch "a" disable)
    */
}

function echo(a) {
    WScript.Echo(a);
}


function Dump(object) {
    WScript.Echo(JSON.stringify(object));
}



main();

/*


toSource missing across the board

Number.prototype
Boolean.prototype


MISSING: this.Map
MISSING: this.Set
MISSING: this.JSON
MISSING: this.Promise
MISSING: this.Generator
MISSING: this.GeneratorFunction
MISSING: this.Reflect
MISSING: this.Proxy

MISSING: Object.assign
MISSING: Object.create
MISSING: Object.defineProperty
MISSING: Object.defineProperties
MISSING: Object.entries
MISSING: Object.freeze
MISSING: Object.fromEntries
MISSING: Object.getOwnPropertyDescriptor
MISSING: Object.getOwnPropertyDescriptors
MISSING: Object.getOwnPropertyNames
MISSING: Object.getOwnPropertySymbols
MISSING: Object.getPrototypeOf
MISSING: Object.is
MISSING: Object.isExtensible
MISSING: Object.isFrozen
MISSING: Object.isSealed
MISSING: Object.keys
MISSING: Object.preventExtensions
MISSING: Object.seal
MISSING: Object.setPrototypeOf
MISSING: Object.values

PRESENT: typeof Object.prototype.constructor = "function"
PRESENT: typeof Object.prototype.hasOwnProperty = "function"
PRESENT: typeof Object.prototype.isPrototypeOf = "function"
PRESENT: typeof Object.prototype.propertyIsEnumerable = "function"
PRESENT: typeof Object.prototype.toLocaleString = "function"
PRESENT: typeof Object.prototype.toString = "function"
PRESENT: typeof Object.prototype.valueOf = "function"



MISSING: Number.EPSILON
MISSING: Number.MAX_SAFE_INTEGER
MISSING: Number.MIN_SAFE_INTEGER
MISSING: Number.isNaN
MISSING: Number.isFinite
MISSING: Number.isInteger
MISSING: Number.isSafeInteger
MISSING: Number.toInteger
MISSING: Number.parseFloat
MISSING: Number.parseInt



MISSING: Math.acosh
MISSING: Math.asinh
MISSING: Math.atanh
MISSING: Math.cbrt
MISSING: Math.clz32
MISSING: Math.cosh
MISSING: Math.expm1
MISSING: Math.fround
MISSING: Math.hypot
MISSING: Math.imul
MISSING: Math.log1p
MISSING: Math.log10
MISSING: Math.log2
MISSING: Math.sign
MISSING: Math.sinh
MISSING: Math.tanh
MISSING: Math.trunc

MISSING: Date.now

MISSING: Date.prototype.toISOString
MISSING: Date.prototype.toJSON

MISSING: String.fromCodePoint
MISSING: String.raw

MISSING: String.prototype.matchAll
MISSING: String.prototype.normalize

MISSING: RegExp.prototype.flags
MISSING: RegExp.prototype.dotAll
MISSING: RegExp.prototype.sticky
MISSING: RegExp.prototype.unicode
MISSING: RegExp.prototype.match
MISSING: RegExp.prototype.matchAll
MISSING: RegExp.prototype.replace
MISSING: RegExp.prototype.search
MISSING: RegExp.prototype.split

MISSING: Array.from
MISSING: Array.isArray
MISSING: Array.of

MISSING: Array.prototype.entries
MISSING: Array.prototype.keys
MISSING: Array.prototype.reduce
MISSING: Array.prototype.reduceRight
MISSING: Array.prototype.values
*/


/*








ORIGINAL::::













PRESENT: typeof this.eval = "function"
MISSING: this.uneval
PRESENT: typeof this.isFinite = "function"
PRESENT: typeof this.isNaN = "function"
PRESENT: typeof this.parseFloat = "function"
PRESENT: typeof this.parseInt = "function"
PRESENT: typeof this.decodeURI = "function"
PRESENT: typeof this.decodeURIComponent = "function"
PRESENT: typeof this.encodeURI = "function"
PRESENT: typeof this.encodeURIComponent = "function"
PRESENT: typeof this.escape = "function"
PRESENT: typeof this.unescape = "function"
PRESENT: typeof this.Infinity = "number"
PRESENT: typeof this.NaN = "number"
MISSING: this.undefined
MISSING: this.null
MISSING: this.globalThis
PRESENT: typeof this.Object = "function"
PRESENT: typeof this.Function = "function"
PRESENT: typeof this.Boolean = "function"
MISSING: this.Symbol
PRESENT: typeof this.Error = "function"
PRESENT: typeof this.EvalError = "function"
MISSING: this.InternalError
PRESENT: typeof this.RangeError = "function"
PRESENT: typeof this.ReferenceError = "function"
PRESENT: typeof this.SyntaxError = "function"
PRESENT: typeof this.TypeError = "function"
PRESENT: typeof this.URIError = "function"
PRESENT: typeof this.Number = "function"
MISSING: this.BigInt
PRESENT: typeof this.Math = "object"
PRESENT: typeof this.Date = "function"
PRESENT: typeof this.String = "function"
PRESENT: typeof this.RegExp = "function"
PRESENT: typeof this.Array = "function"
MISSING: this.Int8Array
MISSING: this.Uint8Array
MISSING: this.Uint8ClampedArray
MISSING: this.Int16Array
MISSING: this.Uint16Array
MISSING: this.Int32Array
MISSING: this.Uint32Array
MISSING: this.Float32Array
MISSING: this.Float64Array
MISSING: this.Map
MISSING: this.Set
MISSING: this.WeakMap
MISSING: this.WeakSet
MISSING: this.ArrayBuffer
MISSING: this.SharedArrayBuffer
MISSING: this.Atomics
MISSING: this.DataView
MISSING: this.JSON
MISSING: this.Promise
MISSING: this.Generator
MISSING: this.GeneratorFunction
MISSING: this.AsyncFunction
MISSING: this.Reflect
MISSING: this.Proxy
MISSING: this.Intl
MISSING: this.WebAssembly

MISSING: Object.assign
MISSING: Object.create
MISSING: Object.defineProperty
MISSING: Object.defineProperties
MISSING: Object.entries
MISSING: Object.freeze
MISSING: Object.fromEntries
MISSING: Object.getOwnPropertyDescriptor
MISSING: Object.getOwnPropertyDescriptors
MISSING: Object.getOwnPropertyNames
MISSING: Object.getOwnPropertySymbols
MISSING: Object.getPrototypeOf
MISSING: Object.is
MISSING: Object.isExtensible
MISSING: Object.isFrozen
MISSING: Object.isSealed
MISSING: Object.keys
MISSING: Object.preventExtensions
MISSING: Object.seal
MISSING: Object.setPrototypeOf
MISSING: Object.values

PRESENT: typeof Object.prototype.constructor = "function"
MISSING: Object.prototype.__proto__
MISSING: Object.prototype.__noSuchMethod__
MISSING: Object.prototype.__count__
MISSING: Object.prototype.__parent__
MISSING: Object.prototype.__defineGetter__
MISSING: Object.prototype.__defineSetter__
MISSING: Object.prototype.__lookupGetter__
MISSING: Object.prototype.__lookupSetter__
PRESENT: typeof Object.prototype.hasOwnProperty = "function"
PRESENT: typeof Object.prototype.isPrototypeOf = "function"
PRESENT: typeof Object.prototype.propertyIsEnumerable = "function"
MISSING: Object.prototype.toSource
PRESENT: typeof Object.prototype.toLocaleString = "function"
PRESENT: typeof Object.prototype.toString = "function"
MISSING: Object.prototype.unwatch
PRESENT: typeof Object.prototype.valueOf = "function"
MISSING: Object.prototype.watch
MISSING: Object.prototype.eval

MISSING: Function.prototype.arguments
MISSING: Function.prototype.arity
MISSING: Function.prototype.caller
PRESENT: typeof Function.prototype.length = "number"
MISSING: Function.prototype.name
MISSING: Function.prototype.displayName
PRESENT: typeof Function.prototype.constructor = "function"
PRESENT: typeof Function.prototype.apply = "function"
MISSING: Function.prototype.bind
PRESENT: typeof Function.prototype.call = "function"
MISSING: Function.prototype.isGenerator
MISSING: Function.prototype.toSource
PRESENT: typeof Function.prototype.toString = "function"

PRESENT: typeof Boolean.prototype.constructor = "function"
MISSING: Boolean.prototype.toSource
PRESENT: typeof Boolean.prototype.toString = "function"
PRESENT: typeof Boolean.prototype.valueOf = "function"

MISSING: Number.EPSILON
MISSING: Number.MAX_SAFE_INTEGER
PRESENT: typeof Number.MAX_VALUE = "number"
MISSING: Number.MIN_SAFE_INTEGER
PRESENT: typeof Number.MIN_VALUE = "number"
PRESENT: typeof Number.NaN = "number"
PRESENT: typeof Number.NEGATIVE_INFINITY = "number"
PRESENT: typeof Number.POSITIVE_INFINITY = "number"
MISSING: Number.isNaN
MISSING: Number.isFinite
MISSING: Number.isInteger
MISSING: Number.isSafeInteger
MISSING: Number.toInteger
MISSING: Number.parseFloat
MISSING: Number.parseInt

PRESENT: typeof Number.prototype.toExponential = "function"
PRESENT: typeof Number.prototype.toFixed = "function"
PRESENT: typeof Number.prototype.toLocaleString = "function"
PRESENT: typeof Number.prototype.toPrecision = "function"
MISSING: Number.prototype.toSource
PRESENT: typeof Number.prototype.toString = "function"
PRESENT: typeof Number.prototype.valueOf = "function"

PRESENT: typeof Math.E = "number"
PRESENT: typeof Math.LN2 = "number"
PRESENT: typeof Math.LN10 = "number"
PRESENT: typeof Math.LOG2E = "number"
PRESENT: typeof Math.LOG10E = "number"
PRESENT: typeof Math.PI = "number"
PRESENT: typeof Math.SQRT1_2 = "number"
PRESENT: typeof Math.SQRT2 = "number"
PRESENT: typeof Math.abs = "function"
PRESENT: typeof Math.acos = "function"
MISSING: Math.acosh
PRESENT: typeof Math.asin = "function"
MISSING: Math.asinh
PRESENT: typeof Math.atan = "function"
MISSING: Math.atanh
PRESENT: typeof Math.atan2 = "function"
MISSING: Math.cbrt
PRESENT: typeof Math.ceil = "function"
MISSING: Math.clz32
PRESENT: typeof Math.cos = "function"
MISSING: Math.cosh
PRESENT: typeof Math.exp = "function"
MISSING: Math.expm1
PRESENT: typeof Math.floor = "function"
MISSING: Math.fround
MISSING: Math.hypot
MISSING: Math.imul
PRESENT: typeof Math.log = "function"
MISSING: Math.log1p
MISSING: Math.log10
MISSING: Math.log2
PRESENT: typeof Math.max = "function"
PRESENT: typeof Math.min = "function"
PRESENT: typeof Math.pow = "function"
PRESENT: typeof Math.random = "function"
PRESENT: typeof Math.round = "function"
MISSING: Math.sign
PRESENT: typeof Math.sin = "function"
MISSING: Math.sinh
PRESENT: typeof Math.sqrt = "function"
PRESENT: typeof Math.tan = "function"
MISSING: Math.tanh
MISSING: Math.toSource
MISSING: Math.trunc

MISSING: Date.now
PRESENT: typeof Date.parse = "function"
PRESENT: typeof Date.UTC = "function"

PRESENT: typeof Date.prototype.getDate = "function"
PRESENT: typeof Date.prototype.getDay = "function"
PRESENT: typeof Date.prototype.getFullYear = "function"
PRESENT: typeof Date.prototype.getHours = "function"
PRESENT: typeof Date.prototype.getMilliseconds = "function"
PRESENT: typeof Date.prototype.getMinutes = "function"
PRESENT: typeof Date.prototype.getMonth = "function"
PRESENT: typeof Date.prototype.getSeconds = "function"
PRESENT: typeof Date.prototype.getTime = "function"
PRESENT: typeof Date.prototype.getTimezoneOffset = "function"
PRESENT: typeof Date.prototype.getUTCDate = "function"
PRESENT: typeof Date.prototype.getUTCDay = "function"
PRESENT: typeof Date.prototype.getUTCFullYear = "function"
PRESENT: typeof Date.prototype.getUTCHours = "function"
PRESENT: typeof Date.prototype.getUTCMilliseconds = "function"
PRESENT: typeof Date.prototype.getUTCMinutes = "function"
PRESENT: typeof Date.prototype.getUTCMonth = "function"
PRESENT: typeof Date.prototype.getUTCSeconds = "function"
PRESENT: typeof Date.prototype.getYear = "function"
PRESENT: typeof Date.prototype.setDate = "function"
PRESENT: typeof Date.prototype.setFullYear = "function"
PRESENT: typeof Date.prototype.setHours = "function"
PRESENT: typeof Date.prototype.setMilliseconds = "function"
PRESENT: typeof Date.prototype.setMinutes = "function"
PRESENT: typeof Date.prototype.setMonth = "function"
PRESENT: typeof Date.prototype.setSeconds = "function"
PRESENT: typeof Date.prototype.setTime = "function"
PRESENT: typeof Date.prototype.setUTCDate = "function"
PRESENT: typeof Date.prototype.setUTCFullYear = "function"
PRESENT: typeof Date.prototype.setUTCHours = "function"
PRESENT: typeof Date.prototype.setUTCMilliseconds = "function"
PRESENT: typeof Date.prototype.setUTCMinutes = "function"
PRESENT: typeof Date.prototype.setUTCMonth = "function"
PRESENT: typeof Date.prototype.setUTCSeconds = "function"
PRESENT: typeof Date.prototype.setYear = "function"
PRESENT: typeof Date.prototype.toDateString = "function"
MISSING: Date.prototype.toISOString
MISSING: Date.prototype.toJSON
PRESENT: typeof Date.prototype.toGMTString = "function"
PRESENT: typeof Date.prototype.toLocaleDateString = "function"
MISSING: Date.prototype.toLocaleFormat
PRESENT: typeof Date.prototype.toLocaleString = "function"
PRESENT: typeof Date.prototype.toLocaleTimeString = "function"
MISSING: Date.prototype.toSource
PRESENT: typeof Date.prototype.toString = "function"
PRESENT: typeof Date.prototype.toTimeString = "function"
PRESENT: typeof Date.prototype.toUTCString = "function"
PRESENT: typeof Date.prototype.valueOf = "function"
MISSING: Date.prototype.undefined

PRESENT: typeof String.fromCharCode = "function"
MISSING: String.fromCodePoint
MISSING: String.raw

PRESENT: typeof String.prototype.constructor = "function"
PRESENT: typeof String.prototype.length = "number"
PRESENT: typeof String.prototype.charAt = "function"
PRESENT: typeof String.prototype.charCodeAt = "function"
MISSING: String.prototype.codePointAt
PRESENT: typeof String.prototype.concat = "function"
MISSING: String.prototype.includes
MISSING: String.prototype.endsWith
PRESENT: typeof String.prototype.indexOf = "function"
PRESENT: typeof String.prototype.lastIndexOf = "function"
PRESENT: typeof String.prototype.localeCompare = "function"
PRESENT: typeof String.prototype.match = "function"
MISSING: String.prototype.matchAll
MISSING: String.prototype.normalize
MISSING: String.prototype.padEnd
MISSING: String.prototype.padStart
MISSING: String.prototype.quote
MISSING: String.prototype.repeat
PRESENT: typeof String.prototype.replace = "function"
PRESENT: typeof String.prototype.search = "function"
PRESENT: typeof String.prototype.slice = "function"
PRESENT: typeof String.prototype.split = "function"
MISSING: String.prototype.startsWith
PRESENT: typeof String.prototype.substr = "function"
PRESENT: typeof String.prototype.substring = "function"
PRESENT: typeof String.prototype.toLocaleLowerCase = "function"
PRESENT: typeof String.prototype.toLocaleUpperCase = "function"
PRESENT: typeof String.prototype.toLowerCase = "function"
MISSING: String.prototype.toSource
PRESENT: typeof String.prototype.toString = "function"
PRESENT: typeof String.prototype.toUpperCase = "function"
MISSING: String.prototype.trim
MISSING: String.prototype.trimStart
MISSING: String.prototype.trimLeft
MISSING: String.prototype.trimEnd
MISSING: String.prototype.trimRight
PRESENT: typeof String.prototype.valueOf = "function"

PRESENT: typeof RegExp.prototype.constructor = "function"
MISSING: RegExp.prototype.flags
MISSING: RegExp.prototype.dotAll
PRESENT: typeof RegExp.prototype.global = "boolean"
PRESENT: typeof RegExp.prototype.ignoreCase = "boolean"
PRESENT: typeof RegExp.prototype.multiline = "boolean"
PRESENT: typeof RegExp.prototype.source = "string"
MISSING: RegExp.prototype.sticky
MISSING: RegExp.prototype.unicode
PRESENT: typeof RegExp.prototype.compile = "function"
PRESENT: typeof RegExp.prototype.exec = "function"
PRESENT: typeof RegExp.prototype.test = "function"
MISSING: RegExp.prototype.toSource
PRESENT: typeof RegExp.prototype.toString = "function"
MISSING: RegExp.prototype.match
MISSING: RegExp.prototype.matchAll
MISSING: RegExp.prototype.replace
MISSING: RegExp.prototype.search
MISSING: RegExp.prototype.split

MISSING: Array.from
MISSING: Array.isArray
MISSING: Array.of

PRESENT: typeof Array.prototype.constructor = "function"
PRESENT: typeof Array.prototype.length = "number"
MISSING: Array.prototype.copyWithin
MISSING: Array.prototype.fill
PRESENT: typeof Array.prototype.pop = "function"
PRESENT: typeof Array.prototype.push = "function"
PRESENT: typeof Array.prototype.reverse = "function"
PRESENT: typeof Array.prototype.shift = "function"
PRESENT: typeof Array.prototype.sort = "function"
PRESENT: typeof Array.prototype.splice = "function"
PRESENT: typeof Array.prototype.unshift = "function"
PRESENT: typeof Array.prototype.concat = "function"
MISSING: Array.prototype.includes
MISSING: Array.prototype.indexOf
PRESENT: typeof Array.prototype.join = "function"
MISSING: Array.prototype.lastIndexOf
PRESENT: typeof Array.prototype.slice = "function"
MISSING: Array.prototype.toSource
PRESENT: typeof Array.prototype.toString = "function"
PRESENT: typeof Array.prototype.toLocaleString = "function"
MISSING: Array.prototype.entries
MISSING: Array.prototype.every
MISSING: Array.prototype.filter
MISSING: Array.prototype.find
MISSING: Array.prototype.findIndex
MISSING: Array.prototype.forEach
MISSING: Array.prototype.keys
MISSING: Array.prototype.map
MISSING: Array.prototype.reduce
MISSING: Array.prototype.reduceRight
MISSING: Array.prototype.some
MISSING: Array.prototype.values
*/
