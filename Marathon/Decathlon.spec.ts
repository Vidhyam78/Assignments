import test, { expect } from "@playwright/test"

test("Place order in Decathlon site",async({page}) =>{

    await page.goto("https://www.decathlon.in/");
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL("https://www.decathlon.in/");
    const searchBox = page.locator(`(//span[@class="index-module_type__E-SaG"])[1]`);
    await expect(searchBox).toBeEnabled();
    await page.locator(`(//span[@class="index-module_type__E-SaG"])[1]`).click();
    //const menshoes = await page.getByRole('textbox').fill("Men Shoes")
     await page.locator(`//span[contains(text(),'Shoes For Men')]`).click()
     await page.locator(`//span[contains(text(),'Men')]`).click()
     await page.locator(`//span[contains(text(),'Sport shoes')]`).click()
     await page.locator(`//span[contains(text(),'Uk 10.5')]`).click()
     await page.locator(`//span[contains(text(),'Running')]`).click()
     await page.locator(`//span[text()='Most Relevant']`).click()
     await page.locator(`//a[text()='Price: High to Low']`).click()
     await page.locator(`//div[@class="swiper-slide swiper-slide-active"]`).first().click()
     await page.locator(`//div[text()='UK 10.5 - EU 45']`).click()
     await page.locator(`//span[text()='ADD TO CART']`).first().click()
     await expect(page.locator(`//h3[text()='Product added to cart']`)).toHaveText('Product added to cart');
    await page.waitForTimeout(5000)

}  )