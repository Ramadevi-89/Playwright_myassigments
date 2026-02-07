import test from '@playwright/test'

test("Create opportunity", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    //await page.waitForTimeout(7000);
    await page.locator("#password").fill("TestLeaf@2025");
    //await page.waitForTimeout(7000);
    await page.locator("#Login").click();

    await page.locator("//div[@class='slds-icon-waffle']").click();
    await page.locator("(//button[text()='View All'])[1]").click();
    await page.getByPlaceholder("Search apps or items...").fill("opportunities")
    await page.locator("//p[@class='slds-truncate']").click();
    await page.locator("//div[@title='New']").click();
 //await page.getByLabel("Opportunity Name").fill("Ramadevi Anand");
    await page.locator("(//input[@class='slds-input'])[1]").fill("Ramadevi Anand");
    await page.getByPlaceholder("Search Accounts...").fill("martz")
    //await page.getByRole("textbox", {name: 'combobox'}).fill ("12365478999")
    await page.locator("(//input[@class='slds-combobox__input slds-input'])[1]").click(); //dropdown
    //await page.locator("(//span[@class ='slds-media__body'])[1]").click();
    //await page.getByLabel("Opportunity Name").fill("Ramadevi Anand");

   await page.locator("((//input[@class='slds-input'])[2]").fill("25/02/2026");
    //await page.getByLabel("Close Date").fill("25/02/2026");
    await page.getByRole("combobox", { name: '--None--' }).click();
    await page.getByText("Qualification").click();
    await page.locator("//button[@name='SaveEdit']").click();















}) 