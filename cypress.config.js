const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://portfolio-omega-six-18.vercel.app",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2, // Resiliência em pipelines de CI contra flaky tests
      openMode: 0,
    },
    reporter: "json",
    reporterOptions: {
      output: "cypress/reports/cypress-results.json",
    },
    experimentalRunAllSpecs: true, // Habilita o botão 'Run all specs' no Cypress UI
    setupNodeEvents(on, config) {
      // Implementação de event listeners do Cypress caso necessário
      return config;
    },
  },
});

