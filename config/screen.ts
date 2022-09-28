import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme';

const DefaultHeaderOptions = {
  headerStyle: { backgroundColor: theme.colors.primary['500'] },
  headerTintColor: '#fff',
};

export const DefaultStackHeaderOptions: NativeStackNavigationOptions = {
  ...DefaultHeaderOptions,
  contentStyle: { backgroundColor: '#24180f' },
};

export const DefaultBottomTabsHeaderOptions: BottomTabNavigationOptions = {
  ...DefaultHeaderOptions,
  tabBarStyle: { backgroundColor: theme.colors.primary['500'] },
  tabBarActiveTintColor: theme.colors.secondary['500'],
};