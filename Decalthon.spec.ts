import test, { Locator } from '@playwright/test'


test("Decalthon Testcase", async({page})=>{
await page.goto("https://www.decathlon.in/")
const homepage = await page.title()
console.log("Home page title : " + homepage)
let ExpectedTitle = 'Buy Sporting Goods, Sportswear and Equipments'
if(homepage===ExpectedTitle){
 console.log("Home page title is correct")
}else{
    console.log("Home page title is incorrect")
}



const Searchfield = page.locator("//span[text()='Search for  ']")
await Searchfield.fill("Shoes");

await Searchfield.press('enter');

await page.getByText("Women (160)	");
await page.getByText("Aquashoes (6)	");
await page.getByText("//span[text()='6.5-7 (3)	']");
await page.locator("//p[text()='Adult Breathable Clogs Slip On Lightweight Shoes Grey']").click()

const price= page.locator("//span[text()='₹ 599']").innerText();
console.log(price);
await page.locator("//span[text()='ADD TO CART']");


})