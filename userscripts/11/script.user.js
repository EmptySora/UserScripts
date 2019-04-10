//this is the contents of the script
function main(){
    //Your Script here
    var c=document.querySelectorAll("strong.user>em");
    for(var i=0;i<c.length;i++) {
        c[i].textContent = c[i]
            .textContent
            .replace(/\u0020at\u0020/g,"@")
            .replace(/\u0020dot\u0020/g,".");
    }
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
