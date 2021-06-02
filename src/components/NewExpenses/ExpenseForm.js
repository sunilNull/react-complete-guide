import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     newTitle : '',
    //     newAmount : '',
    //     newDate : ''
    // });

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         newTitle : event.target.value
        //     }
        // });
    };

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     newAmount : event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     newDate : event.target.value
        // });
        // console.log(userInput);
    };

    const createNewExpense = (event) => {
        event.preventDefault();
        let expenseData = {
            title : newTitle,
            amount : newAmount,
            date : new Date(newDate)
        };
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }
    return (
        <form onSubmit={createNewExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
