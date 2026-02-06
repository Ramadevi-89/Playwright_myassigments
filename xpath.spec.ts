import test from '@playwright/test'

test("using css", async ({ page }) => {

	await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager");
   // await page.waitForTimeout(5000);
    await page.locator("#password").fill("crmsfa");
    //await page.waitForTimeout(5000);
    await page.locator(".decorativeSubmit").click();
    //await page.waitForTimeout(5000);
    await page.locator(`text='CRM/SFA'`).click();
    //await page.waitForTimeout(5000);
   
 await page.locator ("//a[text()='Leads']").click();
//await page.waitForTimeout(5000);

await page.locator ("//a[text()='Create Lead']").click();
//await page.waitForTimeout(5000);

await page.locator("//input[@id = 'createLeadForm_companyName']").fill("ADAPPT");
//await page.waitForTimeout(5000);

await page.locator("//input[@id = 'createLeadForm_firstName']").fill("RAMADEVI");
//await page.waitForTimeout(5000);

await page.locator("//input[@id = 'createLeadForm_lastName']").fill("ANAND");
//await page.waitForTimeout(5000);

await page.locator(".smallSubmit").click();
//await page.waitForTimeout(5000);


//EDIT the lead 

await page.locator("//a[text()='Edit']").click();
//await page.waitForTimeout(5000);


await page.locator("//input [@id = 'updateLeadForm_companyName']").fill("ADAPPT pvt limited");
//await page.waitForTimeout(5000);
await page.getByRole("button", {name: 'update'}).click();
//await page.locator("//input [@id = 'ext-gen593']").click();
//await page.waitForTimeout(5000);


})