const prompt = require("prompt-sync")();

let enterArray = prompt("Enter an array: ");

enterArray = JSON.parse(enterArray);

if (typeof enterArray[2] === 'string') {
    const split = Array.from(enterArray[2]);
    console.log(split[1]);
    } else
    console.log('This is an error message!');

    

