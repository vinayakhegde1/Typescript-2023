// Collection types in Typescript 

// The object types are the ones that are non primitive types 
// Such as class, interface, Array, literal types 


// Arrays 

// Arrays are type of object  that can store multiple values of the same data type 
// Arrays in typescript are typed,which means you can specify the type of values that an array can hold 
// Arrays can be written in one of the two ways 

// Using a bracket notations []
// Using the generic Array <type> notations 

// [] Notation 

const names: string[] = ["Vinayak","Joe","John"];
console.log(names);

//Array<type>:

const numbers: Array<number> = [10, 50, 70, 100];
console.log(numbers);

const nums: number[] = [1,4,6,8];
console.log(nums);

const items: string[] = [];
items.push('keyboard', 'Mouse', 'Monitor', 'UPS');
console.log(items);

const numList: number[] = [];
numList.push(20,30,40,50);
console.log(numList);

const itemList: Array<number> = [200,300,400,500,600];
const indexToRemove = itemList.indexOf(200);

if (indexToRemove !== -1) {
   itemList.splice(indexToRemove, 1);
}
console.log(itemList);

// Tuples 

// Having an array of the same value types is useful,
// sometimes we have an array that contains values of mixed types.
//For that purpose we use Tuple type 
// Syntax : variableName: [type, type, ...]

// Exercise 

const person: [string, number] = ['Vinayak', 27];
let person1: [string, number] = ['Marcia', 35, true];
console.log(person);
// Error threw is Type[string, number, boolean] is not assignable to [string, number]
let person2: [string, number] = [35, 'mike'];
console.log(person2);

// Error This means that in Tuple type the order of the value must match
// the order of the types 





