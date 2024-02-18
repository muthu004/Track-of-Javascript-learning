//array has many methods 

//splice and slice

const newArray=[1,2,3,4,5]
console.log(newArray);
console.log(newArray.slice(1,4)); //-> does not manipulate the original array
console.log(newArray);


console.log(newArray.splice(1,4)); //-> manipulates the original array itself
console.log(newArray);

// Concatenation of two arrays

const Hero1=["one","two","three","four"]
const Hero2=["one","two","three","five"]
const allheroes=[...Hero1,...Hero2]
console.log(typeof allheroes);
console.log(allheroes);

//making into a single array
const array1=[1,2,3,[1,2,3,[2,3,4]]]
const array2=array1.flat(Infinity)
console.log(array2);

//making other into arry

const name="Kumar"
console.log(Array.of(name));