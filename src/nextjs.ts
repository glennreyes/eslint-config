import { defineConfig } from 'eslint/config';

import reactConfig from './react.js';

const nextjsConfig = defineConfig([
  ...reactConfig,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);

export default nextjsConfig;
