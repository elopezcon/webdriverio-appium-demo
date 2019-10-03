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
        platformName: 'iOS',
        maxInstances: 1,
        'appium:platformVersion': '12.2',
        'appium:deviceName': 'iPhone X',

        'appium:automationName': 'XCUITest',
        'appium:unicodeKeyboard': true,
        'appium:resetKeyboard': true,
        'appium:app': '/Users/eduardo.contreras/Documents/WizelineGitHub/Fox/Android/app-release.apk'
    },
]

exports.config = config
