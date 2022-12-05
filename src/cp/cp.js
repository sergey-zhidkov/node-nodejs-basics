import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    const child = spawn("node", ["./files/script.js", ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

const args = process.argv.slice(2);
spawnChildProcess(args);
