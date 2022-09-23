import { useEffect, useState } from 'react';
import { Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Header } from '../../components/Header';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

import api from '../../services/api';
import { Background } from '../../components/Background';
import { PlayerParams } from '../../@types/navigation';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const player = route.params as PlayerParams;

  function handleSelectGame({ id, title, banner_url }: GameCardProps) {
    navigation.navigate('game', { id, title, banner_url});
  }

  useEffect(() => {
    api.get('/games').then(response => setGames(response.data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Header 
          greeting={`Hello, ${player.username}`}
          title="I wanna play a game..."
          subtitle="Select one..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard 
              data={ item }
              onPress={() => handleSelectGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
    
  );
}