//this is the contents of the script
function main(){
    //Your Script here
    var x=document.createElement("style");
    x.setAttribute("type","text/css");
    x.innerHTML="input[type=\"email\"],input[type=\"number\"],input[type=\"password\"],input[type=\"search\"],input[type=\"tel\"],input[type=\"text\"],input[type=\"date\"],input[type=\"datetime\"],input[type=\"datetime-local\"],input[type=\"month\"],input[type=\"time\"],input[type=\"url\"],input[type=\"week\"],textarea{color:#E00707 !important}";
    document.querySelector("head").appendChild(x);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
