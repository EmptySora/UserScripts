//this is the contents of the script
function main(){
    //Your Script here
    unsafeWindow.Event.prototype.preventDefault = function preventDefault() { };
    var blocks = unsafeWindow.document.getElementsByClassName("html5-video-content");
    for(var i=0;i<blocks.length;i++) {
        blocks[i].parentElement.removeChild(blocks[i]);
    }
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);    
} else {
    main();
}

