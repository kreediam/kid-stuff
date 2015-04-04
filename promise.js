var qna = require('./qna')(),
  number1,
  number2;

function greet(){
  return qna.question('Hello, what is your name? ');
}

function getFirst(response){
  console.log('Nice to meet you ' + response + '. Do you flush?');
  return qna.question('Please enter a number: ');
}

function getSecond(response){
  number1 = response;
  return qna.question('Thanks. Now enter another number: ');
}

function multiply(response){
  number2 = response;
  console.log(number1, '*', number2, '=', number1 * number2);
  console.log('Have a nice day!');

  qna.close();
}

greet()
  .then(getFirst)
  .then(getSecond)
  .then(multiply);
