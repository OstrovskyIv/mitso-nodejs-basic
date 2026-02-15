const parseEnv = () => {
    const envVars = process.env;
    const result = [];

    for (const key in envVars) {
        if (key.startsWith('MITSO_')) {
            result.push(`${key}=${envVars[key]}`);
        }
    }

    console.log('\n' + result.join('; ') + '\n');
};

parseEnv();
//MITSO_VAR1=hello MITSO_VAR2=world node src/cli/env.js