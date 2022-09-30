import { FC } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { useExpenses } from '../../contexts/expenses';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const AllExpenses: FC<IProps> = ({ style }) => {
  const { expenses } = useExpenses();
  
  return (
    <ExpensesOutput
      style={ style }
      expenses={ expenses }
      period='Total'
    />
  );
};
