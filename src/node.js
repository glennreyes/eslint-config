import { defineConfig } from 'eslint/config';

import typescript from './typescript.js';

export default defineConfig([
  ...typescript,

  // Node.js specific overrides
  {
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
]);
