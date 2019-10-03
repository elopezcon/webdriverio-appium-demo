const { config } = require('./wdio.shared.conf')

// ====================
// Specify Test Files
// ====================
config.specs = [
    './functionalTests/test/*.js',
]
// Patterns to exclude.
config.exclude = [
    './functionalTests/screens/*Page.js',
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
        'appium:app': '/Users/eduardo.contreras/Documents/WizelineGitHub/Fox/Android/app-release.apk'
    },
]

exports.config = config
