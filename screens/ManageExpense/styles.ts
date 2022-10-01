import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.primary['800'],
  },
  deleteContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary['200'],
  },
  inputsContainer: {
    flexGrow: 1,
  }
});
