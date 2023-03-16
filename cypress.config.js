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
        api_key:"107d4e9484cd81cd973fdda9ece2454025c276ff7366d311588dcdf1848c642e"
    }
});
