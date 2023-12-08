// Type Inferences 
// when we declare a variable with an initial value the variable can never be 
// reassigned a value of different data type 

// Typescript recognizes Javascript's built-in "primitive" data types"
// boolean
// number
// null
// string
// undefined

// If we try to reassign a var to a value of a different data type
// Typescript will face a surface error 

// let order = 'first';

// order = 1;

// Type 'number' is not assignable to type 'string'.
// TypeScript’s type system is
//  telling us that order is expected to
//  be the primitive type string, but 
// we’re trying to assign it a value of type number.


let order ='first';
order = '1';    //number datatype is changed to string
console.log(order);


let aged = true;
let realAge = 0; 
if (aged) {
    realAge = 4;
}
let dogAge = realAge * 7; //for the code to work as expected we need to change the code to assign a numberic value of 4 to realAge 

console.log(`${dogAge} years`);