import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts/:limit/:page", PostController.getPage);
router.delete("/posts/:id", PostController.delete);

export default router;
