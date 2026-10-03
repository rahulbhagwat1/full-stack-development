// const http = require("http");

// const server= http.createServer((req,res)=>{
//     res.end("learning package.json")
// })

// server.listen(3000,()=>{
//     console.log("listning at 3000")
// })

const validator = require("validator");

let email = "Rahul@gmalcm"

console.log(validator.isEmail(email));