// Variabke Tyoe Annotations 
// We can fix the type any assigned values to a variable
// We can tell TS what type something is or will be by using 
// a type annotation 
// Variables have type annotations (also known as type declarations)
// added just after their names 
// type annotation can be define with a (:) and type (e.g, number,string,or any)

// Example
let mustBeAstring : string;
mustBeAstring = 'Catdog';

mustBeAstring = 2023;
//Error: Type 'number' is not assignable to type 'string'

// example 2 
let phoneNumber: string;

if(Math.random() > 0.5){
    phoneNumber = '+61771012062';

}else{
    phoneNumber = '7167762323';
}
console.log(phoneNumber);