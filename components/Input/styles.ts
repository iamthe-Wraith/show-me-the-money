import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4
  },
  input: {
    padding: 6,
    fontSize: 16,
    color: theme.colors.primary['700'],
    borderRadius: 6,
    borderColor: theme.colors.primary['800'],
    borderWidth: 2,
    backgroundColor: theme.colors.primary['100'],
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  label: {
    marginBottom: 4,
    fontSize: 12,
    color: theme.colors.primary['100'],
  }
});
