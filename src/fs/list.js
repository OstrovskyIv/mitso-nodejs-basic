import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');

    try {
        const files = await fs.readdir(folderPath);
        console.log(files);
    } catch {
        throw new Error('Папки нет не пиши мне');
    }
};

await list();