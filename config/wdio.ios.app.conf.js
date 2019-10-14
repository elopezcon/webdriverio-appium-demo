const { join } = require('path')
const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config({ path: '../.env' })

// ====================
// Specify Test Files
// ====================
config.specs = [
    './functionalTests/test/swift/*.js',
]
// Patterns to exclude.
config.exclude = [
    './functionalTests/screens/*.js',
]

// ====================
// Capabilities
// ====================
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:platformVersion': '12.2',
        'appium:deviceName': 'iPhone X',

        'appium:automationName': 'XCUITest',
        'appium:unicodeKeyboard': true,
        'appium:resetKeyboard': true,
        'appium:app': process.env.APP_PATH_SWIFT || join(process.cwd(), './apps/ProfileSDKExample.zip')
    },
]

exports.config = config
