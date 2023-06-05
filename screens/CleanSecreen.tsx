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
  const [called, setCalled] = useState(true);
  const [receivedMessage, setReceivedMessage] = useState('');

  const disconnectFromDevice = async () => {
    try {
      await BluetoothSerial.disconnect();
      BluetoothSerial.clear()
      dispatch(connectionIf.setIsConnected(false));
    } catch (error) {
    }
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const handleBackButton = () => {
      return true;
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
                   
          const setupBluetoothListener = () => {
            BluetoothSerial.withDelimiter('\n').then(() => {
              BluetoothSerial.on('read', data => {
                setReceivedMessage(data.data);
              });
        
              BluetoothSerial.on('error', error => {
                dispatch(connectionIf.setIsConnected(false));
              });
            });
          };
          
          useEffect(() => {
              setupBluetoothListener()
              setCalled(true);
          },[called])

          const handleReceivedMessage = (receivedMessage: string) => {
            console.log(receivedMessage)
            if (receivedMessage.trim() == "Clean Ready") {
              disconnectFromDevice();
            } else if (receivedMessage.trim() == "Clean Not Ready") {
              //@ts-ignore
              navigation.navigate('NoWaterScreen');
            } else {
              // Keep waiting for a valid message
              setTimeout(() => {
                handleReceivedMessage(receivedMessage);
              }, 60000); // Adjust the timeout duration as needed
            }
          };


          useEffect(() => {
            handleReceivedMessage(receivedMessage);
          }, [receivedMessage]);



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


      
