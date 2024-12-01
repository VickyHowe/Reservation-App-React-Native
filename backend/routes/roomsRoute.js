const express = require("express");
const router = express.Router();
const Room = require("../models/room");

// Get all rooms
router.get("/allRooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.send(rooms);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Get room by ID
router.get("/:id", async (req, res) => {
    const roomId = req.params.id;

    try {
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;