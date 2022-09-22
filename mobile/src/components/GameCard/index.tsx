import { Text, TouchableOpacityProps, TouchableOpacity, ImageBackground as DefaultImageBackground, ImageSourcePropType  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

type ImageBackgroundProps = DefaultImageBackground["props"] & {
  children: React.ReactNode;
};

function MyBackground(props: ImageBackgroundProps) {
  return <DefaultImageBackground {...props} />;
}

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  }
  banner_url: string;
}

interface Props extends TouchableOpacityProps{
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MyBackground 
        style={styles.cover}
        source={ { uri: data.banner_url } }
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>

          <Text style={styles.ads}>
            {data._count.ads} ads
          </Text>
        </LinearGradient>
      </MyBackground>

      
    </TouchableOpacity>
  );
}