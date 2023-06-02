import React from "react";
import {  View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { IncDecContainerStyle } from "./IncDecContainerStyle";


type IncDecContainerProps = {
  weight: number;
  setWeight: (weight: number) => void;
};
export const IncDecContainer =  ({weight, setWeight}: IncDecContainerProps) => {

    return ( 
    
     
        <View style={IncDecContainerStyle.buttonContainer}>
        <Text style={IncDecContainerStyle.text}>Weight:</Text>

        <TouchableOpacity style={IncDecContainerStyle.button} onPress={() => {setWeight(weight + 1)}}>
          <Text style={IncDecContainerStyle.buttonText}>+</Text>
        </TouchableOpacity>

        <TextInput value={weight.toString()} style={IncDecContainerStyle.input} keyboardType="numeric" placeholder="In gram" />

        <TouchableOpacity style={IncDecContainerStyle.button} onPress={() => {weight > 0 ? setWeight(weight - 1) : null}}>
          <Text style={IncDecContainerStyle.buttonText}>ــ</Text>
        </TouchableOpacity>
      </View>
    
    );

}


      