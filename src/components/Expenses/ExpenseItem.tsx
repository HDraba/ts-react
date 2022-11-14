import {useState} from 'react'

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { Expense } from '../../App'

// only 1 root element per component - so 1 element where everything is based on
// solution for now: wrapping everything in a div

// when nothing is between opening and closing tags <ou can write it as self-closing
// <ExpenseDate></ExpenseDate>
// -->
// <ExpenseDate />

type ExpenseItemProps = Expense

function ExpenseItem(props: ExpenseItemProps) {
  
  // takes a value, this value will make the component function to be called again 
  // u give it the variable, it returns a special version of it and a function to assign a new value to it --> IN A ARRAY
  // given value (props.title) is only considered the first time the function is executed
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('PARTY')
    console.log(title);
    
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
