import { test } from '@playwright/test';

test('repro-31358', async ({ page }) => {
    test.setTimeout(30000);
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await page.getByRole('button', { name: 'non-existent button' }).click();
});
