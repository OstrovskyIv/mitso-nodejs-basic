import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch {
        throw new Error('Бабайка');
    }
};

await read();