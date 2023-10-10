const { Given, When, Then } = require('@cucumber/cucumber');
const { should } = require('chai');

Given('User arrives in home screen', async function () {
    const popularElem = this.driver.$('//*[@text="Popular"]')
    await popularElem.waitForDisplayed({ timeout: 20000 });
    await should().exist(popularElem.elementId, 'Popular element does not exist');
});

Then('Then Element {string} should be visible', async function (el) {
    const elm = await this.driver.$("@text="+el);
    await elm.waitForDisplayed({ timeout: 20000 });
});

When('User click list', async function () {
    const list = await this.driver.$("id=cu.wilb3r.codechallengetm:id/video_image");
    console.log(list);
    await list.waitForDisplayed({ timeout: 20000 });

    // const clickable = await list.getAttribute('clickable');
    // await expect(clickable).to.equal('true', "btnLogin is not clickable");
    await list.click();

});
