import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    console.log(cpuCount);
    const initialN = 10;

    let returnedResults = 0;
    const results = [];
    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker("./worker.js", { workerData: initialN + i });
        worker.on("message", (data) => {
            results[i] = { status: "resolved", data };
            console.log(data, i);
            returnedResults++;

            // I know it should be a promise way with error handling
            // but I'm lazy today
            if (returnedResults === cpuCount) {
                console.log(results);
            }
        });
    }
};

await performCalculations();
