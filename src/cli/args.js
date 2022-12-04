const parseArgs = () => {
    // Write your code here

    const scriptArgs = process.argv.slice(2);

    let result = "";
    for (let i = 0; i < scriptArgs.length; i++) {
        if (i % 2 === 0) {
            const propName = scriptArgs[i].substring(2);
            result += propName + " is ";
        } else {
            result += scriptArgs[i] + ", ";
        }
    }

    console.log(result.substring(0, result.length - 2));
};

parseArgs();
