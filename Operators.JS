// /**
//  * TASK 1
//  * 
//  * Compare 2 variables "myVariable1" and "myVariable2".
//  * Log to the console "true" if "myVariable1" is less than or equal to "myVariable2".
//  * Convert both variables to numbers before comparison.
//  */

//Unary + operator can be used to convert a variable to number.
var myVariable1 = 5;
var myVariable2 = "10";

if (+myVariable1 <= +myVariable2) {
    console.log(true);
} else {
    console.log(false);
}

// /**
//  * TASK 2
//  * 
//  * Print to the console remainder of the division of "myNumber1" by "myNumber2".
//  * Which precedence and associativity has this operator?
//  */
let myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
let myNumber2 = 3;

console.log(myNumber1 % myNumber2); //1

//Left to right 

// /**
//  * TASK 3
//  * 
//  * What will be logged to the console?
//  */
console.log(3 || true && null || false);

// Precendence and associativity
// Logical "And" Opertartor Left to right,then logical "Or" Operator Left to right  

// 3 || null || false

// 3 || false 

//3

// /**
//  * TASK 4
//  * 
//  * Find alternatives
//  */
let a = 10;

// a = a + 1;
a += 1;
console.log(a); // 11

// a = a * 2;
a *= 2;
console.log(a); // 22

// a = a - 5;
a -= 5;
console.log(a); // 17

// a = a / 2;
a /= 2;
console.log(a); // 8.5