import http from "http"

const database=[
    {name:"rohini",roll:20,amount:1032342},
    {name:"amol",roll:290,amount:1032342}
]

const server = http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/user"){
        res.end(JSON.stringify(database,null,2));
    }
    else if(req.method=="POST" && req.url=="/user"){
        let body=""
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const user=JSON.parse(body);
            database.push(user);
            res.end("POSTED");
        })
        
    }
    else if(req.method=="PATCH" && req.url=="/user"){
        let body=""
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const user=JSON.parse(body);
            const userTOPatch = database.find((u)=>u.name == user.name)
            Object.assign(userTOPatch,user);
        })
        res.end("PATCHED");
    }
    else if(req.method=="PUT" && req.url=="/user"){
        res.end("PUT");
    }
    else if(req.method=="DELETE" && req.url=="/user"){
        res.end("DELETED");
    }
    else{
        res.end("invalid")
    }
})

server.listen(3000,()=>{
    console.log("listning at 3000 port");
})