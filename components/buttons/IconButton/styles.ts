import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 999,
    marginHorizontal: 8,
    marginVertical: Platform.OS === 'ios' ? 2 : 6,
    padding: 6,
  },
  pressed: {
    opacity: 0.75,
  }
});
