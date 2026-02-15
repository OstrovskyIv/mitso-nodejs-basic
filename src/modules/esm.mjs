import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const fileContent = await readFile(filePath);

        const hash = createHash('sha256').update(fileContent).digest('hex');

        console.log('\n' + hash + '\n');
    } catch (error) {
        throw new Error('ошибка');
    }
};

await calculateHash();