import { defineConfig } from 'eslint/config';

import reactConfig from './react.mjs';

export default defineConfig([
  ...reactConfig,
  {
    rules: {
      // Next.js specific rules
      // Next.js uses React Server Components, so we don't need React in scope
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
