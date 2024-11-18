//const { test,expect } = require("@playwright/test");
import{test,expect} from '@playwright/test'

test('Locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    //click on login button - property
    //await page.locator('id=login2').click();
    await page.click('id=login2')

    //provide username - CSS
    //await page.locator('#loginusername').fill('admin');
    //await page.type('#loginusername');
    await page.fill('#loginusername','admin')

    //provide password - CSS
    await page.fill("input[@id='loginpassword']",'admin')

    //Click on login button - XPath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout presence - XPath
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutLink).toBeVisible();


    await page.close();
})

