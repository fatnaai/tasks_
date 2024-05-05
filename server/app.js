const express = require("express");
const cors = require("cors");
const registerRoutes = require("./routes/registerRoutes");
const connectDB = require("./database/bdd");
const port = process.env.PORT || 5002;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/user/registration", registerRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
