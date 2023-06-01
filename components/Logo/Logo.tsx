import React, { useState, useEffect } from 'react';
import { SafeAreaView,StatusBar, Text,View} from 'react-native';
import {Canvas,Image,useImage} from "@shopify/react-native-skia";
import { LogoStyle } from './LogoStyle';

export const Logo =  () => {
    const LogoImage = useImage(require("../../image/Logo.png"));
    if (!LogoImage ) {
        return <View />;
      }
    return (
    < View  style={LogoStyle.Card}>
    <Canvas style={LogoStyle.image}>   
     <Image
        image={LogoImage}
        width={120}
        height={120}    
      />
      </Canvas>

      </View>
    );

}


      