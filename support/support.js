const { World } = require('@cucumber/cucumber');

const world = class extends World {
    driver = null;
    constructor(options) {
        super(options);
    }
}
const capture = async (world, timeout=200) => {
    await world.driver.pause(timeout);
    await world.driver.takeScreenshot().then((image) => {
        world.attach(image, 'image/png');
    });
}

module.exports = {
    customWorld: world,
    capture
};