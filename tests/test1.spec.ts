import { test } from '@playwright/test';

test('repro-31358', async ({ page, browser, browserName }) => {
    test.setTimeout(50000);
    console.log('CI=' + process.env.CI);
    console.log('browserName=' + browserName);
    console.log('browser version=' + browser.version());

    await page.goto('https://playwright.dev/');

    await page.waitForTimeout(30000);
    //await page.getByRole('button', { name: 'non-existent button' }).click();
});
