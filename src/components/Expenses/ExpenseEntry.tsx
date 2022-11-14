import { useState } from 'react';
import { Expense } from '../../App';
import Card from '../UI/Card';
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => {
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />;
        })}
      </Card>
    </div>
  );
}

export default ExpenseEntry;
