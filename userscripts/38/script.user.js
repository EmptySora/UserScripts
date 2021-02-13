const stylesheet = `* { transition: all 3s ease-in; }
body { background-color: #111 !important; color: #EEE !important; }
a, a:link { color: cyan; }
a:visited { color: darkcyan; }
a:active { color: blue; }
.docinfo { background-color: #333; }
.docinfo.bggreen { background-color: #4F4; } /* internet standard */
.docinfo.bgwhite { background-color: #FFF; } /* unknown */
.docinfo.bgred { background-color: #F44; } /* draft */
.docinfo.bgorange { background-color: #FA0; } /* informational */
.docinfo.bgyellow { background-color: #EE0; } /* experimental */
.docinfo.bgmagenta { background-color: #F4F; } /* best common practice */
.docinfo.bgblue { background-color: #66F; } /* proposed standard */
.docinfo.bgcyan { background-color: #4DD; } /* draft standard (old designation) */
.docinfo.bggrey { background-color: #666; } /* historic */
.docinfo.bgbrown { background-color: #840; } /* obselete */
.cplate { border: solid #CCC 1px; }
#legend { background-color: #555 !important; border: 1px solid #EEE !important; }
hr { color: #EEE; }
[class="grey"], [class="grey"] a:link, [class="grey"] a:visited { color: #CCC !important; }
span[style="color: #C00;"], span[style="color:#C00;"], span[style="color: #C00"], span[style="color:#C00"] { color: #FFB1B1 !important; } /* errata exist */
.top { border-top: 7px solid #333; }`;
function main() {
    var se = document.createElement("STYLE");
    se.setAttribute("type","text/css");
    se.innerHTML = stylesheet;
    document.body.appendChild(se);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
