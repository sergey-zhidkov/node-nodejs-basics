import zlib from "zlib";
import fs from "fs";
const decompress = async () => {
    const unzip = zlib.createUnzip();
    const rs = fs.createReadStream("./files/archive.gz");
    const ws = fs.createWriteStream("./files/fileToCompress.txt");
    rs.pipe(unzip).pipe(ws);
};

await decompress();
