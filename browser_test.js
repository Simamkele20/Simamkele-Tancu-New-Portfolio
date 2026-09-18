const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200/projects');
  await page.setViewport({ width: 1280, height: 960 });
  
  // Scroll down to see TB Tours
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  
  await page.screenshot({ path: 'projects-screenshot.png' });
  await browser.close();
  console.log('Screenshot saved');
})();
