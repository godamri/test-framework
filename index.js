var reporter = require('cucumber-html-reporter');
const {metaData} = require('./config/driver_options.js');

var options = {
    theme: 'bootstrap',
    jsonFile: 'test/report/report.json',
    output: 'test/report/report.html',
    screenshotsDirectory: 'test/report/screenshots',
    storeScreenshots: true,
    noInlineScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: metaData,
    failedSummaryReport: true,
};

reporter.generate(options);