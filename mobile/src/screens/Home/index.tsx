import { useEffect, useState } from 'react';
import { Image, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Header } from '../../components/Header';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

import api from '../../services/api';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

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
          title="Find your DUO"
          subtitle="Select your game..."
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