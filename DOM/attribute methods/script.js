
const head=document.querySelector('input')
console.log(head.attributes); // to get the number of attributes
console.log(head.getAttribute("placeholder")); //to get the required attribute

head.setAttribute("id","number")  // to set attribute of own
console.log(head);

console.log(head.hasAttribute("type")); // to check whether the attribute is there or not
console.log(head.hasAttribute("class")); 

head.removeAttribute("id")  // to remove the attribute
console.log(head);


