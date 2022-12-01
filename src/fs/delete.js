import { promises as fsPromises } from "fs";
import path from "path";

const remove = async () => {
    const dirPath = "./files/";
    const fileToRemovePath = path.join(dirPath, "fileToRemove.txt");

    const isOriginFileExists = await isFileExists(fileToRemovePath);
    if (!isOriginFileExists) {
        throw new Error("FS operation failed");
    }

    await fsPromises.remove(fileToRemovePath);
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

await remove();
