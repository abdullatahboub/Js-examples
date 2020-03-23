// /**
// * TASK 1
// * 
// * Is delete myObject.x expression or statement?
// */
const myObject = {
  x: 10,
  y: true
};

console.log(delete myObject.x); //Expression

delete myObject.x; //Expression statement

// /**
//  * TASK 2
//  * 
//  * What will be logged to the console?
//  */
function fn() {
  console.log("Greeting from the 'fn' function");

  return function(a) {
    console.log(a);
  };
}

fn();

(true)

// /**
//  * TASK 3
//  * 
//  * Explain why semicolon is added?
//  */
function firstFunction(a, b) {
  return a + b;
} //Function declaration

const secondFunction = function(a, b) {
  return a + b;
}; //Statement