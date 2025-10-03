import { defineConfig } from 'tsup';

const external = [
  '@eslint/js',
  '@stylistic/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-perfectionist',
  'eslint-plugin-prefer-arrow-functions',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-unicorn',
  'eslint-plugin-unused-imports',
  'eslint/config',
  'typescript-eslint',
];

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    base: 'src/base.ts',
    react: 'src/react.ts',
    nextjs: 'src/nextjs.ts',
    node: 'src/node.ts',
  },
  format: 'esm',
  target: 'node18',
  dts: false,
  clean: true,
  splitting: false,
  sourcemap: false,
  skipNodeModulesBundle: true,
  bundle: false,
  treeshake: false,
  external,
});
