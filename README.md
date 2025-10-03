# @glennreyes/eslint-config

Opinionated ESLint config with TypeScript, React, and Next.js support.

## Features

- 🎯 TypeScript support with type-checking
- ⚛️ React & React Hooks support
- ⚡ Next.js optimized configuration
- 🎨 Stylistic rules for consistent code formatting
- 📦 Import sorting and organization
- 🧹 Automatic unused imports removal
- ♿ Accessibility checks (jsx-a11y)

> Requires Node.js 18+ and ESLint 9 or newer.

## Installation

```bash
pnpm add -D @glennreyes/eslint-config eslint typescript
# or
npm install --save-dev @glennreyes/eslint-config eslint typescript
# or
yarn add -D @glennreyes/eslint-config eslint typescript
```

## Usage

### Next.js (default)

```ts
// eslint.config.ts
export { default } from '@glennreyes/eslint-config';
```

### React

```ts
// eslint.config.ts
export { default } from '@glennreyes/eslint-config/react';
```

### Node.js

```ts
// eslint.config.ts
export { default } from '@glennreyes/eslint-config/node';
```

### Base (TypeScript/JavaScript)

```ts
// eslint.config.ts
export { default } from '@glennreyes/eslint-config/base';
```

### Extending the config

```ts
// eslint.config.ts
import baseConfig from '@glennreyes/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...baseConfig,
  {
    // Your custom rules
    rules: {
      'no-console': 'off',
    },
  },
]);
```

## What's included

### Plugins

- `@eslint/js` - ESLint recommended rules
- `@stylistic/eslint-plugin` - Stylistic rules for code formatting
- `@typescript-eslint/parser` - TypeScript parser
- `eslint-plugin-import` - Import/export syntax support
- `eslint-plugin-jsx-a11y` - Accessibility rules for JSX
- `eslint-plugin-perfectionist` - Sorting and organization
- `eslint-plugin-prefer-arrow-functions` - Prefer arrow functions
- `eslint-plugin-react` - React specific rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-unicorn` - Various awesome ESLint rules
- `eslint-plugin-unused-imports` - Auto-remove unused imports
- `typescript-eslint` - TypeScript ESLint rules

## License

MIT © [Glenn Reyes](https://glennreyes.com)
