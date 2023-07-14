module.exports = {
    driverOptions: {
        "host": process.env.APPIUM_HOST || "localhost",
        "port": parseInt(process.env.APPIUM_PORT, 10) || 4723,
        "logLevel": "error",
        "capabilities": {
            "platformName": "Android",
            "appium:automationName": "UiAutomator2",
            "appium:app": "/Users/me/Desktop/merchant.apk",
            "appium:deviceName": "Android",
            "appium:appPackage": "com.google.analytics",
            "appium:appActivity": ".MainActivity",
            "appium:fullReset": true,
            "appium:disableIdLocatorAutocompletion": true
        }
    },
    metaData: {
        "App Version": "0.28.1",
        "Test Environment": "DEVEL",
        "Platform": "Android",
        "Executed": "Local"
    },
}