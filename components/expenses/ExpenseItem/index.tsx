import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { FC, useCallback } from 'react';
import { View, Text, ViewStyle, StyleProp, Pressable, Platform } from 'react-native';
import { IExpense } from '../../../contexts/expenses';
import { RootParamList } from '../../../types/navigation';
import { getFormattedDate } from '../../../utils/date';
import { styles } from './styles';

interface IProps {
  expense: IExpense;
  style?: StyleProp<ViewStyle>;
}

export type NavigationProps = BottomTabNavigationProp<RootParamList>;

export const ExpenseItem: FC<IProps> = ({ expense, style }) => {
  const navigation = useNavigation<NavigationProps>();

  const onPress = useCallback(() => {
    navigation.navigate('ManageExpense', { expenseId: expense.id });
  }, [expense]);

  return (
    <Pressable
      onPress={ onPress }
      android_ripple={ { color: 'rgba(0, 0, 0, 0.2)' } }
      style={ ({pressed}) => [styles.container, pressed && Platform.OS === 'ios' && styles.pressed, style] }
    >
      <View style={ styles.descContainer }>
        <Text style={ [styles.text, styles.desc] }>{ expense.description }</Text>
        <Text style={ styles.text }>{ getFormattedDate(expense.date) }</Text>
      </View>
      <View style={ styles.amountContainer }>
        <Text style={ [styles.text, styles.amount] }>${ expense.amount.toFixed(2) }</Text>
      </View>
    </Pressable>
  );
};
