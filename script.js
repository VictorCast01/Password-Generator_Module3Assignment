// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "qwertyuiopasdfghjklzxcvbnm"
var result = '';

function generatePassword() {
  console.log("Welcome")
  var characterAmount = prompt("Please choose a desired character length from 8 to 128");
  while (characterAmount < 8 || characterAmount > 128) {
    characterAmount = alert("Invalid! Please enter suggested length between 8 to 128");
  }
  var upperCase = confirm("Would you like uppercase letters?")

  var passNumbers = confirm("How about numbers?")

  var specChars = confirm("Would you like to include special characters? (! , @ , # , etc.)")

  
    var result = '';
    if (upperCase === true) {
      characters += "QWERTYUIOPASDFGHJKLZXCVBNM"
    }
    if (passNumbers === true) {
      characters += "0123456789"
    }
    if (specChars === true){
      characters += "!@#$%^&*()_+{}:<>?/.,-="
    }
    var characterLength = characters.length
    for(var i = 0; i < characterAmount; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength));
    
      }
      console.log(result)
      var text = document.getElementById("password")
      text.textContent = result
  }
// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

