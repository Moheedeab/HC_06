import React from "react";
import {Text, View,Image } from "react-native";
import { CardStyle } from "./CardStyle";
import { TouchableOpacity } from "react-native-gesture-handler";


interface CardProps {
    text:string,
    image:any,
    onPress?: ()=>void
}

export const Card  =  ({text,image, onPress }: CardProps) => {

  return (
    <TouchableOpacity onPress={onPress} style={CardStyle.container}>
      <Image
            source={image} 
            style={CardStyle.image}
          />
      <Text style={CardStyle.title}>  {text} </Text>
    </TouchableOpacity>
  );
};

