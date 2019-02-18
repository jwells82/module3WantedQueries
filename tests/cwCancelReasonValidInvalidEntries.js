let cancelButton = {};

let clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */

module.exports = {
    beforeEach: browser => {
        cancelButton = browser.page.cwpageObject()
        cancelButton.navigate()
            .waitForElementPresent('@root', 5000)
    },

    after: browser => {
        browser.end()
    },

    'CW Cancel Reason Valid / Invalid Entries': browser => {
        //QO2J-195 150 Characters
        cancelButton.click('@menu')
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '1111111111')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et dolorr')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@textBlob').text.to.contain('1111111111.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et dolorr.2019-02-17')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //QO2J-197 151 characters
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '1111111111')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et dolorrr')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Reason for Cancellation" field should be between 5 and 150 characters long.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //QO2J-202 9 characters
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '1111111111')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ips')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Reason for Cancellation" field should be between 5 and 150 characters long.')       
        
    }

}