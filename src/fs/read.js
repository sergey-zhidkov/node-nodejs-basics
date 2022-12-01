import { promises as fsPromises } from "fs";

const read = async () => {
    const fileToReadPath = "./files/fileToRead.txt";

    const isOriginFileExists = await isFileExists(fileToReadPath);
    if (!isOriginFileExists) {
        throw new Error("FS operation failed");
    }

    const buffer = await fsPromises.readFile(fileToReadPath);
    console.log(buffer.toString());
};

const isFileExists = async (path) => {
    try {
        const fileStats = await fsPromises.stat(path);
        if (fileStats.isFile()) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

await read();
