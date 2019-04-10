//this is the contents of the script
function main(){
    //Your Script here
    window.setInterval(function(){
        var articles=document.querySelectorAll("article");
        while(articles.length>25){
            var article=articles[0];
            var height=Math.round(article.getBoundingClientRect().height);
            window.scrollBy(0,-height);
            article.parentElement.removeChild(article);
            articles=document.querySelectorAll("article");
        }

    },60000);

}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
