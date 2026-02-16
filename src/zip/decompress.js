import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files', 'archive.gz');
    const destinationPath = path.join(__dirname, 'files', 'fileToCompress.txt');

    try {
        await pipeline(
            fs.createReadStream(sourcePath),
            zlib.createGunzip(),
            fs.createWriteStream(destinationPath)
        );
        console.log('\nФайл успешно распакован\n');
    } catch {
        throw new Error('я уже заколебался это делать памагитииии');
    }
};

await decompress();