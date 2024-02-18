//String interpolation

const name="Kumar"
let age=19
console.log(`My name is ${name} and age is ${age}`);

//to access string methods we are creating object externally
const newName=new String("Kumar123")
console.log(newName.length);
console.log(newName.indexOf("K"));
console.log(newName.bold());