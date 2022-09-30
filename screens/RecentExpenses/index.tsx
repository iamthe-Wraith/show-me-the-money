import { FC, useMemo } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { useExpenses } from '../../contexts/expenses';
import { getDateMinusDays } from '../../utils/date';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const RecentExpenses: FC<IProps> = ({ style }) => {
  const { expenses } = useExpenses();
  const recentExpenses = useMemo(() => {
    const threshold = getDateMinusDays(new Date(), 7);
    return expenses.filter(expense => expense.date > threshold);
  }, [expenses]);
  
  return (
    <ExpensesOutput
      style={ style }
      expenses={ recentExpenses }
      period='Total'
    />
  );
};
