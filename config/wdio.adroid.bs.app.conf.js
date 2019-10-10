const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config({ path: './.env' })

config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME'
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
// ============
// Specs
// ============
config.specs = [
    './functionalTests/test/android/*.js',
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
        deviceName: 'Samsung Galaxy S9',
        automationName: 'UiAutomator2',
        platformName: 'Android',
        idleTimeout: 180,
        maxInstances: 3,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        app_url: 'bs://4a7889d52224f07e757249e9fc1c47734c5e33b4',
        custom_id: 'sample_app',
        name: 'single_appium_test',
        build: 'fox-sample-app',
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
