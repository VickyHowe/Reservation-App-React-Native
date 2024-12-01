import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { Link } from "expo-router";
import { API_URL } from "@env";
import { useRouter } from 'expo-router';
import axios from "axios";


const SignIn: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    setisSubmitting(true);
    try {
        const response = await axios.post(`${API_URL}/api/users/login`, form);
        Alert.alert("Login Successful", response.data.message);

    } catch (error) {
        if (error instanceof Error) {
            Alert.alert("Login Error", error.message);
        } else {
            Alert.alert("Login Error", "An unknown error occurred");
        }
    } finally {
        setisSubmitting(false);
    }
};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text className="text-2xl text-secondary mt-10">
            Login to Hostel Reservations
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"

          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <TouchableOpacity
            className={`bg-brown rounded-xl min-h-[100px] w-[300px] justify-center items-center mt-7`}
            onPress={submit}
            disabled={isSubmitting}
          >
            <Text className="text-secondary text-center font-bold text-2xl ">
              Sign In
            </Text>
          </TouchableOpacity>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary">
              Don't have an account?
            </Text>
            <Link
              href={"/signUp"}
              style={{ color: "#468B00", fontWeight: "bold" }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
