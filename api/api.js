const express = require('express');
const cors = require('cors');
require("dotenv").config();

const bookRouter = require('./routers/books');
const logRoutes = require('./middleware/logger');
const authenticator = require('./middleware/authenticator');
const userRouter = require('./routers/user');

const api = express();

api.use(cors());
api.use(express.json());


api.get("/", (req, res) => {
    console.log("Request received at root route")
          res.json({
              title: "Books of Florin",
              description: "Find and rate the local books of Florin County!"
})
})
api.use("/books", bookRouter)

api.use(logRoutes);

api.use("/users", userRouter);
api.get("/test", authenticator, (req, res) => {
    console.log(req.user)
    res.status(200).send("It works!")
})

module.exports = api;