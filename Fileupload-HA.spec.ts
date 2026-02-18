import test from '@playwright/test'

test("Upload file heroku", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")

await page.locator("//input[@type='file']").first().setInputFiles('Data/Create_Lead.pdf')
//await page.waitForTimeout(7000)
//await page.locator("//div[@id='drag-drop-upload']").setInputFiles('Data/da-neuro.png')
//await page.waitForTimeout(5000)
//await page.locator("//input[@id='file-submit']").click()

    const fileupload=page.waitForEvent('filechooser') //create promise
    await page.locator("#drag-drop-upload").first().click()//action
    const filechooser=await fileupload //file chooser
    await filechooser.setFiles("Data/da-neuro.png") //resolve the promise
    await page.locator("//input[@id='file-submit']").click()

//download

test.only("file downloads", async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download")
//create promise
const download= page.waitForEvent('download')
await page.locator("//a[text()='selenium-snapshot.png']").click()//action
const downloadimage=await download //trigger
downloadimage.saveAs("Data/" + downloadimage.suggestedFilename())//resolve
})





})