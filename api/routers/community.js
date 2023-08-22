const express = require("express");
const communityRouter = express.Router();

const communityController = require("../controllers/community");

communityRouter.get("/", communityController.index);

communityRouter.get("/:id", communityController.show);

communityRouter.post("/", communityController.create);
module.exports = communityRouter;
