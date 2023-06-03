import React from "react";
import FastImage from "react-native-fast-image";
import { CleanGifStyle } from "../CleanGif/CleanGifStyle";
export const CleanGif =  () => {

    return ( 
        <FastImage
        source={require('../../image/Cleaning.gif')}
        resizeMode={FastImage.resizeMode.contain}
        style={CleanGifStyle.container}
        />
     
    
    );

}


      