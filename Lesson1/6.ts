// Recap of all the topics cover 

// Typescript is a superset of JS that adds types 

// type system refers to ts understanding of 
// how your code is meant to function: mainly what 
// data types should be stored under your variables

// TS expects the data type of the var to match the type 
// of the value initially assigned to it at it's declaration-
// this is known as type inference
// When it isn't able to infer a type, TS will consider a var 
// to be of type any.

// Type annotations are little pieces of code that indicate
// what type a var is meant to be 
let youAreAwesome: boolean;
youAreAwesome = true;
console.log(youAreAwesome);