import React, { useState } from "react";
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
import BluetoothSerial from "react-native-bluetooth-serial-next";


export const RgbScreen = () => {
  
  const isConnected = useSelector(connectionIf.getIsConnected);
  const navigation = useNavigation();
  const [color, setColor] = React.useState("#000000");
  const [weight, setWeight] = React.useState(20);

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
    
  };

  const [message, setMessage] = useState('');
  const sendMessage = async (message: string) => {
    try {
      await BluetoothSerial.write(message);
      setMessage(`Sent: ${message}`);
    } catch (error) {
    }
  };



  return (
    <ScrollView style={{ backgroundColor: "#ffffff", height: 1000 }}>
      <StatusBar backgroundColor="#ffffff" />
      <ColorMixer />
      <ConnectionStatus status={isConnected} />
      <Logo />
      <IncDecContainer weight={weight} setWeight={setWeight}/>
      <ColorsPicker color={color} setColor={setColor}/>
      {/* @ts-ignore */}
      <ConnectButton onPress={() => {navigation.navigate('MixerScreen', {color: color, weight: weight});
      sendMessage(hexToRgb(color)+","+weight);
}
    } status={false} Text={'Start Mixing'} />
    </ScrollView>
  );
};

