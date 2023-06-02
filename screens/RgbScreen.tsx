import React from "react";
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { ColorMixer } from "../components/Titel/Titel";
import { Logo } from "../components/Logo/Logo";
import { ColorsPicker } from "../components/ColorsPicker/ColorsPicker";
import { ConnectionStatus } from "../components/ConnectionStatus/ConnectionStatus";
import { isConnected } from "react-native-bluetooth-serial-next";
import { ConnectButton } from "../components/ConnectButton/ConnectButton";
import { IncDecContainer } from "../components/IncDecContainer/IncDecContainer";

interface ConnectionStatusProps {
  isConnected: boolean;
}

export const RgbScreen = ({ isConnected }: ConnectionStatusProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", height: 1000 }}>
      <StatusBar backgroundColor="#ffffff" />
      <ColorMixer />
      <ConnectionStatus status={isConnected} />
      <Logo />
      <IncDecContainer />
      

      <ColorsPicker />
      <ConnectButton onPress={() => {}} status={false} Text={'Start Mixing'} />
    </SafeAreaView>
  );
};

