import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const scriptPath = join(__dirname, 'files', 'script.js');

    spawn('node', [scriptPath, ...args], {

        stdio: 'inherit'
    });
};

spawnChildProcess(['аргумент1', 'аргумент2', 'тест-м3']);