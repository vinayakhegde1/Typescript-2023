// Declaring let and const variables 
// Typescript encourages the use of let and const keywords for 
// variable declarations 
// Type inference in TypeScript 

// you can associate types with variables through explicit type annotations 
// or through implicit type inference 

// explicit type annotations are optional in TS 
// syntax : variableName: type 
let myVariable: number = 10;
let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it
myVariable = "ten";
y = "one";
z = 1 ;
z = "one"; //z agreed because it is any type
// Type 'string' is not assignable to type 'number'

//Types and subtypes in TypeScript

// Any Type 

// All types in TS are subtypes of any type 

//         ANY 
// Primitive types :  Object types :
// number              class 
// boolean             interface
// string              arrays
// enum                literals
// void

// Boolean type 
//  = true , false 

let flag: boolean;
let yes = true;
let no = false;

//Number and BigInteger types
// All numbers in TS are either floating point vlaues or 
// BigInt
// Floating-point : number 
//BigInteger: bigint

let a: number;
let b = 0;
let c: number = 12.345;
let big: bigint = 100n;

// String Type 
// string keyword represents sequence characters stored as UTF-16
// '' " "


