import React from "react";
import {Text, View } from "react-native";
import { Card } from "../Card/Card";
import { BlockStyle } from "./BlockStyle";

export const Block  =  ()=> {

  return (
    <View style={BlockStyle.container}>
      <View style={BlockStyle.row}>
        <Card text={"RGB"} image={require('../../image/RGB.jpg')}/>
        <Card text={"Camera"} image={require('../../image/Camera.png')} />    
      </View>
      
      <View style={BlockStyle.row}>
      <Card text={"Sensor"} image={require('../../image/ColorSensor.jpg')} />
        <Card text={"Clean"}image={require('../../image/Clean.png')} />
      </View>
    </View>

  );
};