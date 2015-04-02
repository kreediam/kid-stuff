var readline = require('readline');
var number1, number2;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello, what is your name? ', getFirst);

function getFirst(name){
  console.log("Nice to meet you " + name + ". Do you flush?");

  rl.question('Please enter a number: ', getSecond);
}

function getSecond(number){
  number1 = number;

  rl.question('Thanks. Now enter another number: ', multiply);
}

function multiply(number){
  number2 = number;

  console.log(number1, "*", number2, "=", number1 * number2);
  console.log("Have a nice day!");
  rl.close();
}
