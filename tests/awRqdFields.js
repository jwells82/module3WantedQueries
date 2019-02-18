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

    'QO2J-67 AW Valid Entries': browser => {
        //Do the required fields display when reqd fields are left empty?
        //only enter valid weight
        cancelButton.click('@menu')
        browser.keys(browser.Keys.TAB)
        browser.pause(1000)
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@header', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@mke', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@oai', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@name', '')
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@sex', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@race', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@height', '')
        
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@weight', '165')

        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@hair', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@offense', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@warrantDate', '')
        
    
        cancelButton.api.pause(10000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Header" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "MKE" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Originating Agency Identifier" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Name" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Sex" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Race / Ethnicity" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Height" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Hair" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Offense" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Date of Warrant/Violation" must be included.')

        cancelButton.api.pause(1000)
        cancelButton.click('@clear')

        //Only enter valid height
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@header', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@mke', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@oai', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@name', '')
        
        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@sex', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@race', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@height', '602')
        
        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@weight', '')

        browser.keys(browser.Keys.ENTER)
        cancelButton
            .setValue('@hair', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@offense', '')

        browser.keys(browser.Keys.TAB)
        cancelButton
            .setValue('@warrantDate', '')
        
    
        cancelButton.api.pause(10000)
        clickByText(cancelButton, ' Submit ')
        cancelButton.api.pause(5000)
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Header" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "MKE" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Originating Agency Identifier" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Name" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Sex" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Race / Ethnicity" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Weight" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Hair" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Offense" must be included.')
        cancelButton
            .expect.element('@error').text.to.contain('The field named "Date of Warrant/Violation" must be included.')


        
    }
        
    
}