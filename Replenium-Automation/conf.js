exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    /* capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
           // args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
            
        }, */
    multiCapabilities: [
        {
            shardTestFiles: true,
            maxInstances: 1,
            sequential: true,
            browserName: 'chrome',
            w3c: false,
            'chromeOptions': {
                //args: ["disable-infobars"]
                // args: [ "--headless", "--window-size=800,600"]
                excludeSwitches: ["enable-automation"],
                useAutomationExtension: false
            }
        }
    ],
    //},
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    },
    specs: ['./Specfiles/**/spec.js'],
    framework: 'jasmine2',
    onPrepare: function () {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        //var TfsReporter = require('jasmine-tfs-reporter');
        // jasmine.getEnv().addReporter(new TfsReporter());
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            consolidateAll: false,
            savePath: 'C:/Users/TK-LPT-0154/node_modules/jasmine-reporters',
            screenshotsFolder: 'RepleniumScreenshots',
            baseDirectory: 'C:/Users/TK-LPT-0154/node_modules/protractor-beautiful-reporter/Beauty',
            //fileNamePrefix: 'VitolTestReport.html',
            cleanDestination: false,
            showSummary: true,
            showConfiguration: true,
            reportTitle: 'Replenium Automation Report',
            showQuickLinks: true,
            inlineImages: true
        }));
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: 'C:/Users/TK-LPT-0154/node_modules/jasmine-reporters/Repliscreenshots',
            filename: 'Kombrewcha-report.html'
        }));
    }
};
