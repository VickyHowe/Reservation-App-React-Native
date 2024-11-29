import React from 'react';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <>
      <Stack>
        <Stack.Screen name="signIn" options={screenOptions} />
        <Stack.Screen name="signUp" options={screenOptions} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default AuthLayout;