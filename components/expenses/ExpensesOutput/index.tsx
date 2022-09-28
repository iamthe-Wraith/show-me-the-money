import { FC, useMemo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { IExpense } from '../../../contexts/expenses';
import { ExpensesList } from '../ExpensesList';
import { ExpensesSummary } from '../ExpensesSummary';
import { styles } from './styles';

interface IProps {
  expenses?: IExpense[];
  period: string;
  style?: StyleProp<ViewStyle>;
}

const DUMMY_EXPENSES: IExpense[] = [
  {
    id: 'e1',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e2',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e3',
    description: 'New Desk (Metal)',
    amount: 450,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e4',
    description: 'monitor',
    amount: 799.49,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e5',
    description: 'a book',
    amount: 14.99,
    date: new Date(2022, 4, 12),
  },
  {
    id: 'e6',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e7',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e8',
    description: 'New Desk (Metal)',
    amount: 450,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e9',
    description: 'monitor',
    amount: 799.49,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e10',
    description: 'a book',
    amount: 14.99,
    date: new Date(2022, 4, 12),
  },
];

export const ExpensesOutput: FC<IProps> = ({ expenses, period, style }) => {
  const totalAmount = useMemo(() => DUMMY_EXPENSES.reduce((acc, curr) => acc + curr.amount, 0), [expenses]);

  return (
    <View style={ [styles.container, style] }>
      <ExpensesSummary
        period={ period }
        total={ totalAmount }
      />
      <ExpensesList expenses={ DUMMY_EXPENSES }/>
    </View>
  );
};
