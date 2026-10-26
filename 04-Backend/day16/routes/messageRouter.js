import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import activeUer from "../middleware/activeUser.js";
import { getMessage,sendMessage } from "../controllers/messageControl.js";

const messageRouter = express.Router;

messageRouter.use(authUserMiddleware);
messageRouter.use(activeUer);

messageRouter.get("/:chatID",getMessage);
messageRouter.post("/:chatID",sendMessage);

// messageRouter.post("/message" ,message);

export default messageRouter;