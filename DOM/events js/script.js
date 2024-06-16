
//Creating function
function  display(){
    console.log("hello world");
}
 
// selecting the required elements
const query=document.getElementById("third")
query.onclick=function () {
    console.log("Button is clicked");
}

//addEventListener

const btn=document.getElementById("fourth")
btn.addEventListener("click",()=>{
    console.log(" I am clicked");
})

// there is also removeEventListener which helps to remove the event