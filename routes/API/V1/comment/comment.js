const express = require("express");
const commentRoutes = express.Router();
const commentcontroller= require("../../../../controller/API/V1/comment/commentController");
commentRoutes.post("/add_comment",commentcontroller.add_comment)
module.exports = commentRoutes;