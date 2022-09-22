import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.SHAPE,
    width: 312
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8
  },
  discordButton: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    height: 48,
    width: 232,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  }
});