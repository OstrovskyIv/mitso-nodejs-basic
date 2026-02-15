import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(filePath, 'АЛООООООЕ ВЕРАА', { flag: 'wx' });
    } catch {
        throw new Error('Файл есть');
    }
};

await create();