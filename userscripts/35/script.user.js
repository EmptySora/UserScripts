//this is the contents of the script
function main(){
    NodeList.prototype.toArray = function() {
        var ret = [];
        var i;
        for (i = 0; i < this.length; i += 1) {
            ret.push(this[i]);
        }
        return ret;
    };

    (function() {
        function crawl(url) {
            return new Promise(function(resolve,reject) {
                var xhr= new XMLHttpRequest();
                xhr.open("GET",url,true);
                xhr.addEventListener("load",function(e){
                    var parser = new DOMParser();
                    var xhr = e.target;
                    var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
                    var links = htmlDoc.querySelectorAll(".download_link");
                    var lnks = [];
                    var i;
                    for (i = 0; i < links.length; i += 1) {
                        lnks.push({
                            href: links[i].getAttribute("href"),
                            title: links[i].getAttribute("title"),
                            type: links[i].textContent
                        });
                    }
                    resolve(lnks);
                });
                xhr.addEventListener("error",function() {
                    reject();
                });
                xhr.send();
            });
        }
        function crawl_page() {
            return new Promise(function (resolve,reject) {
                var prefix = "http://www.vst4free.com/";
                var targets = document
                .querySelectorAll(".vst_frame a:not([class])")
                .toArray()
                .map(function(target) {
                    return prefix + target.getAttribute("href");
                });
                var links = [];
                var iter = null;
                iter = iterator(targets,function(response) {
                    if (response !== null) {
                        links.push.apply(links,response);
                    }
                    if (iter.next().done) {
                        resolve(links);
                    }
                });
                if (iter.next().done) {
                    resolve(links);
                }
            });
        }
        function* iterator(links,callback) {
            var i;
            var link;
            var promise;
            for (i = 0; i < links.length; i += 1) {
                link = links[i];
                promise = crawl(link);
                promise.then(function(response) {
                    callback(response);
                }).catch(function() {
                    callback(null);
                });
            }
        }
        function getStore() {
            if ("SORA_VST_LINKS" in localStorage) {
                return JSON.parse(localStorage.SORA_VST_LINKS);
            } else {
                localStorage.SORA_VST_LINKS = "{}";
                return {};
            }
        }
        function setStore(store) {
            localStorage.SORA_VST_LINKS = JSON.stringify(store);
        }
        function popURL() {
            if ("SORA_VST_URLS" in localStorage) {
                var data = JSON.parse(localStorage.SORA_VST_URLS);
                if(data.data.length > 0) {
                    var ret = data.data.pop();
                    localStorage.SORA_VST_URLS = JSON.stringify(data);
                    return ret;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
        crawl_page().then(function (response) {
            window.SORA_SCRIPT_RESULTS = response;
            /*console.info("crawl complete");*/
            /*console.info(response);*/
            window.setTimeout((function (response) {
                var pageTitle = document.querySelector(".vst_infoname").textContent;
                var store = getStore();
                var keys = Object.keys(store);
                if (keys.indexOf(pageTitle) !== -1) {
                    store[pageTitle].push.apply(store[pageTitle],response);
                } else {
                    store[pageTitle] = response;
                }
                setStore(store);
                console.info("DONE CRAWLING FOR GOOD");
                var nextlink = document.querySelector(".infos_4 td.sort a:nth-child(2)");
                if (nextlink !== null) {
                    nextlink.click();
                } else {
                    console.info("Can't advance the page anymore.");
                    var nexturl = popURL();
                    if (nexturl !== null) {
                        console.info("trying next link: " + nexturl);
                        window.location.href = nexturl;
                    } else {
                        console.info("NO MORE URLS LEFT");
                    }
                }
            }).bind(this,response),5000);
        });
    })();
}
if (document.readyState !== "complete") {
    window.addEventListener("load",main);
} else {
    main();
}
