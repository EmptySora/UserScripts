function main(){
    var x = document.querySelector("body");
    var y = document.createElement("DIV");
    y.setAttribute("style","top:50px;left:0px;position:fixed;z-index:999;");
    y.innerHTML = "<input type='button' onclick='window.location=window.location.toString().replace(\"www.youtube.com\",\"www.youtuberepeat.com\")' value='Listen on Repeat'>";
    x.appendChild(y);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);    
} else {
    main();
}

