import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { ExpenseClient } from '../utils/http';

export interface IBaseExpense {
  date: Date;
  amount: number;
  description?: string;
}

export interface IExpense extends IBaseExpense {
  id: string;
}

export const DUMMY_EXPENSES: IExpense[] = [
  {
    id: 'e1',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2022, 10, 25),
  },
  {
    id: 'e2',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 10, 24),
  },
  {
    id: 'e3',
    description: 'New Desk (Metal)',
    amount: 450,
    date: new Date(2022, 10, 23),
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

interface IExpensesContext {
  expenses: IExpense[];
  loading: boolean;
  addExpense: (expense: IBaseExpense) => void;
  getExpenses: () => Promise<void>;
  removeExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: IBaseExpense) => void;
}

interface IProps {
  children: ReactNode;
}

const ExpensesContext = createContext<IExpensesContext>(null);

export const useExpenses = () => useContext(ExpensesContext);

export const ExpensesStore: FC<IProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState(true);

  const addExpense = useCallback(async (baseExpense: IBaseExpense) => {
    // ! optimistic request...should hand error in a production app
    const newExpenseId = await ExpenseClient.storeExpense(baseExpense);

    setExpenses((prevExpenses) => [
      {
        id: newExpenseId,
        ...baseExpense,
      },
      ...prevExpenses,
    ]);
  }, []);

  const getExpenses = useCallback(async () => {
    setLoading(true);

    // ! optimistic request...should hand error in a production app
    const exps = await ExpenseClient.getExpenses();
  
    setLoading(false);
    setExpenses(exps.sort((a, b) => a.date < b.date ? 1 : -1));
  }, []);

  const removeExpense = useCallback(async (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));

    // ! optimistic request...should hand error in a production app
    await ExpenseClient.deleteExpense(id);
  }, []);

  const updateExpense = useCallback(async (id: string, expenseData: IBaseExpense) => {
    setExpenses((prevExpenses) => prevExpenses.map((prevExpense) => {
      if (prevExpense.id === id) return { ...prevExpense, ...expenseData } as IExpense;
      
      return prevExpense;
    }));

    // ! optimistic request...should hand error in a production app
    await ExpenseClient.updateExpense(id, expenseData);
  }, []);

  const value = useMemo(() => ({
    expenses,
    loading,
    addExpense,
    getExpenses,
    removeExpense,
    updateExpense,
  }), [
    expenses,
    loading,
    addExpense,
    getExpenses,
    removeExpense,
    updateExpense,
  ]);

  return (
    <ExpensesContext.Provider value={ value }>
      { children }
    </ExpensesContext.Provider>
  );
};