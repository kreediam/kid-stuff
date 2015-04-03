var readline = require('readline');
var number1, number2;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello, what is your last name? ', getFirst);

function getFirst(name){
  console.log("Nice to know your last name?");
	rl.question('what is your first name ', ffff);
}

function ffff(first){
	console.log("wow you don't have to yell. so your first name is " + first + " then. OK.");
	rl.question('Please enter a number: ', getSecond);
}

function getSecond(number){
  number1 = number;

  rl.question('Thanks. Now enter another number: ', divide);
}

function divide(number){
  number2 = number;

  console.log(number1, "/", number2, "=", number1 / number2);
  console.log("Have a nice day!");
  console.log(" I for got to ask you something");
  rl.question('what is your favorite video game?',thing);
}

function thing(game){
	console.log("No kidding!", game," is my favorite too!");

	rl.close();
}
