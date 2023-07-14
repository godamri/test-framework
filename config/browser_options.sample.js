module.exports = {
    driverOptions: {
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.CI ? ['headless', 'disable-gpu'] : []
        }
    }},
    url : 'https://google.io',
    metaData: {
        "App Version": "0.28.1",
        "Test Environment": "DEVEL",
        "Browser": "Chrome",
        "Platform": "MacOS",
        "Executed": "Local"
    },
}