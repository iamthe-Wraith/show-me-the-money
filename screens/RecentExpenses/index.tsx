import { FC, useEffect, useMemo } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { LoadingOverlay } from '../../components/LoadingOverlay';
import { useExpenses } from '../../contexts/expenses';
import { getDateMinusDays } from '../../utils/date';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const RecentExpenses: FC<IProps> = ({ style }) => {
  const { expenses, loading, getExpenses } = useExpenses();

  useEffect(() => {
    void getExpenses();
  }, []);

  const recentExpenses = useMemo(() => {
    const threshold = getDateMinusDays(new Date(), 7);
    return expenses.filter(expense => expense.date > threshold);
  }, [expenses]);
  
  if (loading) return <LoadingOverlay />;

  return (
    <ExpensesOutput
      style={ style }
      expenses={ recentExpenses }
      period='Total'
    />
  );
};
