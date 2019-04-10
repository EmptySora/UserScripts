unsafeWindow.play=function(){
    var audio = new Audio("tuturu.mp3");
    audio.play();
};
var xa=0;
unsafeWindow.loop=function myfunction(w,x){play();setTimeout(myfunction,x||10+rand(0,10000));};
unsafeWindow.loopb=function myfunctionb(w,x){
    play();
    setTimeout(myfunctionb,x||10+rand(0,10000));
    if(rand(0,100)>90) {
        setTimeout(myfunctionb,x||10+rand(0,100));
        xa++;
        console.warn("Tuturu-ing: "+xa+" times!");
    }
};
unsafeWindow.rand=function(min,max){return Math.floor(Math.random()*(max-min))+min;};
