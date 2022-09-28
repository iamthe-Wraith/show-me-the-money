import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: theme.colors.primary['50'],
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
    color: theme.colors.primary['400'],
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary['500'],
  }
});
