const { Given, When } = require('@cucumber/cucumber');
const { should } = require('chai');

Given('User arrives in login page', async function () {
    const loginScreenInputEmail = await this.driver.$("#email");
    await loginScreenInputEmail.waitForDisplayed({ timeout: 5000 });
    await should().exist(loginScreenInputEmail.elementId, 'inputEmail field does not exist');
});

When('User click login button', async function () {
    const btnLogin = await this.driver.$('button[type="submit"]');
    await btnLogin.waitForDisplayed({ timeout: 5000 });
    await btnLogin.click();
});

When('User input login with email {string}', async function (email) {
    const loginScreenInputEmail = await this.driver.$("#email");
    const e = await loginScreenInputEmail.waitForDisplayed({ timeout: 5000 });
    if (e) {
        await loginScreenInputEmail.setValue(email);
    }
});

When('User input login with password {string}', async function (pass) {
    const loginScreenInputPassword = await this.driver.$("#password");
    const p = await loginScreenInputPassword.waitForDisplayed({ timeout: 5000 });
    if (p) {
        await loginScreenInputPassword.setValue(pass);
    }
});