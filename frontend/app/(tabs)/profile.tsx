import React from "react";
import { View, Text } from "react-native";
import UserReservations from "../../components/UserReservations"; 

const Profile: React.FC<{ userId: string }> = ({ userId }) => {
    return (
        <View>
            <Text>Profile Screen</Text>
            <UserReservations userId={userId} />
        </View>
    );
};

export default Profile;