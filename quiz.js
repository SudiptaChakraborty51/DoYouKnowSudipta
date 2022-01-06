var chalk = require('chalk');
var score = 0;
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is Your Name? ");

console.log("Welcome "+chalk.blue.bold.underline(userName)+" to DO YOU KNOW SUDIPTA ? Challenge!");
console.log("Let's start playing.......");
console.log("...................................................");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're RIGHT!");
    score = score + 1;
  } else {
    console.log("You're WRONG!");
  }
  console.log("Your Score is : "+score);
}

var questionList = [
  {
  question: "Which drink does SUDIPTA like the most? TEA or COFFEE : ",
  answer: "TEA"
  },
  {
  question: "What SUDIPTA most enjoy doing in his spare time? READING BOOKS or SLEEPING : ",
  answer: "SLEEPING"
  },
  {
  question: "What is SUDIPTA's favorite holiday destination? MOUNTAIN or SEA-BEACH : ",
  answer: "MOUNTAIN"
  },
  {
  question: "What type of movies does SUDIPTA like? COMEDY or HORROR : ",
  answer: "COMEDY"
  },
  {
  question: "Which app is the best for SUDIPTA? WHATSAPP or FACEBOOK : ",
  answer: "WHATSAPP"
  }
]

var highScore = [
  {
    name: "Sudipta",
    score: 5
  },
  {
    name: "Aritra",
    score: 5
  }
]

for(var i = 0; i < questionList.length; i++){
  play(questionList[i].question,questionList[i].answer);
}
console.log("Thanks For Playing this game!")
console.log("YOU SCORED : "+chalk.red(score));

for(var j = 0; j < highScore.length; j++){
  if(score >= highScore[j].score){
    console.log(chalk.green("HURRAH!")+" You has beaten the highscore of "+chalk.red(highScore[j].name)+".");
  } else {
    console.log("Highscore is : "+chalk.red(highScore[j].score));
  }
}