
let footballers =["Beckham", "Mata", "Ibrahimovic", "Alexis","Martial", "Mata", "Anthony", "Ibrahimovic", "Mata", "Beckham"];

let foundPlayers = [];
let foundPlayersCounts = [];

for (let i=0; i < footballers.length; i++){

    let footballer = footballers[i];
    let found = false;

    for (let j=0; j < foundPlayers.length; j++){
        if(foundPlayers[j] == footballer){
            foundPlayersCounts[j]++;
            found = true;
            break;
        }
    }
    if (found == false){
        foundPlayers.push(footballer);
        foundPlayersCounts.push(1);
    }
}

for (let i = 0; i < foundPlayers.length; i++){

    console.log(`${foundPlayers[i]} appears in the list ${foundPlayersCounts[i]} times`);

}