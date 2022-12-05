const parseEnv = () => {
    const keys = Object.keys(process.env);
    const keyValue = keys
        .filter((key) => key.startsWith("RSS_"))
        .map((key) => {
            const value = process.env[key];
            return `${key}=${value}`;
        });

    let result = keyValue.join("; ");
    console.log(result);
};

parseEnv();
