const auth = require("../middlware/auth");
const express = require("express");
const router = express.Router();
const { register } = require("../controllers/userController");
const userRouter = router();
const { login } = require("../controllers/userController");

//register new user
userRouter.post("/register", register);

//login a user
userRouter.post("/login", login);
userRouter.get("/protected", auth, (req, res) => {
  res.json({ message: "This is a protected route" });
});
module.exports = userRouter;
module.exports = router;
