import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { signUpSchema ,loginSchema } from "../validator/userValidator.js";



const CreateToken = (id,email)=>{
    if(process.env.TOKEN_KEY){
        const token = jwt.sign({id,email},process.env.TOKEN_KEY,{expiresIn:"1h"});
        return token;
    }
    else{ 
        throw new Error("JWT Secret key is Missing");
    }
}

const cookieOption={
    httpOnly:true,
    secure:false,
    maxAge:60*60*1000
}
    


export const signup= async(req,res)=>{
    try{

        const validateUser = signUpSchema.safeParse(req.body);
        if(!validateUser){
            return res.status(400).json({
                message : validateUser.error.issues[0].message
            });
        }

        const {name,age,email,password} = validateUser.data;

        const user = await User.findOne({email});
        if(user){
            return res.status(409).json({
                message:"email already exists"
            })
        }

        const hashpassword =await bcrypt.hash(password,12);

        const userCreated= User.create({
            name,
            age,
            email,
            hashpassword
        });

        const token = CreateToken(userCreated._id,userCreated.email);
        res.cookie("token",token,cookieOption);

        res.status(201).json({
            message:"User created Succsfully",
            name,
            age,
            email
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export const login= async(req,res)=>{
    try{

        const validateUser = loginSchema.safeParse(req.body);
        if(!validateUser){
            return res.status(400).json({
                message : validateUser.error.issues[0].message
            });
        }

        const {email,password} = validateUser.data;

        const existingUser = User.findOne({email});

        if(!existingUser){
            return res.status(401).json("invalid credentials");
        }

        const isMatch = await bcrypt.compare(password,existingUser.password);

        if(!isMatch){
            return res.status(401).json("invalid credentials");       
        }

        const token = CreateToken(existingUser._id,existingUser.email);
        res.cookie("token",token,cookieOption);

        res.status(201).json({
            message:"Login Succesfully",
            name:existingUser.name,
            age:existingUser.age,
            email:existingUser.email,
            usage:existingUser.usage
        }); 
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }

}

export const logout= async()=>{
    res.clearCookie("token",{
        httpOnly:true,
        secure:false
    });

    res.status(200).json({
        message:"logged out succesfully"
    });
}

export const profile= async()=>{
    try{
        res.status(200).json({
            name:req.user.name,
            age: req.user.age,
            usage: req.user.usage,
            email: req.user.email
        })

    }
    catch(err){

        console.log(err);
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}