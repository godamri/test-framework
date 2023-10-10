const { BeforeAll, Before, setDefaultTimeout, setWorldConstructor } = require('@cucumber/cucumber')
const { customWorld } = require("../../support/support.js");
const {url} = require("../../config/driver_options.js");

setDefaultTimeout(60 * 10000);
setWorldConstructor(customWorld);
BeforeAll(async function () {
    customWorld.state = {
        api: {
            base_url: url
        }
    };
});
Before(async function () {});

Before({ tags: "@Login" }, async function () {});
