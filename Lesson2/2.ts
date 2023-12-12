// Parameter Type Annotations 

// In TS, function parameters may be given type annotations 
// with the same syntax as var declarations: a colon next to the name 
// The type annotations ensure that the parameters are of the correct type:

// Example
// function greet(name: string){
//     console.log(`Hello,${name!}`);
    
// }
// greet('Katz'); //Prints:Hello, katz
// greet(1337); //



// function triple(value) {
//    return value * 3; 
// }

// function greeTripled(greeting, value){
//     console.log(`${greeting}, ${triple (value)}!`); 
// }

// greeTripled('Hiya',5);

// :string after tha name parameter we declare that name is type string 
// Any invocation of greet() should pass a value of type string as the 
// first argument or else error will be thrown
// Parameters that we do not provide type annotations for are 
// assumed to be type any 

// Example 
// funtion printKeyValue(key: string, value){
//     console.log(`${key}:${value}`);
    
// }

// printKeyValue('Courage',1337); //Prints: Courage: 1337
// printKeyValue('Mood','scared'); //Prints: Mood: scared

// Here the parameter value is an any var: it's compatible 
// with any type

// Example 

function triple(value: number){
    return value * 3;
}

function greeTripled(greeting:string , value:number){
    console.log(`${greeting}, ${triple(value)}!`);
    
}

let ans = greeTripled('Hiya',5);
console.log(ans);
