import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 8,
    marginRight: 16,
    padding: 20,
    backgroundColor: THEME.COLORS.SHAPE,
    marginBottom: 0,
    alignItems: 'center'
  },
  button: {
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    width: '100%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginLeft: 8
  }
});