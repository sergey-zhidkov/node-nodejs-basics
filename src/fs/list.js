import { promises as fsPromises } from "fs";

const list = async () => {
    const dirPath = "./files";

    const isSourceFolderExists = await isFolderExists(dirPath);
    if (!isSourceFolderExists) {
        throw new Error("FS operation failed");
    }

    const files = await fsPromises.readdir(dirPath);
    for (const singleFile of files) {
        console.log(singleFile);
    }
};

const isFolderExists = async (path) => {
    try {
        const folderStats = await fsPromises.stat(path);
        if (folderStats.isDirectory()) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

await list();
