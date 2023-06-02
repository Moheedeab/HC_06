import React from 'react';
import { Dimensions, StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';
import {
  calcTextColor,
  CCTPicker,
  RGBPicker,
} from 'react-native-light-color-picker';
const { width, height } = Dimensions.get('screen');

export const RgbScreen = () => {
  const [color, setColor] = React.useState('#FFFF00');
  const [value, setValue] = React.useState(0);
  const [mode, setMode] = React.useState(1);
  return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <Button
            title='Switch mode'
            onPress={() => {
              setMode(mode === 0 ? 1 : 0);
            }}
          />
        </View>
        {mode === 0 && (
          <>
            <RGBPicker
              value={color}
              onChangeComplete={console.log}
              onChange={setColor}
            />
            <View
              style={[
                styles.demo,
                {
                  backgroundColor: color,
                },
              ]}
            >
              <Button
                
                onPress={() => {
                  setColor('#FF0000');
                }}
                title='Set Color'
              />
                
            </View>
          </>
        )}
        {mode === 1 && (
          <>
            <CCTPicker
              value={value}
              onChangeComplete={console.log}
              onChange={setValue}
            />
            <View
              style={[
                styles.demo,
                {
                  backgroundColor: color,
                },
              ]}
            >
              <Button
              title='Set value'
                
                onPress={() => {
                  setValue(30);
                }}
              />
              <Text style={styles.text}>{value}</Text>
            </View>
          </>
        )}
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    width,
    height,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  demo: {
    width: '100%',
    height: 100,
  },
  text: {
    alignSelf: 'center',
  },
});