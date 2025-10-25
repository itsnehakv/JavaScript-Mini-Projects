let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

//The padStart() method in JavaScript is a built-in string method
// used to pad the beginning of a string with another string until it reaches a specified target length.
//So when seconds/minutes are less than 10, it adds a "0" in front --> 01:01
function padStart(value) {
  return String(value).padStart(2, "0");
}

//function to update the displayed time
function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

//setInterval is a built-in function that repeatedly calls a function at specified intervals (in milliseconds)
//So here it calls timer() which increments secondsElapsed by 1 every 1000 milliseconds (1 second)
// It returns a unique interval ID — basically, a number that represents this particular repeating timer.
// interval will hold a numeric ID (for example, 1, 2, 3, etc.) that JavaScript assigns internally.
//setInterval() immediately returns one fixed ID number — that’s the interval ID., this no stays the same until cleared.
//The interval variable stores the ID that’s associated with the timer() func
function startClock() {
  if (interval) {
    stopClock();
  }
  interval = setInterval(timer, 1000);
}

//stopClock function clears the interval using clearInterval() so that there isnt overlapping intervals
//clearInterval(interval) (built in func) stops the repeating action associated with that interval ID.
//clearInterval() → uses ID set by setInterval() to tell JavaScript, “stop calling this timer.”
function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
