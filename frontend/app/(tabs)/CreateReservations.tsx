import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { useRouter } from 'expo-router';

// Define the type for the route parameters
interface RouteParams {
    roomid: string; // Adjust the type if roomid can be a different type
}

const CreateReservation: React.FC<{ params: RouteParams }> = ({ params }) => {
    const router = useRouter();
    const { roomid } = params; // Access roomid directly from params

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [roomData, setRoomData] = useState<any>(null); // Adjust type as needed

    // Fetch room data on component mount
    useEffect(() => {
        let isMounted = true;
    
        const fetchRoomData = async () => {
            if (!roomid) {
                setError("Room ID is not provided.");
                setLoading(false);
                return;
            }
    
            try {
                const response = await axios.get(`${API_URL}/api/rooms/${roomid}`); // Use GET instead of POST
                if (isMounted) {
                    setRoomData(response.data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An unknown error occurred");
                    setLoading(false);
                }
                console.error("Failed to load room data:", err);
            }
        };
    
        fetchRoomData();
    
        return () => {
            isMounted = false;
        };
    }, [roomid]);

    const handleSubmit = async () => {
        if (!name || !date || !time || !guests) {
            Alert.alert("Please fill out all fields.");
            return;
        }
    
        const reservationData = {
            userId: "USER_ID", 
            roomId: roomid, 
            startDate: date, 
            endDate: time, 
            guests: Number(guests),
        };
    
        try {
            const response = await axios.post(`${API_URL}/api/reservations`, reservationData);
            Alert.alert("Reservation submitted!", JSON.stringify(response.data));
            router.push('/reservations'); 
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                Alert.alert("Error submitting reservation", error.message);
            } else {
                const unknownError = new Error("An unknown error occurred");
                setError(unknownError.message);
                Alert.alert("Error submitting reservation", unknownError.message);
            }
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <TextInput placeholder="Name" value={name} onChangeText={setName} />
            <TextInput placeholder="Date" value={date} onChangeText={setDate} />
            <TextInput placeholder="Time" value={time} onChangeText={setTime} />
            <TextInput placeholder="Number of Guests" value={guests} onChangeText={setGuests} keyboardType="numeric" />
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit Reservation</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateReservation;