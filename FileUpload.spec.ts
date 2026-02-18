import test from '@playwright/test'
test("FileUpload", async ({ page }) => {

    await page.goto("https://www.naukri.com/registration/createAccount")
   
   
 await page.locator(".main-3").first().click()

   
await page.locator("//input[@id='resumeUpload']").setInputFiles('Data/01-Primitive-Datatypes (1).pdf')
    await page.waitForTimeout(3000);
    



})