
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





///////////// FUNCTIONS //////////////
/*


///////// FUNCTION DECLARATION AND CALLING

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

A function declaration consists of:

-The function keyword.
-The name of the function, or its identifier, followed by parentheses.
-A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

Eg:*/

/*
function greetWorld() {  
  console.log('Hello, World!');
}                        //---> Declaración!!

greetWorld();            //---> Ejecución!!!
*/

/*
Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier.
*/



////////// PARAMETERS & ARGUMENTS
/*

const width = 10;
const height = 6;

function calculateArea (width, height) {     
    console.log(width * height);   //--> Parameters!!
}

calculateArea(width, height);      //--> Arguments!!
*/



/////////// DEFAULT PARAMETERS
/*

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick')   // Output: Hello, Nick!
greeting()         // Output: Hello, stranger!
*/



///////////// RETURN STATEMENT
/*

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

*/



////////////// HELPER FUNCTIONS

/*
Eg:
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
*/



////////// FUNCTION EXPRESION
/*
See later
*/



////////// ARROW FUNCTIONS
/*

Eg: () => {}

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};



/////////// CONCISE BODY ARROW FUNCTIONS
/*
See later
*/







///////////////// ARRAYS //////////////////
/*

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

*/
/*
-The array is represented by the square brackets [] and the content inside.
-Each content item inside an array is called an element.
-There are three different elements inside the array.
-Each element inside the array is a different data type.
*/



////////// ACCESING ARRAY ELEMENTS
/*

const hello = 'Hello World';
console.log(hello[6]);
// Output: W

*/
/*
-cities is an array that has three elements.
-We’re using bracket notation, [] with the index after the name of the array to access the element.
-cities[0] will access the element at index 0 in the array cities. You can think of cities[0] as accessing the space in memory that holds the string 'New York'.
*/



////////// UPDATE ARRAY ELEMENTS
/*

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

*/
/*
The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.
*/



/////////////// ARRAYS WITH LET & CONST

/*
Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
*/
/*

let condiments = ['ketchup','mustard','soy sauce', 'sriracha'];
condiments[0] = 'mayo';
console.log(condiments);  // Eg 1
condiments = ['canela'];
console.log(condiments);  // Eg 2
const utensils = ['fork','knife','chopsticks','spork'];
utensils[3] = 'spoon';
console.log(utensils);    // Eg 3
utensils = ['plate'];
console.log(utensils);    // Eg 4

*/



///////////// THE .LENGTH PROPERTY

/*
It returns the number of items in the array
*/
/*

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2

*/
/*
-We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.
-Then we log the length of newYearsResolution to the console.
-Since newYearsResolution has two elements, 2 would be logged to the console.
*/



/////////// THE .PUSH METHOD
/*
Allows us to add items to the end of an array.
*/
/*

const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/*
-We access the push method by using dot notation, connecting push to itemTracker with a period.
-Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
-.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
-Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
*/



/////////////// THE .POP METHOD
/*
Removes the last item of an array.
*/
/*

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

*/
/*
-In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
-.pop() does not take any arguments, it simply removes the last element of newItemTracker.
-.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
-.pop() is a method that mutates the initial array.
*/



/////////////// MORE METHODS
/*
.join(), .slice(), .splice(), .shift(), .unshift(), .concat(), and much more... in MDN documentation
*/



////////////// ARRAYS & FUNCTIONS
/*
when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
*/
/*

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
*/
/*
-The flowers array that has 3 elements.
-The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
-We call addFlower() with an argument of flowers which will execute the code inside addFlower.
-We check the value of flowers and it now includes the 'lily' element! The array was mutated!
*/



////////////// NESTED ARRAYS

/*
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]

*/
/*

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1][0]); // Output: 2

*/









//////////////// LOOPS /////////////////



/////////////// THE FOR LOOP
/*

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

*/
/*
A for loop contains three expressions separated by ; inside the parentheses:

-an initialization starts the loop and can also be used to declare the iterator variable.
-a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
-an iteration statement is used to update the iterator variable on each loop.
*/



//////////// LOOPING IN REVERSE
/*

for (let counter = 3; counter > 0; counter--) {
  console.log(counter);
}

*/



//////////// LOOPING THROUGH ARRAYS
/*
To loop through each element in an array, a for loop should use the array’s .length property in its condition.
*/
/*Eg:

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

*/



///////////// NESTED LOOPS
/*
One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
*/
/*

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

*/
/*
For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.
*/



////////////// THE WHILE LOOP
/*
To start, let’s convert a for loop into a while loop:
*/
/*

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

*/
/*
The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/



////////////// DO...WHILE STATEMENTS
/*
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run.
A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
*/
/*

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

*/
/*
Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true
*/
/*

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

*/



///////////// THE BREAK KEYWORD
/*
Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year.

When we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.
*/
/*

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');

*/