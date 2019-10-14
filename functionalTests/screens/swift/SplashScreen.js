import CommonsScreen from '../swift/CommonsScreen'

const ELEMENTS = {
    ANONYMOUS_LOGIN_CTA: '~Anonymous Login',
    SIGN_IN_CTA: '~Email Login',
    SIGN_UP_CTA: '~Sign Up'
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
