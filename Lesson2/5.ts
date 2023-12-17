// Typescript Rest parameters 

// Basically a Rest parameter allows a function to accept 
// zero or more arguments of a specific type 

// Rules that has to be followed 

// A function has only one Rest parameter 
// The rest parameter appears last in the parameter list 
// Type of rest is array type 

// declare a rest parameter prefix the parameter name with three dots 
// and use array type as the type annotation 

// function fn(...rest: type[]){
//     //...
// }

// Example 
function getTotal(...numbers: number[]) {
    let total = 0;
    numbers.forEach((num)=> total +=num);
    return total;
}
console.log(getTotal()); //0
console.log(getTotal(10,20));//30
console.log(getTotal(10,20,30)); //60
// In this example getTotal() calculates the total number passed into it 
// Since the numbers parameter is rest parameter we can pass one or more 
// numbers to calculate the total 
console.log(getTotal(30,50,70));//150
// learned about the TypeScript rest parameters that allow 
// you to represent an indefinite number of arguments as an array.