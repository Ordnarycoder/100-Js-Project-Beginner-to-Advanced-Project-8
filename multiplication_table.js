const readline = require('readline');

function multiplication_table() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a number: ", (number) => {
        let i = 1;
        while (i <= 9) {
            let result = i * number;
            console.log(`${number} * ${i} = ${result}`); 
            i += 1;
        }
        rl.close();
    });
}

multiplication_table();
