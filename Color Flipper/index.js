const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  //Math.random() gives a number between 0 and 1
  //0.71829 * 255 = 183.174
  const green = Math.floor(Math.random() * 255);

  const yellow = Math.floor(Math.random() * 255);

  const color = `rgb(${red},${green},${yellow})`;
  body.style.backgroundColor = color;
}

document.getElementById("red").addEventListener("click", () => setColor("red"));
document
  .getElementById("green")
  .addEventListener("click", () => setColor("green"));
document
  .getElementById("yellow")
  .addEventListener("click", () => setColor("yellow"));

document.getElementById("random").addEventListener("click", randomColor);
