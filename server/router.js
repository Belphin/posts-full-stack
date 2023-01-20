import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getPost);
router.get("/post/:title", PostController.searchPost);
router.put("/posts", PostController.updatePost);
router.delete("/posts/:id", PostController.delete);

export default router;
