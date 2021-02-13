//this is the contents of the script
    function store(name) {
        if (localStorage.deleteStore === undefined) {
            localStorage.deleteStore = "";
        }
        localStorage.deleteStore += `${name}\n`;
    }
function main(){
        //Your Script here
        if (location.href.toString().indexOf("&action=edit") === -1) {
            if (document.querySelector("[style=\"clear: both; width: 80%; border-color:#505050 #505050 #505050 #505050; border-style: solid; border-width: 1px 1px 1px 10px; padding: 4px; margin: 1px auto 0.2rem auto; vertical-align: middle; background-color: #C0C0C0; text-align: left;\"]")) {
                return;
            }
            document.querySelector("#ca-edit a").click();
            return;
        }
        var editor = document.querySelector("#wpTextbox1");
        var summary = document.querySelector("#wpSummary");
        var minor = document.querySelector("#wpMinoredit");
        var name = document.querySelector("#firstHeading").textContent.replace("Editing ","").trim();
        var copywarn = document.querySelector("#editpage-copywarn");
        editor.value = `{{delete|unused}}\n${editor.value}`;
        summary.value = "nomination for deletion";
        minor.checked = false;
        copywarn.textContent= "";
        store(name);
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
