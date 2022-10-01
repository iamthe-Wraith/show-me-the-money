import { FC, useCallback, useState } from 'react';
import { View, ViewStyle, StyleProp, Text } from 'react-native';
import { Button } from '../../components/buttons/Button';
import { Input } from '../../components/Input';
import { IBaseExpense, IExpense } from '../../contexts/expenses';
import { getFormattedDate } from '../../utils/date';
import { styles } from './styles';

interface IProps {
  expense?: IExpense;
  onCancel: () => void;
  onConfirm: (expenseData: IBaseExpense) => void;
  style?: StyleProp<ViewStyle>;
}

type InputType = 'amount' | 'date' | 'desc';

export const ExpenseForm: FC<IProps> = ({
  expense, 
  onCancel,
  onConfirm,
  style
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: expense?.amount?.toString() || '',
      isValid: true,
    },
    date: {
      value: expense?.date ? getFormattedDate(expense.date) : '',
      isValid: true,
    },
    desc: {
      value: expense?.description || '',
      isValid: true,
    },
  });

  const onChange = useCallback((inputIdentifier: InputType, val: string) => {
    setInputs(prev => ({
      ...prev,
      [inputIdentifier]: {
        value: val,
        isValid: true,
      },
    }));
  }, []);

  const onConfirmPress = useCallback(() => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.desc.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descIsValid) {
      setInputs(prev => ({
        amount: {
          value: prev.amount.value,
          isValid: amountIsValid,
        },
        date: {
          value: prev.date.value,
          isValid: dateIsValid,
        },
        desc: {
          value: prev.desc.value,
          isValid: descIsValid,
        },
      }));

      return;
    }

    onConfirm(expenseData);
  }, [inputs]);

  const renderError = () => {
    let error = '';

    if (!inputs.amount.isValid) {
      error = 'Please enter a valid amount';
    } else if (!inputs.date.isValid) {
      error = 'Please enter a valid date';
    } else if(!inputs.desc.isValid) {
      error = 'Please enter a valid description';
    }

    if (!error) return null;

    return <Text style={ styles.error }>{ error }</Text>;
  };

  return (
    <View style={ [styles.container, style] }>
      <View style={ styles.row }>
        <Input
          label='Amount'
          style={ styles.rowItem }
          inputStyle={ !inputs.amount.isValid && styles.errorInput }
          inputProps={ {
            keyboardType: 'decimal-pad',
            autoFocus: !expense,
            onChangeText: onChange.bind(this, 'amount'),
            value: inputs.amount.value
          } }
        />
        <Input
          label='Date'
          style={ styles.rowItem }
          inputStyle={ !inputs.date.isValid && styles.errorInput }
          inputProps={ {
            placeholder: 'MM/DD/YYYY',
            maxLength: 10,
            autoFocus: false,
            onChangeText: onChange.bind(this, 'date'),
            value: inputs.date.value
          } }
        />
      </View>
      <Input
        label='Description'
        inputStyle={ !inputs.desc.isValid && styles.errorInput }
        inputProps={ {
          multiline: true,
          autoFocus: false,
          onChangeText: onChange.bind(this, 'desc'),
          value: inputs.desc.value
        } }
      />
      { renderError() }
      <View style={ styles.buttonsContainer }>
        <Button
          onPress={ onCancel }
          mode='flat'
          style={ styles.button }
        >
          Cancel
        </Button>
        <Button
          onPress={ onConfirmPress }
          style={ styles.button }
        >
          { expense ? 'Update' : 'Add' }
        </Button>
      </View>
    </View>
  );
};
