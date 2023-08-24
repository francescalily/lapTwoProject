const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const bookRouter = require("./routers/books");
const logRoutes = require("./middleware/logger");
const userRouter = require("./routers/user");
const communityRouter = require("./routers/community");
const navigationRouter = require("./routers/navigation");

const api = express();

api.use(cors());
api.use(express.json());
api.use(express.static(path.join(__dirname, "../client")));

api.use("/", navigationRouter);
api.use("/books", bookRouter);
api.use("/community", communityRouter);

api.use(logRoutes);

api.use("/users", userRouter);

// Request to check token
api.get("/check-token", (req, res) => {
    try {
      const token = req.headers["authorization"].split(' ')[1];

      if (token == "null" || !token) {
          throw new Error("User not authenticated.");
      } else {

        try {
            const user_token = jwt.verify(token, process.env.TOKEN_KEY);
            res.status(204).end();
        } catch (err) {
            res.status(400).json({"error": err.message});
        }
      }

    } catch (err) {
        res.status(400).json({"error": err.message});
    }
});

module.exports = api;
