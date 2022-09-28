import { FC } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const RecentExpenses: FC<IProps> = ({ style }) => {
  return (
    <ExpensesOutput
      period='Total'
    />
  );
};
