import { test, firefox,chromium,webkit } from "@playwright/test";

//Create a context for the fisrt page and browse to redbus site
test("Test to Launch 2 websites", async() => {
const browser = await webkit.launch()
const context = await browser.newContext()
const page3 = await context.newPage()
await page3.goto("https://www.redbus.in")
/* added wait so that the title can be retrived and displayed.
/SetTimeout was giving error hence used waitForTimeout */
await page3.waitForTimeout(3000);
//Display the URL and title of redbus site
const URL = await page3.url()
const title = await page3.title()
console.log("title & url " +URL +title)

//Create a context for the fisrt page and browse to flipcart site
const browser1 = await chromium.launch({headless:false})
const context1 = await browser1.newContext()
const page4 = await context1.newPage()
await page4.goto("https://www.flipkart.com")
/* added wait so that the title can be retrived and displayed.
/SetTimeout was giving error hence used waitForTimeout */
await page4.waitForTimeout(3000);
//Display the URL and title of flipcart site
const URL1 = await page4.url()
const title1 = await page4.title()
console.log("title & url " +URL1 +title1)
})