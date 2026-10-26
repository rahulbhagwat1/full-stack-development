import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import activeUer from "../middleware/activeUser.js";
import { createChat , recentChat ,getSingleChat ,deleteChat } from "../controllers/chatControl.js";

const chatRouter = express.Router();

chatRouter.use(authUserMiddleware);
chatRouter.use(activeUer);

chatRouter.post("/createChat",createChat);
chatRouter.get("/recentChat",recentChat);
chatRouter.get("/:chatId",getSingleChat);
chatRouter.delete("/:chatId",deleteChat);

export default chatRouter;