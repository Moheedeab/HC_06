import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Image, View, Text, ScrollView, BackHandler } from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useNavigation, useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import connectionIf from '../data/connection';
import { CleanGif } from '../components/CleanGif/CleanGif';

export const CleanScreen = () => {
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

    return ( 
      
        <ScrollView style={{backgroundColor:"#ffffff" ,height:1000}} >
        <StatusBar  backgroundColor="#ffffff" />           
        <ColorMixer/>  
        <ConnectionStatus status={isConnected} /> 
        <Logo/>
        <CleanGif />
        <Text style={MixingGifStyle.Wait}> The machine is cleaning </Text>
       </ScrollView>
    );

}


      
