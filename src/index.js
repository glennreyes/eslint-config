import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,

  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/next-env.d.ts',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
    ],
  },

  // Global rules
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
      perfectionist,
      unicorn,
      'prefer-arrow-functions': preferArrowFunctions,
    },
    rules: {
      // Enforce curly braces on all control statements
      curly: ['error', 'all'],

      // Custom stylistic rules
      '@stylistic/jsx-curly-brace-presence': 'error',
      '@stylistic/lines-around-comment': [
        'error',
        {
          afterHashbangComment: true,
        },
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: ['block-like', 'export', 'return'],
          prev: '*',
        },
        { blankLine: 'always', next: ['*'], prev: ['block-like'] },
        {
          blankLine: 'always',
          next: ['expression'],
          prev: ['block-like', 'const'],
        },
        { blankLine: 'never', next: ['const'], prev: ['const'] },
      ],
      '@stylistic/spaced-comment': 'error',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      // Import sorting
      'perfectionist/sort-imports': [
        'error',
        { type: 'natural', order: 'asc' },
      ],

      // Unicorn overrides
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
]);
