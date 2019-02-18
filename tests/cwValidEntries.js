let cancelButton = {};
//let clickByText = require('../functions/wantedFunction')
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

    'QO2J-182 CW Required fields': browser => {
        
        cancelButton.click('@menu')
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        browser.keys(browser.Keys.ENTER)
        //Enter ID only
        cancelButton
            .setValue('@id', '1111111111')
            .api.pause(1000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Reason for Cancellation" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Date of Cancellation" must be included.')      
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //Enter Cancel Reason only

        cancelButton.setValue('@cancelReason', 'This was the wrong person')
        cancelButton.api.pause(2000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(2000)
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Warrant ID" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Date of Cancellation" must be included.')
        cancelButton.api.pause(1000)
        cancelButton.click('@clear')
        

        //Enter Cancel Date only
        cancelButton
            .setValue('@cancelDate', '02/17/2019')
            .api.pause(2000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(10000)
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Warrant ID" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Reason for Cancellation" must be included.')
    },

}


