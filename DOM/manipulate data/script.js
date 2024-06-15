// creating element
const div=document.createElement("div")
div.innerHTML="<p>hello everyone</p>"
console.log(div);
const p=document.createElement("p")
p.innerText="hello"
console.log(p);



// appending child in main page
const head=document.getElementById("cont")
const head2=document.createElement("li")
head2.innerText="hello all"
head.appendChild(head2)
const query=document.querySelector(".container")

// text content => provides all text and innerText=>provides text with css and innerHtml=> hels to write html tags
console.log(head.textContent);
console.log(head.innerText);
console.log(query.innerHTML);


// replace child 
const query2=document.querySelector("#contain")
const oldChild=document.querySelector("p")
query2.replaceChild(p,oldChild)

// removeChild
query2.removeChild(p)

// insertBefore
const insert=document.querySelector("h1")
query2.insertBefore(insert,query2.firstElementChild)

//cloneNode

const clone=query2.cloneNode(false) // cloning only parent without children
const clone2=query2.cloneNode(true) // cloning  parent with children
console.log(clone);
console.log(clone2);

// append => set of node objects inserted after last child
const append1=document.createElement('p')
append1.innerText="hello world"
const append2=document.createElement('p')
append2.innerText="hello everyone present here"

query2.append(append1,append2)

// prepend => set of node objects inserted after first child
const prepend1=document.createElement('p')
prepend1.innerText="hello world"
const prepend2=document.createElement('p')
prepend2.innerText="hello everyone present here"

query2.prepend(prepend1,prepend2)

//insertAdjacentHTML
query2.insertAdjacentHTML('beforeend','<p> Today is a good day <p/>')
