import React from "react";
import FastImage from "react-native-fast-image";
import { WaterGifStyle } from "../WaterGif/WaterGifStyle";
export const WaterGif =  () => {

    return ( 
        <FastImage
        source={require('../../image/Water.gif')}
        resizeMode={FastImage.resizeMode.contain}
        style={WaterGifStyle.container}
        />
     
    
    );

}


      