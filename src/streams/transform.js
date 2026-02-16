import { Transform } from 'node:stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().trim().split('').reverse().join('');
            callback(null, reversed + '\n');
        }
    });

    console.log('Напиши чё нить и я переверну это (Ctrl+C для выхода):');

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();