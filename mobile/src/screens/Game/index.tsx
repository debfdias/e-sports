import { useEffect, useState } from 'react';

import { TouchableOpacity, View, Image, FlatList, ScrollView, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

import api from '../../services/api';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordMatch, setDiscordMatch] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const game = route.params as GameParams;

  function handleReturn() {
    navigation.goBack();
  }

  async function getDiscordDuo(adsId: string) {
    api.get(`/ads/${adsId}/discord`).then(response => setDiscordMatch(response.data.discord));
  }

  useEffect(() => {
    api.get(`/ads/game/${game.id}`).then(response => setDuos(response.data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleReturn}>
            <Entypo 
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image 
          source={{ uri: game.banner_url }}
          style={styles.cover}
          resizeMode="cover"
        />

        <ScrollView>
          <Header
            title={game.title}
            subtitle="Connect with other players and play together!"
          />

          <FlatList
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DuoCard 
                data={ item }
                onConnect={ () => getDiscordDuo(item.id) }
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>
                No ads yet! Be the first!
              </Text>
            )}
          />
        </ScrollView>
        
        <DuoMatch 
          visible={discordMatch.length > 0}
          discord={discordMatch}
          onClose={() => setDiscordMatch('')}
        />
      </SafeAreaView>
    </Background>
    
  );
}