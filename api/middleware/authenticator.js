const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyToken = (req, res, next) => {
    try {
      const token = req.headers["authorization"];

      if (token == "null" || !token) {
          throw new Error("User not authenticated.");
      } else {

        try {
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
  
  module.exports = verifyToken;