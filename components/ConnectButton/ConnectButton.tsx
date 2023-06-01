import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ConnectButtonStyle } from './ConnectButtonStyle';

interface ConnectButtonProps {
  onPress: () => void;
  status: boolean;
  Text: string;
}

export const ConnectButton = ({ onPress, status: isConnecting, Text: connect }: ConnectButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isConnecting} style={ConnectButtonStyle.ConnectButton}>
      <Text style={ConnectButtonStyle.ConnectButtonText}>{connect}</Text>
    </TouchableOpacity>
  );
};

