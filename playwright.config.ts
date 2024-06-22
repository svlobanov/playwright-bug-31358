import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    //retries: process.env.CI ? 2 : 0,
    /* Disable retries */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],
        ['html'],
        ['junit', { outputFile: "test-results/test-results.xml", includeProjectInTestName: true }],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://playwright.dev/',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: process.env.CI ? 'retain-on-first-failure' : 'on',
        screenshot: process.env.CI ? 'only-on-failure' : 'on',
        video: {
            mode: process.env.CI ? 'retain-on-failure' : 'on',
            size: { width: 1280, height: 720 }
        },
        /*launchOptions: {
            slowMo: 2500,
        },*/
    },

    /* Configure projects for major browsers */
    projects: [
        /*{
            name: 'Google Chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },*/

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },


    ],

});
