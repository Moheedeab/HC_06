import { SafeAreaView,StatusBar} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { ConnectButton } from '../components/ConnectButton/ConnectButton';
import React from 'react';
import { Block } from '../components/Block/Block';


interface ConnectionStatusProps {
  isConnected: boolean;
  isConnecting:boolean;
  onPress: () => void;}

export const HomeSecreen =  ({ isConnected,isConnecting,onPress }: ConnectionStatusProps) => {


    return ( 
        <SafeAreaView style={{backgroundColor:"#ffffff"}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Block/>
        <ConnectButton onPress={onPress} status={isConnecting} Text={'Disonnect'}/>
        </SafeAreaView>
    );

}


/*
import { SafeAreaView,StatusBar} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { ConnectButton } from '../components/ConnectButton/ConnectButton';
import React from 'react';
import { Block } from '../components/Block/Block';
import { useDispatch, useSelector } from 'react-redux';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import connectionIf from '../data/connection';

interface ConnectionStatusProps {
  isConnected: boolean;
  isConnecting:boolean;
  onPress: () => void;}

export const HomeSecreen =  () => {

    const isConnected = useSelector(connectionIf.getIsConnected);
    const isConnecting = useSelector(connectionIf.getIsConnecting);
    const dispatch = useDispatch();
    const disconnectFromDevice = async () => {
      try {
        await BluetoothSerial.disconnect();
        BluetoothSerial.clear()
        dispatch(connectionIf.setIsConnected(false));
      } catch (error) {
      }
    };
    return ( 
        <SafeAreaView style={{backgroundColor:"#ffffff"}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Block/>
        <ConnectButton onPress={() => disconnectFromDevice()} status={isConnecting} Text={'Disonnect'}/>
        </SafeAreaView>
    );

}


      
*/