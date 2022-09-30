import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noExpenses: {
    marginTop: 30,
    color: theme.colors.primary['200'],
    textAlign: 'center',
  }
});
