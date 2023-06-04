import React, { useState, useEffect } from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {HC06_DEVICE_ID  } from '../constant/DeviceId';
import {ConnectDevice} from '../screens/ConnectDevice';
import connectionIf from '../data/connection';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSecreen } from '../screens/HomeSecreen';
export default function Home() {
  
  const [message, setMessage] = useState('');
  const [called, setCalled] = useState(true);
  const [receivedMessage, setReceivedMessage] = useState('');
  const [page, setPage] = useState('InitialScreen');

  const isConnected = useSelector(connectionIf.getIsConnected);
  const isConnecting = useSelector(connectionIf.getIsConnecting);
  const dispatch = useDispatch();
  const disconnectFromDevice = async () => {
    try {
      await BluetoothSerial.disconnect();
      BluetoothSerial.clear()
      dispatch(connectionIf.setIsConnected(false));
    } catch (error) {
    }
  };

  
  useEffect(() => {
    if (isConnecting) {
      connectToDevice();
    }
  }, [isConnecting]);

  const connectToDevice = async () => {
    dispatch(connectionIf.setIsConnecting(true));
    try {
      await BluetoothSerial.requestEnable();
      await BluetoothSerial.connect(HC06_DEVICE_ID);
      dispatch(connectionIf.setIsConnecting(false));
      dispatch(connectionIf.setIsConnected(true));
      setupBluetoothListener();
    } catch (error) {
      BluetoothSerial.clear
      dispatch(connectionIf.setIsConnecting(false));
      dispatch(connectionIf.setIsConnected(false));

    }
  };


  const setupBluetoothListener = () => {
    BluetoothSerial.withDelimiter('\n').then(() => {
      BluetoothSerial.on('read', data => {
        setReceivedMessage(data.data);
      });

      BluetoothSerial.on('error', error => {
        dispatch(connectionIf.setIsConnected(false));
      });
    });
  };
  
  useEffect(() => {
      setupBluetoothListener()
      setCalled(called);
  },[called])

  const handleConnectButtonPress = () => {
    dispatch(connectionIf.setIsConnecting(true));
   };

  return (
   // <HomeSecreen isConnected={isConnected} isConnecting={isConnecting} onPress={() => disconnectFromDevice()}/>
   isConnected ? (
    <HomeSecreen isConnected={isConnected} isConnecting={isConnecting} onPress={() => disconnectFromDevice()}/>)
  :(<ConnectDevice isConnected={isConnected} isConnecting={isConnecting} onPress={handleConnectButtonPress} />)
  
  );
}
