import { FC } from 'react';
import { View, Text, ViewStyle, StyleProp, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface IProps {
  label?: string;
  inputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}

export const Input: FC<IProps> = ({
  label, 
  inputProps, 
  style,
  inputStyle,
}) => {
  return (
    <View style={ [styles.container, style] }>
      { label && <Text style={ styles.label }>{ label }</Text> }
      <TextInput
        { ...inputProps }
        style={ [styles.input, inputProps?.multiline && styles.inputMultiline, inputStyle] }
      />
    </View>
  );
};
