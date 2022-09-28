import { FC, useCallback } from 'react';
import { View, ViewStyle, StyleProp, FlatList, ListRenderItem } from 'react-native';
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

  return (
    <View style={ [styles.container, style] }>
      <FlatList
        data={ expenses }
        renderItem={ renderExpenseItem }
        keyExtractor={ item => item.id }
      />
    </View>
  );
};
