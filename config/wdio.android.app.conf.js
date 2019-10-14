const { join } = require('path')
const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config({ path: '../.env' })

// ====================
// Specify Test Files
// ====================
config.specs = [
    './functionalTests/test/android/*.js',
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
        platformName: 'Android',
        maxInstances: 1,
        'appium:platformVersion': '9',
        'appium:deviceName': 'Pixel 3',

        'appium:automationName': 'UIAutomator2',
        'appium:unicodeKeyboard': true,
        'appium:resetKeyboard': true,
        'appium:app': process.env.APP_PATH_ANDROID || join(process.cwd(), './apps/app-release.apk')
    },
]

exports.config = config
