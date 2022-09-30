import { FC, ReactNode } from 'react';
import { Text, ViewStyle, StyleProp, Pressable } from 'react-native';
import { styles } from './styles';

interface IProps {
  children: ReactNode;
  mode?: 'flat' | 'normal',
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button: FC<IProps> = ({ children, mode, onPress, style }) => {
  return (
    <Pressable
      onPress={ onPress }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      style={ ({ pressed }) => [
        styles.container,
        mode === 'flat' && styles.flat,
        pressed && styles.pressed,
        style
      ] }
    >
      <Text style={ [styles.text, mode === 'flat' && styles.flat] }>{ children }</Text>
    </Pressable>
  );
};
