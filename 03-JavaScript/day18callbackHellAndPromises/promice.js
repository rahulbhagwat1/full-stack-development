const p1 = fetch(`https://api.github.com/users?per_page=$20`)

p1.then(()=>{
    console.log(p1);
}) 