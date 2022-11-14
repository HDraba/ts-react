import './App.css';
import Card from './components//UI/Card';
import ExpenseEntry from './components/Expenses/ExpenseEntry';
import NewExpense, { NewExpenseI } from './components/NewExpense/NewExpense';

// components can be used like HTML elements
// lower case = built-in HTML
// upper case = custom components

// added another component to sum up the single entries into one dynamic component

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense: NewExpenseI) => {
    // expenses.push(expense)
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseEntry items={expenses} />
    </div>
  );
}

export default App;
