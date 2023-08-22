const express = require('express');
const cors = require('cors');
require("dotenv").config();

const bookRouter = require('./routers/books');
const logger = require('./middleware/logger')
const api = express();

api.use(cors());
api.use(express.json());
api.use(logger);


api.get("/", (req, res) => {
    console.log("Request received at root route")
          res.json({
              title: "Books of Florin",
              description: "Find and rate the local books of Florin County!"
})
})
api.use("/books", bookRouter)


module.exports = api;