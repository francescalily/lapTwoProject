const { Router } = require('express');

const bookController = require('../controllers/books');

const bookRouter = Router();

bookRouter.get("/", bookController.index);
bookRouter.get("/top", bookController.getTop);
bookRouter.get("/:id", bookController.show);

bookRouter.post("/", bookController.create);

bookRouter.patch("/:id", bookController.update);

bookRouter.delete("/:id", bookController.destroy);

module.exports = bookRouter;