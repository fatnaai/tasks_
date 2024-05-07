const express = require("express");
const cors = require("cors");

const mongoose = require("./database/bdd");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
});
//user routes
app.use("/api/user", userRouter);
//unknown route
app.use((req, res) => {
  return res.status(404).json({
    message: "Route not found",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
