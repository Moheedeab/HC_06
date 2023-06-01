import React, { useEffect, useState } from 'react';
import { SafeAreaView,StatusBar} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { ConnectButton } from '../components/ConnectButton/ConnectButton';
import { BluetoothGif } from '../components/BluetoothGif/BluetoothGif';



interface ConnectionStatusProps {
  isConnected: boolean;
  isConnecting:boolean;
  onPress: () => void;}

  export const ConnectDevice =  ({ isConnected,isConnecting,onPress }: ConnectionStatusProps) => {

    return(
      <SafeAreaView style={{backgroundColor:"#ffffff"}}>
        <StatusBar backgroundColor="#ffffff" />
        <ColorMixer />
        <ConnectionStatus status={isConnected} />
        <BluetoothGif />
        <ConnectButton onPress={onPress} status={isConnecting} Text={'Connect'} />
      </SafeAreaView>
    );
  };     