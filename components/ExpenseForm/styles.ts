import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  error: {
    paddingTop: 4,
    paddingBottom: 12,
    color: theme.colors.error['500'],
    textAlign: 'center',
  },
  errorInput: {
    borderColor: theme.colors.error['500'],
    borderWidth: 2,
    backgroundColor: theme.colors.error['50'],
  },
  row: {
    flexDirection: 'row',
  },
  rowItem: {
    flex: 1, 
  }
});
