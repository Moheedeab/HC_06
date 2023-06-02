import { SafeAreaView,StatusBar,Image, View,Text} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ColorsPickerStyle} from '../components/ColorsPicker/ColorsPickerStyle';
import { MixingGif } from '../components/MixingGif/MixingGif';

import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";



interface ConnectionStatusProps {
  isConnected: boolean;
}

export const MixingScreen =  ({ isConnected}: ConnectionStatusProps) => {


    return ( 
        <SafeAreaView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Text style={MixingGifStyle.Rgb}>RGB Color = (122,120,11)</Text>
        <Text style={MixingGifStyle.Weight}>Weight = 100 gm</Text>
       <MixingGif />
       <Text style={MixingGifStyle.Wait}> The machine is mixing </Text>
     
    
       

        </SafeAreaView>
    );

}


      