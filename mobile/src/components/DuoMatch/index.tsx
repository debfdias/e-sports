import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Header } from '../Header';


interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
  const [processCopying, setProcessCopying] = useState(false);

  async function handleCopyDiscord() {
    setProcessCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copied!', 'User copied to clipboard.');
    setProcessCopying(false);
  }

  return (
    <Modal 
      transparent
      statusBarTranslucent
      animationType='fade'
      {...rest}
    >
      <View  style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons 
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_400}
            />
          </TouchableOpacity>

          <CheckCircle 
            color={THEME.COLORS.SUCCESS}
            weight='bold'
            size={64}
          />

          <Header
            title="Let's play!"
            subtitle="Time to have fun together!"
            style={{ alignItems: 'center', marginTop: 24}}
          />

          <Text style={styles.label}>
            Add on discord:
          </Text>

          <TouchableOpacity 
            style={styles.discordButton}
            onPress={handleCopyDiscord}
            disabled={processCopying}
          >
            <Text style={styles.discord}>
              {processCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
          

        </View>
        

      </View>

    </Modal>
  );
}