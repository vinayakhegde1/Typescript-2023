// Indexed Types 

// We can use indexed types to look up a specific property on another type : 
// They're a useful tool when accessing array/tuple values, object values, and more!
// example 
type Person = {age: number, name: string, alive: boolean};
type Age = Person["age"];

// example2
// Just how you can use a number index to grab an element of an array:

const cars = ['Bugatti', 'Ferarri', 'Lambo', 'Porsche', 'Toyota Corolla'];
const secondCar = cars[0];
console.log(secondCar);

// see we can do the same with types 
type Cars = ['Bugatti', 'Ferarri', 'Lambo', 'Porsche', 'Toyota Corolla'];
type SecondCar = Cars[1];
// Notice that TypeScript evaluates the literal value "Ferarri". It's not just string!

// Objects 
// Same for objects 

const donations = {
    Bono: 16_000,
    'J.K. Rowling': 160_000_000,
    'Taylor Swift': 45_000_000,
    'Elton John': 600_000_000,
    'Angelina Jolie and Brad Pitt': 100_000_000,
}
const eltonDonations = donations['Elton John'];
console.log(eltonDonations);

//Same for types
type Donations = {
  Bono: 15_000_000;
  'J.K. Rowling': 160_000_000;
  'Taylor Swift': 45_000_000;
  'Elton John': 600_000_000;
  'Angelina Jolie and Brad Pitt': 100_000_000;
};

type EltonDonations = Donations['Elton John'];
// 
// Strings 

const question = 'Have the humans delivered their ultimate cup of coffee?';
const firstCharacter = question[0];

type Question = 'Have the humans delivered their ultimate cup of coffee?';
type FirstCharacter = Question[0];
//   ^?

// Here the type will always return just string instead of the first character that is 
// 'H'. Even though there are no errors it still not work 
// It does not even check what is passed 
// For Example 

type Ans = '';
type Isans = Ans[9000];
// Not a big deal or anything,
//  but just something to be aware of in case you were expecting a different behavior.
