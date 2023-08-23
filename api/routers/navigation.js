const { Router } = require('express');

const navigationController = require('../controllers/navigation');
const authenticator = require("../middleware/authenticator");

const navigationRouter = Router();

navigationRouter.get("/home", navigationController.homepage);
navigationRouter.get("/login", navigationController.login);
navigationRouter.get("/profile", authenticator, navigationController.profile);
navigationRouter.get("/history", navigationController.history);
navigationRouter.get("/discussion", navigationController.discussion);

module.exports = navigationRouter;