// Any and Unknown Types in Typescript 

// Any type is one type that can represent any JS value with no 
// constraints 
// any type allows you to gradually migrate your JavaScript code to use static types in TypeScript

// let randomValue: any = 10;
// randomValue = 'string';
// randomValue = true;

// when this code is compiled it doesn't throw any error because it's any type 
// A property that doesn't exist for the type.
// randomValue as a function.
// A method that only applies to a string type.

// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Unknown Type 

// any type can cause unexpected errors 
// To address this issue TS itroduced the unkown type 

// the unkown type is similar to any type in that any value is aasignable to type 
// unkown 
// we cannot access any properties,call or construct them 

// let random_value: unknown = 10;
// random_value = true;
// random_value = 'string';

// console.log(random_value.name);
// random_value();
// random_value.toUpperCase();

// Error: Object is of type unknown 

// Type assertion 

// if you want to treat a variable as a different data type 
// you can use type assertion 

// Type assertions have to forms One as 

// (randomValue as string).toUpperCase();

// The other version is the "angle-bracket" :

// (<string>randomValue).toUpperCase();

// Note 
// as is the preferred syntax. 
// Some applications of TypeScript, such as JSX, can get confused
//  when using < > for type conversions.

let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Vina';

if (typeof randomValue === "string"){
     console.log((randomValue as string).toUpperCase()); 
}else{
    console.log("Error - A string was expected here.");    
}

// TypeScript now assumes that you have made the necessary check.
//  The type assertion says that randomValue should be treated as a string and then the toUpperCase method can be applied.

// Type guards 


// The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime.
//  This conditional test is called a type guard.

// Type	Predicate
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)