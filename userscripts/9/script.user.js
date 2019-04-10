//this is the contents of the script
function main(){
    //Your Script here
    document.getElementsByClassName("ytp-large-play-button ytp-button")[0].click();
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
