//Create Lead

/* import test from "@playwright/test"
test(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]`).click();
await page.locator(`(//span[text()="Leads"])[1]`).click();
await page.locator(`//div[@title="New"]`).click();
//await page.locator(`//button[@name="salutation"]`).fill("Mr")
await page.locator(`//input[@name="firstName"]`).fill("Vidhya")
await page.locator(`//input[@name="lastName"]`).fill("Mohan")
await page.locator(`//input[@name="Company"]`).fill("Nvidia")
await page.locator(`//button[@name="SaveEdit"]`).click()
    await page.waitForTimeout(5000)

}) */
// Edit Lead

import test from "@playwright/test"
test(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]`).click();
await page.locator(`(//span[text()="Leads"])[1]`).click();
//After this we have to select the lead and click on it to get the Edit button, 
// but not mentioned in assignments, is my udnerstanding correct
await page.locator(`//button[@name="Edit"]`).click() //Click on Edit button, 
// dont know how to select the salutation, hence not changing it.
//Should we clear the lastname and firstname and add new or append to it, please clarify
await page.locator(`//button[@name="SaveEdit"]`).click()

//Create Individuals:

/* import test from "@playwright/test"
test(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//p[text()="Individuals"]`).click(); //I am having issue here please review..
await page.locator(`//div[@title="New"]`).click();
await page.locator(`//input[@class="lastName compoundBLRadius compoundBRRadius form-element__row input"]`).fill("Mohan");
await page.locator(`//span[text()="Save"]`).click()

await page.waitForTimeout(5000)
}) */

//Edit Individuals
import test from "@playwright/test"
test(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();//I am seeing here
//  it keeps loading instead of displaying, which is the reason for failure
await page.locator(`//p[text()="Individuals"]`).click(); //I am having issue here please review..
await page.locator(`//input[@name="Individual-search-input"]`).fill("Mohan")
//I dont see this dropdown 6. Click on the Dropdown icon and Select Edit
await page.locator(`//a[@title="Edit"]`).click();
await page.locator(`//a[@class="select"]`) //How to select the salutation?
await page.locator(`//input[@class="firstName compoundBorderBottom form-element__row input"]`).fill("Vidhya");
await page.locator(`//span[text()="Save"]`).click()

await page.waitForTimeout(5000)
})