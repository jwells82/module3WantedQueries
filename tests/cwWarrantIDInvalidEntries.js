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

    'CW Warrant ID Invalid Entries': browser => {
        //QO2J-188 Warrant ID 11 numbers
        cancelButton.click('@menu')
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '11111111111')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field should be 10 characters long.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //QO2J-190 Warrant ID 9 numbers
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '111111111')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field should be 10 characters long.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //QO2J-193 Letters
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', 'aaaaaaaaaa')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field can only include numeric characters.')
        
            cancelButton.api.pause(1000)
        cancelButton.click('@clear')
        
        //QO2J-193 Symbols
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@id', '@@@@@@@@@@')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelReason', 'Lorem ipsum')
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
        cancelButton.api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The "Warrant ID" field can only include numeric characters.')
    }

}