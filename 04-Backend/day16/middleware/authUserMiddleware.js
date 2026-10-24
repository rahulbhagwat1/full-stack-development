import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";


const authUserMiddleware = async(req,res,next)=>{
    try{
        const {token}=req.cookies;
        const payload = jwt.verify(token,process.env.TOKEN_KEY);

        const existingUser = User.findById(payload.id);
        if(!existingUser){
            return res.status(404).json({
                message:"invalid Credentials or plese login"
            })
        }
        req.user = existingUser;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(404).json({
            message:"invalid Credentials or plese login"
        })
    }
}

export default authUserMiddleware;