const { Then } = require('@cucumber/cucumber');
const { capture } = require('../../support/support.js');

Then('Alert element {string} should visible', async function (text) {
    const visible = await this.driver.$('=' + text);
    await capture(this);
    const e = await visible.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Alert ' + text + ' is not visible' });
    await expect(e).to.equal(true, 'Alert ' + text + ' is not visible');
});
