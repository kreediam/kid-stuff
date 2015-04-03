var readline = require('readline');
var number;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello, would you like to play a game? ', game);

function game(play){
  if(play === "yes"){
    number = Math.floor((Math.random() * 100) + 1);
    guess();
  } else {
    console.log("OK then, goodbye :)");
    rl.close();
  }
}

function guess(response) {
  var prompt;

  if(number == response) {
    console.log(response + " is correct, you win!");
    rl.close();
    return;
  } else if(response < number){
    prompt = "Higher: ";
  } else if(response > number){
    prompt = "Lower: ";
  } else {
    prompt = "Great! I'm thinking of a number between 1 and 100: ";
  }

  rl.question(prompt, guess);
}
