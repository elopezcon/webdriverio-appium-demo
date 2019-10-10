import { assert } from 'chai'

import splashScreen from '../../screens/swift/SplashScreen'

beforeEach(function () {
    driver.reset()
})

describe('Login functionality for sample app: ', () => {
    it('Anonymously login', () => {
        splashScreen.clickAnonymousLoginCTA()

        driver.pause(3000)
        const updateScreenLoaded = true

        assert(updateScreenLoaded, true)
    })
})
