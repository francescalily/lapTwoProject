const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger');
const authenticator = require('./middleware/authenticator');
const userRouter = require('./routers/user');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes);

api.use("/users", userRouter);
api.get("/test", authenticator, (req, res) => {
    console.log(req.user)
    res.status(200).send("It works!")
})

module.exports = api;