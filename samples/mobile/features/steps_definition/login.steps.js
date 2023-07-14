const { Given, When, Then } = require('@cucumber/cucumber');
const { should, expect } = require('chai');

Given('User arrives in login page', async function () {
    const loginScreenInputEmail = await this.driver.$("id=inputEmail");
    await loginScreenInputEmail.waitForDisplayed({ timeout: 20000 });
    await should().exist(loginScreenInputEmail.elementId, 'inputEmail field does not exist');
});

When('User click login button', async function () {
    const btnLogin = await this.driver.$("id=btnLogin");
    await btnLogin.waitForDisplayed({ timeout: 20000 });

    const clickable = await btnLogin.getAttribute('clickable');
    await expect(clickable).to.equal('true', "btnLogin is not clickable");
    await btnLogin.click();

});

When('User input login with email {string}', async function (email) {
    const loginScreenInputEmail = await this.driver.$("id=inputEmail");
    const e = await loginScreenInputEmail.waitForDisplayed({ timeout: 20000 });
    if (e) {
        await loginScreenInputEmail.setValue(email);
    }
});

// When('User input login with email {string} and password {string}', async function (email, password) {
//     const loginScreenInputEmail = await this.driver.$("id=inputEmail");
//     const e = await loginScreenInputEmail.waitForDisplayed({ timeout: 20000 });
//     if (e) {
//         await loginScreenInputEmail.setValue(email);
//     }
//     const loginScreenInputPassword = await this.driver.$("id=inputPassword");
//     const p = await loginScreenInputPassword.waitForDisplayed({ timeout: 20000 });
//     if (p) {
//         await loginScreenInputPassword.setValue(password);
//     }
// });

Then('Login button should be disabled', async function () {
    const btnLogin = await this.driver.$("id=btnLogin");
    await btnLogin.waitForDisplayed({ timeout: 20000 });
    const clickable = await btnLogin.getAttribute('clickable');
    await expect(clickable).to.equal('false', "btnLogin is not clickable");

});

Then('Login button should be enabled', async function () {
    const btnLogin = await this.driver.$("id=btnLogin");
    await btnLogin.waitForDisplayed({ timeout: 20000 });
    const clickable = await btnLogin.getAttribute('clickable');
    await expect(clickable).to.equal('true', "btnLogin is not clickable");

});

When('User input login with password {string}', async function (pass) {
    const loginScreenInputPassword = await this.driver.$("id=inputPassword");
    const p = await loginScreenInputPassword.waitForDisplayed({ timeout: 20000 });
    if (p) {
        await loginScreenInputPassword.setValue(pass);
    }
});