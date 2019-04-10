//this is the contents of the script
function commafy(num)
{
    var a=num.toString().split("");
    a.reverse();
    var p=[""];
    for(var i=0,j=0;i<a.length;i++)
    {
        if(p[j].length>=3){j++;p.push("");}
        p[j]+=a[i];
    }
    var ret=p.join(",").split("");
    ret.reverse();
    alert(ret.join(""));
    return ret.join("");
}
window.commify=commafy;
window.commafy=commafy;
