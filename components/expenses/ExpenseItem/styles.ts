import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  amount: {
    color: theme.colors.primary['500'],
    fontWeight: 'bold',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    backgroundColor: theme.colors.primary['500'],
    borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.gray['500'],
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  desc: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  descContainer: {
    flexDirection: 'column',
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: theme.colors.primary['50'],
  }
});
