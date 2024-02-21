
//for loop

// for (let i = 0; i <15; i++) {
//     if (i==10) {
//        console.log(`Value is :${i}`); 
//        break
//     }
//     console.log(`value of x :${i}`);
    
// }
// for (let i = 0; i <15; i++) {
//     if (i==10) {
//        console.log(`Value is :${i}`); 
//        continue
//     }
//     console.log(`value of x :${i}`);
    
// }

//nested for loop

// for (let i = 0; i <15; i++) {
    
//     console.log(`value of x :${i}`);
//     for(let j =2 ; j<10 ;j=j+2){
    
//     console.log(`value of y:${j}`);
//     }
// }


//while loop

//  let i=0
// const x=5
// while (i<x) {
//     console.log(`i=${i}`);
//     i++
// }


//do while loop -> prints the statement first  and then checks condition

// let y=20
// do {
//  console.log(`value of y=${y}`);   
// y++
// } while (y<20);

// for of

const array1=[2,4,6,8,10]
for (const num of array1) {
    console.log(num);
}

const string1="Hello Everyone"
for (const i of string1) {
    console.log(`each letter is ${i}`);
}

//Maps -> No duplicate values only unique

const newMap=new Map()
newMap.set("IN","India")
newMap.set("USA","United States of America")
newMap.set('USA',"United States OF America")
console.log(newMap);

for (const [key,value] of newMap) {
    console.log(key,':',value);
}

//looping on objects 

const object1={
    1:"hello",
    2:"bye",
    3:"hi"
}
// // to print key and values in object
for (const key in object1) {
   console.log(`${key} : ${object1[key]}`);
}

//for each

const fruits=["apple","banana","orange"]
fruits.forEach( function (items) {
    console.log(items);
})


//arrow function
fruits.forEach( (i) => {
    console.log(i);
})

fruits.forEach((i , index, arr)=>{
    console.log(i,index,arr);
})

const myObject=[{
    name:"Kumar",
    Age:"20"
},
{
    name:"Muthu",
    Age:"21"
},
{
    name:"Muthukumar",
    Age:"22"
}]

myObject.forEach((item)=>{
console.log(item.name);
console.log(item.Age);
})