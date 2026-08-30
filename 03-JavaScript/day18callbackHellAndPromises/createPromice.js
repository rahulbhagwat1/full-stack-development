const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:"rahul",roll:10})
    },1000)
    // reject("Error Occurued")
})

console.log(p1);

p1.then((res)=>{
    console.log(res)
})

.catch((error)=>{
    console.log(error);
})
