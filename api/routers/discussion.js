const { Router } = require("express");

const discussionRouter = Router();

const discussionController = require("../controllers/discussion.js");
const verifyToken = require("../middleware/authenticator.js");

discussionRouter.get("/", discussionController.index);

discussionRouter.get("/top", discussionController.getTop);

discussionRouter.get("/:id", discussionController.show);

discussionRouter.post("/", verifyToken, discussionController.create);

discussionRouter.patch("/:id", discussionController.update);

discussionRouter.delete("/:id", discussionController.destroy);

discussionRouter.get('/users/:username', discussionController.getAllByUsername);

module.exports = discussionRouter;
