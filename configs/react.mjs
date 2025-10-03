import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

import baseConfig from './base.mjs';

export default defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@stylistic': stylistic,
    },
    rules: {
      // React specific rules
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
      'react/prop-types': 'off',

      // Stylistic rules for JSX
      '@stylistic/jsx-curly-brace-presence': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]);
