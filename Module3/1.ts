// Named Functions 

// Named function is a function declaration written with the function keyword
// and provided with a distinct name within the current scope 

// Named function declarations are loaded into the execution context before any code runs 
// this process is called hoisting and it means you can use the fucntion before it is declared 

// Syntax of named functions in Typescript 

function addNumbers (x: number, y:number): number {
    return x + y;
}
console.log(addNumbers(10,20));

// Anonymous function 

// A function (or anonymous function) is a type of function that is not preloaded into 
// the execution AudioContext, and only runs when the code encounters it. 

// Example 

// let addNumbers = function (x: number, y: number): number {
//     return x + y;
// }
// addNumbers(20,30);

// In the example we have used named function and it looks like anonymous function
// Sum is replaced with the keyword function an the function has been implemented as an expression 
// in a variable declaration 

let sum = function (input: number[]): number {
    let total: number = 0;
    for (let i= 0; i < input.length; i++) {
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([20,30,40]));

let multiply = function (input: number[]): number{
    if (input.length === 0) {
       return 0; 
    }
    let result: number = input[0];
    for(let i=1; i<input.length; i++)   {
        if(isNaN(input[i])){
            continue;
        }
        result *= Number(input[i]);
    }
    return result;
}
console.log(multiply([2,4,6]));

let divide = function (input: number[]): number {
    if (input.length === 0) {
       throw new Error("Array is empty");
    }
    let result2: number = input[0];
    for(let i=0; i<input.length; i++)   {
        if(isNaN(input[i])){
            continue;
        }
        if (input[i] === 0) {
            throw new Error("Cannot divide by zero.");
        }
        result2 /= Number(input[i]);
    }
    return result2;
}
console.log(divide([2,4,2]));

let subtract = function(input: number[]): number{
    if(input.length === 0){
        throw new Error("Array is empty");
    }
    let result3: number = input[0];
    for (let i = 0;  i< input.length; i++) {
        if(isNaN(input[i])){
            continue;
        }
        result3 -= Number(input[i]);       
    }
    return result3;
}
console.log(subtract([100,50]));

