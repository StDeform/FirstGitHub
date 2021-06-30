const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://my.replika.ai");

  await page.click('text=Log in');
  await page.fill('[data-testid="login-emailphone-input"]', 'v.semyanov+1@replika.ai');
  await page.click('[data-testid="login-next-button"]');
  await page.fill('[data-testid="login-password-input"]', '11111111');
  await page.click('[data-testid="login-next-button"]');
  await page.click('[class="SettingsMenu__SettingsMenuRoot-sc-1iiy7mp-0 kisdsI LeftPanel__StyledSettingsMenu-sc-17av3mw-2 dRnGvO"]');
  await page.click('[data-testid="menu-edit-replika"]');








})();