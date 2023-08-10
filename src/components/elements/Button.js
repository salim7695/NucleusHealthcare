import React from 'react';
import { TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title, btnStyle, btnTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
