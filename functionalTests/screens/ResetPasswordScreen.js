import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    RESET_PASSWORD: 'android=new UiSelector().text("Email").className("android.widget.EditText")',
    RESET_PASSWORD_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_reset'
}

class ResetPasswordScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    resetPassword (email) {
        this.sendText(ELEMENTS.RESET_PASSWORD, email)
        this.elementTap(ELEMENTS.RESET_PASSWORD_CTA)
    }

    isResetPasswordScreenLoaded () {
        return this.elementDisplayed(ELEMENTS.RESET_PASSWORD)
    }
}

export default new ResetPasswordScreen()
