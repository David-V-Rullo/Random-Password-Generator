// Assignment Code
var specialChar = []
var numbArray = ["1","2","3","4","5","6"]
var lowerCase = []
var upperCase = []

.onClick

function userPrompt() {
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  )
  if (length < 8) {
    alert("Your password must be AT LEAST 8 characters")
    //return to beginning of program instead of null
    return null;
  }
  if (length < 128) {
    alert("Your password must be LESS THAN 128 characters")
    return null;
  }
// function to as user for password options - length and type of characters to use
// Password must be less than 128 char and more than 8
// Check for proper input - is input a number
if (Number.isNaN(length)) {
  alert("Password length must be a number")
  return null;
  }
}

// create prompt that asks for what characters you want the user to use
// check to see if the user selected at least one character type







var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
