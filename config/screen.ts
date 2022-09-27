import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const DefaultHeaderOptions = {
  headerStyle: { backgroundColor: '#24180f' },
  headerTintColor: '#fff',
};

export const DefaultStackHeaderOptions: NativeStackNavigationOptions = {
  ...DefaultHeaderOptions,
  contentStyle: { backgroundColor: '#24180f' },
};

export const DefaultBottomTabsHeaderOptions: BottomTabNavigationOptions = {
  ...DefaultHeaderOptions,
};