function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

return '0' + timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(50000));
