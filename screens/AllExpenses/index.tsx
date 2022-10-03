import { FC, useEffect } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { LoadingOverlay } from '../../components/LoadingOverlay';
import { useExpenses } from '../../contexts/expenses';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const AllExpenses: FC<IProps> = ({ style }) => {
  const { expenses, loading, getExpenses } = useExpenses();
  
  useEffect(() => {
    void getExpenses();
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <ExpensesOutput
      style={ style }
      expenses={ expenses }
      period='Total'
    />
  );
};
