import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { useRouter } from "expo-router";

// Define the Room interface
interface Room {
  _id: string;
  room_name: string;
  description: string;
  capacity: number;
  availability: string;
  cost_per_night: number;
  image_url: string[];
}

// Define the props for RoomItem
interface RoomItemProps {
  room: Room;
  onSelect: () => void;
  isSelected: boolean;
  onReserve: () => void; 
}

const RoomItem: React.FC<RoomItemProps> = ({ room, onSelect, isSelected, onReserve }) => (
  <TouchableOpacity
    onPress={onSelect}
    className={`p-2 mb-4 shadow-lg rounded-lg border border-green bg-secondary flex-row ${
      isSelected ? "bg-highlight" : ""
    }`}
  >
    <View className="flex-1">
      <Text className="text-xl pb-2 font-bold">{room.room_name}</Text>
      <Text className="pb-2">{room.description}</Text>
      <Text className="pb-2">Room Capacity: {room.capacity}</Text>
      <Text className="pb-2">Availability: {room.availability}</Text>
      <Text className="text-green font-bold">
        Price: ${room.cost_per_night}
      </Text>
      <TouchableOpacity
        onPress={onReserve}
        className="mb-4 mt-5 p-4 bg-brown text-secondary rounded-lg shadow-md w-[200] "
      >
        <Text className="text-secondary text-center font-bold">Reserve Now!</Text>
      </TouchableOpacity>
    </View>

    {room.image_url && room.image_url.length > 0 && (
      <Image
        source={{ uri: `${API_URL}${room.image_url[0]}` }}
        className="w-24 h-24 rounded-lg mb-2"
        resizeMode="contain"
        onError={() => console.log("Error loading image:", room.image_url[0])}
      />
    )}
  </TouchableOpacity>
);

const Reservations: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [error, setError] = useState<Error | null>(null);
  
  const router = useRouter();
  


  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/api/rooms/allRooms`);
      setRooms(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred"));
      }
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderRoomItem = ({ item }: { item: Room }) => (
    <RoomItem
      room={item}
      onSelect={() => setSelectedRoom(item)}
      isSelected={selectedRoom?._id === item._id}
      onReserve={() => {
        console.log(`Reserving room: ${item.room_name}`);
        setSelectedRoom(item);
      }}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 p-5 bg-primary item-center justify-center">
        {selectedRoom ? (
          <View className="mb-4">
            {selectedRoom.image_url && selectedRoom.image_url.length > 0 && (
              <Image
                source={{ uri: `${API_URL}${selectedRoom.image_url[0]}` }}
                className="w-full h-64 rounded-lg mb-4"
                resizeMode="contain"
                onError={() =>
                  console.log("Error loading image:", selectedRoom.image_url[0])
                }
              />
            )}
            <TouchableOpacity
              onPress={() => setSelectedRoom(null)}
              className="p-10 border-1 border-green "
            >
              <RoomItem
                room={selectedRoom}
                onSelect={() => setSelectedRoom(null)}
                isSelected={true}
                onReserve={() => {
                  console.log(`Reserving room: ${selectedRoom.room_name}`);
                  console.log(`Reserving room ID: ${selectedRoom._id}`);
                  router.push(`/createReservations/${selectedRoom._id}`); 
              }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={rooms}
            renderItem={renderRoomItem}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={<Text>No rooms available.</Text>}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Reservations;