import React from "react";
import {Text, View,Image } from "react-native";
import { CardStyle } from "./CardStyle";


interface CardProps {
    text:string,
    image:any,
}

export const Card  =  ({text,image }: CardProps) => {

  return (
    <View style={CardStyle.container}>
  <Image
        source={image} 
        style={CardStyle.image}
      />
  <Text style={CardStyle.title}>  {text} </Text>
    </View>
  );
};

