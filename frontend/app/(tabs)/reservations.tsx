import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import { API_URL } from '@env';

const Reservations = () => {
    // State to hold the data
    const [rooms, setRooms] = useState<any[]>([]); // Use a more specific type if you know the structure
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = (await axios.get(`${API_URL}/api/rooms/allRooms`)).data;
        console.log(response)
        setRooms(response.data); // Assuming the response data is an array
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
            console.error("Error fetching data:", error.message);
            setError("Failed to load data");
            setLoading(false);
          }
    };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text>Reservations Page</Text>
    </>
  );
};

export default Reservations;
