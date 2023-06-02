import React from "react";
import {Canvas,Circle,Image,useClockValue,useComputedValue,useImage,} from "@shopify/react-native-skia";
import { View } from "react-native";
import { BluetoothGifStyle } from "./BluetoothGifStyle";

export const BluetoothGif = () => {
  const clock1 = useClockValue();
  
  const Bluetooth = useImage(require(`../../image/Bluetooth.png`));
  const interval = 1600;

  const scale = useComputedValue(() => {
    return ((clock1.current % interval) / interval) * 180;
  }, [clock1]);

  const opacity = useComputedValue(() => {
    return 0.9 - (clock1.current % interval) / interval;
  }, [clock1]);

  const scale2 = useComputedValue(() => {
    return (((clock1.current + 400) % interval) / interval) * 180;
  }, [clock1]);

  const opacity2 = useComputedValue(() => {
    return 0.9 - ((clock1.current + 400) % interval) / interval;
  }, [clock1]);

  if (!Bluetooth ) {
    return <View />;
  }

  return (
    <View style={BluetoothGifStyle.TEST}>
    <Canvas style={BluetoothGifStyle.ConnectButton}>
      <Circle cx={150} cy={150} r={70} opacity={1} color="#FF6060"></Circle>
      <Circle cx={150} cy={150} r={scale} opacity={opacity} color="#FF6060" />
      <Circle cx={150} cy={150} r={scale2} opacity={opacity2} color="#FF6060" />
      <Image
        image={Bluetooth}
        fit="contain"
        x={125}
        y={125}
        width={50}
        height={60}
        
      />
    </Canvas>
    </View>

  );
};
