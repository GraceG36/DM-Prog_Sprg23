//Created by Grace Garrand 2-10-2023

//Concatenated string variables
const fName = "Billie";
const lName = "Jean";
const occupation = "not my lover";
const statement = `MJ states that "${fName} ${lName} is ${occupation}."`;
console.log(statement)

//If conditional statement
if ("Billie Jean" === "not my lover") {
     console.log(`MJ lied about Billie Jean`);
} else {
     console.log(`Billie Jean wasn't MJ's lover`)
}

 //Switch Statement
let day = "Friday";
switch(day) {  
    case "Sunday":
        console.log("Guess what? It's Sunday");
        break;
    case "Monday":
        console.log("Guess what? It's Monday");
        break;
    case "Tuesday":
        console.log("Guess what? It's Tuesday");
        break;
    case "Wednesday":
        console.log("Guess what? It's Wednesday");
        break;
    case "Thursday":
        console.log("Guess what? It's Thursday");
        break;
    case "Friday":
        console.log("Guess what? It's Friday");
        break;
    case "Saturday":
        console.log("Guess what? It's Saturday");
}

 //String method
function lyricReplace() {
    let text = document.getElementById("Lyrics").innerHTML;
    document.getElementById("Lyrics").innerHTML =
    text.replace(/son/g, "one");                   
}

//Number Method
console.log(Number.isInteger(14) + " " + Number.isInteger(78.56));