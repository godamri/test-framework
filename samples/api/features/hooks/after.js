const { After, AfterAll } = require('@cucumber/cucumber');
const { captureReq, customWorld } = require('../../support/support.js');

let world;
After(async function (scenario) {
    world = this;
    if (
      "undefined" != typeof customWorld &&
      "undefined" != typeof customWorld.state &&
      "undefined" != typeof customWorld.state.cApiOps
    ) {
      captureReq(this, customWorld.state.cApiOps);
    }
})
AfterAll(async function () {})
