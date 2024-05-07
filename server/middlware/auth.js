const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtsecret = process.env.JWT_SECRET || "2002";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, jwtsecret, (err, decoded) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Invalid token" });
      }
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Token expired" });
      }

      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = auth;
