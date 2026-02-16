import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destinationPath = path.join(__dirname, 'files', 'archive.gz');

    try {
        await pipeline(
            fs.createReadStream(sourcePath),
            zlib.createGzip(),
            fs.createWriteStream(destinationPath)
        );
        console.log('\nФайл успешно сжат в archive.gz\n');
    } catch {
        throw new Error('окак');
    }
};

await compress();