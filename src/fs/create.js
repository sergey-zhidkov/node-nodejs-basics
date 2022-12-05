import { promises as fsPromises } from "fs";

const create = async () => {
    const path = "./files/fresh.txt";
    const fileExists = await isFileExists(path);
    if (fileExists) {
        throw new Error("FS operation failed");
    }

    await fsPromises.writeFile(path, "I am fresh and young");
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

await create();
