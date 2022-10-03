import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useCallback, useLayoutEffect, useMemo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { IconButton } from '../../components/buttons/IconButton';
import { theme } from '../../styles/theme';
import { RootParamList } from '../../types/navigation';
import { styles } from './styles';
import { IBaseExpense, useExpenses } from '../../contexts/expenses';
import { ExpenseForm } from '../../components/ExpenseForm';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export type NavigationProps = NativeStackNavigationProp<RootParamList, 'ManageExpense'>;
export type RouteProps = RouteProp<RootParamList, 'ManageExpense'>;

export const ManageExpense: FC<IProps> = ({ style }) => {
  const navigation = useNavigation<NavigationProps>();
  const { params } = useRoute<RouteProps>();
  const { expenses, removeExpense, addExpense, updateExpense } = useExpenses();
  const expense = useMemo(() => {
    if (!params?.expenseId) return null;

    return expenses.find(expense => expense.id === params.expenseId);
  }, [params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expense ? 'Edit Expense' : 'Add Expense',
    });
  }, [expense]);

  const onDeletePress = useCallback(() => {
    removeExpense(expense.id);
    navigation.goBack();
  }, []);

  const onCancelPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const onConfirmPress = useCallback((expenseData: IBaseExpense) => {
    if (expense) {
      updateExpense(expense.id, expenseData);
    } else {
      addExpense(expenseData);
    }

    navigation.goBack();
  }, []);

  return (
    <View style={ [styles.container, style] }>
      <ExpenseForm
        expense={ expense }
        onCancel={ onCancelPress }
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onConfirm={ onConfirmPress }
      />
      <View style={ styles.deleteContainer }>
        {
          expense && (
            <IconButton
              icon='trash'
              color={ theme.colors.error['500'] }
              size={ 36 }
              onPress={ onDeletePress }
            />
          )
        }
      </View>
    </View>
  );
};
