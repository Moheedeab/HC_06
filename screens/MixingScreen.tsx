import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Image, View, Text, ScrollView, BackHandler } from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { MixingGif } from '../components/MixingGif/MixingGif';
import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useNavigation, useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import connectionIf from '../data/connection';

export const MixingScreen = () => {
  const isConnected = useSelector(connectionIf.getIsConnected);
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    const handleBackButton = () => {
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      backHandler.remove();
    };
  }, []);
  useEffect(() => {
    if(!isConnected)
      //@ts-ignore
      navigation.navigate('Home')
  },[isConnected])
  const {color, weight} = route.params as {color: string, weight: number}
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };
    return ( 
        <ScrollView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <Text style={MixingGifStyle.Rgb}>{`RGB Color = ${hexToRgb(color)}`}</Text>
        <Text style={MixingGifStyle.Weight}>{`Weight = ${weight} gm`}</Text>
       <MixingGif />
       <Text style={MixingGifStyle.Wait}> The machine is mixing </Text>
     
    
       

        </ScrollView>
    );

}


      