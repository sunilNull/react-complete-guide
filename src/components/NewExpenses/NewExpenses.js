import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) => {
    const saveNewExpenseData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onCreateExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveNewExpenseData} />
        </div>
    );
};

export default NewExpenses;