const fs = require('fs');
const readline = require('readline')

async function extractTests(){

    //by default we specify that all tests should run
    let testsFile = __dirname+'/testsToRun.txt';
    await fs.promises.writeFile(testsFile,'all');

    const lines = readline.createInterface({
        input: fs.createReadStream(__dirname+'/pr_body.txt'),
        crlfDelay: Infinity
    });

    for await (const line of lines) {

        let upperLine = line.toUpperCase();

        //special delimeter for apex tests
        if(upperLine.includes('APEX::[') && upperLine.includes(']::APEX')){

            let tests = line.substring(8,line.length-7);
            await fs.promises.writeFile(testsFile,tests);
            await fs.promises.appendFile(testsFile,'\n');
        }
    }
}

extractTests();