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
    if(!x.ok)
        throw new Error("data not found")
    return x.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("i will always work");
})
