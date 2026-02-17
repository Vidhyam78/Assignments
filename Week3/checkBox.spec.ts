import test, { expect } from "@playwright/test";

test("Learn Checkbox",async ({page}) => {

await page.goto("https://leafground.com/checkbox.xhtml")
await page.locator(`//span[text()="Basic"]`).click()
await page.locator(`//span[text()="Ajax"]`).click()
const notification = page.locator(`.ui-growl-message`) 
await expect(notification).toHaveText("Checked",{timeout:5000})
//] (Message displayed, but its failing at step9 ... Need help
await page.locator(`//label[text()="Javascript"]`).click();
await page.locator('.card').filter({hasText: 'Tri State Checkbox'}).locator('.ui-state-default').click({force: true})
//await page.locator(`//span[@class="ui-chkbox-icon ui-c ui-icon ui-icon-check"]`).click();
await page.locator(`//div[@class="ui-toggleswitch-slider"]`).click()
const notification1 = page.locator(`.ui-growl-title`) 
await expect(notification).toHaveText("Checked",{timeout:5000})

await page.locator(`.ui-selectcheckboxmenu-multiple.ui-selectcheckboxmenu.ui-widget.ui-state-default.ui-corner-all`).click()
await page.locator(`.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default`).nth(10).click()
//await page.getByRole('checkbox',{name: 'Miami'}).first().click();

await page.waitForTimeout(5000)
})