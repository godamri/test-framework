const { BeforeAll, Before, setDefaultTimeout, setWorldConstructor } = require('@cucumber/cucumber')
const { customWorld } = require("../../support/support.js");
const { remote } = require('webdriverio');
const {driverOptions, url} = require("../../config/driver_options.js");

setDefaultTimeout(60 * 10000);
setWorldConstructor(customWorld);
let driver, screen;
BeforeAll(async function () {
    // driver = await remote(driverOptions);
    // await driver.url(url);
    // await driver.pause(3000);
});
Before(async function () {
    // this.driver = driver;
    // this.screen = screen;
});

Before({ tags: "@Login" }, async function () {
    // try {
    //     // clearing login form
    //     console.log('');
    //     console.log('Preparing login screen...');
    //     const loginScreenInputEmail = await this.driver.$("#email");
    //     const e = await loginScreenInputEmail.waitForDisplayed({ timeout: 3000 });
    //     const loginScreenInputPassword = await this.driver.$("id=password");
    //     const p = await loginScreenInputPassword.waitForDisplayed({ timeout: 3000 });
    //     if (e) {
    //         await loginScreenInputEmail.setValue('');
    //     }
    //     if (p) {
    //         await loginScreenInputPassword.setValue('');
    //     }
    //     console.log('Login screen ready');
    // } catch (error) {
    //     console.log('Login screen not ready!');
    // }
});
