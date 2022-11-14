import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

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
    id: string
}

export type NewExpenseProps = {
    onAddExpense: (NewExpense: NewExpenseI) => void
}

const NewExpense = (NewExpenseProps: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: enteredExpenseDataI) => {
    const expenseData: NewExpenseI = {
      ...enteredExpenseData,
      id: Math.random().toString(),
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
