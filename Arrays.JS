// /**
//  * CHALLENGE 1
//  * 
//  * Add elements at the beginning of the Array
//  * First add string "Hello"
//  * Second add number 100
//  */
// // const myArray = [true, null];

// // console.log(myArray); // [100, "Hello", true, null]

// //ANSWER:
// const myArray = [true, null];

// console.log(myArray);

// myArray.unshift("hello");

// myArray.unshift(100);

// console.log(myArray);

// /**
//  * CHALLENGE 2
//  * 
//  * Add element at the specific index.
//  * Element "abc" with index 10.
//  * Log to the console Array and explain results.
//  * What is the length of the final Array?
//  */

const myArray = [1, 2];

myArray[10]="abc";

console.log(myArray);

console.log(myArray.length); // 11

// /**
//  * CHALLENGE 3
//  * 
//  * Array of objects.
//  * 
//  * Create Array with 3 objects.
//  * Each object will have two properties - carBrand, price.
//  * Add one more object to the Array
//  */

//Answer:

var myArrayWith3Objects = [
    {
    carBrand:"Toyota",
    price:20000
    },

    {
    carBrand:"BMW",
    price:30000
    },

    {
    carBrand:"Mercedes",
    price:50000
    }
]

myArrayWith3Objects.push({carBrand:"Kia",price:10000});

console.log(myArrayWith3Objects);


