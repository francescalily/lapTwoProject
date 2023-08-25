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
          console.log("my env logs: ",process.env.TOKEN_KEY)
          const user_token = jwt.verify(token, process.env.TOKEN_KEY);
          console.log("user token", user_token)
          req.user = user_token;

        } catch (err) {
          //return res.redirect('/login');
          console.log(err);
        }
    
        next()
      }

    } catch (err) {
      //return res.redirect('/login');
      console.log(err);
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

/*
function verifyToken(req, res, next) {
  const token = req.header('Authorization'); // Assuming the token is sent in the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the decoded user data to the request
    next(); // Move to the next middleware
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}*/


module.exports = verifyToken;