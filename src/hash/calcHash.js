import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const fileBuffer = await fs.readFile(filePath);
        const hash = createHash('sha256').update(fileBuffer).digest('hex');

        console.log('\nHash:', hash, '\n');
    } catch {
        throw new Error('FS operation failed');
    }
};

await calculateHash();