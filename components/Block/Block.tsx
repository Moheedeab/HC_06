import React, { useState } from "react";
import {Text, View } from "react-native";
import { Card } from "../Card/Card";
import { BlockStyle } from "./BlockStyle";
import { useNavigation } from "@react-navigation/native";
import BluetoothSerial from "react-native-bluetooth-serial-next";

export const Block  =  ()=> {

  
  const sendMessage = async (message: string) => {
    try {
      await BluetoothSerial.write(message);
      console.log("RN SEND")
      console.log(message)
                {/* @ts-ignore */}
                navigation.navigate('CleanScreen')
    } catch (error) {
      
    }
  };
  const navigation = useNavigation();
  return (
    <View style={BlockStyle.container}>
      <View style={BlockStyle.row}>
        {/* @ts-ignore */}
        <Card onPress={() => {navigation.navigate('RGB')}} text={"RGB"} image={require('../../image/RGB.jpg')}/>
        <Card text={"Camera"} image={require('../../image/Camera.png')} />    
      </View>
      
      <View style={BlockStyle.row}>
        
      <Card text={"Sensor"} image={require('../../image/ColorSensor.jpg')} />
       
        <Card onPress={() => {
               sendMessage('Cleaning')
              }
      } text={"Clean"}image={require('../../image/Clean.png')} />
      </View>
    </View>

  );
};