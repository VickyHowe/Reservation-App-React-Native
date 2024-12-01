const express = require("express");
const router = express.Router();
const User = require("../models/users");


router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    
    try {
        const newUser  = new User({ username, password, email });
        await newUser .save();
        res.status(201).json({ message: "User  registered successfully!" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.json({ message: "Login successful!" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;