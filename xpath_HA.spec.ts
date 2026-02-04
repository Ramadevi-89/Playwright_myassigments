import { test } from '@playwright/test';

test("using css", async ({ page }) => {
	await page.goto("https://login.salesforce.com/?locale=in");
	await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
	await page.waitForTimeout(7000);
	await page.locator("#password").fill("TestLeaf@2025");
	await page.waitForTimeout(7000);
	await page.locator("#Login").click();
	await page.waitForTimeout(7000);
	await page.locator (".slds-r5").click();
	await page.waitForTimeout(7000);
	
});