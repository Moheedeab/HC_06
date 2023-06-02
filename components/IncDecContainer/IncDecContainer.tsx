import React from "react";
import {  View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { IncDecContainerStyle } from "./IncDecContainerStyle";



export const IncDecContainer =  () => {

    return ( 
    
     
        <View style={IncDecContainerStyle.buttonContainer}>
        <Text style={IncDecContainerStyle.text}>Weight:</Text>

        <TouchableOpacity style={IncDecContainerStyle.button} onPress={() => {}}>
          <Text style={IncDecContainerStyle.buttonText}>+</Text>
        </TouchableOpacity>

        <TextInput style={IncDecContainerStyle.input} keyboardType="numeric" placeholder="In gram" />

        <TouchableOpacity style={IncDecContainerStyle.button} onPress={() => {}}>
          <Text style={IncDecContainerStyle.buttonText}>ــ</Text>
        </TouchableOpacity>
      </View>
    
    );

}


      