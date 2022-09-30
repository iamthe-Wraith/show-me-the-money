import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootParamList } from './types/navigation';
import { ManageExpense } from './screens/ManageExpense';
import { RecentExpenses } from './screens/RecentExpenses';
import { DefaultBottomTabsHeaderOptions, DefaultStackHeaderOptions } from './config/screen';
import { IconButton } from './components/buttons/IconButton';
import { AllExpenses } from './screens/AllExpenses';
import { ExpensesStore } from './contexts/expenses';

const Stack = createNativeStackNavigator<RootParamList>();
const BottomTabs = createBottomTabNavigator<RootParamList>();

const ExpensesOverview: FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={ ({ navigation }) => ({
      ...DefaultBottomTabsHeaderOptions,
      headerRight: ({ tintColor }) => (
        <IconButton
          icon='add'
          color={ tintColor }
          size={ 24 }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          onPress={ () => navigation.navigate('ManageExpense') }
        />
      ),
    }) }>
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
        component={ AllExpenses }
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
      <ExpensesStore>
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
              component={ ManageExpense }
              options={ {
                presentation: 'modal',
              } }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesStore>
    </>
  );
}
