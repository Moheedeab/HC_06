import React from "react";
import {Text, View,Image } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { ColorsPickerStyle } from "./ColorsPickerStyle";
type ColorsPickerProps = {
  color: string;
  setColor: (color: string) => void;
};
export const ColorsPicker  =  ({color, setColor} : ColorsPickerProps) => {
  return (
    <View style={ColorsPickerStyle.container}>
        <ColorPicker 
          thumbSize={20}
          sliderSize={25}
          color={color}
          onColorChange={color => {setColor(color)}}
         />
    </View>
  );
};

