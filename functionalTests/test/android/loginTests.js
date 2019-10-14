import { USER_CREDENTIALS, USER_PASSWORD, VALID_FB_TOKEN, ALERT_SUCCESS_TEXT, ALERT_ERROR_TEXT, INVALID_USER_CREDENTIALS, INVALID_USER_PASSWORD } from '../../utils/constants'
import { assert } from 'chai'

import loginScreen from '../../screens/android/LoginScreen'
import resetPasswordScreen from '../../screens/android/ResetPasswordScreen'
import splashScreen from '../../screens/android/SplashScreen'
import updateScreen from '../../screens/android/UpdateScreen'

beforeEach(function () {
    driver.reset()
})

describe('Login functionality for sample app: ', () => {
    it('Anonymously login', () => {
        splashScreen.clickAnonymousLoginCTA()

        const updateScreenLoaded = updateScreen.isUpdateScreenLoaded()

        assert(updateScreenLoaded, true)
    })

    it('Login valid user and password', () => {
        splashScreen.clickSignInCTA()
        loginScreen.enterLoginCredentials(USER_CREDENTIALS, USER_PASSWORD)

        const alertTitle = loginScreen.getAlertTitle()
        const alertMessage = loginScreen.getAlertMessage()

        assert.equal(alertTitle, ALERT_SUCCESS_TEXT)
        assert.isNotEmpty(alertMessage)
    })

    it('Login invalid user', () => {
        splashScreen.clickSignInCTA()
        loginScreen.enterLoginCredentials(INVALID_USER_CREDENTIALS, USER_PASSWORD)

        const alertTitle = loginScreen.getAlertTitle()
        const alertMessage = loginScreen.getAlertMessage()

        assert.equal(alertTitle, ALERT_ERROR_TEXT)
        assert.isNotEmpty(alertMessage)
    })

    it('Login invalid password', () => {
        splashScreen.clickSignInCTA()
        loginScreen.enterLoginCredentials(USER_CREDENTIALS, INVALID_USER_PASSWORD)

        const alertTitle = loginScreen.getAlertTitle()
        const alertMessage = loginScreen.getAlertMessage()

        assert.equal(alertTitle, ALERT_ERROR_TEXT)
        assert.isNotEmpty(alertMessage)
    })

    it.skip('Facebook token login', () => {
        splashScreen.clickSignInCTA()
        loginScreen.enterFacebookToken('VALID_FB_TOKEN')
    })

    it('Facebook incorrect token login', () => {
        splashScreen.clickSignInCTA()
        loginScreen.enterFacebookToken(VALID_FB_TOKEN)

        const alertTitle = loginScreen.getAlertTitle()
        const alertMessage = loginScreen.getAlertMessage()

        assert.equal(alertTitle, ALERT_ERROR_TEXT)
        assert.isNotEmpty(alertMessage)
    })

    it('Show password', () => {
        splashScreen.clickSignInCTA()
        loginScreen.showPassword(USER_PASSWORD)

        const showPassword = loginScreen.getPasswordText()

        assert.equal(showPassword, USER_PASSWORD)
    })

    it('Forgot password', () => {
        splashScreen.clickSignInCTA()
        loginScreen.clickForgotPassword()

        const resetScreenLoaded = resetPasswordScreen.isResetPasswordScreenLoaded()

        assert(resetScreenLoaded, true)
    })
})
