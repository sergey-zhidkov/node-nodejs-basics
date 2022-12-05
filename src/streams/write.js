import fs from "fs";

const write = async () => {
    const filePath = "./files/fileToWrite.txt";
    const wStream = fs.createWriteStream(filePath);
    process.stdin.on("data", (data) => {
        wStream.write(data);
    });
};

await write();
