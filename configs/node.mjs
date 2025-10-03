import { defineConfig } from 'eslint/config';

import baseConfig from './base.mjs';

export default defineConfig([
  ...baseConfig,
  {
    rules: {
      // Node.js specific rules
      'no-console': 'off', // Allow console in Node.js
    },
  },
]);
