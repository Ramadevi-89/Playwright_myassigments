    // functions 

    const Browser = "Chrome"

    function chromeVersionBrowser(callback){
            
    setTimeout(()=>{
    callback(Browser)
            
        },5000)
    }
    function BrowserVersion(Browser){
         console.log("Chrome is up to date - using the latest version, The browser Name = " + Browser)
    }

  chromeVersionBrowser(BrowserVersion)