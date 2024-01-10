// One of the ts core principles is that type checking focuses 
// on the shape that values have 

// Lets go through an overview of interfaces in typescript
// What they are and how you can use them in your Typescript code 

// What is an interface 

// We can use interface to describe objects,naming and parameterizing the object types 
// and to compose existing named object types into new ones 

// Example 1

interface Employee{
    firstName: string;
    lastName: string;
    fullName(): string;
}

// That's because the only job of an interface is to describe a type 

// After defining a interface you can use it as a type and get all the benefits of type 
// checking and Intellisense 

// Example 2 

let employee: Employee = {
    firstName: "Vinayak",
    lastName: "Hegde",
    fullName(): string{
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10; //Error - Type 'number' is not assignable to type 'string'

// nterfaces have no run-time representation; they are purely a compile-time construct. 
// Interfaces are particularly useful for documenting and validating the required shape of properties, objects passed as parameters, and objects returned from functions. 

// Reason for using and interface in Typescript 

// Consistent Types: Shorthand names for types in interfaces ensure uniformity across 
// objects,aiding clarity and enforcing correct values among team members 

// Error Prevention: Interfaces demand all required properties,enabling TS to catch type-related errors,promoting accuracy when passing values 

// API clarity: In JS API's like jQuery, interfaces offer clear function expectations 
// and return SVGUnitTypes, reducing the need for constant documentation checks 


// How is an interface different  from type alias
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// type alias is definition of a type of data for example a union,primitive,intersection,tuple or  any other type 

// Interfaces on the other hand are way to describe data shapes for example an object 
