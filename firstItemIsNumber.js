const prompt = require("prompt-sync")();

let enterArray = prompt("Enter an array: ");

enterArray = JSON.parse(enterArray);

if (typeof enterArray[0] === 'number') {
    console.log(`The first element in your array is a number`);
} else
    console.log(`The first element in your array is not a number`);
