import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: theme.colors.primary['500'],
  },
  flat: {
    backgroundColor: 'transparent',
  },
  flatText: {
    color: theme.colors.primary['200'],
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: theme.colors.primary['100'],
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
