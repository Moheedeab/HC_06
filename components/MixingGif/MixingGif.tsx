import React from "react";
import FastImage from "react-native-fast-image";
import { MixingGifStyle } from "./MixingGifStyle";

export const MixingGif =  () => {

    return ( 
    
        <FastImage
        source={require('../../image/Mixing.gif')}
        resizeMode={FastImage.resizeMode.contain}
        style={MixingGifStyle.container}
        />
     
    
    );

}


      