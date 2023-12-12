// FUNCTIONS
// When we declare a function in JavaScript,
// we often expect it to be invoked with arguments of a certain type.
// JavaScript does not share our expectations: its type flexibility often allows functions to be invoked with unexpected argument types. Even when this doesn’t result in thrown errors, 
// there can be negative consequences:

function printLengthOfText(text){
    console.log(text.length);
    
}

printLengthOfText(3);   //Prints: undefined

// Javascript developers have found error-handling solutions to 
// avoid such undesirable effects,but these techniques can be cumbersome

// Solution to fix the error in above code 

function printLengthOfText(text){
    if(typeof text !== 'string'){
        throw new Error('Argument is not a string!');
    }
    console.log(text.length);
    
}

printLengthOfText(3);   //Error: Argument is not a string

// Example 
function printOperations(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers!');
    }
    console.log(a+b, a/b);
    
}

    // The function call below should print: 12 1
    
    printOperations(6,6);

function exclaim(name, count) {
  for (let i = 0; i < count; i += 1) {
    console.log(`${name}!`);
  }
}

// Exclaim 'Muriel!' six times
exclaim('Muriel',6);


    