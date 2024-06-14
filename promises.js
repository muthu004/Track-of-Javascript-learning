const fistPromise=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Hello world");
        resolve()
    },1000)
    
})

fistPromise.then(function () {
    console.log("promise consumed");
})

const threePromise=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve( {username :"Kumar" ,age:22})
    },1000)
})

threePromise.then(function (user) {
    console.log(user);
})

const fourPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve( {username :"Kumar" ,age:22})
        }
        else{
            reject("Something is wrong")
        }

    },1000)
})

fourPromise.
then(function (user) {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
  console.log(error);  
}).finally(()=>console.log("the promise either resolved or rejected"))


const fivePromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve( {username :"Kumar" ,age:23})
        }
        else{
            reject("Something is wrong")
        }

    },1000)
})

async function promiseFive(){
try {
    const response=await fivePromise
    console.log(response);
} catch (error) {
    console.log(error);
    
}
}

promiseFive()

//two methods to do a single work

//here using async try catch
async function User(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await  response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
}

User()

// here using then catch
 fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
