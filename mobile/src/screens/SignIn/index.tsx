import { useState } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';

import { Header } from '../../components/Header';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';

export interface PlayerProps {
  id: string;
  avatar: string;
  username: string;
}

export function SignIn() {
  const navigation = useNavigation();

  const [player, setPlayer] = useState<PlayerProps>();

  async function handleSignIn() {
    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022899377464938526&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40debfdias%2Fmobile&response_type=token&scope=identify"
    });

    let playerData;

    const res = await fetch('https://discord.com/api/users/@me', {
        headers: {
          'authorization': `Bearer ${response.params.access_token}`
        }
      });

    playerData = await res.json();

    navigation.navigate('home', { id: playerData.id, avatar: playerData.avatar, username: playerData.username });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Header 
          title="Sign in"
          subtitle="Find your DUO and let's play!"
        />

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />
          <Text style={styles.buttonTitle}>
            Sign in with Discord
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}