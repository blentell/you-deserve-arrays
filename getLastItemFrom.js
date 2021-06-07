const prompt = require('prompt-sync')();

let enterArray = prompt("Enter an array: ");

enterArray = JSON.parse(enterArray);

console.log(`The last item in your array is ${enterArray[enterArray.length - 1]}`);