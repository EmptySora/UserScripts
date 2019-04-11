//this is the contents of the script
const LINKS_KEY = "SORA_VST_LINKS";
const URLS_KEY = "SORA_VST_URLS";
const DONE_KEY = "SORA_VST_DONE";
const URLS_BASE = "http://www.vst4free.com/index.php?plug-ins=";
const URLS_DEFAULT = {"data":[
    "Delay/Echo","Reverb","Dynamics","Mastering/Strip","Gate/Deesser",
    "Pitch","EQ","Spectral","Filtering","Distortion/OD","Lo-fiFx",
    "Tube/Tape","Preamp/Sim","Modulation","Spatial","MultiFX","Guitar/Amp",
    "Controllers","Generators","Effects","Tools","Drumkits","Drumsynths",
    "Drum_machines","Groove/seq","Single_drums","Percussions","Guitar/Bass",
    "Piano/Strings","Brass/Wind","Folk/Ethnic","orchestral","SF2/Wav",
    "Loop/Scratch","Analog","Monophonic","Seq/Arp","Modular","FM",
    "Wavetable","Ambient","Lo-fi","Hybrid/Other","Misc.","Synthesizers",
    "Keyboards","Organs","Strings"
]};
const PROTOCOL = "http://";
const DOMAIN = PROTOCOL + "www.vst4free.com/";
const UNITS = ["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];
const THROTTLE_TIME = 1000;

function toArray(arr) {
    var ret = [];
    var i;
    for (i = 0; i < arr.length; i += 1) {
        ret.push(arr[i]);
    }
    return ret;
};
Object.defineProperty(NodeList.prototype, "toArray", {
    value: function() {
        return toArray(this);
    },
    configurable: true,
    writable: true
});
//Using defineProperty so it can prevent "toArray"
//from being enumerable. IE: it won't show up in
//Object.keys, or for in, or x in obj

function tc(callback,def) {
    try {
        return callback();
    } catch (e) {
        return def;
    }
}

function get_params(location) {
    var ret = {};
    location
        .search
        .substr(1)
        .split(/\&/g)
        .map(function (y) { return y.split("="); })
        .map(function (y) { return [y[0],decodeURIComponent(y[1])]; })
        .forEach(function (y) { ret[y[0]] = y[1]; });
     return ret;
}

function crawl_inner(htmlDoc) {
    return {
        "source" : tc(function () {
            return htmlDoc
                .location
                .href
                .toString();
        }),
        "name" : tc(function () {
            return htmlDoc
                .querySelector(".free_vst_name")
                .textContent
                .trim();
        }),
        "rating" : {
            "average" : tc(function () {
                return htmlDoc
                    .querySelector(".free_vst_note")
                    .textContent
                    .replace(/\s+/g,"");
            }),
            "total_votes": tc(function () {
                return htmlDoc
                    .querySelector(".free_vst_note2")
                    .textContent
                    .replace(/\s+/g,"")
                    .replace(/[\(\)]/g,"")
                    .replace(/votes?/g,"");
            })
        },
        "author" : {
            "name" : tc(function () {
                var text = htmlDoc
                    .querySelector(".free_vst_dev")
                    .textContent
                    .trim();
                return text.substring(1,text.length - 2).trim();
            }),
            "devpage" : tc(function () {
                return htmlDoc
                    .querySelector(".free_vst_dev")
                    .getAttribute("href");
            }),
            "devlink" : tc(function () {
                return htmlDoc
                    .querySelector(".devlink")
                    .getAttribute("href");
            })
        },
        "description" : tc(function () {
            return htmlDoc.querySelector(".free_vst_text").innerHTML;
        }),
        "image" : tc(function () {
            return htmlDoc.getElementById("plug_in").src;
        }),
        "type" : tc(function () {
            return htmlDoc
                .getElementById("plug_in")
                .getAttribute("title")
                .split(/\s\-\s/g)
                .pop(); //shortcut for getting the last element in an array
        }),
        "id" : tc(function () {
            return get_params(htmlDoc.location).id;
        }),
        "video" : tc(function () {
            return htmlDoc
                .querySelector(".med_tab table.video iframe")
                .getAttribute("src");
        }),
        "soundcloud" : tc(function () {
            //".med_tab iframe".src.contains("soundcloud.com") .src
            return htmlDoc
                .querySelector(".med_tab iframe[src*=\"soundcloud.com\"]")
                .getAttribute("src");
        }),
        "downloads" : tc(function () {
            var links = htmlDoc.querySelectorAll(".download_link");
            var lnks = [];
            var i;
            for (i = 0; i < links.length; i += 1) {
                lnks.push({
                    "size" : tc(function () {
                        return links[i]
                            .parentElement
                            .parentElement
                            .querySelector(".vst_download_b")
                            .textContent
                            .replace(/[\(/)]/g,"");
                    }),
                    "link" : links[i].href,
                    "version" : tc(function () {
                        return "V" + links[i]
                            .parentElement
                            .parentElement
                            .querySelector(".version")
                            .nextSibling
                            .textContent
                            .trim();
                    }),
                    "type_raw" : links[i].textContent,
                    "type" : {
                        "OS" : tc(function () {
                            if (links[i].textContent.startsWith("Win")) {
                                return "Windows";
                            } else if (links[i].textContent.startsWith("Mac")) {
                                return "Macintosh";
                            } else {
                                return "Unknown";
                            }
                        }),
                        "arch" : tc(function () {
                            if (links[i].textContent.startsWith("Win")) {
                                if (links[i].textContent.startsWith("Win 32")) {
                                    return "32-bit";
                                } else if (links[i].textContent.startsWith("Win 64")) {
                                    return "64-bit";
                                } else {
                                    return "Unknown"
                                }
                            } else {
                                return "Unknown";
                            }
                        }),
                        "type" : tc(function () {
                            if (links[i].textContent.endsWith("VST")) {
                                return "Virtual Studio Technology";
                            } else if (links[i].textContent.endsWith("AU")) {
                                return "Audio Unit";
                            } else {
                                return "Unknown";
                            }
                        }),
                    }
                });
            }
            return lnks;
        }),
        "comments" : tc(function () {
            var comments = htmlDoc.querySelectorAll(".borderComm2");
            var ret = [];
            var comment;
            var i;
            for (i = 0; i < comments.length; i += 1) {
                comment = comments[i];
                ret.push({
                    "date" : tc(function () {
                        return comment
                            .querySelector("span.datecom:only-child")
                            .textContent
                            .trim(); //form: "Sept 01 2019"
                    }),
                    "name" : tc(function () {
                        return comment
                            .querySelector("span.datecom:only-child")
                            .parentElement
                            .nextElementSibling
                            .querySelector("div.Style30 strong")
                            .textContent
                            .trim();
                            //.textContent
                    }),
                    //.textContent, //might not be a number, values: 1 2 3 4 5 ? (maybe 0 too?)
                    "rating" : tc(function () {
                        return comment
                            .querySelector("span.datecom:only-child")
                            .parentElement
                            .parentElement
                            .parentElement
                            .querySelector("tr:first-child>td.Style24:last-child strong")
                            .textContent
                            .trim();
                            //.textContent
                    }),
                    "comment" : tc(function () {
                        return comment
                            .querySelector(".borderComm td")
                            .textContent
                            .trim();
                    }),
                    "replies" : tc(function () {
                        var ret = [];
                        var i;
                        var reply;
                        var replies = comment
                            .querySelector(".borderComm")
                            .parentElement
                            .parentElement
                            .querySelectorAll("td:first-child>table:not(:first-child)>tbody>tr:not(:first-child)");
                        for (i = 0; i < replies.length; i += 1) {
                            reply = replies[i];
                            if (reply.textContent.trim().length === 0) {
                                continue; //separator row
                            }
                            ret.push({
                                "date" : tc(function () {
                                    return reply
                                        .querySelector("span.datecom")
                                        .textContent
                                        .trim();
                                }),
                                "name" : tc(function () {
                                    return reply
                                        .querySelector("span.datecom")
                                        .parentElement
                                        .querySelector("strong.Style30")
                                        .textContent
                                        .trim();
                                }),
                                "comment" : tc(function () {
                                    return reply
                                        .querySelector("span.datecom")
                                        .parentElement
                                        .nextElementSibling
                                        .querySelector("span.Style4")
                                        .textContent
                                        .trim();
                                })
                            });
                        }
                        return ret;
                    })
                });
            }
            return ret;
        })
    }
}

function crawl(url) {
    return new Promise(function (resolve, reject) {
        var xhr= new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.addEventListener("load",(function (url,e) {
            if (e.target.status >= 400) {
                reject({
                    "error" : true,
                    "url" : url,
                    "response" : e.target.responseText,
                    "status" : e.target.status,
                    "meaning" : e.target.statusText
                });
                return;
            }
        
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(e.target.responseText, 'text/html');
            var page = crawl_inner(htmlDoc);
            resolve(page);
        }).bind(xhr,url));
        xhr.addEventListener("error",(function(url,e) {
            reject({
                "error": true,
                "url": url
            });
        }).bind(xhr,url));
        xhr.send();
    });
}
/*

{
"name" : "name of plugin",
"rating" : {
"average" : "same as \"rating\" from original",
"total_votes" : "same as \"votes\" from before"
},
"author" : {
"name" : var txt = ".free_vst_dev".textContent.trim(); txt = txt.substring(1,txt.length - 2).trim(); //in form "> [name] :"
"devpage" : ".free_vst_dev".href, //link to vst4free page containing more from them
"devlink" : ".devlink".href //link to dev homepage
},
"description" : ".free_vst_text".innerHTML, //obviously, contains html
"image" : "#plug_in".src, //less "http://www.vst4free.com/"
"type" : "#plug_in".title.split(/\s\-\s/g).last(), //contains the type of vst this is, more descriptive than the group name.
"downloads" : [
{
  "size" : "same as original",
  "version" : "same as above refactoring",
  "type_raw" : "raw textContent of a.download_link",
  "type" : {
    "os" : "Win | Mac",
    "arch" : "32 | 64 | undefined",
    "type" : "VST | AU"
  },
  "link" : "same as original, just include the domain with it"
}
],
"id" : "download page url, query parameters \"id\"",
"video" : ".med_tab table.video iframe".src, //??? youtube video, not part of free vst text
"soundcloud" : ".med_tab iframe".src.contains("soundcloud.com") .src,
"comments" : [
//base is "table.borderComm2"
{
  "date" : "'.datecom'.textContent, unix time stamp parsed from date in weird format like 'Sept 02 2018' unknown timezone",
  "name" : ".datecom".parentElement.nextElementSibling.querySelector("div.Style30 strong").textContent,
  "rating" : ".datecom".parentElement.parentElement.parentElement.querySelector("tr:first-child>td:last-child strong").textContent, //might not be a number, values: 1 2 3 4 5 ? (maybe 0 too?)
  "comment" : ".borderComm td".textContent,
  "replies" : [
    //base is "table.borderComm".parentElement.parentElement.querySelectorAll("td:first-child>table:not(:first-child)>tbody>tr:not(:first-child)")
    {
      "date": "same as 'date' just above here, just child of base specified",
      "name": "get .datecom as above, ".parentElement.querySelector("strong.Style30").textContent,
      "comment": "get datecom as above".parentElement.nextElementSibling.querySelector("span.Style4").textContent
    }
  ]
}
]

}


{
"group": [
{
    "href": "download link less: http://www.vst4free.com/",
    "title": "Download [name] Windows {32|64} bit free VST",
    "type": "Win {32|64} VST",
    "size": "[size] [unit, eg: Mb Kb Gb]",
    "rating": "[rating #.#]/5"
},
{
    "error": "download page full URL, not download link like href"
}
]
}

new keys for success type:
Version (optional): "V" + document.querySelector(".vst_download .version").nextSibling.textContent.trim()


refactoring:
{
"name" : "name of plugin",
"rating" : {
"average" : "same as \"rating\" from original",
"total_votes" : "same as \"votes\" from before"
},
"author" : {
"name" : var txt = ".free_vst_dev".textContent.trim(); txt = txt.substring(1,txt.length - 2).trim(); //in form "> [name] :"
"devpage" : ".free_vst_dev".href, //link to vst4free page containing more from them
"devlink" : ".devlink".href //link to dev homepage
},
"description" : ".free_vst_text".innerHTML, //obviously, contains html
"image" : "#plug_in".src, //less "http://www.vst4free.com/"
"type" : "#plug_in".title.split(/\s\-\s/g).last(), //contains the type of vst this is, more descriptive than the group name.
"downloads" : [
{
  "size" : "same as original",
  "version" : "same as above refactoring",
  "type_raw" : "raw textContent of a.download_link",
  "type" : {
    "os" : "Win | Mac",
    "arch" : "32 | 64 | undefined",
    "type" : "VST | AU"
  },
  "link" : "same as original, just include the domain with it"
}
],
"id" : "download page url, query parameters \"id\"",
"video" : ".med_tab table.video iframe".src, //??? youtube video, not part of free vst text
"soundcloud" : ".med_tab iframe".src.contains("soundcloud.com") .src,
"comments" : [
//base is "table.borderComm2"
{
  "date" : "'.datecom'.textContent, unix time stamp parsed from date in weird format like 'Sept 02 2018' unknown timezone",
  "name" : ".datecom".parentElement.nextElementSibling.querySelector("div.Style30 strong").textContent,
  "rating" : ".datecom".parentElement.parentElement.parentElement.querySelector("tr:first-child>td:last-child strong").textContent, //might not be a number, values: 1 2 3 4 5 ? (maybe 0 too?)
  "comment" : ".borderComm td".textContent,
  "replies" : [
    //base is "table.borderComm".parentElement.parentElement.querySelectorAll("td:first-child>table:not(:first-child)>tbody>tr:not(:first-child)")
    {
      "date": "same as 'date' just above here, just child of base specified",
      "name": "get .datecom as above, ".parentElement.querySelector("strong.Style30").textContent,
      "comment": "get datecom as above".parentElement.nextElementSibling.querySelector("span.Style4").textContent
    }
  ]
}
]

}



add a delay between each xhr so settimeout the resolve call

soundcloud sample:           http://www.vst4free.com/free_vst.php?plugin=KR5&id=2607
donate + yt video sample:    http://www.vst4free.com/free_vst.php?plugin=reTromine&id=1027

double comment reply sample: http://www.vst4free.com/free_vst.php?plugin=Kick-n-Snare_EX&id=2963
*/

function crawl_page() {
    return new Promise(function (resolve, reject) {
        var targets = document
            .querySelectorAll(".vst_frame a:not([class])")
            .toArray()
            .map(function (target) {
                return DOMAIN + target.getAttribute("href");
            });
        var pages = [];
        var iter = null;
        iter = iterator(targets, function (response) {
            if (response !== null) {
                pages.push(response);
            } else {
                pages.push({
                    "error" : true,
                    "url" : window.location.href.toString()
                });
            }
            if (iter.next().done) {
                resolve(pages);
            }
        });
        if (iter.next().done) {
            resolve(pages);
        }
    });
}

function* iterator(links, callback) {
    var i;
    var link;
    var promise;
    for (i = 0; i < links.length; i += 1) {
        link = links[i];
        promise = crawl(link);
        promise.then(function (response) {
            window.setTimeout((function () {
                callback(response);
            }).bind(null,response),THROTTLE_TIME);
        }).catch(function (reason) {
            window.setTimeout(function () {
                callback(null);
            },THROTTLE_TIME);
        });
    }
}

function popURL() {
    var data;
    var ret;
    if (URLS_KEY in localStorage) {
        try {
            data = JSON.parse(localStorage[URLS_KEY]);
            if(data.data.length > 0) {
                ret = URLS_BASE + data.data.pop();
                localStorage[URLS_KEY] = JSON.stringify(data);
                console.info(`Loaded next URL (${(URLS_DEFAULT.data.length - data.data.length) + 1} of ${URLS_DEFAULT.data.length}): ${ret}`);
                return ret;
            } else {
                localStorage[DONE_KEY] = "done";
                console.info("No more URLs to load.");
                console.info(`localStorage.${DONE_KEY} has been set.`);
                return null;
            }
        } catch (e) {
            localStorage[URLS_KEY + "_BAK"] = localStorage[URLS_KEY];
            localStorage[LINKS_KEY + "_BAK"] = localStorage[LINKS_KEY];
            delete localStorage[URLS_KEY];
            delete localStorage[LINKS_KEY];
            localStorage[URLS_KEY] = JSON.stringify(URLS_DEFAULT);
            localStorage[DONE_KEY] = "done";
            console.error("Error loading next url: ",e);
            console.error(`localStorage.${URLS_KEY} has been backed up and reset.`);
            console.error(`localStorage.${LINKS_KEY} has been backed up and reset.`);
            console.error(`Clear localStorage.${DONE_KEY} and refresh to retry.`);
        }
    } else if (localStorage[DONE_KEY] === "done") {
        return null;
    } else {
        localStorage[URLS_KEY] = JSON.stringify(URLS_DEFAULT);
        console.info(`Reset ${URLS_KEY} for new loop.`);
        return popURL();
    }
}

function doStore(store) {
    if (typeof store === "object") {
        localStorage[LINKS_KEY] = JSON.stringify(store);
        return store;
    } else {
        if (LINKS_KEY in localStorage) {
            try {
                return JSON.parse(localStorage[LINKS_KEY]);
            } catch (e) {
                localStorage[LINKS_KEY + "_BAK"] = localStorage[LINKS_KEY];
                localStorage[LINKS_KEY] = "{}";
                return {};
            }
        } else {
            localStorage[LINKS_KEY] = "{}";
            return {};
        }
    }
}

function getStorageUsage() {
    var length = 0;
    var unit_index = 0;
    if (LINKS_KEY in localStorage) {
        length += localStorage[LINKS_KEY].length;
    }
    if ((LINKS_KEY + "_BAK") in localStorage) {
        length += localStorage[LINKS_KEY + "_BAK"].length;
    }
    if (URLS_KEY in localStorage) {
        length += localStorage[URLS_KEY].length;
    }
    if ((URLS_KEY + "_BAK") in localStorage) {
        length += localStorage[URLS_KEY + "_BAK"].length;
    }
    if (DONE_KEY in localStorage) {
        length += localStorage[DONE_KEY].length;
    }
    while (length > 1024) {
        if (unit_index + 1 >= UNITS.length) {
            break;
        }
        length /= 1024;
        unit_index += 1;
    }
    return `${length.toFixed(3)} ${UNITS[unit_index]}`;
}
function crawler_callback_inner(response) {
    console.info("Finished crawling the current search page...");
    //store crawled information in local storage.
    var pageTitle = document.querySelector(".vst_infoname").textContent.trim();
    var store = doStore();
    var keys = Object.keys(store);
    if (keys.indexOf(pageTitle) !== -1) {
        store[pageTitle].push.apply(store[pageTitle],response); //array of pages
    } else {
        store[pageTitle] = response;
    }
    doStore(store);

    console.info(`Current Storage Usage: ${getStorageUsage()} of 50.000 MiB`);
    //I think I set quota to 50MiB: 51200b, to be precise, I believe

    //click the "next" link above the result list to continue to the next page.
    var nextlink = document.querySelector(".infos_4 td.sort a:nth-child(2)");
    if (nextlink !== null) {
        nextlink.click();
    } else {
        console.info("Can't advance the page anymore.");

        //try to get the next set category of items.
        var nexturl = popURL();
        if (nexturl !== null) {
            console.info("trying next link: " + nexturl);
            window.location.href = nexturl;
        }
    }
}

function crawler_callback(response) {
    //I don't really think we need to do setTimeout here, it's synchronous
    //push is called before resolve, so I'm not sure why the console would
    //fail to recognize the length of the array... cached data maybe?
    window.setTimeout(crawler_callback_inner.bind(this,response),5000);
}

function main(){
    if (DONE_KEY in localStorage) {
        //do nothing
        console.info("Script claims to already be done: not crawling.");
        console.info("If this isn't the case, clear: localStorage." + DONE_KEY);
    } else if (!(URLS_KEY in localStorage)) {
        //crawler hasn't started, start it off...
        var nexturl = popURL();
        if (nexturl !== null) {
            console.info("STARTING CRAWLER SEQUENCE: " + nexturl);
            window.location.href = nexturl;
        }
    } else {
        crawl_page().then(crawler_callback);
    }
}

if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
