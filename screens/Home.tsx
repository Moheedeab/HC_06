import React, { useState, useEffect } from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {HC06_DEVICE_ID  } from '../constant/DeviceId';
import {ConnectDevice} from '../screens/ConnectDevice';
import { HomeSecreen } from '../screens/HomeSecreen';
export default function Home() {
  
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [page, setPage] = useState('InitialScreen');



  
  useEffect(() => {
    if (isConnecting) {
      connectToDevice();
    }
  }, [isConnecting]);

  const connectToDevice = async () => {
    setIsConnecting(true);
    try {
      await BluetoothSerial.requestEnable();
      await BluetoothSerial.connect(HC06_DEVICE_ID);
      setIsConnected(true);
      setIsConnecting(false);
      setupBluetoothListener();
    } catch (error) {
      BluetoothSerial.clear
      setIsConnected(false); // Set connected status to false if connection failed
      setIsConnecting(false);

    }
  };

  const sendMessage = async (message: string) => {
    try {
      await BluetoothSerial.write(message);
      setMessage(`Sent: ${message}`);
    } catch (error) {
    }
  };

  const setupBluetoothListener = () => {
    BluetoothSerial.withDelimiter('\n').then(() => {
      BluetoothSerial.on('read', data => {
        setReceivedMessage(data.data);
      });

      BluetoothSerial.on('error', error => {
        setIsConnected(false); // Set connected status to false if error occurs
      });
    });
  };

  const disconnectFromDevice = async () => {
    try {
      await BluetoothSerial.disconnect();
      BluetoothSerial.clear()
      setIsConnected(false);
    } catch (error) {
    }
  };

  const handleConnectButtonPress = () => {
    setIsConnecting(true);
   };

  return (
    <HomeSecreen isConnected={isConnected} isConnecting={isConnecting} onPress={() => disconnectFromDevice()}/>
//    isConnected ? (
//     <HomeSecreen isConnected={isConnected} isConnecting={isConnecting} onPress={() => disconnectFromDevice()}/>)
//   :(<ConnectDevice isConnected={isConnected} isConnecting={isConnecting} onPress={handleConnectButtonPress} />)
  
  );
}
