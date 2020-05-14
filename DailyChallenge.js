const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
   let userInput = await askQuestion("Enter your Name :");
   console.log("Hello" + " " + userInput);
}

Program().then(() => {
    process.exit(0);
});