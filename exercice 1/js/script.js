var chiffre;
var level;
var chances = 0;
var level;
var result;
var replay = "Yes";
var score = 0;
var games = 1;
var won = 0;
var res ="No";

while (replay == "Yes") {
  chiffre = Math.floor(Math.random() * 11);
  level = prompt("Enter the difficulty you wanna face(Easy, Medium, Hard): ");
  if (level.localeCompare("Easy")) {
    chances = 6;
  }
  if (level.localeCompare("Medium")) {
    chances = 4;
  }
  if (level.localeCompare("Hard")) {
    chances = 2;
  }
  var compteur = 0;

  do {
    var utilisateur = prompt("Enter a number:");
    compteur++;
    //dans ce code on a vouly ajouter une option mais la commande  in [] ne veut pas s'executer proprement

    /* if (compteur == chances-1) {
      res = prompt(
        "Do you want a hint ? in exchange you will lose 1 pt of your score (Yes/No): "
      );
      if (res == "Yes") {
        score -= 1;
        alert(Number(chiffre))
        if (Number(chiffre) in [3, 5, 2, 7]) {
          alert("I am a prime number! ");
        }
        if (Number(chiffre) in [2, 4, 6, 8]) {
          alert("I am divisible by 2! ");
        }
        if (Number(chiffre) in [3, 6, 9]) {
          alert("I am divisible by 3! ");
        }
        if (Number(chiffre) == 1) {
          alert("weirdly i'am not a prime number xD ");
        }
        if (Number(chiffre) == 0) {
          alert("Every students nightmare 👀 ");
        }
        if (Number(chiffre) == 10) {
            alert("The barca king ");
          }

      } 
    }
    */
  } while (compteur < chances && utilisateur != chiffre);

  if (utilisateur == chiffre) {
    alert("You win 😍");
    //le score est calculé de cette maniére afin de recompensé la difficulté
    score += 12 / chances;
    won++;
  } else {
    alert("You lose 😒");
  }
  replay = prompt("Wanna retry ?(Yes or No) : ");
}
alert("Your score is " + score + " you won " + won + "/" + games);
