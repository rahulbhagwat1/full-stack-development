import express from "express"

const app = express();

app.use(express.json());

app.get("/user",(req,res)=>{
    res.end("learning express and got the data")
})

app.post("/user",(req,res)=>{
    res.end("learning express and posted the data")
    console.log(req.body)
})

app.delete("/user",(req,res)=>{
    res.end("learning express and deleted the data")
})

app.listen(3000,()=>{
    console.log("listening at 3000")
})

