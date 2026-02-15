import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(newPath).then(() => { throw new Error(); }).catch(async (e) => {
            if (e.message === '') throw e;
            await fs.rename(oldPath, newPath);
        });
    } catch {
        throw new Error('ОШИИБКА');
    }
};

await rename();