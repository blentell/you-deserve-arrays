const prompt = require("prompt-sync")();

let enterArray = prompt("Enter an array: ");

enterArray = JSON.parse(enterArray);

if (enterArray.length >= 4) {
    console.log(
        `The 4th item in your array is ${enterArray[3]}`
    );
} else
    console.log(`No 4th item, the 3rd item in your array is ${enterArray[2]}`);