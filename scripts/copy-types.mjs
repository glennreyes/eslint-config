import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const typesDir = join(projectRoot, 'types');
const distDir = join(projectRoot, 'dist');

async function copyTypeDefinitions() {
  await mkdir(distDir, { recursive: true });

  const entries = await readdir(typesDir, { withFileTypes: true });
  const declarationFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.d.ts'));

  await Promise.all(
    declarationFiles.map((entry) => copyFile(join(typesDir, entry.name), join(distDir, entry.name))),
  );
}

copyTypeDefinitions().catch((error) => {
  console.error('[copy-types] Failed to copy type definitions:', error);
  process.exitCode = 1;
});
