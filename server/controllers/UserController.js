const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password, repeatPassword } = req.body;

      if (password !== repeatPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already registered" });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user document
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();

      // Return success message
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = userController;
