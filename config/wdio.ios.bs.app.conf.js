const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config({ path: './.env' })

config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME'
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
// ============
// Specs
// ============
config.specs = [
    './functionalTests/test/swift/*.js',
]
// Patterns to exclude.
config.exclude = [
    './functionalTests/screens/*.js',
]

// ============
// Capabilities
// ============
config.services = ['browserstack']
config.host = 'hub.browserstack.com'
config.capabilities = [
    {
        deviceName: 'iPhone X',
        os_version: '11',
        automationName: 'XCUITest',
        platformName: 'iOS',
        idleTimeout: 180,
        maxInstances: 3,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        name: 'single_appium_test',
        build: 'fox-sample-app-ios',
        app_url: process.env.APP_URL_SWIFT || 'bs://',
        debug: true,
        unicodeKeyboard: true,
        resetKeyboard: true,
        'browserstack.appium_version': '1.15',
        'browserstack.debug': true,
        'browserstack.video': true
    },
]

// This port was defined in the `wdio.shared.conf.js`
delete config.port

exports.config = config
