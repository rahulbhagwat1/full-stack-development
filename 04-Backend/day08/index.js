import express, { json } from "express"
import fs from "fs";


const dbPath = "./db.txt";

function readDb(){
    const data = fs.readFileSync(dbPath , "utf-8");
    return JSON.parse(data);
}

function writeDb(data){
    fs.writeFileSync(dbPath, JSON.stringify(data,null,2));
}

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.end("welcome to the home page of the bank");
})


app.get("/user",(req,res)=>{
    const accountNo = req.body.accountNo;
    const data = readDb();
    const user = data.find((a)=>a.accountNo==accountNo)

    res.send(JSON.stringify(user));
})

app.post("/user",(req,res)=>{
    const userr = req.body;
    const data = readDb();

    data.push(userr);

    console.log(userr);


    writeDb(data);
    res.send(userr)
})

app.delete("/user",(req,res)=>{
    const accountNo= req.body.accountNo;
    const data = readDb();
    const newData = data.filter((data)=>data.accountNo!=accountNo);

    writeDb(newData);
    res.send("user Deleted Succefully");
})
   

app.patch("/user",(req,res)=>{
    const balanceUpdate = req.body.balance;
    const accountNo = req.body.accountNo;

    const account = readDb();
    const user = account.find((a)=> a.accountNo == accountNo);
    user.balance = Number(user.balance)+Number(balanceUpdate);

    writeDb(account);
    res.send("Balance Updated successfully");
})


app.listen(3000,()=>{
    console.log("listening at 3000")
})   