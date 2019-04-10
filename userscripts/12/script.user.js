//this is the contents of the script
function main(){
    //Your Script here
    var x=document.querySelectorAll("a.image.image-thumbnail.link-external");
    for(var i=0,j=null;j=x[i];i++){
        if(j.getAttribute("href").startsWith("http://www.mspaintadventures.com/?s=6&p=")){
            j.insertAdjacentHTML("afterbegin","("+j.getAttribute("href").substr(-4,4));
            j.insertAdjacentHTML("beforeend",") ");
        }
    }
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
