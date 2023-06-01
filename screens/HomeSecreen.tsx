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


      