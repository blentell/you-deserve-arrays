const prompt = require('prompt-sync')();

let enterArray = prompt('Enter an array: ');

enterArray = JSON.parse(enterArray);

console.log(`The first item in your array is ${enterArray[0]}`);