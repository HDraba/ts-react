import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export interface enteredExpenseDataI {
  title: string;
  amount: number;
  date: Date;
}

// export interface NewExpenseI extends enteredExpenseDataI {
export interface NewExpenseI {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

export type NewExpenseProps = {
  onAddExpense: (NewExpense: NewExpenseI) => void;
};

const NewExpense = (NewExpenseProps: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: enteredExpenseDataI) => {
    const expenseData: NewExpenseI = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    NewExpenseProps.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
