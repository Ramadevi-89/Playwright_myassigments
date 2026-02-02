import test, { chromium, webkit } from '@playwright/test'
//import { channel } from 'diagnostics_channel'

test("Load Redbus (edge) and Flipkart (Webkit)", async () => {

    //launching the browser
    //run in the headless 
    const edgeBrowser = await chromium.launch(
        {
            channel: "msedge",
            headless: false
        });

    const edgecontext = await edgeBrowser.newContext()
    const edgePage = await edgeBrowser.newPage()

    await edgePage.goto("https://www.redbus.com")
    console.log("edge bowser launched - ", await edgePage.title());
    console.log("URL- ", edgePage.url());

    //Webkit browser
    const webkitBrowser = await webkit.launch(
        {
            channel: "webkit",
            headless: false
        })

    const webkitContext = await webkitBrowser.newContext()
    const webkitPage = await webkitBrowser.newPage()
    await webkitPage.goto("https://www.flipkart.com")
    console.log("webkit bowser launched - ", await webkitPage.title());
    console.log("URL - ", webkitPage.url());

    await edgeBrowser.close();
    await webkitBrowser.close();

})

