import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';

const reactConfig = defineConfig([
  ...baseConfig,
  ...reactHooks.configs.recommended,
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@stylistic': stylistic,
      react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
      'react/prop-types': 'off',
      '@stylistic/jsx-curly-brace-presence': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]);

export default reactConfig;
