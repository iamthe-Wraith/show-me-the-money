import axios from 'axios';
import { IBaseExpense, IExpense } from '../contexts/expenses';

interface IExpenseResponse {
  name: string;
}

const client = axios.create({
  baseURL: 'https://show-me-the-money-2e0a0-default-rtdb.firebaseio.com/',
});

export class ExpenseClient {
  public static storeExpense = async (expense: IBaseExpense) => {
    const res = await client.post<IExpenseResponse>('/expenses.json', expense);
    return res.data.name;
  };

  public static getExpenses = async () => {
    const res = await client.get<{ [key: string]: IExpense }>('/expenses.json');
  
    const expenses: IExpense[] = [];
  
    for (const key in res.data) {
      const { amount, date, description } = res.data[key];
  
      expenses.push({
        id: key,
        amount,
        date: new Date(date),
        description,
      });
    }
  
    return expenses;
  };

  public static updateExpense = (id: string, expenseData: IBaseExpense) => client.put<IExpenseResponse>(`/expenses/${id}.json`, expenseData);

  public static deleteExpense = (id: string) => client.delete<IExpenseResponse>(`/expenses/${id}.json`);
}