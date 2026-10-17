import express from "express";
import mongoose from "mongoose";
import user from "./schema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
await mongoose.connect("mongodb+srv://coderarmy8_db_user:KTJJx25DcKLkSfyb@cluster0.0zq95sh.mongodb.net/bored");
app.use(express.json());
app.use(cookieParser());


app.post("/signup", async (req,res)=>{

    const {name,age,email,password} =req.body;

    const u = await user.create( { name , age , email , password } );


    const token = jwt.sign({
        email:email,
        name:name   
    },
    "Rahul%123",
    {expiresIn:"2h"}
    );

    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        maxAge: 60*60*1000
    });


    res.json({
        message: "User logged in succfulyy"
    });
})

app.get("/user", async (req,res)=>{
        const {token} = req.cookies;
        const payload=jwt.verify(token,"Rahul%123");
        const u = await user.findOne({email:payload.email});

        if(u){
            res.json({
                message:"user found",
                userDetails:u
            })
        }
        else{
            res.json("user not found");
        }
});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const u = await user.findOne({email:email});

    if(u){
        if(u.password==password){
            const token = jwt.sign({
                email:u.email,
                name:u.name   
                },
                "Rahul%123",
                {expiresIn:"2h"}
            );

            res.cookie("token",token,{
                httpOnly:true, 
                secure:false,
                maxAge: 60*60*1000
            });

            res.json({
            message: "User logged in succfulyy"
            });
        }
        else{
            res.json({
            message:"invalid credentialsssss"
            })
        }
    }
    else{
        res.json({
            message:"invalid credentials"
        })
    }

}); 






app.listen(3000,()=>{
    console.log("listning at 3000")
})