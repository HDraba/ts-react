import { useState } from 'react';
import './App.css';
import ExpenseEntry from './components/Expenses/ExpenseEntry';
import NewExpense from './components/NewExpense/NewExpense';

// components can be used like HTML elements
// lower case = built-in HTML
// upper case = custom components

// added another component to sum up the single entries into one dynamic component

export interface Expense {
  title: string;
  amount: number;
  date: Date;
  id?: string;
}

const DUMMY_EXPENSES: Expense[] = [
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: 'e1',
  },
  {
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    id: 'e2',
  },
  {
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: 'e3',
  },
  {
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    id: 'e4',
  },
];

// use a function when you wanna use previous values
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseEntry items={expenses} />
    </div>
  );
}

export default App;
