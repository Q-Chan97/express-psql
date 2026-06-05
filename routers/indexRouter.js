import Router from "express";
import { userNamesGet, newUserGet, newUserPost } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", userNamesGet);

indexRouter.get("/new", newUserGet);

indexRouter.post("/new", newUserPost);

export default indexRouter;