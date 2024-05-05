const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
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

module.exports = authenticate;
