import connectDB from "./config/database";
import e from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";
import chatRouter from "./routes/chatRouter.js";
import cookieParser from "cookie-parser";

dotenv.config;

const app = e();

app.use(e.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/message",messageRouter);
app.use("/chat",chatRouter);

const startServer = async()=>{
    try{
        await connectDB();
        app.listen(process.env.PORT,()=>{
            console.log(`Listing At ${process.env.PORT}`)
        });
    }
    catch(err){
        console.log(err.message);
    }
}


startServer();


