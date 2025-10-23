const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reversed = reverseString(value);
  input.value = ""; //clear the input field after checking

  if (value == reversed) {
    alert("The string is a palindrome");
    return;
  } else {
    alert("The string is not a palindrome");
  }
}

document.getElementById("check").addEventListener("click", check);
