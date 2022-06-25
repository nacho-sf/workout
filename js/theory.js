
////////////// KEYWORD
/*
 Keywords are words that are built into the JavaScript language, so the computer recognizes them and treats them specially
Ex: console...
*/



/////////// PRIMITIVE DATA TYPES
/*
-number
-string
-boolean
-null
-undefined
-symbol
-object (not primitive)
*/



///////// PROPERTIES
/*
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called 'length' that stores the number of characters in that string.
Eg:

console.log('Hello'.length);
// Prints 5

*/




///////////METHODS
/*
We call, or use, these methods by appending an instance with:

-a period (the dot operator)
-the name of the method
-opening and closing parentheses

Eg:
console.log('hello'.toUpperCase());
// Prints 'HELLO'

console.log('Hey'.startsWith('H'));
// Prints true

When we use console.log() we’re calling the .log() method on the console object.
*/





////////// BUILT-IN OBJECTS
/*
Let’s call the .random() method from the built-in Math object:

console.log(Math.random());
// Prints a random number between 0 and 1

We called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor()

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

Math.floor(Math.random());
*/



////////// VARIABLES
/*
var nameMyvar = "value" (better not use)
let nameMyvar = "value" (reassignable)
const nameMyvar = "value" (not reassignable)
*/



////////// ASSIGNMENT OPERATORS
/*

(=, +=, -=, *=, /=)

-Eg:

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4
*/



/////// INCREMENT-DECR OPERATORS
/*

(var++, var--)

Eg:

let a = 10;
a++;
console.log(a); // Output: 11
*//*
let b = 20;
b--;
console.log(b); // Output: 19
*/



//////// STRING CONCAT WITH VAR
/*
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
*/



//////// STRING INTERPOLATION
/*
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
*/



//////////// TYPEOF OPERATOR
/*
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
*/








////////////// CONDITIONALS ///////////////


////////////// IF STATEMENT
/*

if (true) {
  console.log('This message will print!'); 
}

*/



////////////// IF...ELSE STATEMENT
/*

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}

*/




///////////// ARITHMETIC OPERATORS
/*
-Add: +
-Subtract: -
-Multiply: *
-Divide: /
-Remainder or modulo: %
*/


////////// STRING CONCATENATION
/*

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'

*/



////////////// COMPARISON OPERATORS
/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
*/




///////////// LOGICAL OPERATORS
/*
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/
/*

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

*//*

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
*//*

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true
*/




/////////////// TRUTHY AND FALSY
/*

The list of falsy values includes:
-0
-Empty strings like "" or ''
-null which represent when there is no value at all
-undefined which represent when a declared variable lacks a value
-NaN, or Not a Number
*//*

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

*/



/////////// TERNARY OPERATOR (IF...ELSE)


//TRANSFORM:
/*

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

*//*

//INTO:
/*

let isNightTime = true;

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

*/



/////////////// IF / ELSE...IF / ELSE
/*

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

*/



///////////////// SWITCH
/*

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

*/