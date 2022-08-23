export interface Income {
  id: number;
  name: string;
  value: number;
  des: string;
}
export interface Expense extends Income {}

export interface PersonAccount {
  firstName: string;
  lastName: string;
  incomes: Income[];
  expenses: Expense[];
  totalIncome(): number;
  totalExpense(): number;
  accountInfo(): void;
  addIncome(name: string, value: number, des: string): void;
  addExpense(name: string, value: number, des: string): void;
  accountBalance(): number;
}
