export interface IExpense {
  id: string;
  date: Date;
  amount: number;
  description?: string;
}