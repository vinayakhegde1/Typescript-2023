// Union types 

// Union type is used to describe a value that can be one of several types 

// specially used for values from library, API or user input 

// A union type uses the vertical bar or pipe (|) to separate each type. In the following example, multiType can be a number or a boolean:

let multiType: number | boolean;
multiType = 20;
multiType = true;
multiType = "twenty";
// Using type guards, you can easily work with a variable of a union type. In this example, the add function accepts two values that can be either a number or a string. 
// If both values are number types, it adds them. If both are string types, it concatenates them. Otherwise, it raises an error.

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error

// Intersection types 
// Intersection types are used to combine two or more types to create a new type with all the 
// properties of existing types 
// & symbol is used to separate each type 

// Examples 

interface Employee{
    employeeID: number;
    age: number;
}
interface Manager{
    stockPlan: boolean;
}
type ManagementEmployee  = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 2234,
    age: 34,
    stockPlan: true
};

// intersection types are most often used with interface 

// Literal Types 

// A literal is more concrete subtype of a collective type

// this means that a "Hello world" is of string type 
// but a string isn't "Hello World" 

// There are three sets of literal types string,number,boolean 
// using a literal type we can specify the exact value of string,number,boolean 

// What is literal narrowing 
// When you declare a variable using var or let in TypeScript, 
// you're telling the compiler that there's the chance that this variable will change its contents. Declaring a variable with let types the variable (for example, as a string), 
// allowing for an infinite number of potential values.

// using const to declare a variable will inform TS that this object will never change 

// Process of going from an infinite number of potential cases to a ReadableByteStreamController, finite number of potential cases 
// is called narrowing 

// Defining literal types 
// Literal types are written as object, array, function,
//  or constructor type literals and are used to compose new types from other types.


