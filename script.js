const passwordBox = document.getElementById("password");
const generateBtn = document.querySelector("button");
const copyIcon = document.querySelector(".display img");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value) {
    navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied!");
  }
}

generateBtn.addEventListener("click", createPassword);
copyIcon.addEventListener("click", copyPassword);
