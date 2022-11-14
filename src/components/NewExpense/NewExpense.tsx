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

export type NewExpenseProps = {
    onAddExpense: (NewExpense: NewExpenseI) => void
}

const NewExpense = (NewExpenseProps: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: enteredExpenseDataI) => {
    const expenseData: NewExpenseI = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    NewExpenseProps.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
