var readline = require('readline');
var number1, number2,last,first;
var number;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getFirst(name){
  last=name;
rl.question('Hello, what is your last name?',getFirst);

  console.log("Nice to know your last name");
	rl.question('What is your name? ', ffff);
}

function ffff(name){
	first=name;
	console.log(first, " ", last);
	rl.question('Please enter a number(this is division): ', getSecond);
}

function getSecond(number){
  number1 = number;

  rl.question('Thanks. Now enter another number: ', divide);
}

function divide(number){
  number2 = number;

  console.log(number1, "/", number2, "=", number1 / number2);
  console.log("Have a nice day!");
  console.log("Wait, I for got to ask you something");
  rl.question('What is your favorite video game? ',thing);
}

function thing(game2){
	console.log("No kidding!", game2," is my favorite video game too");
rl.question("Now do you want to play a guessing game? ",game);
}

function game(play){
  if(play === "yes"){
    number = Math.floor((Math.random() * 1) + 1000);
    guess();
  } else {
    console.log("OK then, goodbye :) p.s have a good day");
    rl.close();
  }
  
}
function guess(response) {
  var prompt;

  if(number == response) {
    console.log(response + " is correct, you win!:) p.s have a good day");
    rl.close();
    return;
  } else if(response < number){
    prompt = "Higher: ";
  } else if(response > number){
    prompt = "Lower: ";
  } else {
    prompt = "Great! I'm thinking of a number between 0 and 1000: ";
  }

  rl.question(prompt, guess);
}