const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://Salma:Salma2004@mycluster.7sjzkyx.mongodb.net/my_bdd";
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

module.exports = connectDB;
