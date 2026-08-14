const responce  = await fetch("https://api.github.com/users?per_page=20");
const data = await responce.json();
console.log(data);

// let obj = {
//     name:'rahul',
//     age:20
// }

// let a = JSON.stringify(obj);

// console.log(a);
// console.log(typeof(a));

// let b = JSON.parse(a);

// console.log(b);
// console.log(typeof(b));