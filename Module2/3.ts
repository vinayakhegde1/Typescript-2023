// Rules to apply when extending an interface in TS 

// Interfaces can extend each other 

// 1) implement all the required properties from all interfaces
// 2) Two interfaces can have same property if they have same name and type 
// 3)If two interfaces have a property with same name but different types, you
// must declare a new property such that the resulting property is a subtype of both interfaces 

import {IceCream} from './2';

interface Sundae extends IceCream{
    sauce: 'chocolate' | 'caramel' | 'strawberry' | 'mango';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

//We need to make the instruction type of IceCream and Sundae should be same 
// or else it will throw and error 

let myIceCream: Sundae = {
    sauce: 'caramel',
    flavour: 'vanilla',
    scoops: 6,
    whippedCream: true
};

console.log(myIceCream);

function tooManyScoops(dessert: Sundae){
 if (dessert.scoops >= 4) {
   return dessert.scoops + ' is too many scoops!';
 }else{
    return 'Your order will be ready soon!';
 }

}

console.log(tooManyScoops({flavour: 'buttersotch', scoops: 3, sauce:'strawberry', nuts: true}));


