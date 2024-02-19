// === : used for type checking
// Basic code
const x =45
const y=55
if (x>y) {
    console.log("x is greater than y");
} else {
    console.log("x is smaller than y ");
}

//nested if else
if (x>y) {
    console.log(x+y);
} else if(x<y) {
    console.log(x-y);
}else{
    console.log("both are equal")
}

//switch
const z=3
switch (z) {
    case 1:
        console.log("1 is printed");
        break;
        case 2:
        console.log("2 is printed");
        break;
        case 3:
        console.log("3 is printed");
        break;

    default:
        console.log("no match");
        break;
}

//falsy values :

//false, null , undefined, 0, -0, BigInt 0n, "" , NaN , 

//truthy values :

//"0", "false", " " , [], {}, function(){}


// About ??  for( null , undefined)


let one= 20??10
let two=null??10
let three=undefined??60
let four=null??undefined 
 
console.log(one);
console.log(two);
console.log(three);
console.log(four);

//terniary operator

const noOfCookies=7
noOfCookies<=5 ? console.log("less than 5"):console.log("greater than 5");

