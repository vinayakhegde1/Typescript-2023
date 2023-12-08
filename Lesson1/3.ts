// Type Shapes 
// Typescript knows what types our objects are it
// also knows what shapes our objects adhere to
// Objects shape describe what properties and methods 
// it does or doesn't contain 

// The built in types in Javascript each have known properties 
// and methods that always exist. All string String SVGAElement, for ex ,
// are known to have a .length() property and .toLowerCase() method.

//Example 1
let word = "OH".length;
console.log(word);

let word2 = "MY".toLocaleLowerCase(); // Property 'toLowercase' does not exist on type '"MY"'.
console.log(word2);
// With this knowledge of type shapes Typescript helps us quickly locate bugs in code 

// Example 2 
let firstName: string = 'vinayak';
console.log(firstName.toUpperCase());
console.log(firstName.length);


