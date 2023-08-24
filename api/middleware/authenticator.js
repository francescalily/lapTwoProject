const jwt = require("jsonwebtoken");
require('dotenv').config();

/*
const verifyToken = (req, res, next) => {
    try {
      const token = req.headers["authorization"];

      if (token == "null" || !token) {
          throw new Error("User not authenticated.");
      } else {

        try {
          console.log(proces.env.TOKEN_KEY)
          const user_token = jwt.verify(token, process.env.TOKEN_KEY);
          req.user = user_token;

        } catch (err) {
          return res.redirect('/login');
        }
    
        next()
      }

    } catch (err) {
      return res.redirect('/login');
    }
  };
*/
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }

  
}
  
  module.exports = verifyToken;