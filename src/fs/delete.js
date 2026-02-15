import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.rm(filePath);
    } catch {
        throw new Error('Ну нет файла тут');
    }
};

await remove();