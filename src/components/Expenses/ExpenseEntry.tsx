import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

interface ExpenseEntryProps {
  content: ExpenseItemProps
}

function ExpenseEntry(props: ExpenseEntryProps) {
  const content = props.content;
  return (
    <ExpenseItem
        title={content.title}
        amount={content.amount}
        date={content.date}
      />
     );
}

export default ExpenseEntry;