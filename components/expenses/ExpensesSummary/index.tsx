import { FC } from 'react';
import { View, Text, ViewStyle, StyleProp } from 'react-native';
import { styles } from './styles';

interface IProps {
  period: string;
  total: number;
  style?: StyleProp<ViewStyle>;
}

export const ExpensesSummary: FC<IProps> = ({ period, total, style }) => {
  return (
    <View style={ [styles.container, style] }>
      <Text style={ styles.period }>{ period }</Text>
      <Text style={ styles.amount }>${ total.toFixed(2) }</Text>
    </View>
  );
};
