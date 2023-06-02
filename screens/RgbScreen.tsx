import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { ColorMixer } from "../components/Titel/Titel";
import { Logo } from "../components/Logo/Logo";
import { ColorsPicker } from "../components/ColorsPicker/ColorsPicker";
import { ConnectionStatus } from "../components/ConnectionStatus/ConnectionStatus";
import { isConnected } from "react-native-bluetooth-serial-next";
import { ConnectButton } from "../components/ConnectButton/ConnectButton";
import { IncDecContainer } from "../components/IncDecContainer/IncDecContainer";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useSelector } from 'react-redux';
import connectionIf from '../data/connection';


interface ConnectionStatusProps {
  isConnected: boolean;
}

export const RgbScreen = () => {
  const isConnected = useSelector(connectionIf.getIsConnected);
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", height: 1000 }}>
      <StatusBar backgroundColor="#ffffff" />
      <ColorMixer />
      <ConnectionStatus status={isConnected} />
      <Logo />
      <IncDecContainer />
      

      <ColorsPicker />
      {/* @ts-ignore */}
      <ConnectButton onPress={() => {navigation.navigate('MixerScreen')}} status={false} Text={'Start Mixing'} />
    </ScrollView>
  );
};

