const reporter = require('multiple-cucumber-html-reporter');


reporter.generate({
    jsonDir: 'reports/json',
    reportPath: 'reports/html-report',


    metadata: {
        browser: {
            name: 'Chromium / Firefox / WebKit',
            version: 'Latest'
        },
        device: 'Local Machine',
        platform: {
            name: process.platform,
            version: process.version
        }
    },


    customData: {
        title: 'Reporte de Automatización',
        data: [
            { label: 'Proyecto', value: 'Playwright + Cucumber + POM' },
            { label: 'Framework', value: 'Playwright' },
            { label: 'Runner', value: 'Cucumber JS' },
            { label: 'Reporte', value: 'Multiple Cucumber HTML Reporter' }
        ]
    }
});


(async () => {
    if (!process.env.CI) {
        const open = (await import('open')).default;
        await open('./reports/html-report/index.html');
    }
})();
