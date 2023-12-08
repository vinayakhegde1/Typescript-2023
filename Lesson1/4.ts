// In typescript if a var is declared without any
// initial value in this situation typescript will consider
// var to be of type any

// Variables of type any can be assigned to any value
// and TS wont give any error if they're reassigned to a different
// type later on

// Example
let onOrOff;
onOrOff = 1;
onOrOff = false;
console.log(onOrOff);

// In the code above, 
// we declared the variable 
// onOrOff without an initial value.
//  TypeScript considers it to be of 
//  type any, and, therefore, doesn’t produce an error 
//  when we change the variable’s 
//  assignment from a number value to a boolean value.

// Example
let guess;
guess = 'typescript';
guess = 2023;
console.log(guess);
