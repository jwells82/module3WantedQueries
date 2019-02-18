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

    'MW Warrant ID Entries': browser => {
        //QO2J-171 Warrant ID 
        cancelButton.click('@menu')
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', 'aaaaaaaaaa')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field can only include numeric characters.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '@@@@@@@@@@')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field can only include numeric characters.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

    }

}