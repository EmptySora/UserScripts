unsafeWindow.console.log(unsafeWindow);
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
//this code transparently overrides the Object.freeze and Object.seal methods to return nothing.
//this code transparently forces Object.defineProperty and Object.defineProperties to set the "configurable" option to "true"
//in addition, it overrides the toSource and toString methods on the new functions to make these functions appear "normal" to unsuspecting webpages
//due to this, any script executed from the console will be able to overwrite any page value as no object can be sealed.
