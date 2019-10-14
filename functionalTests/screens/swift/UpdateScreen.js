import CommonsScreen from '../android/CommonsScreen'

const ELEMENTS = {
    LOGOUT_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_logout',
    PROFILE_ID: 'id=com.fox.android.foxkit.profile.demo:id/tv_anonymous_login',
    UPDATE_CTA: 'id=com.fox.android.foxkit.profile.demo:id/tv_signup'
}

class UpdateScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    clickLogOutCTA () {
        this.elementTap(ELEMENTS.LOGOUT_CTA)
    }

    clickUpdateCTA () {
        this.elementTap(ELEMENTS.UPDATE_CTA)
    }

    isUpdateScreenLoaded () {
        return this.elementDisplayed(ELEMENTS.LOGOUT_CTA)
    }

    getProfileId () {
        return this.elementTap(ELEMENTS.PROFILE_ID)
    }
}

export default new UpdateScreen()
