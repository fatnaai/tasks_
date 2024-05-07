const express = require("express");
const router = express.Router();
const auth = require("../middlware/auth");
const { login } = require("../controllers/userController");

router.post("/login", login);
router.get("/protected", auth, (req, res) => {
  res.json({ message: "This is a protected route" });
});
module.exports = router;
