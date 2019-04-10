!function e(t){var r=unsafeWindow,qa="constructor",qb="prototype",qc="indexOf",qd="__proto__",qe=Object;if(!t){var n=r.Object,i=n.defineProperty,f=n.defineProperties;return n.freeze=n.seal=function(e){return e},n.defineProperty=function(e,t,r){r&&(r.configurable=!0),i(e,t,r)},n.defineProperties=function(e,t,r){if(r)for(var o in r)r.e.configurable=!0;f(e,t,r)},void window.addEventListener("load",e.bind(this,!0))}var u=[];function d(e,t){if(t||e!==qe){var r=["object","function"];if(void 0!==e&&null!==e&&-1!==r[qc](typeof e)&&-1===u[qc](e)){u.push(e);var o=qe.getOwnPropertyDescriptors(e);for(var n in o)if(e[n]!==qe&&(!delete e[n]||void 0!==e[n])&&-1!==r[qc](typeof e)&&e[n]!==e&&-1===u[qc](e[n]))try{d(e[n])}catch(e){}d(e[qd]),e[qa]&&e[qa][qb]&&(d(e[qa][qb]),d(e[qa][qb][qd])),qb in e&&(e[qb]=void 0)}}}d(r.window),d(r.window.Object,!0),delete r.window.Object;for(var p=0;p<u.length;p++)delete u[p]}();

//,n.seal.toSource=n.seal.toString=function(){return c[1]}
/*
(function haha(blaha){
  if(!blaha){
    var a = unsafeWindow.Object.defineProperty;
    var b = unsafeWindow.Object.defineProperties;
    unsafeWindow.Object.freeze = function(a){return a;};
    unsafeWindow.Object.freeze.toSource = function(){return "function freeze() {\n    [native code]\n}";};
    unsafeWindow.Object.freeze.toString = function(){return "function freeze() {\n    [native code]\n}";};
    unsafeWindow.Object.seal = function(a){return a;};
    unsafeWindow.Object.seal.toSource = function(){return "function seal() {\n    [native code]\n}";};
    unsafeWindow.Object.seal.toString = function(){return "function seal() {\n    [native code]\n}";};
    unsafeWindow.Object.defineProperty = function(b,c,d){if(d){d.configurable = true;}a(b,c,d);};
    unsafeWindow.Object.defineProperty.toSource = function(){return "function defineProperty() {\n    [native code]\n}";};
    unsafeWindow.Object.defineProperty.toString = function(){return "function defineProperty() {\n    [native code]\n}";};
    unsafeWindow.Object.defineProperties = function(a,c,d){if(d){for(var e in d){d.e.configurable = true;}}b(a,c,d);};
    unsafeWindow.Object.defineProperties.toSource = function(){return "function defineProperties() {\n    [native code]\n}";};
    unsafeWindow.Object.defineProperties.toString = function(){return "function defineProperties() {\n    [native code]\n}";};
    window.addEventListener("load",haha.bind(this,true));
    //this code transparently overrides the Object.freeze and Object.seal methods to return nothing.
    //this code transparently forces Object.defineProperty and Object.defineProperties to set the "configurable" option to "true"
    //in addition, it overrides the toSource and toString methods on the new functions to make these functions appear "normal" to unsuspecting webpages
    //due to this, any script executed from the console will be able to overwrite any page value as no object can be sealed.
    return;
  }
  var arr = [];
  function destroy(obj,override){
    if(!override && obj === Object) {
      return;
    }
    var allowed = ["object","function"];
    if (obj===undefined || obj === null || allowed.indexOf(typeof obj)===-1) {
      return;
    }
    if(arr.indexOf(obj) !== -1) {
      return;
    }
    arr.push(obj);
    var objdesc = Object.getOwnPropertyDescriptors(obj);
    for (var key in objdesc) {
      if(obj[key] === Object) {
        continue;
      }
      if (!(delete obj[key]) || obj[key] !== undefined) {
        if((allowed.indexOf(typeof obj)!==-1)  && obj[key] !== obj && arr.indexOf(obj[key])===-1) {
          try{
            destroy(obj[key]);
          }catch(err){}
        }
      }
    }
    destroy(obj.__proto__);
    if(obj.constructor && obj.constructor.prototype) {
      destroy(obj.constructor.prototype);
      destroy(obj.constructor.prototype.__proto__);
    }
    if("prototype" in obj) {
      obj.prototype = undefined;
    }
  }
  destroy(unsafeWindow.window);
  destroy(unsafeWindow.window.Object,true);
  delete unsafeWindow.window.Object;
  for(var j=0;j<arr.length;j++){
    delete arr[j];
  }
})();
*/


/*
standalone version
(function (){
  var arr = [];
  function destroy(obj,override){
    if(!override && obj === Object) {
      return;
    }
    var allowed = ["object","function"];
    if (obj===undefined || obj === null || allowed.indexOf(typeof obj)===-1) {
      return;
    }
    if(arr.indexOf(obj) !== -1) {
      return;
    }
    arr.push(obj);
    var objdesc = Object.getOwnPropertyDescriptors(obj);
    for (var key in objdesc) {
      if(obj[key] === Object) {
        continue;
      }
      if (!(delete obj[key]) || obj[key] !== undefined) {
        if((allowed.indexOf(typeof obj)!==-1)  && obj[key] !== obj && arr.indexOf(obj[key])===-1) {
          try{
            destroy(obj[key]);
          }catch(err){}
        }
      }
    }
    destroy(obj.__proto__);
    if(obj.constructor && obj.constructor.prototype) {
      destroy(obj.constructor.prototype);
      destroy(obj.constructor.prototype.__proto__);
    }
    if("prototype" in obj) {
      obj.prototype = undefined;
    }
  }
  destroy(window);
  destroy(window.Object,true);
  delete window.Object;
  for(var j=0;j<arr.length;j++){
    delete arr[j];
  }
})();

*/
