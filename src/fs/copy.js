import { promises as fsPromises } from "fs";
import path from "path";

const copy = async () => {
    const fromPath = "./files";
    const toPath = "./files_copy";

    const isSourceFolderExists = await isFolderExists(fromPath);
    if (!isSourceFolderExists) {
        throw new Error("FS operation failed");
    }

    const isTargetFolderExists = await isFolderExists(toPath);
    if (isTargetFolderExists) {
        throw new Error("FS operation failed");
    }

    await fsPromises.mkdir(toPath);
    const files = await fsPromises.readdir(fromPath);
    for (const singleFile of files) {
        fsPromises.copyFile(path.join(fromPath, singleFile), path.join(toPath, singleFile));
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

copy();
