import test from '@playwright/test'
test("Alert home assignments", async ({ page }) => {
    page.once("dialog", ConfirmAlert => {

        const store = ConfirmAlert.type()
        console.log(store)

        const messageType = ConfirmAlert.message()
        console.log(messageType)

        ConfirmAlert.accept()




    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.waitForTimeout(3000)
    await page.click('button:has-text("Try it")');
    //await page.click('button');
    //await page.locator("//button[text()='Try it']").click()
    //await page.getByText("Try it").click()
    //await page.waitForTimeout(3000)












})