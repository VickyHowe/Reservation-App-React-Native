import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Alert,
} from "react-native";
import axios from "axios";
import { API_URL } from "@env";

const UserReservations: React.FC<{ userId: string }> = ({ userId }) => {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchReservations = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${API_URL}/api/users/${userId}/reservations`);
            setReservations(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
            console.error("Failed to load reservations:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReservations();
    }, [userId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={{ color: 'red' }}>{error}</Text>;
    }

    return (
        <View>
            <Text>Your Reservations:</Text>
            <FlatList
                data={reservations}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>Room ID: {item.room}</Text>
                        <Text>Start Date: {item.startDate}</Text>
                        <Text>End Date: {item.endDate}</Text>
                        <Text>Guests: {item.guests}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default UserReservations;