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
   let userInput1 = await askQuestion ("Enter First Number :");
   let userInput2 = await askQuestion ("Enter Second Number :");

    let num1 = parseInt(userInput1);
    let num2 = parseInt(userInput2);
  
    // Finding Largest to Smallest

    //    if( num1 > num2){                                     
//         console.log("The Larger Number is  :" + num1 );
//         console.log("The Smaller Number is  :" + num2 );
//    } else {
//        console.log("The Larger Number is  :" + num2);
//        console.log("The Smaller Number is  :" + num1 );
//    }

if( num1 < num2){
    console.log("The Smaller Number is  :" + num1 );
    console.log("The Larger Number is  :" + num2 );
} else {
   console.log("The Smaller Number is  :" + num2);
   console.log("The Larger Number is  :" + num1 );
}

}

Program().then(() => {
    process.exit(0);
});