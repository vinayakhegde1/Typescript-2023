// Default PArameters 

// JS supported default parameters since Es2015/Es6 

// syntax: 
// function name(parameter1=defaultValue1,...) {
//    //do something 
// }

//if you don't pass the arguments or pass undefined into the function
// when calling it , the function will take the default initialized values for the omitted 
// parameters.

// Example
// function applyDiscount(price, discount = 0.05){
//     return price * (1-discount);
// }

// console.log(applyDiscount(100)); // 95

// In this example applyDiscount() has a default parameter as discount 
// so if we don't pass any value to discount then it will use the default value which is 
// 0.05
// syntax in TS 
// function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
//    //
// }
// Sol 
function applyDiscount(price:number, discount:number = 0.05){
    return price * (1-discount);
}
console.log(applyDiscount(100));

//Note: You cannot add default parameters in func type definitions 
// Example 
// let promotion: (price:number, discount: number = 0.05)=> number;

// error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
// Just like optional parameter, default parameters are also optional 

// function applyDiscount(price: number, discount: number = 0.05): number {
//   // ...
// }
// (price: number, discount?: number) => number

// optional parameters must come after the req parameters 
// However default parameters don't need to appear 
// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.

// Example 
function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            //leap year
            if (((year % 4 == 0)&&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day=29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let day= getDay(2019, 2);
console.log(day);

// Summary 
// > Use default parameter syntax parameter :=defaultValue if you want to set 
// the default initialized value for parameter 
// >Default parameters are optional 
// To use the default initialized value of a parameter, you omit the argument when 
// calling the function or pass the undefined into the function 
