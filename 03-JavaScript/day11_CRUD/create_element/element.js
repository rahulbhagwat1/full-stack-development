// const newelement = document.createElement("h1")

//const { createElement } = require("react");

// newelement.textContent="i am very happy";

// console.log(newelement);

const element= document.getElementById("first");

// element.after(newelement);

// element.before(newelement);

// element.classList.add("mohit");
// element.classList.add("amruta");


// console.log(element);

// element.setAttribute("rahul","arut")

const ul = document.createElement("ul");
ul.id="firstt";

element.after(ul);
// element.setAttribute("id","first");

// console.log(ul);

// const l1 = document.createElement("li");
// l1.textContent="i am top web devloper" ;

// ul.append(l1);

// const l2 = document.createElement("li");
// l2.textContent="i am top system desiner" ;
// ul.append(l2);

// const l3 = document.createElement("li");
// l3.textContent="i am top data scientitst" ;
// ul.append(l3);

// const l4=l3;
// console.log(l4);

// ul.prepend(l4);

// const frag = document.createDocumentFragment();

// const list = [ "rahul","rohit","arut","geeta","datta","kamalbai","vaishu","diga"] 
// for (const name of list){
//     const li = document.createElement("li");
//     li.textContent=name;
//     frag.append(li);
// }

// ul.append(frag);
const arr=[];

const list = [ "rahul","rohit","arut","geeta","datta","kamalbai","vaishu","diga"] 
for (const name of list){
    const li = document.createElement("li");
    li.textContent=name;
    arr.push(li);
}

ul.append(...arr);