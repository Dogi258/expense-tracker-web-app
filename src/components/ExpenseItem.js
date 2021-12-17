import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}