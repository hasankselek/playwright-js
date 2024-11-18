// test, testleri yürütmek için gereklidir.
// expect, assertionlar için gereklidir.
const{test,expect} = require('@playwright/test'); 
const exp = require('constants');

// anonim bir fonksiyon oluşturduğumuzda içine mutlaka bir fixture(page) eklememiz gerekiyor
// eklememizin sebebi bunları otomatikleştirmek istememiz
test('Home Page',async ({page})=>{

    //Playwright’ta async ve await: Asenkron işlemleri sırayla çalıştırmayı sağlar.
    //async stepleri adım adım götürür ve promise döndürür await ise o satırdaki işlemin tamamlanmasını bekler.

   await page.goto('https://www.demoblaze.com/index.html'); // url'yi açar

   const pageTitle = page.title();
   console.log('Page title is:', pageTitle);

   // Sayfanın titleninin STORE olduğunu doğrular
   await expect(page).toHaveTitle('STORE');

   const pageURL = page.url();
   console.log('Page URL is:', pageURL);

   // Sayfanın URL'sini doğrular
   await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

   await page.close();

})