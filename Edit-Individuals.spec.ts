import test from '@playwright/test'

test("Edit individuals in salesforce", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    //await page.waitForTimeout(7000);
    await page.locator("#password").fill("TestLeaf@2025");
    //await page.waitForTimeout(7000);
    await page.locator("#Login").click();
    await page.locator("//div[@class='slds-icon-waffle']").click();
    await page.locator("(//button[@class='slds-button'])[2]").click();

    await page.getByPlaceholder("Search apps or items...").fill("Individuals")
     await page.locator("//p[@class='slds-truncate']").click();
 await page.locator("//span[text()='Anand']").click();
 await page.locator("//div[@title='Edit']").click();
    await page.locator("(//a[@role='combobox'])[1]").click();
    //await page.getByRole("combobox", { name: 'Salutation' }).click();
await page.getByText("Mrs.").click();
await page.locator("//span[text()='Save']").click();




})