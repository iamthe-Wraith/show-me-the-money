import { FC, useCallback } from 'react';
import { View, ViewStyle, StyleProp, FlatList, ListRenderItem, Text } from 'react-native';
import { IExpense } from '../../../contexts/expenses';
import { ExpenseItem } from '../ExpenseItem';
import { styles } from './styles';

interface IProps {
  expenses: IExpense[];
  style?: StyleProp<ViewStyle>;
}

export const ExpensesList: FC<IProps> = ({ expenses, style }) => {
  const renderExpenseItem: ListRenderItem<IExpense> = useCallback(({ item }) => (
    <ExpenseItem
      expense={ item }
    />
  ), []);

  const renderExpenses = () => {
    if (!expenses.length) return <Text style={ styles.noExpenses }>No expenses found</Text>;

    return (
      <FlatList
        data={ expenses }
        renderItem={ renderExpenseItem }
        keyExtractor={ item => item.id }
      />
    );
  };

  return (
    <View style={ [styles.container, style] }>
      { renderExpenses() }
    </View>
  );
};
