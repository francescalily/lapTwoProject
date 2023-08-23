const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const bookRouter = require("./routers/books");
const logRoutes = require("./middleware/logger");
const userRouter = require("./routers/user");
const communityRouter = require("./routers/community");
const navigationRouter = require("./routers/navigation");

const api = express();

api.use(cors());
api.use(express.json());
api.use(express.static(path.join(__dirname, "../client")));

// api.get("/", (req, res) => {
//   console.log("Request received at root route");
//   res.json({
//     title: "Books of Florin",
//     description: "Find and rate the local books of Florin County!",
//   });
// });
api.use("/", navigationRouter);
api.use("/books", bookRouter);
api.use("/community", communityRouter);

api.use(logRoutes);

api.use("/users", userRouter);

module.exports = api;
