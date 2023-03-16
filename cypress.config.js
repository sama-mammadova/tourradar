const {defineConfig} = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    viewportWidth: 1440,
    viewportHeight: 900,
    e2e: {
        baseUrl: 'https://www.tourradar.com/',
    },

    env: {
        api_key:"c3c96a4403ce78a5dcfdbbfe2420a71a038b428261e38da065de818c1f980438"
    }
});
