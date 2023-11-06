const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  testFiles2: '**.spec.js',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      on('file:preprocessor', cucumber())
    },
    baseUrl1: 'https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html',
    baseUrl2: 'https://www.independent.co.uk/',
    experimentalStudio: true,
    experimentalSessionSupport: true,
    specPattern: './**/*.{feature,features}',
    //specPattern: 'cypress/integration/**/*.{feature,features}',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
         configFile: 'reporterOptions.json',
         //configFile: 'reporter-config.json',
         charts: true,
         reportPageTitle: 'custom-title',
         embeddedScreenshots: true,
         inlineAssets: true,
         saveAllAttempts: false
    }
  },
})
