import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-top items-center">
          <Image
            source={require("../../assets/images/hostel_home.jpg")}
            className="max-w-[350px] h-[500px] rounded-lg"
            resizeMode="contain"
          />
        </View>
        <View className="justify-center items-center relative">
          <Text className="text-5xl font-bold text-navy text-center">
            Hostel Reservations
          </Text>
        </View>
        <View className="h-55 pb-2 ">
          <TouchableOpacity
            className={`bg-navy rounded-xl min-h-[62px] justify-center items-center mt-1`}
            onPress={() => console.log("Login Pressed")}
          >
            <Text className="text-secondary text-center font-bold text-2xl ">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Index;
