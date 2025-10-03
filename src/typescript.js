import tsparser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import base from './index.js';

export default defineConfig([
  ...base,

  // TypeScript files
  ...tseslint.config({
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: true,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreIIFE: true },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true,
          allowNullableNumber: true,
          allowNullableString: true,
        },
      ],
      'import/consistent-type-specifier-style': 'error',
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
    },
  }),
]);
