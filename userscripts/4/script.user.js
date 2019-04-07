//this is the contents of the script
function extract_table_columnCALLBACK(table,col,callback){
    var tab=null;
    if(typeof table=="string"){
        tab=document.getElementById(table);
    }else{
        tab=table;
    }
    var rows=tab.rows;
    var ret=[];
    for(var i=0;i<rows.length;i++){
        var row=rows[i];
        ret.push(callback(row.cells[col]));
    }
    return ret;
}

function getLinks(){
    var links = extractLinks();
    var body=document.getElementsByTagName("body")[0];
    var head=document.getElementsByTagName("head")[0];
    body.innerHTML="<pre>"+links+"</pre>";
    head.innerHTML="";
}
function extractLinks() {
    var linkz=extract_table_columnCALLBACK("targetTable",1,function(param){
        var links=param.firstChild;
        if(links!==null) {
            return links.href;
        }
        return "";
    });
    var ret=linkz.join("\r\n");
    return ret;
}
function main(){
    //Your Script here
    document.getElementById("EchoTopic").getElementsByTagName("table")[0].id="targetTable";
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="GET LINKS";
    btn.style.zIndex="1000000000";
    btn.style.position="fixed";
    btn.style.top="0px";
    btn.style.left="0px";
    document.getElementsByTagName("body")[0].appendChild(btn);
    btn.addEventListener("click",getLinks);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);    
} else {
    main();
}

