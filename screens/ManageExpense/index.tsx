import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useCallback, useLayoutEffect, useMemo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { IconButton } from '../../components/buttons/IconButton';
import { Button } from '../../components/buttons/Button';
import { theme } from '../../styles/theme';
import { RootParamList } from '../../types/navigation';
import { styles } from './styles';
import { useExpenses } from '../../contexts/expenses';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export type NavigationProps = NativeStackNavigationProp<RootParamList, 'ManageExpense'>;
export type RouteProps = RouteProp<RootParamList, 'ManageExpense'>;

export const ManageExpense: FC<IProps> = ({ style }) => {
  const navigation = useNavigation<NavigationProps>();
  const { params } = useRoute<RouteProps>();
  const { expenses, removeExpense, addExpense, updateExpense } = useExpenses();
  const expense = useMemo(() => {
    if (!params?.expenseId) return null;

    return expenses.find(expense => expense.id === params.expenseId);
  }, [params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expense ? 'Edit Expense' : 'Add Expense',
    });
  }, [expense]);

  const onDeletePress = useCallback(() => {
    removeExpense(expense.id);
    navigation.goBack();
  }, []);

  const onCancelPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const onConfirmPress = useCallback(() => {
    
    navigation.goBack();
  }, []);

  return (
    <View style={ [styles.container, style] }>
      <View style={ styles.buttonsContainer }>
        <Button
          onPress={ onCancelPress }
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
      <View style={ styles.deleteContainer }>
        {
          expense && (
            <IconButton
              icon='trash'
              color={ theme.colors.error['500'] }
              size={ 36 }
              onPress={ onDeletePress }
            />
          )
        }
      </View>
    </View>
  );
};
