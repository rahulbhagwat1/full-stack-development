import express from "express";
import { login,logout,signup,profile } from "../controllers/userControl.js";
import authUserMiddleware from "../middleware/authUserMiddleware.js";

const userRouter = express.Router;


userRouter.post("/login" , login);
userRouter.post("/logout" , logout);
userRouter.post("/signup" , signup);
userRouter.get("/profile" , authUserMiddleware ,profile);


export default userRouter;