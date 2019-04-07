//this is the contents of the script
function main(){
    //Your Script here
    window.setInterval(function(){
        var x = document.querySelectorAll("iframe");
        var i;
        for (i = 0; i< x.length; i += 1) {
            var y = x[i];
            if (y.src=="about:blank") {
                y.parentElement.removeChild(y);
            }
        }
    }, 1000);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);    
} else {
    main();
}

