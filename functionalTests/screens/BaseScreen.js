/* eslint-disable no-unused-vars */
import DEFAULT_TIMEOUT from '../utils/constants'

export default class BaseScreen {
    constructor (selector) {
        this.selector = selector
    }

    /**
     * Waits for an especific element and clicks on in when displayed
     *
     * @param {selector} selector
     */
    elementTap (selector) {
        this.waitForElement(selector)
        this.find(selector).click()
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {selector} selector
     * @return {boolean}
     */

    elementDisplayed (selector) {
        return this.find(selector).isDisplayed()
    }

    /**
     * Finds and return the expected element if available
     *
     * @param {selector} selector
     * @return {element}
     */
    find (selector) {
        return $(selector)
    }

    /**
     * Finds and return the expected element if available
     *
     * @param {selector} selector
     * @return {string}
     */
    getElementText (selector) {
        this.waitForElement(selector)
        return this.find(selector).getText()
    }

    /**
     * Finds and return the expected element if available
     *
     * @param {selector} selector
     * @return {element}
     */
    sendText (selector, text) {
        this.waitForElement(selector)
        this.find(selector).clearValue()
        this.find(selector).setValue(text)
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {selector} selector
     */

    waitForElement (selector) {
        return this.find(selector).waitForDisplayed(DEFAULT_TIMEOUT)
    }
}
