import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { Link, useRouter } from "expo-router";
import axios from "axios";
import { API_URL } from "@env";


const SignUp: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    setisSubmitting(true);
    // console.log("Submitting form:", form);
    try {
      const response = await axios.post(`${API_URL}/api/users/register`, form);
      Alert.alert("Registration Successful", response.data.message);
      router.push('/reservations');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error response data:", error.response?.data);
        Alert.alert(
          "Registration Error",
          error.response?.data?.message || error.message
        );
      } else {
        Alert.alert("Registration Error", "An unknown error occurred");
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
            Sign up to Hostel Reservations
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
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
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary">
              Have an account already?
            </Text>
            <Link
              href={"/signIn"}
              style={{ color: "#468B00", fontWeight: "bold" }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
