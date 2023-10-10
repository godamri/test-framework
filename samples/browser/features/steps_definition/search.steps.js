const { Given, When, Then } = require('@cucumber/cucumber');
const { should } = require('chai');
const { capture } = require('../../support/support');

Given('User arrives in google search homepage', async function () {
    const inputSearch = await this.driver.$("textarea[type=search]");
    await inputSearch.waitForDisplayed({ timeout: 5000 });
    await should().exist(inputSearch.elementId, 'inputEmail field does not exist');
});

When('User search word {}', async function (keyword) {
    const inputSearch = await this.driver.$("textarea[type=search]");
    const e = await inputSearch.waitForDisplayed({ timeout: 5000 });
    if (e) {
        await inputSearch.setValue(keyword);
    }
});

Then('User click search button', async function () {
    const btnSearch = await this.driver.$("input[type=submit]");
    const p = await btnSearch.waitForDisplayed({ timeout: 5000 });
    if (p) {
        await btnSearch.click();
    }
    await capture(this);
});
