import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import axios from "axios";

const CreateReservation = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = async () => {
        if (!name || !date || !time || !guests) {
            Alert.alert("Please fill out all fields.");
            return;
        }

        const reservationData = {
            name,
            date,
            time,
            guests: Number(guests), // Ensure guests is a number
        };

        try {
            const response = await axios.post('/api/reservations', reservationData); // Adjust the endpoint as needed
            Alert.alert("Reservation created!", `ID: ${response.data.id}`); // Assuming your API returns the created reservation ID
            // Optionally reset the form after submission
            setName("");
            setDate("");
            setTime("");
            setGuests("");
        } catch (error) {
            Alert.alert("Error creating reservation", error.message);
        }
    };

    return (
        <View className="flex-1 justify-center p-4">
            <Text className="text-lg font-bold mb-4">Create a Reservation</Text>
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4"
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4"
                placeholder="Date (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4"
                placeholder="Time (HH:MM)"
                value={time}
                onChangeText={setTime}
            />
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4"
                placeholder="Number of Guests"
                value={guests}
                onChangeText={setGuests}
                keyboardType="numeric"
            />
            <Button title="Create Reservation" onPress={handleSubmit} />
        </View>
    );
};

export default CreateReservation;