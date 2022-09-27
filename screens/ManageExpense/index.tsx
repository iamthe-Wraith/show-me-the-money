import { FC } from 'react';
import { View, Text, ViewStyle, StyleProp } from 'react-native';
import { styles } from './styles';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const ManageExpenses: FC<IProps> = ({ style }) => {
  return (
    <View style={ [styles.container, style] }>
      <Text>temp ManageExpenses</Text>
    </View>
  );
};
