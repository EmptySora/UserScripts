/*
Encrypted Media Extensions is the W3C's peer-pressured recommendation to include DRM in your web browser.
This script runs before any page scripts and destroys all of the APIs associated with the Encrytped Media Extensions standard.
In doing so, it re-defines those properties as unconfigurable, onqueryable, unwritable, static "undefined" values.

This effectively blocks all forms of Digital Rights Management via the EME interface. (Though this DRM content will not be playable)
Frankly, I don't give a damn.
*/
var keys=[
    "MediaKeyMessageEvent",
    "MediaKeys",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeySystemAccess",
    "MediaKeySystemConfiguration",
    "MediaKeyError",
    "MediaEncryptedEvent"
];
var i;
var key;
for (i = 0;i <keys.length;i++){
    key=keys[i];
    try {
        delete unsafeWindow[key];
        unsafeWindow.Object.defineProperty(unsafeWindow,key,{value:undefined,writable:false});
    } catch (err) { }
}
