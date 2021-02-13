
    var frame = null;
    var file_list = [];
    var file_index = 0;
    var parser = new DOMParser(); //parser.parseFromString(responseText,"text/html")
    var URL_BASE = "https://wiki.godvillegame.com/Special:ListFiles?limit=500&ilsearch=&user=";
    var generator = null;
    var bootstrap_phase = -1;
    var file_resolve = null;
    var image_location = null;
    var categories = [
        "Backstage","Godly contests","Gameplay","Guilds","Gods","Heroes","Skills","Artifacts","Auras",
        "Beasties","Equipment","Geography","Monsters","Boss-Monsters","Pantheons","Quests","Taverns",
        "Towns","Arms","Bodies","Heads","Legs","Shields","Talismans","Weapons",
        "Remote Control","Technical","Templates"
    ];
    var summary = null;
    var cat_count = 0;
    function toArray(arrayLike){
        var a=[];
        var i;
        for( i =0;i<arrayLike.length;i+=1){
            a.push(arrayLike[i]);
        }
        return a;
    }
    window.esDecrementIndex = function () {
        var x = JSON.parse(localStorage.esFileList);
        x.index--;
        localStorage.esPhase = 0;
        localStorage.esFileList = JSON.stringify(x);
    };
    window.esReset = function () {
        var x = JSON.parse(localStorage.esFileList);
        localStorage.esPhase = 0;
        location.replace(x.data[x.index]);
    };
    window.esRefreshPage = function () {
        window.esDecrementIndex();
        window.esReset();
    };
    function getDocument(URL) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET",URL,true);
            xhr.addEventListener("load",function () {
                resolve(parser.parseFromString(xhr.responseText,"text/html"));
            });
            xhr.addEventListener("error",function (e) {
                reject(e);
            });
            xhr.send();
        });
    }
    function escapeRegex(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    function saveList(list,index) {
        localStorage.esFileList = JSON.stringify({data:list,index:index});
    }
    function bootstrap_first_phase(doDoc) { //load edit page
        bootstrap_phase++;
        localStorage.esPhase = bootstrap_phase;
        //image_location = (doDoc||frame.contentDocument).querySelector("#file img").src.toString();
        location.replace((doDoc||frame.contentDocument).querySelector("#ca-edit a").href.toString());
        //we have to use location replace because GW sets "X-FRAMES: DENY" or whatever if we have a different referrer
        //deleting the last page makes the unsettable header "Referrer" default to the current page's url.
    }
    function category_boot(cat) {
        console.log("doing boot",this,cat);
        cat = cat.replace(/\_/g," ");
        //this  == "editor" ("#wpTextbox1")
        var page_text = this.value;
        if (page_text.toLowerCase().indexOf(`[[Category:${cat}]]`.toLowerCase()) != -1) {
            page_text = page_text.replace(new RegExp("\\[\\[category\\:" + escapeRegex(cat) + "\\]\\][\\n\\r]*","mgi"),"");
            summary.value = summary.value.replace(new RegExp(",?\\s*" + escapeRegex(cat)+ "\\s*","gi"),"");
            cat_count--;
        } else {
            page_text = `[[Category:${cat}]]\n${page_text}`;
            cat_count++;
            if(cat_count>1) {
                summary.value = `${summary.value}, ${cat}`;
            } else {
                summary.value = `${summary.value} ${cat}`;
            }
        }
        this.value = page_text;
    }
    function bootstrap_second_phase(doDoc) { //set up editor
        console.info(`Loaded next file. (${file_index+1} of ${file_list.length})`);
        document.title = `(${file_index+1} of ${file_list.length}) ${document.title}`;
        var doc = doDoc||frame.contentDocument;
        var editor = doc.querySelector("#wpTextbox1");
        summary = doc.querySelector("#wpSummary");
        var minor = doc.querySelector("#wpMinoredit");
        var name = doc.querySelector("#firstHeading").textContent.replace("Editing ","").trim();
        var copywarn = doc.querySelector("#editpage-copywarn");
        var i;
        var cat;
        var cat_e;
        editor.value = editor.value.replace("{{delete|unused}}","");
        summary.value = "categorizing:";
        minor.checked = true;
        copywarn.textContent= "";
        bootstrap_phase++;
        localStorage.esPhase = bootstrap_phase;
        var file_preview = doc.createElement("IFRAME");
        file_preview.style = "position:fixed; top:0; right:0; z-index: 999; background: white; opacity: 0.95; height: 100%; width: 35%; border-left:3px solid black;";
        file_preview.addEventListener("load",function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false; //stop the bubbling of this iframe from reaching the parent iframe
        });
        file_preview.src = `https://wiki.godvillegame.com/${name}`;
        var category_shortcuts = doc.createElement("DIV");
        category_shortcuts.style = "position:fixed; top:0; left:0; z-index: 999; background: white; opacity: 0.95; height: 100%; width: 150px; border-right:3px solid black;";
        category_shortcuts.innerHTML = `<center>File ${file_index+1} of ${file_list.length}.</center><br/>`;
        for (i = 0; i < categories.length; i += 1) {
            cat = categories[i];
            cat_e = doc.createElement("INPUT");
            cat_e.setAttribute("type","button");
            cat_e.setAttribute("value",cat);
            cat_e.addEventListener("click",category_boot.bind(editor,cat));
            cat_e.style="width:100%;";
            category_shortcuts.appendChild(cat_e);
            cat_e = doc.createElement("BR");
            category_shortcuts.appendChild(cat_e);
        }
        doc.body.appendChild(file_preview);
        doc.body.appendChild(category_shortcuts);
    }
    function bootstrap_third_phase() { //go to next file
        bootstrap_phase = 0;
        localStorage.esPhase = bootstrap_phase;
        file_index++;
        if (file_index > file_list.length) {
            console.warn("No more files");
            return false;
        } else {
            saveList(file_list,file_index);
        }
        location.href = file_list[file_index];
        console.info(`Loading next file. (${file_index+1} of ${file_list.length})`);
        return true;
    }
    function frameLoad(e) {
        //bootstrap code
        //frame.contentDocument vs frame.contentWindow
        switch (bootstrap_phase) {
            case 0: //loaded "File:x.png"
                bootstrap_first_phase(document);
                break;
            case 1: //loaded editor for "File:x.png"
                bootstrap_second_phase(document);
                break;
            case 2: //loaded "File:x.png" after saving edit
                if (!bootstrap_third_phase(document)) {
                    file_resolve();
                }
                break;
        }
    }
    function frameError(e) {
        console.error(e);
    }
    function installFrame(list,index) { // installFrame() : Promise<undefined>
        return new Promise(function (resolve,reject) {
            file_list = list;
            file_index = index;
            file_resolve = resolve;
            bootstrap_phase = 0;
            localStorage.esPhase = bootstrap_phase;
            document.body.innerHTML = `<iframe style="width:100%;height:100%;top:0;left:0;display:fixed;" src="${list[index]}"></iframe>`;
            frame = document.body.children[0];
            frame.addEventListener("load",frameLoad);
            frame.addEventListener("error",frameError);
        });
    }
    function* baseCreateFileList(resolve, reject) {
        var url = URL_BASE;
        var temp = null;
        var dobreak = false;
        function bcflThen(doc) {
            temp = toArray(doc.querySelectorAll(".listfiles.TablePager tbody tr td.TablePager_col_img_name a[title]"))
                .map(function (file) {
                return file.href.toString();
            });
            file_list.push.apply(file_list,temp);
            console.info(`Added ${temp.length} file(s) to the list. Up to ${file_list.length}.`);
            temp = doc.querySelector(".TablePager_nav a[aria-disabled=\"false\"] .oo-ui-icon-next");
            if (temp) {
                url = temp.parentElement.href.toString();
                console.log("Proceeding to next page.");
            } else {
                console.warn("Next page unavailable. Returning.");
                dobreak = true;
            }
            generator.next();
        }
        function bcflCatch(error) {
            throw error;
        }
        while (true) {
            if (dobreak) {
                break;
            }
            temp = null;
            yield getDocument(url).then(bcflThen).catch(bcflCatch);
        }
        resolve(file_list);
    }
    function createFileList() { // createFileList() : Promise<Array<String>>
        //getDocument(URL) : Promise<HTMLDocument>
        return new Promise(function (resolve,reject) {
            if (localStorage.esFileList && (localStorage.esFileList !== "undefined")) {
                resolve(null);
                return;
            }
            generator = baseCreateFileList(resolve,reject);
            generator.next();
        });
    }
    // installFrame() : Promise<undefined>
    // createFileList() : Promise<Array<String>>

    function main() {
        console.log("STARTING SCRIPT");
        var temp;
        if(location.href.toString().toLowerCase().indexOf("file:") !== -1){
            temp = JSON.parse(localStorage.esFileList);
            file_list = temp.data;
            file_index = temp.index;
            bootstrap_phase = parseInt(localStorage.esPhase);
            console.info(`Loading frame function: phase ${bootstrap_phase} (file: ${file_index})`);
            frameLoad();
        }else{
            createFileList().then(function (list) {
                var tempb;
                var index;
                if (list === null) {
                    tempb = JSON.parse(localStorage.esFileList);
                    list = tempb.data;
                    index = tempb.index;
                    bootstrap_phase = localStorage.esPhase;
                } else {
                    saveList(list,0);
                    index = 0;
                }
                //return installFrame(list,index);
            }).then(function () {
                alert("DONE");
            }).catch(function (e) {
                console.error(e);
                alert("ERROR: SEE CONSOLE");
            });
        }
    }
    /*
".TablePager_nav a[aria-disabled=\"false\"] .oo-ui-icon-next".parentElement.click()
".listfiles.TablePager tbody tr td.TablePager_col_img_name a[title]".map((e)=>e.getAttribute("title")
*/
    if (document.readyState !== "complete") {
        window.addEventListener("load",main);
    } else {
        main();
    }