import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';



const Index = () => {



  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="justify-center items-center flex pb-10">
          <Image
            source={require("../../assets/images/hostel_home.jpg")}
            className="w-[90%] h-[250px] web:max-w-[500px] web:max-h-[250px] rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="justify-center items-center relative flex pt-4 pb-10">
          <Text className="text-5xl font-bold text-secondary text-center">
            Hostel Reservations
          </Text>
        </View>
        <View className="pb-4 flex justify-center items-center">
          <TouchableOpacity
            className={`bg-brown rounded-xl min-h-[100px] w-[300px] justify-center items-center mt-2`}
            onPress={() => router.push('/(auth)/signIn')}
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
