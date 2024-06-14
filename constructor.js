
// USING DEFAULT CONSTRUCTOR

// class ValidationError extends Error {
//     printCustomerMessage() {
//       return `Validation failed :-( (details: ${this.message})`;
//     }
//   }
  
//   try {
//     throw new ValidationError("Not a valid phone number");
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       console.log(error.name); // This is Error instead of ValidationError!
//       console.log(error.printCustomerMessage());
//     } else {
//       console.log("Unknown error", error);
//       throw error;
//     }
//   }
  

//USING EXPLICIT CONSTRUCTOR
// class ValidationError extends Error {
//     constructor(message) {
//       super(message); // call parent class constructor  
//       this.name = "ValidationError";
//       this.code = "42";
//     }
  
//     printCustomerMessage() {
//       return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
//     }
//   }
  
//   try {
//     throw new ValidationError("Not a valid phone number");
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       console.log(error.name); // Now this is ValidationError!
//       console.log(error.printCustomerMessage());
//     } else {
//       console.log("Unknown error", error);
//       throw error;
//     }
//   }


  // Return Value in Parent Class Constructor:

  class ParentClass {
    constructor() {
      return 1;
    }
  }
  
  console.log(new ParentClass()); // ParentClass {}

 // In this case, when you create a new instance of ParentClass, it returns an instance of ParentClass itself, regardless of the return value of the constructor. The returned value 1 is ignored because it's not an object.
//JavaScript constructors are designed to return instances of the class, so non-object return values are disregarded.

//Return Value in Child Class Constructor:

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined


/*However, in the case of the child class ChildClass, it extends ParentClass, but if the 
constructor of ChildClass explicitly returns a non-object value, such as 1, JavaScript throws a TypeError.*/

/*This behavior is because derived constructors (constructors of classes that extend another class)are only allowed to return an
 object or undefined. Returning anything else, like a number, string, or other primitive, violates this rule and results in a TypeError.*/

 /*In summary, while returning non-object values from a constructor may not raise an error in a base class, doing so in a derived 
 class violates the rules of constructor behavior and leads to a TypeError.*/
  

 //Computed property

 class Foo {
  ["constructor"]() { // Computed property with the name "constructor"
    console.log("called");
    this.a = 1;
  }
}

const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"
console.log(foo); // Foo { a: 1 }

/*while you can define a method named "constructor" using a computed property, it won't be recognized as the constructor 
method during class instantiation. However, you can still access it as a regular method on instances of the class.*/

/*Async methods, generator methods, accessors, and class fields are forbidden from being called constructor. 
Private names cannot be called #constructor. Any member named constructor must be a plain method.*/


// Using constructor 

// class Square extends Polygon {
//   constructor(length) {
//     // Here, it calls the parent class' constructor with lengths
//     // provided for the Polygon's width and height
//     super(length, length);
//     // NOTE: In derived classes, `super()` must be called before you
//     // can use `this`. Leaving this out will cause a ReferenceError.
//     this.name = "Square";
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.height = value ** 0.5;
//     this.width = value ** 0.5;
//   }
// }

// CALLING SUPER IN A CONSTRUCTOR BOUND TO A DIFFERENT PROTOTYPE


class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

class Square extends Polygon {
  constructor() {
    super();
    this.name="SQUARE";

  }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance is still an instance of Polygon, because we didn't
// change the prototype of Square.prototype, so the prototype chain
// of newInstance is still
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// However, because super() calls Rectangle as constructor, the name property
// of newInstance is initialized with the logic in Rectangle
console.log(newInstance.name); // Rectangle

