import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootParamList } from './types/navigation';
import { ManageExpenses } from './screens/ManageExpense';
import { DefaultBottomTabsHeaderOptions, DefaultStackHeaderOptions } from './config/screen';
import { RecentExpenses } from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootParamList>();
const BottomTabs = createBottomTabNavigator<RootParamList>();

const ExpensesOverview: FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={ DefaultBottomTabsHeaderOptions }>
      <BottomTabs.Screen
        name='RecentExpenses'
        component={ RecentExpenses }
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={ ManageExpenses }
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={ DefaultStackHeaderOptions }>
          <Stack.Screen
            name='ExpensesOverview'
            component={ ExpensesOverview }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name='ManageExpense'
            component={ ManageExpenses }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
