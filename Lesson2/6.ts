// Typescript Function Overloadings 

// It allows you to establish the relationship between the parameter 
// types and result types of a function 

// Example 

function addNumbers(a: number, b: number): number{
    return a+b;
}

function addStrings(a: string, b:string): string{
    return a+b;
}

// here addNumbers() returns sum of two numbers 
//here addStrings() returns concatenation of two strings
//use a union type to define a range of types for function parameters and results

// Example 
function add(a: number | string, b:number | string): number | string {
    if(typeof a === 'number' && typeof b === 'number')
    return a+b;

    if(typeof a === 'string' && typeof b === 'string')
    return a+b;
}

// the union type doesn’t express the relationship between the parameter types and results accurately.
// To better describe the relationship between the types used by a function, TypeScript supports
// function overloadings 
// Example

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a+b;
}

// here we added two overloads to add() function 
// The first overload tells the compiler that when arguments are number,add() function 
// should return a number
// Second does the same for string 
// It describes the mapping between the parameters and the result they return 

let result = add(10,20); //the code editor suggests that there is an overload function available

// Function overloading with optional parameters

// The number of parameters must be same when we overload a function if it is more than 
// that then we have to make the additional parameter optional 

// Example
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number; {
    if(c) return a+b+c;
    return a+b;
}

// The sum() function accepts either two or three numbers.
//  The third parameter is optional.

// Method overloading 

// When a function is a property of a class it is called a method 

// Example 
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(30)); // return an array

//count function can return a number or an array depending on the no of arguments 

// Output 
1
[
   1,  2,  3,  4,  5,  6,  7,  8,  9,
  10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30
]
