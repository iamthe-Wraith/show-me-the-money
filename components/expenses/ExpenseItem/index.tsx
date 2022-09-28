import { FC } from 'react';
import { View, Text, ViewStyle, StyleProp, Pressable } from 'react-native';
import { IExpense } from '../../../contexts/expenses';
import { getFormattedDate } from '../../../utils/date';
import { styles } from './styles';

interface IProps {
  expense: IExpense;
  style?: StyleProp<ViewStyle>;
}

export const ExpenseItem: FC<IProps> = ({ expense, style }) => {
  return (
    <Pressable>
      <View style={ [styles.container, style] }>
        <View style={ styles.descContainer }>
          <Text style={ [styles.text, styles.desc] }>{ expense.description }</Text>
          <Text style={ styles.text }>{ getFormattedDate(expense.date) }</Text>
        </View>
        <View style={ styles.amountContainer }>
          <Text style={ [styles.text, styles.amount] }>${ expense.amount.toFixed(2) }</Text>
        </View>
      </View>
    </Pressable>
  );
};
