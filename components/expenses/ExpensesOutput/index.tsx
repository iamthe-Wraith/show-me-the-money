import { FC, useMemo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { IExpense } from '../../../contexts/expenses';
import { ExpensesList } from '../ExpensesList';
import { ExpensesSummary } from '../ExpensesSummary';
import { styles } from './styles';

interface IProps {
  expenses: IExpense[];
  period: string;
  style?: StyleProp<ViewStyle>;
}

export const ExpensesOutput: FC<IProps> = ({ expenses, period, style }) => {
  const totalAmount = useMemo(() => expenses.reduce((acc, curr) => acc + curr.amount, 0), [expenses]);

  return (
    <View style={ [styles.container, style] }>
      <ExpensesSummary
        period={ period }
        total={ totalAmount }
      />
      <ExpensesList expenses={ expenses }/>
    </View>
  );
};
