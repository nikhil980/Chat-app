import express from "express";
import { getUserForSidebar } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const UserRouter=express.Router();

UserRouter.get("/",protectRoute,getUserForSidebar);
export default UserRouter;