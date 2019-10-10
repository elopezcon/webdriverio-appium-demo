import CommonsScreen from '../android/CommonsScreen'

const ELEMENTS = {
    ANONYMOUS_LOGIN_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_anonymous_login',
    SIGN_IN_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_signin',
    SIGN_UP_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_signup'
}

class SplashScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    clickAnonymousLoginCTA () {
        this.elementTap(ELEMENTS.ANONYMOUS_LOGIN_CTA)
    }

    clickSignInCTA () {
        this.elementTap(ELEMENTS.SIGN_IN_CTA)
    }

    clickSignUpCTA () {
        this.elementTap(ELEMENTS.SIGN_UP_CTA)
    }
}

export default new SplashScreen()
