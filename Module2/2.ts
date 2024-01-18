// Declare and instantiate an interface in TS 

// to declare an interface start with - interface 
// name of the interface name(the identifier)
// interface name are in PascalCase 

// Note : The typescript guidelines suggest that interfaces should not start with letter 'I'

// After this define the properties of the interface and their type 
// Properties = required, optional, or read only 

// Property type	    Description	               Example
// Required            All properties are          firstName: string;
//                     required unless it 
//                     is not specified

// Optional            Use this for properties     firstName?: string;
//                     that are not required
//                     this helps to prevent the type
//                     system to throw an error
//                     Use (?) at the end of the property
//                     name.

// Read only           Use this for properties that should     readonly firstName: string;
//                     only be modified when an object is 
//                     first created
//                     Add readonly keyword in front of the 
//                     property name.

// Declare an interface with members 

export interface IceCream{
    flavour: string;
    scoops: number;
    instructions?: string;
}

let myIceCream: IceCream = {
    flavour: 'chocolate',
    scoops: 4
};

console.log(myIceCream.flavour);
console.log(myIceCream.scoops);

// Example2

interface Car {
    company: string;
    price: number;
}

let carProps = {
    company: 'BMW',
    price: 2000000,
};

function carprice(brand: Car) {
   if (brand.price > 2000000) {
        return brand.price  +  ' is overpriced!';
   }else if(brand.price < 2000000){
        return brand.price  +  ' is underpriced!';
   }else{
    return 'Congratulations for getting a new BMW';
   } 
}
console.log(carprice({company: 'BMW', price: 2500000}));


// Example 3 

interface Person {
    name: string;
    age: number;
    dev: boolean;
}

let person: Person;

person = {
    name: 'Vinayak Hegde',
    age: 21,
    dev: true,
};

console.log(person.dev);
console.log(person.name);
console.log(person.age);






