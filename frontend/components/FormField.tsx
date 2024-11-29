import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-21 ${otherStyles}`}>
      <Text className="text-base text-secondary">{title}</Text>
      <View className="w-full h-16 px-4 bg-navy rounded-2xl border-navy focus:border-gray items-center flex-row">
        <TextInput
          className="flex-1 text-secondary text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign
              name={showPassword ? "eye" : "eyeo"}
              size={24}
              style={{color:"white"}}  
              />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
