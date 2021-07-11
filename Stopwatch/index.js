let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let interval;

startBtn.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

stopBtn.onclick = function(){
    clearInterval(interval);
}

resetBtn.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00"
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function startTimer() {
  tens++;
  if (tens <= 9) appendTens.innerHTML = "0" + tens;
  if (tens > 9) appendTens.innerHTML = tens;

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }

  if (seconds > 9) appendSeconds.innerHTML = seconds;
}
