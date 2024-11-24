import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AuthLayout = () => {
  return (
    <View>
      <Text> AuthLayout</Text>
      <Tabs.Screen
          name="Login"
          options={{
            title: "Login",
            headerShown: false,
            tabBarIcon: ({ color }: { color: string }) => (
              <SimpleLineIcons name="login" color={color} size={28} />
            ),
          }}
        />
    </View>
  )
}

export default AuthLayout