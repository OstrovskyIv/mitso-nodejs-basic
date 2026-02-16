import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workerPath = join(__dirname, 'worker.js');

    const cores = cpus(); // Получаем список ядер процессора

    // Создаем массив промисов для каждого воркера
    const promises = cores.map((_, index) => {
        return new Promise((resolve) => {
            // Создаем воркер и передаем число (10 + порядковый номер)
            const worker = new Worker(workerPath, {
                workerData: 10 + index
            });

            // Если воркер прислал результат
            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
            });

            // Если в воркере произошла ошибка
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        });
    });

    // Ждем завершения всех воркеров и выводим итоговый массив
    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();