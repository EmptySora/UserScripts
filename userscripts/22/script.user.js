window.addEventListener("load",function(){
window.pe=document.querySelectorAll("p");
var sp=document.querySelectorAll("span");


for(var i=0,j=null;j=sp[i];i++){
try{
j.setAttribute("oldHTML",j.innerHTML);
j.setAttribute("onmouseover","this.innerHTML=this.getAttribute('oldHTML');");
j.setAttribute("onmouseout","this.innerHTML=this.getAttribute('newHTML');");
try{
if(!j.innerHTML.match(/[A-Za-z\d]/)){
var x=j.innerHTML.replace(/[\.\-]+/g,function(a){
var mux={
".-":"A",
"-...":"B",
"-.-.":"C",
"-..":"D",
".":"E",
"..-.":"F",
"--.":"G",
"....":"H",
"..":"I",
".---":"J",
"-.-":"K",
".-..":"L",
"--":"M",
"-.":"N",
"---":"O",
".--.":"P",
"--.-":"Q",
".-.":"R",
"...":"S",
"-":"T",
"..-":"U",
"...-":"V",
".--":"W",
"-..-":"X",
"-.--":"Y",
"--..":"Z",
".----":"1",
"..---":"2",
"...--":"3",
"....-":"4",
".....":"5",
"-....":"6",
"--...":"7",
"---..":"8",
"----.":"9",
"-----":"0",
};

return mux[a]||a;
}).split("/");
for(var k=0;k<x.length;k++)
x[k]=x[k].replace(/\s/g,"");
j.innerHTML=x.join(" ");
}
}catch(err){console.error(err.toString());}

if(j.getAttribute("style").endsWith("008282")){
j.innerHTML=j.innerHTML.replace(/\d/g,function(a){
switch(parseInt(a)){
case 1:return "I";
case 2:return "S";
case 3:return "E";
case 4:return "A";
case 8:return "B";
default:return a;
}
}).replace(/<E/g,"<3");
}else if(j.getAttribute("style").endsWith("a1a100")){
j.innerHTML=j.innerHTML.replace(/[1234]/g,function(a){
switch(parseInt(a)){
//case 1:return "I";
case 2:return "s";
//case 3:return "E";
//case 4:return "A";
default:return a;
}
}).replace(/i{2}/g,"i").replace(/I{2}/g,"I").replace(/two/g,"to");
}else if(j.getAttribute("style").endsWith("a10000")){
j.innerHTML=j.innerHTML.replace(/[0]/g,function(a){
switch(parseInt(a)){
//case 1:return "I";
case 0:return "o";
//case 3:return "E";
//case 4:return "A";
default:return a;
}
}).replace(/i{2}/g,"i");
}else if(j.getAttribute("style").endsWith("008141"))j.innerHTML=j.innerHTML.substr(0,4)+j.innerHTML.substr(4).toLowerCase();
else if(j.getAttribute("style").endsWith("a15000"))j.innerHTML=j.innerHTML.split(":",2)[0]+":"+j.innerHTML.split(":",2)[1].replace(/[A-Za-z]/g,function(a){if("abcdefghijklmnopqrstuvwxyz".indexOf(a)!==-1)return a.toUpperCase();return a.toLowerCase();});
else if(j.getAttribute("style").endsWith("77003c"))j.innerHTML=j.innerHTML.replace(/\)\(/g,"h").replace(/\-/g,"");
else if(j.getAttribute("style").endsWith("000056"))j.innerHTML=j.innerHTML.replace("D --&gt; ","").replace(/\%/g,"x").replace(/100/g,"loo");
else if(j.getAttribute("style").endsWith("6a006a"))j.innerHTML=j.innerHTML.replace(/[vwVW]{2}/g,function(a){return a[0];});
else if(j.getAttribute("style").endsWith("FFFFFF")){j.style.backgroundColor="rgb(51,152,255)";j.style.textShadow="1px 1px black,-1px 1px black,1px -1px black,-1px -1px black";}
else if(j.getAttribute("style").endsWith("ffffff")){j.style.backgroundColor="rgb(51,152,255)";j.style.textShadow="1px 1px black,-1px 1px black,1px -1px black,-1px -1px black";}
else if(j.getAttribute("style").endsWith("white")){j.style.backgroundColor="rgb(51,152,255)";j.style.textShadow="1px 1px black,-1px 1px black,1px -1px black,-1px -1px black";}
else if(j.getAttribute("style").endsWith("2b0057"))j.innerHTML=j.innerHTML.toUpperCase()+" ";
else if(j.getAttribute("style").endsWith("005682")){


var oh="";
var nh=j.innerHTML;
var lookuptable=[
["rt","a"],
[/\s[AEIOUaeiou]/,"b"],
[" y","b"],
[" r","b"],
[" l","b"],
["il","b"],
["W,","ait"],
[/[AOUuao]\s/,"b"],
[/[^\s][AEIOUaeiou]/,"b"],
[/[AOUuao][^\s]/,"b"],
];//BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz
var lookuptableb=[//use this for case by case situations
[/ul8te/gi,function(a){return a.replace("8","a");}],
[/\sungr8ful/gi,function(a){return a.replace("8","ate");}],
[/\snause8ting/gi,function(a){return a.replace("8","a");}],
[/\sexcruci8tingly/gi,function(a){return a.replace("8","a");}],
[/\sultim8/gi,function(a){return a.replace("8","ate");}],
[/\s8n\'t/gi,function(a){return a.replace("8","ai");}],
[/\s[w]8(ing)?/gi,function(a){return a.replace("8","ait");}],
[/\s[fl]8?/gi,function(a){return a.replace("8","ate");}],
[/\sh8s/gi,function(a){return a.replace("8","ate");}],
[/\sfrustr8ing/gi,function(a){return a.replace("8","at");}],
[/\svindic8ed/gi,function(a){return a.replace("8","at");}],
[/\gr8/gi,function(a){return a.replace("8","eat");}],
[/\incapacit8ed/gi,function(a){return a.replace("8","at");}],
[/\s8r8k/gi,function(a){return " b"+a.substr(2).replace("8","ea");}],
[/\scre8te/gi,function(a){return a.replace("8","a");}]
]
while(oh!==nh){
oh=nh;
for(var k=0;k<lookuptableb.length;k++){
var x=lookuptableb[k];
nh=nh.replace(x[0],x[1]);
}
}
oh="";
while(oh!==nh){
oh=nh;
nh=oh.replace(/(.)8(.)/g,function(a,b,c){
for(var i=0;i<lookuptable.length;i++){
var x=lookuptable[i];
if(typeof x[0]!=="string"){
if((b+c).match(x[0]))
return b+x[1]+c;
}else if((b+c)==x[0])
return b+x[1]+c;
}
return a;
});

}
j.innerHTML=nh;
}
j.setAttribute("newHTML",j.innerHTML);
}
catch(err){console.error(err.toString());}
}







for(var i=0,j=null;j=window.pe[i];i++){
try{
if(!j.innerHTML.match(/[A-Za-z\d]/)){
var x=j.innerHTML.replace(/[\.\-]+/g,function(a){
var mux={
".-":"A",
"-...":"B",
"-.-.":"C",
"-..":"D",
".":"E",
"..-.":"F",
"--.":"G",
"....":"H",
"..":"I",
".---":"J",
"-.-":"K",
".-..":"L",
"--":"M",
"-.":"N",
"---":"O",
".--.":"P",
"--.-":"Q",
".-.":"R",
"...":"S",
"-":"T",
"..-":"U",
"...-":"V",
".--":"W",
"-..-":"X",
"-.--":"Y",
"--..":"Z",
".----":"1",
"..---":"2",
"...--":"3",
"....-":"4",
".....":"5",
"-....":"6",
"--...":"7",
"---..":"8",
"----.":"9",
"-----":"0",
};

return mux[a]||a;
}).split("/");
for(var k=0;k<x.length;k++)
x[k]=x[k].replace(/\s/g,"");
j.innerHTML=x.join(" ");
}
}catch(err){console.error(err.toString());}
}

var complexissues=[10027,"[S] ACT 7",9987,"[S] Collide.",9535,"[S][A6A6I5] ====>",10027,"[S] ACT 7",9987,"[S] Collide.",9859,"[S] Terezi: Remem8er.",9828,"[S][A6A6I5] ====>",9723,"[S][A6A6I5] ====>",9535,"[S][A6A6I5] ====>",9349,"[S] ACT 6 ACT 6 INTERMISSION 5",9348,"[S] MSPA Reader: Mental breakdown.",9309,"[S] ACT 6 ACT 6 ACT 5",9305,"[S][A6A6I4] ====>",9001,"[S][A6A6I4] ====>",9000,"[S][A6A6I4] ====>",8998,"[S][A6A6I4] ====>",8986,"[S][A6A6I4] ====>",8843,"[S] BYE FOREVER, ALMOST.",8801,"[S] GAME OVER.",8552,"[S][A6A6I2] ====>",8452,"[S][A6A6I2] ====>",8300,"[S][A6A6I1] ====>",8178,"[S] ACT 6 ACT 6 INTERMISSION 1",8143,"[S] ACT 6 ACT 6",8131,"[S][A6I5] ==>",7973,"[S][A6I5] ==>",7966,"[S] END OF ACT 6 INTERMISSION 5 INTERMISSION 4",7897,"[S][A6I5] ==>",7881,"[S][A6I5] BEGIN INTERFISHIN",7687,"[S] Caliborn + Gamzee: Engage.",7677,"[S] HA HA HA! HE HE HE! HO HO HO!",7676,"[S] WHEEEEEEEEEEE!",7664,"[S] ==>",7663,"[S] Tricksters: Alchemize.",7659,"[S] ==>",7640,"[S] ==>",7626,"[S] ==>",7614,"[S] ACT 6 ACT 5 ACT 2",7612,"[S] Jane: Blast off.",7611,"[S] Jane: Engage.",7555,"[S] Ride.",7412,"[S] ACT 6 ACT 5",7385,"[S][A6I4] ==>",7374,"[S][A6I4] ==>",7373,"[S][A6I4] ==>",7372,"[S][A6I4] ==>",7371,"[S][A6I4] ==>",7340,"[S] ==>",7338,"[S] ACT 6 ACT 4",7327,"[S][A6I3] MINISTRIFE!!!",7326,"[S][A6I3] ==>",7298,"[S][A6I3] ==>",7277,"[S][A6I3] ==>",7276,"[S][A6I3] ==>",7275,"[S][A6I3] ==>",7274,"[S][A6I3] ==>",7273,"[S][A6I3] ==>",7208,"[S][A6I3] ==>",7163,"[S] ACT 6 INTERMISSION 3",7161,"[S] Caliborn: Enter.",7152,"[S] Dirk: Unite.",7138,"[S] Dirk: Synchronize.",6927,"[S] Terry: Fast forward to Liv.",6844,"[S] DD: Ascend more casually.",6842,"[S] DD: Ascend.",6727,"[S] Jane: Cautiously approach.",6725,"[S] Jane: Proceed.",6720,"[S] ACT 6 ACT 3",6715,"[S][A6I2] ???",6565,"[S] Jane: Enter.",6517,"[S] Frigglish: Fast forward to Jaspersprite.",6472,"[S] Prince of Heart: Rise up.",6441,"[S] RAP-OFF!!!!!!!!!!",6386,"[S] Roxy: Sleepwalk.",6290,"[S] END OF ACT 6 INTERMISSION 1",6273,"[S][A6I1] Karkat: Mental breakdown.",6182,"[S] Jane: Get mail.",6175,"[S] ==>",6013,"[S] ACT 6",6011,"[S] Begin intermission 2.",6009,"[S] Cascade.",5985,"[S] Attempt rare and highly dangerous 5x SHOWDOWN COMBO.",5852,"[S][o] ==>",5760,"[S][o] Tick. Tock. Tick...",5751,"[S][o] Tick. Tock.",5660,"[S] Flip.",5644,"[S] Seer: Ascend.",5630,"[S] Terezi: Play tiny record.",5625,"[S] Terezi: Play records.",5618,"[S] Terezi: Read note.",5617,"[S] Terezi: Proceed.",5596,"[S] ==>",5595,"[S] Seer: Descend.",5579,"[S] All: Behold glory of Zillyhoo.",5420,"[S] 3x SHOWDOWN COMBO.",5338,"[S] Equius: Seek the highb100d.",5221,"[S] Kanaya: Return to the core.",5197,"[S] Wake.",4987,"[S] JOHN. RISE UP.",4979,"[S] John: Enter village.",4901,"[S] Jade: STRIFE!!!!!!!!!!!!",4888,"[S] ==>",4827,"[S] Jade: Enter.",4748,"[S] Jade: Wake up.",4692,"[S] Past Karkat: Wake up.",4687,"[S] Vriska: Watch street tough maverick with nothing to lose",4526,"[S] ACT 5 ACT 2 ==>",4478,"[S] Make her pay.",3840,"[S] Descend.",3831,"[S] John: Reunite with your loving wife and daughter.",3701,"[S] WV?: Rise up.",3620,"[S] Rose and Dave: Shut up and jam.",3568,"[S] Jack: Ascend.",3556,"[S] ==>",3541,"[S] Dave: Accelerate.",3307,"[S] ==>",3258,"[S] ACT 4 ==>",3167,"[S][I] ==>",3049,"[S] Enter.",2973,"[S] Jade: Pester John.",2970,"[S] Dave: Strife!",2926,"[S] Jade: Dream up extra arms and play advanced bass solo.",2880,"[S] Jade: Retrieve package.",2879,"[S] John: Mental breakdown.",2848,"[S] John: Examine your dad's room.",2838,"[S] Rose: Fast forward to now.",2818,"[S] Strife!!!",2779,"[S] Rose: Ascend.",2771,"[S] Dave: Abscond.",2743,"[S] Jade: Descend.",2736,"[S] Dave: STRIFE.",2733,"[S] MIDNIGHT CREW: ACT 1031",2730,"[S] Jade: Open FreshJamz!",2722,"[S] Jade: Play a hauntingly relaxing bassline.",2669,"[S] Jade: Play a silly flute refrain.",2657,"[S] WV: Ascend.",2655,"[S] WV: Hasten to the exit post-haste!",2621,"[S] WV: Lead your men to victory!",2565,"[S] Dave: Ascend to the highest point of the building.",2551,"[S] John: Wake up.",2544,"[S] John: Sleep.",2376,"[S] ==>",2344,"[S] Dave: Retrieve dead bird.",2322,"[S] GO ON. ==>",2318,"[S] WHAT THIS IS SO OUTRAGEOUS",2300,"[S] JOHN, SALVAGE YOUR WEAPON AND FIGHT ON!",2297,"[S] GET UP JOHN, THIS IS NO TIME FOR SLUMBER.",2293,"[S] ==>==>==>!!!!!!!!!",2288,"[S] Rose: Youth roll right out the front door.",2238,"[S] ==>",2207,"[S] ==>",2153,"[S] YOU THERE. BOY.",2150,"[S] ==>",2146,"[S] John: Take bite of apple.",2122,"[S] Rose: Play a haunting refrain on the violin.",2086,"[S] ==>",2037,"[S] ==>",2010,"[S] John: Check Pesterchum.",1990,"[S] STRIFE!",1988,"[S] John: Enter.",1982,"[S] ==>",1977,"[S] John: Play haunting piano refrain."];
var currentissue=parseInt("1"+window.location.toString().substr(window.location.toString().length-6,6))-1000000;
var nextissue=[0,10000000];
var nextnextissue=[0,10000000];
for(var i=0;i<complexissues.length;i+=2){
var cissue=complexissues[i];
var diff=cissue-currentissue;
if((diff>=0)&&(diff<nextissue[1])){
nextissue=[cissue,diff,complexissues[i+1]];
}
}
for(var i=0;i<complexissues.length;i+=2){
var cissue=complexissues[i];
var diff=cissue-currentissue;
if((diff>nextissue[1])&&(diff<nextnextissue[1])){
nextnextissue=[cissue,diff,complexissues[i+1]];
}
}
function element(a){return document.createElement(a);}
var adiv=new element("DIV");
var bdiv=new element("DIV");
adiv.setAttribute("style","width:100%;height:20px;top:0px;left:0px;background-color:#2F0000;z-index:999999;position:fixed;opacity:0.75");
bdiv.setAttribute("style","width:100%;height:20px;top:0px;left:0px;color:white;font-size:12pt;z-index:9999999;position:fixed;border-bottom:5px solid #7f0000;-moz-user-select:none;user-select:none;font-family:\"Cambria\",monospace");
adiv.style.backgroundImage="url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAAGXy9/eAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AcKAS0LsTdkBgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAOElEQVQI10XNuRHAQAzDwJX77xkO7stIARyJVFRu+/BOi+8QzeqomYqZ4JFNT1wW13zz9fSaR/gBE7Ey30pSgnYAAAAASUVORK5CYII=')";
var bhtml="";
if(nextissue[1]>0)
bhtml="<center>&QUOT;<i>"+nextissue[2]+"</i>&QUOT; in <b>"+nextissue[1]+"</b> Page"+((nextissue[1]==1)?"":"s")+"! (Page "+currentissue+" of "+nextissue[0]+") <span style='font-size:8pt'>[&QUOT;<i>"+nextnextissue[2]+"</i>&QUOT; in..."+nextnextissue[1]+"; "+currentissue+"/"+nextnextissue[0]+"]</span></center>";
else
bhtml="<center><b>CURRENTLY ON &QUOT;<i>"+nextissue[2]+"</i>&QUOT;!</b> <span style='font-size:8pt'>[&QUOT;<i>"+nextnextissue[2]+"</i>&QUOT; in..."+nextnextissue[1]+"; "+currentissue+"/"+nextnextissue[0]+"]</span></center>";

bdiv.innerHTML=bhtml;
bdiv.style.cursor="default";
document.querySelector("body").appendChild(adiv);
document.querySelector("body").appendChild(bdiv);


},false);


function sburbz(){
var x=document.querySelectorAll("a");
var y=[]
for(var i=0,j=null;j=x[i];i++){
if(j.textContent.indexOf("[S]")!==-1){
y.push(parseInt("1"+j.href.substr(j.href.length-6,6))-1000000);
y.push('"'+j.textContent.substr(1,j.textContent.length-2).replace(/[\"\\]/g,function(a){return "\\"+a;})+'"');
}
}
console.log("["+y.join(",")+"]");
}

