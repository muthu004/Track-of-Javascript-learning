 const num1=[2,3,4,5,6,7]
// // const newNum=num1.filter( (num) =>num>4 ) // here return is not required
// // console.log(newNum);

// const newNum2=num1.filter((num)=> {
//    return  num>4    //in parenthesis use return
// })
// console.log(newNum2);

// const newNum3=[]
// num1.forEach((num)=>{
//     if (num>4) {
//         newNum3.push(num)
//     }
// })
// console.log(newNum3);

// const chocolates=[{
//     chocolate:"Dairy milk", Price:20
// },
// {
//     chocolate:"Munch",Price:10
// },
// {
// chocolate:"5 star",Price:5
// }]

// const choco =chocolates.filter((ch)=>ch.chocolate==="5 star")
// console.log(choco);

//Map

const numbers=[1,2,3,4,5]
const numm=numbers.map((num)=>num+1)
//console.log(numm);

//chaining

const newnum=numbers.map((num)=>num+20).map((num)=>num*10).filter((num)=>num>150).filter((num)=>num>180) // at last if you put map for conditions you will get true or false put filter to get values
//console.log(newnum);

//reduce

const reduceFunction=[1,2,3,4,5]
//Calculates the total value by reducing an array of numbers.
const mytotal=reduceFunction.reduce((acc,curr)=> acc+curr,0)
console.log(mytotal);