import { test, expect } from '@playwright/test'

test("PVR Cinemas", async({page})=>{

await page.goto("https://www.pvrcinemas.com/")
await page.waitForTimeout(4000)
await page.getByPlaceholder("Search for city").fill("chennai")
await page.locator("//li[text()='Chennai']").click()
await page.locator("//span[text()='Cinema']").click()
await page.locator("#cinema").click()
//await page.getByRole('combobox', { name: 'Select Cinema' }).click();

await page.getByText("PVR Sathyam Royapettah Chennai").click();
await page.getByText("Tomorrow").click();
await page.locator("(//span[text()='POOKIE'])[2]").click()
//await page.getByText("POOKIE").click();
await page.getByText("10:50 PM").click()

//span[text()='10:50 PM']
await page.locator("(//span[@class='p-button-label p-c'])[2]").click()
await page.locator("//button[text()='Accept']").click()
//await page.locator("//span[@id='BU.BUDGET|J:11']").click()

await page.locator("//span[@id='BU.BUDGET|N:6']").click();




const seatnum = await page.locator("//span[@class='seat-selected-pvr']").innerText()
console.log(seatnum)

const Price= await page.locator("//div[@class='grand-prices']").innerText()
console.log(Price)

await page.getByText("Proceed").click()

await page.close()
})