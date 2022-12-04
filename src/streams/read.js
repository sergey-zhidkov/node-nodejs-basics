import fs from "fs";

const read = async () => {
    const filePath = "./files/fileToRead.txt";
    const stream = fs.createReadStream(filePath);
    stream.pipe(process.stdout);
};

await read();
