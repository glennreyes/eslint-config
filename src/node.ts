import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';

const nodeConfig = defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
]);

export default nodeConfig;
