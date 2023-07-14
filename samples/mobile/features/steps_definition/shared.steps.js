const { Then } = require('@cucumber/cucumber');
const { capture } = require('../../support/support.js');
const { expect } = require('chai');

Then('Element {string} should be visible', async function (text) {
    const visible = await this.driver.$('//*[@text="' + text + '"]');
    const e = await visible.waitForDisplayed({ timeout: 6000, timeoutMsg: 'Alert ' + text + ' is not visible' });
    await capture(this);
    await expect(e).to.equal(true, 'Alert ' + text + ' is not visible');
});

Then('Alert {string} should be visible', async function (condition) {
    if (
        condition === 'Email invalid'
        || condition === 'Email is required'
        || condition === 'Password is required'
        || condition === 'Username or password invalid'
        ) {
        let captureTimeout = 100;
        const visible = await this.driver.$('//*[@text="' + condition + '"]');
        await capture(this, captureTimeout);
        const e = await visible.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Alert ' + condition + ' is not visible' });
        await expect(e).to.equal(true, 'Alert ' + condition + ' is not visible');
    }
    else {
        await expect(() => { return false; }).to.equal(true, 'Alert ' + condition + ' is not implemented');
    }
});
