let retries

if (process.env.NODE_ENV !== 'local') {
    retries = 2
}

exports.config = {

    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    // ====================
    // Runner and framework configuration
    // ====================
    runner: 'local',
    framework: 'mocha',
    specFileRetries: retries,
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },

    sync: true,
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['dot', 'spec', ['allure', { outputDir: './reports/allure-results/' }]],

    // ====================
    // Appium configuration
    // ====================
    services: ['appium'],
    appium: {
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Hooks configuration
    // ====================

    afterTest: function (test) {
        // eslint-disable-next-line no-undefined
        if (test.error !== undefined) {
            browser.takeScreenshot()
        }
    }
}
