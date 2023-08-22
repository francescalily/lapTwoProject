const { Router } = require("express");

const communityRouter = Router();

const communityController = require("../controllers/community.js");

communityRouter.get("/", communityController.index);

communityRouter.get("/top", communityController.getTop);

communityRouter.get("/:id", communityController.show);

communityRouter.post("/", communityController.create);

communityRouter.patch("/:id", communityController.update);

communityRouter.delete("/:id", communityController.destroy);

module.exports = communityRouter;
