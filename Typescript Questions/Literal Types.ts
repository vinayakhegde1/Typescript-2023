// Typescript String Literal Types 

// string literal types allow you to define only one specified 
// string literal 

// String Literals
// You can use a string literal as a type. For example:
let foo: 'Hello';
foo = 'Bar'; //Error: 'Bar' is not assignable to type 'Hello'

// A practical Use-case 
// Suppose we define a type RainbowColor that can only have one 
// of the types specified in a union of literal strings 

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

function pickColor(color: Rainbow): void{
    console.log(`I choose the color ${color}!`);
    
}

// no error 
pickColor('yellow');

// They can be very usefull only when you combined it in a type union 
// to create a powerful(and useful)abstraction 

// Example 
type CardinalDirection = 'North'| 'South'| 'East'| 'West';

function move(distance: number, direction: CardinalDirection){
    console.log(`distance is ${distance},direction is ${direction}`); 
}

move(20,'East');
// move(20,'Eest'); //Error 

// Literal Types for returns 

type Day = 'Monday'| 'Tuesday'| 'Wednesday'| 'Friday'| 'Saturday'| 'Sunday';

const isItPartyTime = (day: Day)=>{
    switch(day){
        case 'Friday':
        case 'Saturday':
        case 'Sunday':
            return 'definitely part time';

        default:
            return 'prolly lay low for now';
    }
};

isItPartyTime('Monday');

// The return type for this function is also a literal type union. 
// Notice that you didn't have to specify the return type anywhere. 
// It just works this way in TypeScript.

// Questions: Solution 
type LiteralString = 'chocolate chips';
type LiteralTrue = true;
type LiteralNumbers = 1| 2 | 3 | 4 | 5 | 6;
type LiteralObject = {
		name: 'chocolate chips',
		inStock: true,
		kilograms: 5,
};
type LiteralFunction = (a: number, b:number) => number;

const literalString = 'Ziltoid the Omniscient';
const literalTrue = true;
const literalNumber = Math.random() > 0.5 ? 1 : 2;
const almostPi = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019891337
const literalObject = {
	 origin: 'string',
  	command: 'string',
    item: 'string',
    time: 'string'
};
const literalFunction = (a: number, b: string) => b || a;

// Other literal Types 

// TypeScript also supports boolean and number literal types, e.g.: 

type OnetoFive = 1| 2 | 3 | 4 | 5;
type Bools = true | false;