const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { addCucumberTransformerPlugin } = preprocessor;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      
      await addCucumberTransformerPlugin(on, config);

      return config;
    },
    supportFile: "support/e2e.js",
    specPattern: ["e2e/**/*.cy.js", "e2e/**/*.feature"],
  },
});