import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const readableStream = fs.createReadStream(filePath, 'utf-8');

    readableStream.pipe(process.stdout);

    readableStream.on('end', () => console.log('\n'));
};

await read();