
//Getting current date
let myDate=new Date()
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//Creating our own custoized date

let myCreatedDate=new Date(2024,0,23)
console.log(myCreatedDate.toLocaleDateString());

let myTime=Date.now()
console.log(myTime);

console.log(myDate.getTime());  //-> answer is in milliseconds