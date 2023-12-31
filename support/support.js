const { World } = require('@cucumber/cucumber');

const world = class extends World {
    driver = null;
    state = {};
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

const captureReq = async (world, toss) => {
    const jsonHeaders = {
        'headers': toss._request['headers'],
        'payload': toss._request['body']
    };
    const jsonResponse = toss._response['json'];
    world.attach(toss._request.method + ' ' + toss._request.url, 'text/plain');
    world.attach(
        JSON.stringify(jsonHeaders, null, 2),
        'application/json'
    );
    world.attach('Response Body', 'text/plain');
    world.attach(
        JSON.stringify(jsonResponse, null, 2),
        'application/json'
    );
}

module.exports = {
    customWorld: world,
    capture,
    captureReq
};
