// const p1 = fetch(`https://api.github.com/users?per_page=20`)

// const p2 = p1.then((responce)=>{
//    return responce.json();
// }) 

// p2.then((data)=>{
//     console.log(data);
// })


//promice chaining


fetch(`https://api.github.com/users?per_page=20`)
.then((x)=>{
    return x.json();
})
.then((data)=>{
    console.log(data);
})