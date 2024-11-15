import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text className="text-3xl font-bold">Reservation App</Text>
      <Link href="/profile" style={{ color: "red", marginTop: 20 }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default Index;