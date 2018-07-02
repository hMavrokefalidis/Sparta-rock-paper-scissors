var userW = 0;
var aiW = 0;
// 0-rock 1-paper 2-scissors
var userChoice;
var aiChoice = Math.floor(Math.random() * 3);

while (!(aiW === 3 || userW === 3)) {
  getUserChoice();
  switch (userW) {
    case 0:
      if (aiChoice == 1) {
        aiW++;
        alert("The User chose rock and the AI paper, the score is "+ aiW+" for the AI "+userW+" for the user.")
      }else if (aiChoice == 2) {
        userW++;
        alert("The User chose rock and the AI scissors, the score is "+ aiW+" for the AI "+userW+" for the user.")
      }
      break;
    case 1:
      if (aiChoice == 0) {
        userW++;
        alert("The User chose paper and the AI rock, the score is "+ aiW+" for the AI "+userW+" for the user.")
      }else if (aiChoice == 2) {
        aiW++;
        alert("The User chose paper and the AI scissors, the score is "+ aiW+" for the AI "+userW+" for the user.")
      }
      break;
    case 2:
      if (aiChoice == 1){
        userW++;
        alert("The User chose scissors and the AI paper, the score is "+ aiW+" for the AI "+userW+" for the user.")
      } else if (aiChoice == 0) {
        aiW++;
        alert("The User chose scissors and the AI rock, the score is "+ aiW+" for the AI "+userW+" for the user.")
      }
      break;
  }
  aiChoice = Math.floor(Math.random() * 3);
}

function getUserChoice(userChoice){
  userChoice = prompt("Choose (0) rock (1) paper 2(scissors)");
  if (!(userChoice == 0 || userChoice == 1|| userChoice == 2)) {
    userChoice = prompt("DO NOT CHEAT HUMAN. Choose (0) rock (1) paper 2(scissors)");
  }
}
