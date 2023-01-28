//Created by Grace Garrand
//1-27-2023

let life = 2450; //life is now a number
life = life - 350;//this changes life value to -350

const bag = 7; //GLOBAL VARIABLES
const e = 5; //GLOBAL VARIABLES
const x = 28; //GLOBAL VARIABLES
const w = 3; //GLOBAL VARIABLES

let = 4; //undefined

let equa = e + x - w; //Mathematical operations

{
    let key = 2;//variable in block that can NOT be used outside
    let hole = 8;
    var lock = key + hole;//this variable can be used outside of block

    const dev = "Four score and";
    const elope = " seven years ago"; 
    var speech = dev + elope; //String & block variable(can be used outside of block)
}

const ring = {metal:"Gold", stone:"Opal", color:"White"}

alert("Rings can be made with " + ring.metal + " and set with " + ring.color +" " +ring.stone + "s")
// ^ is an alert with a STRING using OBJECT properties

console.log(life, equa, bag, "*changing variable, Mathematical sum, global unchanging variable");
console.log(speech, "*string");
console.log(ring, "*object")
console.log(lock, "*from block")
