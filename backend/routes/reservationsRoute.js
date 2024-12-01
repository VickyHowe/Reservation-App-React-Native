const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservations");
const User = require("../models/users");
const Room = require("../models/room");


router.post("/", async (req, res) => {
    const { userId, roomId, startDate, endDate } = req.body;

    try {
        const reservation = new Reservation({ user: userId, room: roomId, startDate, endDate });
        await reservation.save();

        await User.findByIdAndUpdate(userId, { $push: { reservations: reservation._id } });

        res.status(201).json({ message: "Reservation created successfully!", reservation });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});


router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const reservations = await Reservation.find({ user: userId }).populate('room');
        res.json(reservations);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;