//Arrays, Objects,Functions

//Object

let userDetails={
    name:"Kumar",
    Age:23
}
console.log(userDetails);

//function

const firstFunction=function(){
    console.log("hello");
}
console.log(typeof userDetails);

const id=Symbol(24) //-> symbol is used to provide uniqueness
console.log( typeof id);

//Memory allocation

//primitive(stack memory) non primitive(Heap)

//Stack example
let userone=21
let usertwo=userone
usertwo=43
console.log(userone);
console.log(usertwo);

//Heap Example
let One={
    name:"Kumar",
    Number:342234
}

let Two =One
Two.name="Muthu"

console.log(One.name);
console.log(Two.name);