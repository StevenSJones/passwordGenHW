var generateBtn = document.getElementById("generate");//assigning generateBtn to a DOM method that looks at the HTML and any elements that match this specific ID
var charInput = document.getElementById("numOfChar");
var upperInput = document.getElementById("upperCase");
var lowerInput = document.getElementById("lowerCase");
var specInput = document.getElementById("specChar");
var numbersInput = document.getElementById("numbers");




const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minChar = 8;
var maxChar = 128;

// User variables
var numOfChar = 0;
var specChar = false;
var nums = false;
var upperCase = false;
var lowerCase = false;

const specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
  ];
  
  // constant Array of lowercase chars to be included in password declared globally
  const lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  // constant Array of uppercase chars to be included in password declared globally
  const upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

//   this is the empty var that will hold the password ultimately
  var password = "";

//   need event listener for the submit button.
generateBtn.addEventListener("click", function(){
    if(charInput.value > 8 && charInput.value < 128){
        numOfChar = charInput.value;
    }
   console.log(upperInput.checked);
})

// once listened for, we can move to pulling the data from the iputs


//need a global var to hold the data (in a n object)


//   Acceptance Criteria
//   GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
