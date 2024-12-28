import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const MessageRouter=express.Router();

MessageRouter.get("/:id",protectRoute,getMessages);
MessageRouter.post("/send/:id",protectRoute,sendMessage);

export default MessageRouter;