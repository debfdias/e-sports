import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

import './src/services/notificationConfig';
import { getPushNotification } from './src/services/getPushNotification';

 
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  });


  const getNotificationListener = useRef<Subscription>();
  const replyNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotification();
  }, []);

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    replyNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(getNotificationListener.current && replyNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(replyNotificationListener.current);
      }
    }
  }, []);

  return (
    <Background>
      <StatusBar 
        backgroundColor='transparent'
        translucent
        barStyle='light-content'
      />
      {fontsLoaded ? <Routes /> :  <Loading />}
    </Background>
  );
}

