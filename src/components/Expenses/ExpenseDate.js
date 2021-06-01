import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const expenseDate_month = props.date.toLocaleString('en-Us', {month: 'long'});
    const expenseDate_year = props.date.getFullYear();
    const expenseDate_day = props.date.toLocaleString('en-Us', {day: '2-digit'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{expenseDate_month}</div>
            <div className="expense-date__year">{expenseDate_year}</div>
            <div className="expense-date__day">{expenseDate_day}</div>
        </div>
    );
}

export default ExpenseDate;