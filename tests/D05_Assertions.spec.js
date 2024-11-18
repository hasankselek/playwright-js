import {test,expect} from '@playwright/test'
import exp from 'constants'

test('Assertions',async({page})=>{


    // URL'yi açar
    await page.goto('https://demo.nopcommerce.com/register')

    // Doğru url olduğunu kontrol eder
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // Sayfanın titleını kontrol eder
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // Headerdaki logonun görüntülendiğini doğrular
    await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible()

    // search box ın kullanılabilir ve görüntülenebilir olduğunu doğrular
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();

    // Male radio butonuna tıklar ve tıkladığını kontrol eder
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();


    // Newsletter checkbox ının işaretli olduğunu doğrular
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked();

    // register butonunun type=submit özelliğinin varlığını kontrol eder
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type','submit')

    // Başlıkta Register yazdığını doğrular
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    // Başlığın Register içerdiğini doğrular
    await expect(await page.locator('.page-title h1')).toContainText('Register')

    // girilen değerin eşleşip eşleşmediğini kontrol eder
    const emailInput = await page.locator('#Email')
    emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    // toplam adet sayısını kontrol eder
    const monthNumber = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(monthNumber).toHaveCount(13);






})