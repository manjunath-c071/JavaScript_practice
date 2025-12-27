//==================================================
// DataType.js
//==================================================

// two types of data types
// 1. Primitive data types
// 2. Non-primitive data types (reference data types)

//============================ Primitive Data Types ============================

//stored directly in the location that the variable accesses.
// stored on the stack.

//1. String
//2. Number
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol
//7. BigInt

//============================ Non-Primitive Data Types (reference data types)============================

// accessed by reference.
// stored on the heap. and points to location in memory.

//1. Object
//2. Array
//3. Function


// Example of Primitive Data Types


// String

// const name = "Darshan";
// console.log(typeof name); //string

// // Number
// const age = 22;
// console.log(typeof age); //number

// // Boolean
// const hasSiblings = true;
// console.log(typeof hasSiblings); //boolean

// // null
// const abc = null;
// console.log(typeof abc); //object (this is a bug in javascript)

// // Undefined
// let address; //variable declared but not assigned any value //if we dont assign value to variable it will be undefined, by default it is undefined
// console.log(typeof address); //undefined

// // Symbol
// const sym = Symbol("id");
// console.log(typeof sym); //symbol

// // BigInt
// const bigIntNum = BigInt(1234567890123456789012345678901234567890); //
// console.log(typeof bigIntNum); //bigint


// // Example of Non-Primitive Data Types (reference data types)

// // array
// const numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers); //object

// // object
// const person = {
//     name: "Darshan",
//     age: 22
// };
// console.log(typeof person); //object

// // function
// // dates
// const today = new Date();
// console.log(today); //object


//============================= type conversion & cohesion =============================

// let value ;

// // number to a string

// value = String(5 + 5);

// console.log(value);
// console.log(typeof value);
// console.log(value.length); //length property is only for string

// boolean to a string

// value = String(true);

// //date to a string

// value = String(new Date()); //date to string

// console.log(value);
// console.log(typeof value);
// console.log(value.length); //length property is only for string

// array to a string

// value = String([1, 2, 3, 4, 5]); //array to string

// console.log(value);
// console.log(typeof value);
// console.log(value.length); //length property is only for string

//toString() method

// value = (5).toString(); //number to string

// value = true.toString(); //boolean to string

// console.log(value);
// console.log(typeof value);
// console.log(value.length); //length property is only for string 

//string to number

// value = Number("5"); //string to number

// console.log(value);
// console.log(typeof value);
// console.log(value.toFixed(2)); //toFixed() method is only for number

//============================= type coehsion =============================

// type cohesion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

// const val1 = "5";
// const val2 = 10;
// const sum = val1 + val2; //number + number = number

// console.log(sum);
// console.log(typeof sum);