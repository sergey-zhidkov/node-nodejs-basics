import fs from "fs";
import { Transform } from "stream";

const transform = async () => {
    const reverseString = new Transform({
        transform(chunk, endcoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""));
        },
    });

    process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();
