import connectDB from "./config/database";
import e from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter";
import messageRouter from "./routes/messageRouter";

dotenv.config;

const app = e();

app.use(e.json());

app.use("/user", userRouter);
app.use("/message",messageRouter);

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


