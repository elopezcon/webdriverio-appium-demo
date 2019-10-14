import CommonsScreen from '../android/CommonsScreen'

const ELEMENTS = {
    FACEBOOK_TOKEN: 'id=com.fox.android.foxkit.profile.demo:id/edt_facebook_token',
    USER_EMAIL: 'id=com.fox.android.foxkit.profile.demo:id/edt_email',
    USER_PASSWORD: 'id=com.fox.android.foxkit.profile.demo:id/edt_password',
    SHOW_PASSWORD: 'id=com.fox.android.foxkit.profile.demo:id/tv_show_password',
    FORGOT_PASSWORD: 'id=com.fox.android.foxkit.profile.demo:id/tv_forgot_password',
    SIGN_IN: 'android=new UiSelector().text("Sign In").className("android.widget.TextView")',
    SIGN_IN_XPATH: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.view.ViewGroup[2]/android.widget.TextView[5]'
}

class LoginScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    clickForgotPassword () {
        this.elementTap(ELEMENTS.FORGOT_PASSWORD)
    }

    enterFacebookToken (token) {
        this.sendText(ELEMENTS.FACEBOOK_TOKEN, token)
        this.elementTap(ELEMENTS.SIGN_IN_XPATH)
    }

    enterLoginCredentials (user, password) {
        this.sendText(ELEMENTS.USER_EMAIL, user)
        this.sendText(ELEMENTS.USER_PASSWORD, password)
        this.elementTap(ELEMENTS.SIGN_IN_XPATH)
    }

    getPasswordText () {
        return this.getElementText(ELEMENTS.USER_PASSWORD)
    }

    showPassword (password) {
        this.elementTap(ELEMENTS.SHOW_PASSWORD)
        this.sendText(ELEMENTS.USER_PASSWORD, password)
    }
}

export default new LoginScreen()
