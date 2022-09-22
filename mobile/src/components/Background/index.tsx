import { ImageBackground as DefaultImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

type ImageBackgroundProps = DefaultImageBackground["props"] & {
  children: React.ReactNode;
};

interface Props {
  children: React.ReactNode;
}

function MyBackground(props: ImageBackgroundProps) {
  return <DefaultImageBackground {...props} />;
}

export function Background({ children }: Props) {
  return (
    <MyBackground 
      style={styles.container}
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      {children}
    </MyBackground>
  );
}