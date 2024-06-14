
// In JavaScript, filter(), map(), and reduce()
//are array methods that allow you to perform 
//operations on arrays  in a functional programming style.

const numbers = [1, 2, 3, 4, 5];
const numberFour = numbers.filter(num => num % 4 === 0); 
console.log(numberFour)

const fourNumbers = numbers.map(num => num * 4); 
console.log(fourNumbers)

const sum = numbers.reduce((acc, num) => acc + num, 0); 

const products = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 15 },
    { name: 'Product D', price: 25 },
  ];
  
  const totalCost = products
    .filter(product => product.price > 15) 
    .map(product => product.price) 
    .reduce((acc, price) => acc + price, 0); 
  
  console.log(totalCost); 