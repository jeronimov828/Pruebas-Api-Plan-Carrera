const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App": "Microservicio de Guías",
        "Ambiente": "Desarrollo",
        "Navegador": "API (sin UI)",
        "Plataforma": process.platform,
        "Fecha": new Date().toLocaleString()
    }
};

reporter.generate(options);