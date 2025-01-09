const outOfCounter = document.querySelector(".outOf-counter");
const completedProgress = document.querySelector(".completed-progress");
const uncompletedProgress = document.querySelector(".uncompleted-progress");
const progressBar = document.querySelector(".green-part");
const userMessage = document.querySelector(".user-message");

if (parseInt(localStorage.userResult) <= 9) {
  outOfCounter.textContent = `0${parseInt(localStorage.userResult)}/25`;
} else {
  outOfCounter.textContent = `${parseInt(localStorage.userResult)}/25`;
}

completedProgress.textContent = `${
  (100 / 25) * parseInt(localStorage.userResult)
}%`;
uncompletedProgress.textContent = `${
  100 - (100 / 25) * parseInt(localStorage.userResult)
}%`;
progressBar.style.animation = `progress 2s`;
progressBar.style.width = `${(100 / 25) * parseInt(localStorage.userResult)}%`;

if (parseInt(localStorage.userResult) <= 5) {
  userMessage.textContent = "Not bad! Stay focused and aim higher.";
} else if (parseInt(localStorage.userResult) <= 10) {
  userMessage.textContent = "Great work! You're making serious progress.";
} else if (parseInt(localStorage.userResult) <= 15) {
  userMessage.textContent = "You're crushing it! Keep up the amazing work.";
}
 else if (parseInt(localStorage.userResult) <= 20) {
  userMessage.textContent = "Keep learning, you have a great score!";
}
 else if (parseInt(localStorage.userResult) <= 25) {
  userMessage.textContent = "Congratulations! You're a true quiz master!🎉";
}

