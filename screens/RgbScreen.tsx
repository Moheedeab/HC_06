import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ColorMixer } from "../components/Titel/Titel";
import { NavigationContainer } from "@react-navigation/native";

export const RgbScreen = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
        <StatusBar backgroundColor="#ffffff" />
        <ColorMixer />
      </SafeAreaView>
    </NavigationContainer>
  );
};
