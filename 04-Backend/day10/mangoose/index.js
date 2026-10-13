import express from "express";
import mongoose from "mongoose";
import Customer from "./schema.js";
import Users from "./data.js";

const app = express();

await mongoose.connect("mongodb+srv://coderarmy8_db_user:KTJJx25DcKLkSfyb@cluster0.0zq95sh.mongodb.net/Aarut");

app.use(express.json());

app.listen(3000,()=>{
    console.log("listening at 3000");
})

app.post("/customer", async (req,res)=>{
    const customer =  await Customer.create(req.body);
    res.json({
        message:"user craeted succsefully",
        customer : customer
    }) 
})

app.post("/customer/bulk", async (req,res)=>{
    const customer =  await Customer.insertMany(Users);
    res.json({
        message:"user craeted succsefully",
        customer : customer
    })
})

app.get("/customer" , async (req,res)=>{
    const customer =  await Customer.find();
    res.json({
        message : "user found",
        customer : customer
    })

})

app.get("/customer/filter" , async (req,res)=>{
    // const {city , age , accountType} = req.query;
    const customer = await Customer.find(req.query);
    res.json({
        message : "user founnd",
        customer : customer
     })   
})

app.get("/customer/:accountNumber", async (req,res)=>{
    const accountNumber = req.params.accountNumber;
    const person = await Customer.findOne({accountNumber:accountNumber});
    if(!person){
        res.json({
        message:"person not found",
        })
    }
    else{
        res.json({
        message:"person found",
        person : person
        })
    }
    

})

app.delete("/customer/:accountNumber", async (req,res)=>{
    const accountNumber = req.params.accountNumber;
    const person = await Customer.findOneAndDelete({accountNumber:accountNumber});
    if(!person){
        res.json({
        message:"person not found",
        })
    }
    else{
        res.json({
        message:"person deleted",
        person : person
        })
    }
    

})

