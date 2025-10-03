import { defineConfig } from 'eslint/config';

import react from './react.js';
import typescript from './typescript.js';

export default defineConfig([...typescript, ...react]);
