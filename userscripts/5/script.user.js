//will allow extrision of table columns
function extract_table_column(table,col){
    var tab=null;
    if(typeof table=="string"){
        tab=document.getElementById(table);
    }else{
        tab=table;
    }
    var rows=tab.rows;
    var ret="";
    for(var i=0;i<rows.length;i++){
        var row=rows[i];
        ret+=row.cells[col].textContent.replace("<br>",";").replace("\r\n",";").replace("\r",";").replace("\n",";").replace("\n\r",";").replace(/\;$/,"")+"\r\n";
    }
    console.log(ret);
}
function extract_table_columnHTML(table,col){
    var tab=null;
    if(typeof table=="string"){
        tab=document.getElementById(table);
    }else{
        tab=table;
    }
    var rows=tab.rows;
    var ret="";
    for(var i=0;i<rows.length;i++){
        var row=rows[i];
        ret+=row.cells[col].innerHTML+"\r\n";
    }
    console.log(ret);
}
function extract_table_columnNODE(table,col){
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
        ret.push(row.cells[col]);
    }
    return ret;
}
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
window.extract_table_columnHTML=extract_table_columnHTML;
window.extract_table_columnNODE=extract_table_columnNODE;
window.extract_table_columnCALLBACK=extract_table_columnCALLBACK;
function extract_table_columns(table,cols,rowsep,colsep){
    var tab=null;
    if(typeof table=="string"){
        tab=document.getElementById(table);
    }else{
        tab=table;
    }
    var rows=tab.rows;
    var ret="";
    var firstrow=true;
    for(var i=0;i<rows.length;i++){
        var row=rows[i];
        var temp="";
        var first=true
        for(var j=0;j<cols.length;j++){
            temp+=((first)?"":colsep)+row.cells[cols[j]].textContent.replace("<br>",";").replace("\r\n",";").replace("\r",";").replace("\n",";").replace("\n\r",";").replace(/\;$/,"");
            first=false;
        }
        ret+=((firstrow)?"":rowsep)+temp;
        firstrow=false;
    }
    console.log(ret);
}
function getAudioSrcs(table){
    var tab=null;
    if(typeof table=="string"){
        tab=document.getElementById(table);
    }else{
        tab=table;
    }
    var targets=tab.getElementsByTagName("audio");
    var ret="";
    for(var i=0;i<targets.length;i++){
        ret+=targets[i].src+"\r\n";
    }
    return ret;
}
Array.prototype.MaxSplice=function(){
    //find max, and then push it
    var temp="NOPE";
    var tIndex=-1;
    for(var i=0;i<this.length;i++){
        if(temp=="NOPE"){
            temp=this[i];
            tIndex=i;
        }else{
            if(temp==this[i])continue;
            if(Math.max(temp,this[i])==this[i]){
                temp=this[i];
                tIndex=i;
            }
        }
    }
    return this.splice(tIndex,1);
}
Array.prototype.MinSplice=function(){
    //find max, and then push it
    var temp="NOPE";
    var tIndex=-1;
    for(var i=0;i<this.length;i++){
        if(temp=="NOPE"){
            temp=this[i];
            tIndex=i;
        }else{
            if(temp==this[i])continue;
            if(Math.min(temp,this[i])==this[i]){
                temp=this[i];
                tIndex=i;
            }
        }
    }
    return this.splice(tIndex,1);
}
function delete_table_columns(table,cols){
    var delCount=0;//required to correctly offset the column numbers
    var tab=(typeof table=="string")?document.getElementById(table):table;
    var rows=tab.rows;
    while(cols.length>0){
        var col=cols.MaxSplice();
        for(var i=0;i<rows.length;i++)rows[i].cells[col].destroy()
    }
}
Node.prototype.destroy=function(){
    this.parentNode.removeChild(this);
}
window.extract_table_column=extract_table_column;
window.extract_table_columns=extract_table_columns;
window.delete_table_columns=delete_table_columns;
