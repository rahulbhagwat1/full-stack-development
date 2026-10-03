const http = require("http");


const database =[{name:"rahul",roll:10,age:29,dept:"it"},{name:"pahul",roll:80,age:89,dept:"it"}]
const server = http.createServer((req,res)=>{
    if(req.url=="/userinfo"){
        res.end(JSON.stringify(database));
    }
    else{
        res.end("invalied URL")
    }
})

server.listen(3000,()=>{
    console.log("listening at 3000 port")
})