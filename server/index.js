const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const registerRoutes = require("./routes/registerRoutes");
const mongoose = require("./database/bdd");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./models/user");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", registerRoutes);
app.use("/api", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
