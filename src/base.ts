import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

const importResolverSettings = {
  typescript: { alwaysTryTypes: true },
  node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
} as const;

const baseConfig = defineConfig([
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
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
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
      perfectionist,
      unicorn,
      'prefer-arrow-functions': preferArrowFunctions,
    },
    rules: {
      curly: ['error', 'all'],
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
      'perfectionist/sort-imports': [
        'error',
        { type: 'natural', order: 'asc' },
      ],
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
    settings: {
      'import/resolver': importResolverSettings,
    },
  },
  ...tseslint.config({
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    settings: {
      'import/resolver': importResolverSettings,
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

export default baseConfig;
