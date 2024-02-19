
//for loop

for (let i = 0; i <15; i++) {
    if (i==10) {
       console.log(`Value is :${i}`); 
       break
    }
    console.log(`value of x :${i}`);
    
}
for (let i = 0; i <15; i++) {
    if (i==10) {
       console.log(`Value is :${i}`); 
       continue
    }
    console.log(`value of x :${i}`);
    
}

//nested for loop

for (let i = 0; i <15; i++) {
    
    console.log(`value of x :${i}`);
    for(let j =2 ; j<10 ;j=j+2){
    
    console.log(`value of y:${j}`);
    }
}


//while loop

 let i=0
const x=5
while (i<x) {
    console.log(`i=${i}`);
    i++
}


//do while loop -> prints the statement first  and then checks condition

let y=20
do {
 console.log(`value of y=${y}`);   
y++
} while (y<20);