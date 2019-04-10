if(document.body.innerHTML.indexOf("http://adf.ly")!==-1)
{
    unsafeWindow.open=function(){console.error("WINDOW ATTEMPTED TO OPEN",arguments);return unsafeWindow;};
    console.error("DESTROY");
}
