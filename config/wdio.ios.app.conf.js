const { config } = require('./wdio.shared.conf')

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
        'appium:app': '/Users/eduardo.contreras/Desktop/ProfileSDKExample.zip'
    },
]

exports.config = config
