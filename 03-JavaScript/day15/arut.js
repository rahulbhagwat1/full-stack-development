const responce  = await fetch("https://api.github.com/users?per_page=20");
const data = await responce.json();
console.log(data);
