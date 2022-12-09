var readline = require('readline-sync');
var score = 0;

var highscores = [{ name: "Rupesh", score: 5 },
{ name: "Lokesh", score: 5 },]//High scores


var name = readline.question("Please Input your name to Proceed \n");
console.log("Welcome " + name.toUpperCase() + ", Let's play a game to know, how much you know about me!");


if (readline.keyInYN('Do you want play?'))// if Y is the input from user, execute below code.

{

  var quiz = [{ question: 'What is my full name?', answer: 'RUPESH MOULI' }, { question: 'What is my DOB?(In format dd/mm/yyyy) ', answer: '15/04/1996' }, { question: 'Where do I stay currently(Location)?', answer: 'CHENNAI' }, { question: 'What is my nick name?', answer: 'BANNU' }, { question: 'What is the bike I have?', answer: 'PULSAR' },];


//for loop begins
  for (i = 0; i < quiz.length; i++) {
    var n = i + 1
    var ans = readline.question(n + ") " + quiz[i].question + '\n');

    if (ans.toUpperCase() == quiz[i].answer) {
      console.log('You are Right :-)');
      score++;
      console.log('score: ' + score);
      console.log('-----------------------');
    }
    else {
      console.log('You are Wrong :-(');
      console.log('score: ' + score);
      console.log('-----------------------');
    }

  } //For loop ends
  console.log("Hey " + name + ", Your total score is: " + score);

  //If statement to check High score
  if (score == quiz.length) {
    console.log("You toped the score! You are my Closest one <3 \n");
  }
  else {
    console.log('Hope, one day you will know more about me. Text me and Catch for cup of coffee <3 \n');
  }

  console.log("Previous Best High scores are")
  highscores.map(tops => console.log(tops.name, " : ", tops.score))

  console.log("If you have cracked them, take a screenshot and send me. I will update them here.")
}

else   // Another key was pressed, execute below code.
{
  console.log('Will come up with another Intresting topic');
}
