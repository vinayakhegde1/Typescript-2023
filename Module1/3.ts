// Union and intersection types in TS 

// Union Types 

// A union type describes a value that can be one of several types 
// So any type can also accepts different types so why use union ? 

// uion type has restrictions on assignment values of the specified types 
// whereas any type has no restrictions 

// A union type  uses pipe | to separate each type 

// Example

// let multiType: number | boolean;
// multiType = 20;         //Valid
// multiType = true;       //Valid
// multiType = "twenty";   //Invalid

//  In this example, the add function accepts two values that can be either a number or a string
// if both value number it adds 
//if both value string it concates 
//else it throws error

const add = function(x: number | string, y: number | string){
    if (typeof x === 'number' && typeof y === 'number'){
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string'){
        return x.concat(y);
    }
    throw new Error('Values should be string or number');
}
console.log(add('one', 'two')); //Output - onetwo
console.log(add(20,30));        //Output - 50
console.log(add('one',30));  //Output - Throws an Error


