import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writableStream);

    console.log('НАЖМИ НА ЧË НИТЬ (для выхода нажми Ctrl+C):');
};

await write();