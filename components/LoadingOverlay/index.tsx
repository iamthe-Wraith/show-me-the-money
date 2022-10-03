import { FC } from 'react';
import { View, ViewStyle, StyleProp, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const LoadingOverlay: FC<IProps> = ({ style }) => {
  return (
    <View style={ [styles.container, style] }>
      <ActivityIndicator size='large' color='#fff' />
    </View>
  );
};
