const { After, AfterAll } = require('@cucumber/cucumber');
const { captureReq, customWorld } = require('../../support/support.js');

let world;
After(async function (scenario) {
    world = this;
    if (
      "undefined" != typeof customWorld &&
      "undefined" != typeof customWorld.state &&
      "undefined" != typeof customWorld.state.api &&
      "undefined" != typeof customWorld.state.api.current_req
    ) {
      captureReq(this, customWorld.state.api.current_req);
    }
})
AfterAll(async function () {})
