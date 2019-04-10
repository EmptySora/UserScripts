if(window.location.href.toString().startsWith("https://addons.mozilla.org/en-US/firefox/addon/")) {
    window.addEventListener("load",function(){
        var persona=JSON.parse(document.querySelector(".persona.install").getAttribute("data-browsertheme"));
        var colorkeys="accentcolor,textcolor,toolbar,toolbar_text,toolbar_field,toolbar_field_text".split(",");
        var metakeys="category,name,author,version,description,id".split(",");
        var i=0;
        var ck="";
        var tabqueue=[];

        var themedata={images:{},colors:{}};
        var metadata={};
        for(i=0;i<colorkeys.length;i++){
            ck=colorkeys[i];
            if(typeof persona[ck]!=="undefined")themedata.colors[ck]=persona[ck];
        }
        for(i=0;i<metakeys.length;i++){
            ck=metakeys[i];
            if(typeof persona[ck]!=="undefined")metadata[ck]=persona[ck];
        }
        if("detailURL" in persona)
            metadata.download=persona.detailURL;
        if("headerURL" in persona)
        {
            var url=persona.headerURL;
            var parts=url.split("?")[0].split("#")[0].split(".");
            var xurl=parts[parts.length-1];
            themedata.images.headerURL="resources/"+persona.id+"/header."+xurl;
            metadata.originalHeaderURL=url;
            tabqueue.push(url);
        }
        if("iconURL" in persona)
        {
            var urlb=persona.iconURL;
            var partsb=urlb.split("?")[0].split("#")[0].split(".");
            var xurlb=partsb[partsb.length-1];
            metadata.icon="resources/"+persona.id+"/icon."+xurlb;
            metadata.originalIconURL=urlb;
            tabqueue.push(urlb);
        }
        var tcall="ThemeManager.RegisterTheme("+JSON.stringify(themedata)+","+JSON.stringify(metadata)+");";

        var button=document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","RetrieveThemeResources");
        button.setAttribute("style","position:fixed !important;top:0 !important;left:0 !important;z-index:999999 !important;");
        button.addEventListener("click",function(){
            alert(tcall);
            for(var j=0;j<tabqueue.length;j++){
                window.open(tabqueue[j]);
            }
        });
        document.body.appendChild(button);
    });
}
