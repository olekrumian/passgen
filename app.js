const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["@", "#", "$", "%"];

const charactersCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = charactersCodes.map((code) =>
  String.fromCharCode(code)
);
const uppercaseLetters = lowercaseLetters.map((letter) => letter.toUpperCase());

const generatePassword = (
  length,
  hasNumbers,
  hasSymbols,
  hasLovercase,
  hasUppercase
) => {
  const availableCharacters = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLovercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : []),
  ];
  var password = "";

  if (availableCharacters.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
};

const generateButton = document.querySelector(".password_button");
const copyButton = document.querySelector(".password_copy");
const input = document.querySelector(".input");

generateButton.addEventListener("click", generPass);
copyButton.addEventListener("click", copyPass);

function generPass(e) {
  e.preventDefault();
  input.value = input.value = generatePassword(12, true, true, true, true);
}

function copyPass(e) {
  e.preventDefault();
  var copyText = document.querySelector(".input");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  // if (copyText.value === "") {
  //   alert("NO DATA");
  // } else {
  //   alert("Copied the text: " + copyText.value);
  // }
}
