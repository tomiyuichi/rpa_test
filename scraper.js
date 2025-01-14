const { chromium } = require('playwright');

async function scrapeWebsite(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url);

  // 必要なデータを抽出 (例: タイトルを取得)
  const title = await page.title();

  // 他のデータも抽出可能
  const content = await page.textContent('body');

  await browser.close();

  return { title, content };
}

module.exports = { scrapeWebsite };
