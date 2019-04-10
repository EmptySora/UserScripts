function BlockList(){
    var blobs=[];
    this.Add=function(blob,action,data){
        blobs.push({blob:blob,action:action,data:data});
    };
    this.Retrieve=function(){
        return blobs;
    };
    this.Block=function(blob){
        this.Add(blob,"redirect","about:blank");
    };
    this.Message=function(blob,msg){
        this.Add(blob,"message",msg);
    };
    this.BlockDomain=function(domain,bProto,bSub,bReq){
        this.Block(domain);
        if(bProto){
            
        }else{
            
        }
    };
    this.BlockAll=function(domain){
        this.Block("*://"+domain);
        this.Block("*://"+domain+"/*");
        this.Block("*://*."+domain);
        this.Block("*://*."+domain+"/*");
    };
    var queries=[];
    var searchEngines=[];
    this.AddSearchEngine=function(blob){
        searchEngines.push({data:blob,type:'regex'});
    }
    this.AddSearchEngineAdvanced=function(options){
        //{host:'host url, eg: http://www.google.com, wildcards allowed',
        // kind:'query|file name',
        // data}
    };
    this.BlockQuery=function(query){
        queries.push(query);
    }
    //use *** to denote the area where the queries are
}
var Blacklist=new BlockList();
//{blob:'url',action:'redirect|message',data:'redirect url|html message'}

/****************************
 * BEGIN CONFIGURATION AREA *
 ****************************/
 
 //To add an entry to the block list, call "Blacklist.Add(blob,action,data)"
 //example: Blacklist.Add('google.com','redirect','127.0.0.1')
 //use "*" as a wildcard
// Blacklist.Add("*//www.google.com/*",'redirect','about:blank');

/*
Blacklist.BlockAll("gelbooru.com");
Blacklist.BlockAll("rule34.xxx");
Blacklist.BlockAll("hypnohub.net");
Blacklist.Block("*://rule34.paheal.net");
Blacklist.Block("*://rule34.paheal.net/*");
*/


//to block search queries, add queries and engines like this:
//*://www.google.com/search?*&q=***&?****
//the ***&?*** means that any character excluding "&" and "?"
//use decodeURIComponent to make the query readable

//you can also use the other function, to add an advanced rule
 
/****************************
 *  END CONFIGURATION AREA  *
 ****************************/
 
 
 var url=window.location.toString();
 var blobs=Blacklist.Retrieve();
 var match=false;
 for(var i=0;i<blobs.length;i++){
    var reg=createRegex(blobs[i].blob);
    console.log(reg);
    if(url.search(reg)!=-1){
        console.log("MATCHED");
        match=blobs[i];
        break;
    }
 }
 if(match!==false){
    switch(match.action.toLowerCase()){
        case "redirect":
            window.location=match.data;
            break;
        case "message":
            document.write(match.data);
            window.stop();//cancel page load
            break;
    }
 }
 console.log(blobs);
 function createRegex(url){
    var esc=url.replace(/([\/\.\+\?\^\=\!\:\$\{\}\(\)\|\\])/g,"\\$1");
    return eval("/"+esc.replace("*",".*")+"/i");//change to "every asterisk, not preceeded by a backslash" (escaping), and then afterwards do a second replace with "\\*" to "*"
 }
