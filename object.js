//object literals 


const mysym=Symbol("key1")
const User={
    name:"Kumar",
    age:19,
    [mysym]:"mykey1",//-> preferred method to denote symbol
    course:"Computer science engineering"

}
// console.log(User.age);
// console.log(User["age"]) // ->preferred method
// console.log(typeof[mysym]);

// User["age"]=20
// console.log(User);
// Object.freeze(User) //-> used to not change the value of object
// User["age"]=22
// console.log(User);

User.greeting=function () {
    console.log("hello");
}
User.greeting2=function(){
console.log(`hello user ,${this.name}`);
}
//console.log(User.greeting())

//we can also create nested objetcs

const User2={
    name2:{
        fullname:{
            firstname:"Muthu"
        }
    },
    age:19,
}

//console.log(User2.name2.fullname.firstname);

//Object merging

const User3=Object.assign({},User,User2)
//console.log(User3);

const first={1:"a",2:"b"}
const first1={3:"a",4:"b"}
const User4=Object.assign({},first,first1)
//console.log(User4);
//using spread as like in array
const user2={...first,...first1}
// console.log(user2);
// console.log(Object.keys(User2));
// console.log(Object.values(User2));
// console.log(Object.entries(User2));

//Object destructure

const Userdetails={
    name:"kumar",
    age:21,
    courseName:"computer"
}

const{courseName:course}=Userdetails
console.log(course);
//console.log(courseName);