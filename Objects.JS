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











