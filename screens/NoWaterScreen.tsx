import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Image, View, Text, ScrollView, BackHandler } from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useDispatch, useSelector } from 'react-redux';
import connectionIf from '../data/connection';
import { CleanGif } from '../components/CleanGif/CleanGif';
import { WaterGif } from '../components/WaterGif/WaterGif';
import { useNavigation, useRoute } from '@react-navigation/core';

export const NoWaterScreen = () => {
  const navigation = useNavigation();
  const isConnected = useSelector(connectionIf.getIsConnected);
  useEffect(() => {
    const timeout = setTimeout(() => {
            //@ts-ignore
      navigation.navigate('Home');
    }, 8000); // 10 seconds

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts before 10 seconds
  }, []);
  
    return ( 
      
        <ScrollView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <WaterGif />
        <Text style={MixingGifStyle.Wait}> Add cleaning material </Text>
       </ScrollView>
    );

}


      
