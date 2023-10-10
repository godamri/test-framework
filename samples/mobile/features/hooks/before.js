const { BeforeAll, Before, setDefaultTimeout, setWorldConstructor } = require('@cucumber/cucumber')
const { customWorld } = require("../../support/support.js");
const { remote } = require('webdriverio');
const {driverOptions} = require("../../config/driver_options.js");

setDefaultTimeout(1000 * 10000);
setWorldConstructor(customWorld);
let driver, screen;
BeforeAll(async function () {
    driver = await remote(driverOptions);
    const { width, height } = await driver._getWindowSize();
    screen = {
        x: {
            left: Math.round(width * 0.1),
            right: Math.round(width * 0.9),
        }
        , y: {
            left: Math.round(height / 2),
            right: Math.round(height / 2),
        }
    };
    await driver.pause(5000);
    // try {
    //     const onboardingQRIS = await driver.$('//*[@text="Terima pembayaran QRIS"]');
    //     await onboardingQRIS.waitForExist({ timeout: 2000, reverse: true });
    //     await onboardingQRIS.touchAction([
    //         { action: "longPress", x: screen.x.right, y: screen.y.right },
    //         { action: "moveTo", x: screen.x.left, y: screen.y.left },
    //         "release"
    //     ]);
    //     console.log('Swipe Left Terima pembayaran QRIS Element...');
    // } catch (error) {
    //     console.log('Terima pembayaran QRIS Element not found');
    // }
    // try {
    //     const onboardingNext = await driver.$('id=btnNext');
    //     await onboardingNext.waitForDisplayed({ timeout: 5000 });
    //     await onboardingNext.click();
    //     console.log('Click Onboarding Next Button... End');
    // } catch (error) {
    //     console.log('Onboarding Next Button Element not found');
    // }
});
Before(async function () {
    this.driver = driver;
    this.screen = screen;
});

Before({ tags: "@Login" }, async function () {
    // try {
    //     // clearing login form
    //     console.log('');
    //     console.log('Preparing login screen...');
    //     const loginScreenInputEmail = await this.driver.$("id=inputEmail");
    //     const e = await loginScreenInputEmail.waitForDisplayed({ timeout: 3000 });
    //     const loginScreenInputPassword = await this.driver.$("id=inputPassword");
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
