import test, { expect } from '@playwright/test'

test("Service now-Marathon", async ({ page }) => {

    await page.goto("https://dev363522.service-now.com/")
    await page.locator("//input[@id='user_name']").fill("admin")
    await page.locator("//input[@id='user_password']").fill("mf=3hp^0UJMZ")
    await page.locator("//button[@id='sysverb_login']").click()
    await page.getByRole('menuitem', { name: 'All' }).click();

    await page.locator("a.nested-item.item-label.keyboard-navigatable").nth(2).click()

    await page.frame('gsft_main')?.getByRole('link', { name: ' Mobiles' }).first().click()
    await page.frame('gsft_main')?.getByRole('link', { name: 'Apple iPhone 13 pro' }).click()
    await page.frame('gsft_main')?.locator("//label[@class='radio-label']").first().click()
    await page.frame('gsft_main')?.getByRole("textbox", { name: 'What was the original phone number?' }).fill("2598632141")
    await page.frame('gsft_main')?.getByRole("combobox", { name: 'Monthly data allowance' }).selectOption({ value: '500MB' })

    await page.frame('gsft_main')?.locator("label.radio-label").filter({ hasText: 'Alpine Green' }).click();
    await page.frame('gsft_main')?.locator("label.radio-label").filter({ hasText: '128 GB' }).click();

    await page.frame('gsft_main')?.getByRole("button", { name: 'Order now' }).click()

    //assertion
    let successmessage = await page.frame('gsft_main')?.locator("//span[text()='Thank you, your request has been submitted']").textContent()

   expect(successmessage).toEqual("Thank you, your request has been submitted")
    console.log("successfully ordered")


})