var userW = 0;
var aiW = 0;
//Boolean game is on
//user select rock,paper or scissors
do {

  var userChoice = prompt("Choose rock, paper or scissors");
  if (!(userChoice == "scissors" || userChoice == "rock" || userChoice == "paper")) {
    do {
      var userChoice = prompt("Be a man and choose rock, paper or scissors");
    } while (!(userChoice == "scissors" || userChoice == "rock" || userChoice == "paper"));
  }
//algorithm to set aiChoice
  var aiChoice = Math.random();
  if (aiChoice < 0.34) {
    aiChoice = "Rock";
  }else if (aiChoice < 0.67) {
    aiChoice = "Paper";
  }else {
    aiChoice = "Scissors";
  }


//call function to compare the two choices and declare a winner
  compare(userChoice, aiChoice,aiW,userW);
  console.log(aiW + "ai wins " + userW );
} while (!(aiW === 3 || userW === 3));


function compare(userChoice,aiChoice){
  if (userChoice === aiChoice) {
    alert("THIS IS A TIE")
  }
  else if (userChoice == "rock" && aiChoice == "paper" ) {
    aiW = aiW + 1;
  }else if (userChoice == "rock" && aiChoice == "scissors") {
    userW = userW + 1;
  }else if (userChoice == "paper" && aiChoice == "rock") {
    userW = userW + 1;
  }else if (userChoice == "paper" && aiChoice == "scissors") {
    aiW = aiW + 1;
  }else if (userChoice == "scissors" && aiChoice == "rock") {
    aiW = aiW + 1;
  }else {
    userW = userW + 1;
  }

  return (aiW , userW)
}
