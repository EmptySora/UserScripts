//this is the contents of the script
function main(){
    //Your Script here
    try {
        var vtags = document.getElementsByTagName("video");
        var atags = document.getElementsByTagName("audio");
        var tag=null;
        if(vtags.length>0){
            tag = vtags[0];
        }else{
            tag = atags[0];
        }
        tag.setAttribute("loop", "loop");
    } catch (e) { }
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);    
} else {
    main();
}

