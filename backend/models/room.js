const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    room_name: {
        type: String,
        required: true
    },
    availability: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost_per_night: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image_url: {
        type: [String], 
        required: true
    },
    current_bookings: {
        type: [Object], 
        default: []
    }
}, {
    timestamps: true
});

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;