// Assignment Code
// Declaring variables containing arrays to choose and pull from for passGen
let specialChar = "!@#$%^&*()_+[]{}|.<>?/".split("");
let numbArray = "1234567890".split("");
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//Create arrays from strings of characters
//No need for the below extra step. The split method can apply directly to the end of the string.
// specialChar = specialChar.split("");
// numbArray = numbArray.split("");
// lowerCase = lowerCase.split("");
// upperCase = upperCase.split("");
// function to as user for password options - length and type of characters to use
function userPrompt() {
  var options = {};

  var length = prompt(
    "How many characters would you like your password to be?"
  );
  length = parseInt(length);

  if (length < 8) {
    alert("Your password must be AT LEAST 8 characters");
    //return to beginning of program instead of null
    return null;
  }
  if (length > 128) {
    alert("Your password must be LESS THAN 128 characters");
    return null;
  }
  // Password must be less than 128 char and more than 8
  // Check for proper input - is input a number
  if (Number.isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }
  options.length = length;

  var special = prompt(
    "Would you like to use special characters(!@#$...etc) in your password: Y/N"
  );

  special = special.toUpperCase();

  if (special !== "Y" && special !== "N") {
    alert("Please enter Y or N");
    return null;
  } else if (special === "Y") {
    options.specialChar = specialChar;
  } else {
  }
  var upper = prompt(
    "Would you like to use upper case characters in your password: Y/N"
  );
  upper = upper.toUpperCase();
  if (upper !== "Y" && upper !== "N") {
    alert("Please enter Y or N");
    return null;
  } else if (upper === "Y") {
    options.upperCase = upperCase;
  } else {
  }
  var lower = prompt(
    "Would you like to use lower case characters in your password: Y/N"
  );
  lower = lower.toUpperCase();
  if (lower != "Y" && lower != "N") {
    alert("Please enter Y or N");
    return null;
  } else if (lower === "Y") {
    options.lowerCase = lowerCase;
  } else {
  }
  var number = prompt("Would you like to use numbers in your password: Y/N");
  number = number.toUpperCase();
  if (number != "Y" && number != "N") {
    alert("Please enter Y or N");
    return null;
  } else if (number === "Y") {
    options.numbArray = numbArray;
  } else {
  }
  return options;
}

//Create a function for getting random element from an array
function getRandomElement(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var rand = arr[random];

  return rand;
  //iterate once per length specified by user
}

function generatingPassword() {
  //create variable to call getPassword function
  var options = userPrompt();
  // stores final password
  var passResult = [];
  // stores the possible characters to be included in password
  var possibleChars = [];
  // create a variable to store guaranteed characters
  var guarChar = [];

  if (options.specialChar) {
    possibleChars = possibleChars.concat(specialChar);
  }
  if (options.lowerCase) {
    possibleChars = possibleChars.concat(lowerCase);
  }
  if (options.upperCase) {
    possibleChars = possibleChars.concat(upperCase);
  }
  if (options.numbArray) {
    possibleChars = possibleChars.concat(numbArray);
  }

  for (let i = 0; i < options.length; i++) {
    passResult[i] = getRandomElement(possibleChars);
  }
  console.log(passResult);
  passResult = passResult.join("");
  return passResult;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatingPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
