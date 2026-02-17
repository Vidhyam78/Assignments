//Create Lead
import test from "@playwright/test"
/* 
test .only(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.waitForTimeout(7000);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]`).click();
await page.locator(`(//span[text()="Leads"])[1]`).click();
await page.locator(`//div[@title="New"]`).click();
await page.getByRole('combobox',{name:'Salutation'}).click() //Will be taught on the week of 31st Jan.
await page.locator("//span[text()='Mr.']").first().click() //Will be taught on the week of 31st Jan.
await page.locator(`//input[@name="firstName"]`).fill("Vidhya")
await page.locator(`//input[@name="lastName"]`).fill("Mohan")
await page.locator(`//input[@name="Company"]`).fill("Nvidia")
await page.locator(`//button[@name="SaveEdit"]`).click()
    await page.waitForTimeout(5000)

}) */
// Edit Lead

/* test (`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.waitForTimeout(5000)
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]`).click();
await page.locator(`(//span[text()="Leads"])[1]`).click();
//Click on the Leads that was created in Create Lead
await page.locator(`//span[text()="Vidhya Mohan"]`[1]).click(); //The script is failing here..
await page.locator(`//button[@name="Edit"]`).click()  //Click on Edit button
await page.getByRole('combobox',{name:'Salutation'}).click() 
await page.locator("//span[text()='Mr.']").first().click() 
await page.locator(`//input[@name="firstName"]`).fill("Vidhya1")
await page.locator(`//input[@name="lastName"]`).fill("Mohan1")
await page.locator(`//input[@name="Company"]`).fill("Nvidia1")
await page.locator(`//button[@name="SaveEdit"]`).click()
}) */

//Create Individuals:

/* test(`Locators homework`, async({page}) => {
await page.goto(`https://login.salesforce.com`);
await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`);
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.waitForTimeout(5000)
await page.locator(`//button[contains(@aria-label ,'View All Applications')]`).click();
await page.locator(`//span[text()="All Items"]`).click();//This click is Not happening, need help
await page.locator(`//p[text()="Individuals"]`).click(); 
await page.locator(`//div[@title="New"]`).click();
await page.locator(`//input[@class="lastName compoundBLRadius compoundBRRadius form-element__row input"]`).fill("Mohan");
await page.locator(`//span[text()="Save"]`).click()

await page.waitForTimeout(5000)
}) */

//Edit Individuals

test("Locators homework", async({page}) => {
await page.goto("https://login.salesforce.com");
await page.waitForTimeout(4000)
await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
await page.locator('//input[@id="Login"]').click()
await page.locator('//div[@class="slds-icon-waffle"]').click();
await page.waitForTimeout(5000)
await page.locator("//button[contains(@aria-label ,'View All Applications')]").click();
await page.locator('//p[text()="Individuals"]').click(); //I am having issue here please review..
await page.getByRole('searchbox',{name:"Search this list..."}).fill("Vidhya mohan")
//await page.locator('//input[@name="Individual-search-input"]').fill("Vidhya mohan")
await page.locator("//span[text()='Vidhya mohan']").click()
await page.keyboard.press("Enter");
//await page.locator(//a[@title='Show 2 more actions']).click();
//Need help in proceeding with the editing of the individual created.
await page.locator('//a[@title="Edit"]').click();
await page.locator('//a[@class="select"]')
await page.getByRole('combobox',{name:'Salutation'}).click()
await page.locator('//a[text()="Mrs."]').first().click()
await page.locator(' //span[text()="First Name"]').fill("Vidhya");
await page.locator('//span[text()="Save"]').click()
await page.waitForTimeout(5000)

})