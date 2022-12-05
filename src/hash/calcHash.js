import { promises as fsPromises } from "fs";
import crypto from "crypto";

const calculateHash = async () => {
    const fileToReadPath = "./files/fileToCalculateHashFor.txt";
    const buffer = await fsPromises.readFile(fileToReadPath);
    const hashSum = crypto.createHash("sha256");
    hashSum.setEncoding("hex");
    hashSum.update(buffer);
    hashSum.end();
    console.log(hashSum.read());
};

await calculateHash();
