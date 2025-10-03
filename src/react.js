import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

import base from './index.js';

export default defineConfig([
  ...base,

  // React configuration
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // React overrides
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]);
