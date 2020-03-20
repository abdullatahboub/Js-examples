//Types : Primitive and Reference Types

//Primitive Types
//1)Numbers

var myNumber = 3;
console.log(myNumber);

//2)Strings

const myString = "I am a string type value!";
console.log(myString);

//3)NaN

let a = NaN;
console.log(a);

//4)undefined

let b = undefined;
console.log(b);

//5)Boolean

let myBoolean = true;
console.log(myBoolean);

//6)Null

var myNull = null;
console.log(myNull);

//Reference Type

//1)Array

let myArray = [1, 2, 3];
console.log(myArray);

//2)Object

let myObject = {a:1, b:2, c:3};
console.log(myObject);

//Variables:

console.log(x);
var x = "Hello from var decleration!";
console.log(x);

// console.log(y);
// let y = "Hello from let decleration!";
// console.log(y);
// TypesAndVariables.js:52 Uncaught ReferenceError: Cannot access 'y' before initialization

const z = "You can't assigne a value to variable z!";
console.log(z);

// let z = "123";
//Uncaught SyntaxError: Identifier 'z' has already been declared


//Challenges 

//CHALLENGE 1

/**
 * Declare variable "myObject2" and assign value {}
 * Print this variable to the console.
 * NOTE: variable "myObject2" will not be reassigned in the future
*/

const myObject2 = {};

console.log(myObject2);

//CHALLEGNE 2

/**
 * Declare "x" and assign value 10 to it.
 * Declare "y" and assign value true to it.
 * Declare "myObject3" and assign with two name-value pairs.
 * Declare "anotherObject".
 * Later assign value to it - object with three name-value pairs
 * Print to the console the following:
 * 
 * console.log(myObject3);
 * {a: 10, b: true, __proto__: Object}
 * 
 * console.log(anotherObject);
 * {
 * newA: 20,
 * b: true,
 * c: {a: 20, b: true, __proto__ :object}
 * }
 */

var x = 10;

var y = true;

var myObject3 = {a, b};

myObject3.a = x;

myObject3.b = y;

console.log(myObject3);

var anotherObject = {
    newA: x + 10, 
    b: y, 
    c: myObject3
};


console.log(anotherObject);








