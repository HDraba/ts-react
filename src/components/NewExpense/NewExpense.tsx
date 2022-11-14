import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import ExpenseDate from '../Expenses/ExpenseDate';

export interface enteredExpenseDataI {
  title: string;
  amount: number;
  date: Date;
}

export interface NewExpenseI extends enteredExpenseDataI {
    id: number
}

const NewExpense = (newExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: enteredExpenseDataI) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
