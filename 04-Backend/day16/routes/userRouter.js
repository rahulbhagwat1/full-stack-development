import express from "express";
import { login,logout,signup,profile ,Delete } from "../controllers/userControl.js";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import activeUer from "../middleware/activeUser.js";

const userRouter = express.Router();


userRouter.post("/login" , login);
userRouter.post("/logout" , authUserMiddleware ,activeUer, logout);
userRouter.post("/signup" , signup);
userRouter.get("/profile" , authUserMiddleware ,activeUer,profile);
userRouter.delete("/delete" , authUserMiddleware ,activeUer,Delete);


export default userRouter;