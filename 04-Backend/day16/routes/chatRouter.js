import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware";
import { createChat , recentChat ,getSingleChat ,deleteChat } from "../controllers/chatControl";

const chatRouter = express.Router;

chatRouter.use(authUserMiddleware);

chatRouter.post("/createChat",createChat);
chatRouter.get("/recentChat",recentChat);
chatRouter.post(":getSingleChat",getSingleChat);
chatRouter.post(":deleteChat",deleteChat);

export default chatRouter;