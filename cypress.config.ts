import { defineConfig } from 'cypress';
import * as browserify from '@cypress/browserify-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';

import dbReset from './scripts/dbReset';

export async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve('typescript'),
    }),
  );

  on('task', {
    'db:teardown': async () => dbReset(),
    'db:seed': () => {},
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    video: false,
    setupNodeEvents,
  },
});
