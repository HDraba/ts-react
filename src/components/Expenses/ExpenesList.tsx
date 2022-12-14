import './ExpensesList.css';

import { Expense } from '../../App';
import ExpenseItem from './ExpenseItem';

type ExpenseListProps = {
  items: Expense[];
};

const ExpensesList = (props: ExpenseListProps) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense: Expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
