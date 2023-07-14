const { After, AfterAll } = require('@cucumber/cucumber');
const { capture } = require('../../support/support.js');

let world;
After(async function (scenario) {
    world = this;
    if (scenario.result.status != 'PASSED') {
        await capture(world);
    }
})
AfterAll(async function () {
    console.log('AfterAll: Disconnecting device ...');
    if ('undefined' !== typeof world && 'undefined' !== typeof world.driver) {
        await world.driver.pause(3500)
        await world.driver.deleteSession();
        console.log('AfterAll: Device Disconnected ...');
    }
})
