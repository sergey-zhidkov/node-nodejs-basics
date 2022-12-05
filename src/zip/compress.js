import zlib from "zlib";
import fs from "fs";

const compress = async () => {
    const gzip = zlib.createGzip();
    const rs = fs.createReadStream("./files/fileToCompress.txt");
    const ws = fs.createWriteStream("./files/archive.gz");
    rs.pipe(gzip).pipe(ws);
    // Write your code here
};

await compress();
