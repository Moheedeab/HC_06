import React from "react";
import {Text, View,Image } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { ColorsPickerStyle } from "./ColorsPickerStyle";

export const ColorsPicker  =  () => {
  

  return (
    <View style={ColorsPickerStyle.container}>
        <ColorPicker 
          thumbSize={20}
          sliderSize={25}
         />
    </View>
  );
};

