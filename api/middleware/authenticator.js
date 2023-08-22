const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      const user_token = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = user_token;
    } catch (err) {
      return res.redirect('/login');
    }

    return next();
  };
  
  module.exports = verifyToken;