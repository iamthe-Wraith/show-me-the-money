import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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
        options={ {
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={ size } color={ color } />,
        } }
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={ ManageExpenses }
        options={ {
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={ size } color={ color } />,
        } }
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
            options={ {
              title: 'Manage Expense',
            } }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
