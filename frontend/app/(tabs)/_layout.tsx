import { Tabs, Redirect } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function RootLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "linen",
          tabBarInactiveTintColor: "skyblue",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 1,
            borderTopColor: "gray",
            height: 64,
            },
          
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
                      headerStyle: {
            backgroundColor: '#1E90FF', // Change this to your desired color
          },
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome5 name="home" color={color} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="CreateReservations"
          options={{
            title: "New Reservation",
            headerShown: false,
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome name="plus" color={color} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }: { color: string }) => (
              <AntDesign name="profile" color={color} size={28} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
