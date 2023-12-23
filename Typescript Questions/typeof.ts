// Type Guard - typeof 
// Narrow downs the type of a object within a conditional block 

// typeof 

// TS is aware of JS instanceof and typeof operators
//  If you use these in a conditional block,
//TypeScript will understand the type of the variable to be different within that conditional block.
// typeof Is Most Useful For Complex Types 
// Example 
function doSomething(x: number| string){
    if (typeof x === 'string'){
        console.log(x.subtr(1)); //Within the block Typescript knows that 'x' must be string
        console.log(x.substr(1));  //Ok 
    }
    x.substr(1); //Err: there is no guarantee that 'x' is a 'string'
}

// Example 2 
const Name = 'Vinayak';
const value = 3.14;

//we can now use typeof for type aliases 
type Value = typeof value;
interface FamousNumbers{
     // or we can use it inline
    label: typeof Name;
    value: Value;
}
// Ex3 
const createPoint = (x: number, y: number) => ({ x, y });
type CreatePoint = typeof createPoint;

// Q's: Solution 
// typeof: A Bridge Between Worlds 
type Width = typeof width;
type Height = typeof height;
type Margin = typeof margin;
type Data = typeof d3ChartConfig.data;
type YScale = typeof d3ChartConfig.yScale;

type D3ChartConfig = typeof d3ChartConfig;