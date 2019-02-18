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

    'CW Cancel Date Entry': browser => {
        //QO2J-210
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
            .setValue('@cancelReason', 'Lorem ipsum')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/1899')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.')
        cancelButton.api.pause(1000)

    }

}