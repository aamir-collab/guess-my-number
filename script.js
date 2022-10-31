"use strict";
//basics of DOM
// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Guess !";
// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".score").textContent = 10;
// console.log(document.querySelector(".score").value);
let secret = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
console.log(secret);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number....";
  } else if (guess === secret) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".message").textContent = "You Won....";
    document.querySelector(".number").textContent = secret;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost...";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost...";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".highscore").textContent = 0;
  document.querySelector(".number").textContent = "?";
  ocument.quedrySelector(".score").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
