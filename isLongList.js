const prompt = require("prompt-sync")();

let enterArray = prompt("Enter an array: ");

enterArray = JSON.parse(enterArray);

if (enterArray.length >= 10) {
    console.log(`Your array is: ${enterArray.length}`);
} else
    console.log(`Your array is too short ${enterArray.length}`);