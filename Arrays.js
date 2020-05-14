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
  
// Array to take strings from user and add to array
    //     let manUnited = [];

//     for (i=0; i < 11; i++){

//     let userInput = await askQuestion ("Enter your Player  :");

//     manUnited.push(userInput);

// }

//     console.log(manUnited);

// console to write the number from 1 to 7
// for (i=1; i<=7; i++)
// {
//     console.log(i);
// }

// console to write the numbers from 2 to 8
// for (i=2; i<=8; i=i+2){

//     console.log(i);
// }

// write a console app that prints the elements of an array in reverse
// let footballer =["Beckham", "Mata", "Ibrahimovic","Martial", "Mata"];

// for (i=footballer.length -1; i>= 0; i--){
//     console.log(footballer[i]);
// }

// write a console app that prints the elements of an array that beginwith the letter a

let footballer =["Beckham", "Mata", "Ibrahimovic", "Alexis","Martial", "Mata", "Anthony"];

for (i=0; i < footballer.length; i++){
   let hasA = footballer[i];
    if (hasA[0] == "A"){
        console.log(hasA);
    }
}


}

Program().then(() => {
    process.exit(0);
});