const ball = document.querySelector(".ball");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  ball.style.animationPlayState = "running";
});

stopBtn.addEventListener("click", () => {
  ball.style.animationPlayState = "paused";
});

