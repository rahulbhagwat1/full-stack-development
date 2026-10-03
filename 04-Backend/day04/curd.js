const http = require("http");
const url = require("url");


const database =[{name:"rahul",roll:10,age:299,dept:"it"},{name:"pahul",roll:80,age:89,dept:"it"}];

function deleteUser(name){
    for(let i in database){
        if(database[i].name==name){
            database.splice(i,1)
        }
    }
}

function createUser(user){
    database.push(user);
}


const server = http.createServer((req,res)=>{

    const parsed = url.parse(req.url,true);
    const operation=parsed.pathname.slice(1);

    if(operation=="userinfo"){
        res.end(JSON.stringify(database));
    }
    else if(operation=="deleteuser"){
        deleteUser(parsed.query.name);
        res.end("user deleted")
    }
    else if(operation=="putuser"){
        createUser(parsed.query)
        res.end("user Craeted");
    }
    else{
        res.end("invalid url");
    }
})

server.listen(3000,()=>{
    console.log("listening at 3000 port")
})