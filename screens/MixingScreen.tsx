import { SafeAreaView,StatusBar,Image, View,Text, ScrollView} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import React from 'react';
import { MixingGif } from '../components/MixingGif/MixingGif';

import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import connectionIf from '../data/connection';


interface ConnectionStatusProps {
  isConnected: boolean;
}

export const MixingScreen =  () => {
  const isConnected = useSelector(connectionIf.getIsConnected);
    return ( 
        <ScrollView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Text style={MixingGifStyle.Rgb}>RGB Color = (122,120,11)</Text>
        <Text style={MixingGifStyle.Weight}>Weight = 100 gm</Text>
       <MixingGif />
       <Text style={MixingGifStyle.Wait}> The machine is mixing </Text>
     
    
       

        </ScrollView>
    );

}


      