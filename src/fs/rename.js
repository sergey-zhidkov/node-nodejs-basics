import { promises as fsPromises } from "fs";
import path from "path";

const rename = async () => {
    const dirPath = "./files/";
    const fileToRename = "wrongFilename.txt";
    const newName = "properFilename.md";

    const isOriginFileExists = await isFileExists(path.join(dirPath, fileToRename));
    if (!isOriginFileExists) {
        throw new Error("FS operation failed");
    }

    const isNewFileExists = await isFileExists(path.join(dirPath, newName));
    if (isNewFileExists) {
        throw new Error("FS operation failed");
    }

    await fsPromises.rename(path.join(dirPath, fileToRename), path.join(dirPath, newName));
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

await rename();
