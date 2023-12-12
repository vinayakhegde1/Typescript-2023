// Optional Parameters 

// TS gives an error if we don't provide a value for all 
// arguments in function 
// Sometimes skipping providing values is okay 

// Example 
function greet(name: string){
    console.log(`Hello, ${name || 'Anonymous'}!`);
    
}

greet('Anders'); //Prints: Hello,Andres!
greet(); //TS Error: Expected 1 arguments, but got 0

// When the code above is executed the greet() function will 
// correctly print 'Hello, Anonymous!'.That's necause when no arguments 
// are passed in,name has the falsy value undefined, which means that name 
// || 'Anonymous'evaluates to 'Anonymous'.Since the final code works 
// as intended, we want to prevent TS to throw errors:

//We use ? after it's name to tell TS that the parameter is
// allowed to be undefined and doesn't always have to be provided 

// Example 2
function greet(name?:string) {
    console.log(`Hello, ${name||'Anonymous'}!`); 
}
greet(); //Prints: Hello,Anonymous!


// Example3 
function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

console.log(proclaim());
console.log(proclaim('ready?'));
console.log(proclaim('ready!'));
