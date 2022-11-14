import React, { ReactElement, useState } from 'react';
import { Expense } from '../../App';
import Card from '../UI/Card';
import ExpensesList from './ExpenesList';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

interface ExpenseEntryProps {
  items: Expense[];
}

function ExpenseEntry(props: ExpenseEntryProps) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // you can store jsx content in variables



  // if and for statements/loops are not possible - ternary expressions are possible
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseEntry;
