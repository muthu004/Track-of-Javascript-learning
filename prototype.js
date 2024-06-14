/*Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, 
so the prototype will have its own prototype, making what's 
called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.*/

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid

// SHADOWING THE PROPERTY

/* This should be predictable, given the description of the prototype chain. When we call getYear()
   the browser first looks in myDate for a property with that name, and only checks the prototype
  if myDate does not define it. So when we add getYear()  to myDate, then the version in myDate is called.*/

const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

// SETTING A PROTOTYPE

//The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

// Using constructor

/*an object personPrototype, which has a greet() method
  a Person() constructor function which initializes the name of the person to create.
  We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.*/

//1

const personPrototype2 = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

const personPrototype3 = {
  meet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  // Person is a cons
  this.name = name;
}
/* Object.assign() is a method used to copy the values of all enumerable own properties from one or more source objects to
   a target object. In this case, Person.prototype is the target object, and personPrototype2 is the source object. 
  This statement effectively adds all the methods defined in personPrototype2 to the Person.prototype.*/

Object.assign(Person.prototype, personPrototype2, personPrototype3); // we can add many sources
// or
// Person.prototype.greet = personPrototype.greet; // it can also be used

//After this code, objects created using Person() will get Person.prototype as their prototype, which automatically contains the greet method.

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
reuben.meet();


//OWN PROPERTIES

/*It's common to see this pattern, in which methods are defined on the prototype, but data properties are
 defined in the constructor. That's because methods are usually the same for every object we create, while we often want each
 object to have its own value for its data properties (just as here where every person has a different name).*/

/*Properties that are defined directly in the object, like name here, are called own properties, and you can 
check whether a property is an own property using the static Object.hasOwn() method:*/

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
