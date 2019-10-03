const { config } = require('./wdio.shared.conf')

config.user = 'eduardo477'
config.key = 'cRnaDyBopbq2EVKMdzrk'
// ============
// Specs
// ============
config.specs = [
    './functionalTests/test/*.js',
]
// Patterns to exclude.
config.exclude = [
    './functionalTests/screens/*Page.js',
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
        app: '/Users/eduardo.contreras/Documents/WizelineGitHub/Fox/Android/app-release.apk',
        build: 'webdriver-browserstack'
    },
]

// This port was defined in the `wdio.shared.conf.js`
delete config.port

exports.config = config
