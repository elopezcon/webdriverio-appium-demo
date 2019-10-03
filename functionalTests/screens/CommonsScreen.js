import BaseScreen from '../screens/BaseScreen'

const ELEMENTS = {
    ALERT_TITLE: 'id=android:id/alertTitle',
    ALERT_MESSAGE: 'id=android:id/message',
    ALERT_OK_CTA: 'id=android:id/button1',
    BACKK_ARROW: '(//android.widget.ImageView[@content-desc="Back button"])[2]'
}

export default class CommonsScreen extends BaseScreen {
    constructor () {
        super(ELEMENTS)
    }

    clickBackArrow () {
        this.elementTap(ELEMENTS.BACKK_ARROW)
    }
    getAlertTitle () {
        return this.getElementText(ELEMENTS.ALERT_TITLE)
    }

    getAlertMessage () {
        return this.getElementText(ELEMENTS.ALERT_MESSAGE)
    }
}
