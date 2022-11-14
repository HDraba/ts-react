
import './App.css'
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
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense: NewExpenseI) => {
    console.log('in App.tsx');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseEntry content={expenses[0]} />
        <ExpenseEntry content={expenses[1]} />
        <ExpenseEntry content={expenses[2]} />
        <ExpenseEntry content={expenses[3]} />
      </Card>
    </div>
  );
}

export default App;
