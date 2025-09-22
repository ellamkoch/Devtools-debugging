// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); // Fixed typo in console variable

// Error 2: 
let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 

// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}



// Error 6: Misusing variable scope
let localMessage = 'Initial message'; //declared variable outside function
function updateMessage() {
  let localMessage = 'Updated message';
  
}
updateMessage();


// Error 7:
document.getElementById('testButton').addEventListener('click', testFunction()); // needed to add button in html  

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: 
let nullVar = null;  
console.log(nullVar); // don't have to call anything. 

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar); // Fixed variable name case sensitivity

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData); // Fixed typo in console variable to print the text within the variable

// Error 12: 
// tryToCallFunction(); not defined so commented out

// Error 13:
let user = {
  name: 'Alice', //objects name was misspelled
 };
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber); 

let textToUpper = 'something to upper'; 
console.log(textToUpper.toUpperCase()); // Had to create this variable and move tooUpperCase to the string variable. ToUpperCase only works on strings.

// Error 15: 
let greeting = "Hello, world!"; // Fixed missing closing quote

// Error 16: 
for (let i = 0; i < 5; i++) { // removed extra semicolon
    console.log(i);
}

// Error 17:
let five = '5';

if (five == 5) {  // changed from === to == to check for content, not type
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
} // fixed missing closing bracket

// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
x = 5;
console.log(x); // move console log after variable declaration

// Error 20:
let myString = 'Hello World';
console.log(myString); // Fixed typo in console variable

let myStringObject = {
  text1: "Goodbye World"
};
console.log(myStringObject.text1); // Added a new object to hold the string with a property. Strings are primitive and cannot have properties added to them.

