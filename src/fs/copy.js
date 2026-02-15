import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const srcPath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

    try {
        await fs.cp(srcPath, destPath, { recursive: true, errorOnExist: true, force: false });
    } catch {
        throw new Error('Нит не работает');
    }
};

await copy();