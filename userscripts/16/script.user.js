//this is the contents of the script
function main(){
    //Your Script here
    var a=document.querySelectorAll("a[target]");
    for(var i=0;i<a.length;i++)
        a[i].removeAttribute("target");
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
