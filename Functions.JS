//Objects

//Object is reference type value
var myObject ={
    a:10,
    b:null,
    c:false
};


console.log(myObject.c);
console.log(myObject.b);

//Adding new property:

myObject.d = "Hello am a new property";

console.log(myObject);

//Modify a property:

myObject.a = 20;



console.log(myObject);

//Deleting a property

delete myObject.c;

console.log(myObject);


/**
 * CHALLENGE 1
 * 
 * Create variable called "myPost".
 * Initial value should be {}
 * Add property called "postTitle" and value "Object is reference type"
 * Add one more property "postLikes" with value 0
 * add third property "shared" and set its value to "false"
 * Increase value of the "postLikes" by 1
 * Delete property "shared"
 */

 var myPost = {};

 myPost.postTitle = "Object is reference type";

 myPost.postLikes = 0;

 myPost.shared = false;

 myPost.postLikes += 1;

delete myPost.shared;

console.log(myPost);

/**
 * CHALLENGE 2
 * 
 * Create variable "myObject4" and add property "a" - 10.
 * Create another variable "copyOfMyObject4" and its value should be myObject4.
 * add new property "b" with value false to the "copyOfMyObject4".
 * Print to the console "myObject4" and "copyOfMyObject4" and interpret results.
 */

 var myObject4 = {a:10};

 var copyOfMyObject4 = myObject4;

 copyOfMyObject4.b = false;

 console.log(myObject4);

 console.log(copyOfMyObject4);

/**
 * CHALLENGE 3
 * 
 * Create Object "objectWithNestedObject" with initial valuse {}.
 * Add property "nestedObject" with inital value {}.
 * Add property "a" with value "null" to "nestedObject". Use dot notation.
 * Add property "b" with value "true" to "nestedObject". Use bracket notation.
 * Create new variable with property name
 */

 var objectWithNestedObject = {};

 objectWithNestedObject.nestedObject = {};

 objectWithNestedObject.nestedObject.a = null;

 objectWithNestedObject.nestedObject["b"] = true;

 console.log(objectWithNestedObject);












