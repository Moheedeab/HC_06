import { SafeAreaView,StatusBar,Image, View,Text, ScrollView} from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import React, { useEffect } from 'react';
import { MixingGif } from '../components/MixingGif/MixingGif';

import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useNavigation, useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import connectionIf from '../data/connection';


interface ConnectionStatusProps {
  isConnected: boolean;
}

export const MixingScreen =  () => {
  const isConnected = useSelector(connectionIf.getIsConnected);
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    if(!isConnected)
      //@ts-ignore
      navigation.navigate('Home')
  },[isConnected])
  const {color, weight} = route.params as {color: string, weight: number}
    return ( 
        <ScrollView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Text style={MixingGifStyle.Rgb}>{`RGB Color = ${color}`}</Text>
        <Text style={MixingGifStyle.Weight}>{`Weight = ${weight} gm`}</Text>
       <MixingGif />
       <Text style={MixingGifStyle.Wait}> The machine is mixing </Text>
     
    
       

        </ScrollView>
    );

}


      