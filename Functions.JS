/**
 * CHALLENGE 1
 * 
 * Create function called "mult" and it will have 3 parameters.
 * Create new variable and assign it result of multiplication of all 3 parameters.
 * Print to the console results.
 * Don't use "return".
 */

 function mult(a, b, c) {
     let z = a * b * c;
     console.log(z);
 }

 mult(3,1,3);

/**
 * CHALLENGE 2
 * 
 * Create a function "concatenatedStrings" and it will have 2 parameters.
 * and this function will return concatenated string.
 */

 function concatenatedStrings(x, y) {
    return x + " " + y;
}

console.log(concatenatedStrings("Hello","World"));

/**
 * CHALLENGE 3
 * 
 * Create function "outerFunction" with 2 parameters.
 * Create function inside of the "outerFunction" and name it "innerFunction" with one parameter.
 * This "innerFunction" will return square of the parameter(parameter*parameter).
 * 
 * In the "outerfunction" sum both parameters
 * Call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction".
 * Log to the console result of the "innerFunction" call.
 */

 function outerFunction(x,y) {
    function innerFunction(z) {
        return z*z;
        }
    var z = x + y;
    var result = innerFunction(z);
    console.log(result);
    }

outerFunction(2,2);

/**
 * CHALLENGE 4
 * 
 * Use following bulit-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 * 
 * You should print to the console ONLY 5 messages with interval 2 seconds:
 *"Here is message number 1"
 *"Here is message number 2"
 *"Here is message number 3"
 *"Here is message number 4"
 *"Here is message number 5"
 */



var i;
for (i = 1; i < 5; i++) {
function myFunction() {
     console.log("Here is message number" + " " + i)    
     }
    }

setTimeout(myFunction,2000);


