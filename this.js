// this works differently in each environment

const Userdetails = {
  name: "kumar", // can be changed using object properties
  age: 21,
  courseName: "computer",
  welcome: function () {
    // function

    // this.name is used to take value within object if we dont use it then it will take value in a global scope
    console.log(`${this.name}, Welcome`); // dont put print inside object if you want to put put it inside function/method and the function inside object
  },
  // method cannot work standalone like function it is associated with object
  greet() {
    //method
    console.log(`${this.name}, hello`);
  },
};
Userdetails.welcome();
Userdetails.greet();
Userdetails.name = "Vishnu";
Userdetails.welcome();
Userdetails.greet();

// checking the variable declaration inside function and outside function

// use "=" to declare value to variable ,if : is used then it will show "typescript annotation cant be used" in node environment but in browser you can use : (no error will be shown)
const name = "Kadavul";

const welcome = function () {
  const name = "Muthu"; // cannot be changed inside function as it is const or let

  console.log(`${name}, Welcome`); // this.name is not required because we have our variable declared with const
};

welcome();

function hello() {
  console.log(`${name}`); // if we get depreceted in variable then it means the variable is used most of the times (source:stack overflow)
}

hello();

//  name="hero"  // if we use let we can change values but const is more preferred in modern javascript
//welcome();

console.log(this); //-> returns empty as it doesnt have any context

//arrow function

// const x=(num1,num2) =>{
// return num1*num2
// }
// console.log(x(2,5));

//if single line return then we can use paranthesis

// const y=(num3,num4)=> (num3/num4)
// console.log(y(5,2));
