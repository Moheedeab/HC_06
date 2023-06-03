import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Image, View, Text, ScrollView, BackHandler } from 'react-native';
import { ColorMixer } from '../components/Titel/Titel';
import { ConnectionStatus } from '../components/ConnectionStatus/ConnectionStatus';
import { Logo } from '../components/Logo/Logo';
import { MixingGifStyle } from "../components/MixingGif/MixingGifStyle";
import { useNavigation, useRoute } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import connectionIf from '../data/connection';
import { CleanGif } from '../components/CleanGif/CleanGif';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

export const CleanScreen = () => {
  const isConnected = useSelector(connectionIf.getIsConnected);
  const dispatch = useDispatch();
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
  const [called, setCalled] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState('');
  const setupBluetoothListener = () => {
    console.log("setupBluetoothListener")
    BluetoothSerial.read((data) => {
      console.log(data);
    }, "\r\n");
    BluetoothSerial.withDelimiter('\n').then(() => {
      BluetoothSerial.on('read', data => {
        
        setReceivedMessage(data.data);
        console.log(data.data);
      });

      BluetoothSerial.on('error', error => {
        dispatch(connectionIf.setIsConnected(false));
      });
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setupBluetoothListener()
      setCalled(!called);
      console.log("called")
    }, 1000);
    return () => clearTimeout(timer);
  },[called])

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


      
