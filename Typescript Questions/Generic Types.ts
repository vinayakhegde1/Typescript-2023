// Generic Types 

// Why We Need Generic Type Arguments
// If primitive (and literal) types are data, you can think of generics as functions that operate on that data.

// And just like functions often need arguments, we need some way to provide inputs to generic types.

// Instead of using parenthesis to pass arguments, with generics we used angled 
// brackets: < and > .
// type variable, a special kind of variable that works on types rather than values.
function identity<Type>(arg: Type): Type {
  return arg;
}
let output = identity("myString");

// Universe 1: strictly in the type system 

interface Row<T> {
    label: string;
    value: T;
    disabled: boolean;
}
 //We use single letter - T
 type NumberRow = Row<number>;
 type StringRow = Row<string>;

 type StringRow = {
  label: string;
  value: string;
  disabled: boolean;
};

// Multiple Generic Arguments
// Just like func can take multiple args, so too can Generics 

type GroceryItem<Name, Price, Instock> = {
    name: Name;
    price: Price;
    inStock: Instock;
};

// Now you can pass arguments to this type:

type AvocadoToast = GroceryItem<'Avocado Toast', 12.99, true>;

// This is exactly equal to if you had written:
type AvocadoToast = {
  name: 'Avocado Toast';
  price: 12.99;
  inStock: true;
};

// Solution of Q's 

