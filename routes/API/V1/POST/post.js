const express = require("express");
const PostRoutes = express.Router();
const postController = require("../../../../controller/API/V1/POST/postController");
const post = require("../../../../model/Post/Post");

PostRoutes.post("/addPost",post.uploadImage,postController.addPost);
PostRoutes.get("/viewpost/:id",postController.viewpost)
PostRoutes.use("/comment",require("../comment/comment"));

module.exports = PostRoutes;