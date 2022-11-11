import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// only 1 root element per component - so 1 element where everything is based on
// solution for now: wrapping everything in a div

// when nothing is between opening and closing tags <ou can write it as self-closing
// <ExpenseDate></ExpenseDate>
// -->
// <ExpenseDate />

export interface ExpenseItemProps {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
