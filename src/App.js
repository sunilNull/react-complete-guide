import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';
const App = () => {
  const AddNewExpenseHandler = (newExpenseData) => {
    console.log(newExpenseData);
  };
  const expenses = [
    {
      id : "e1",
      title : "Laptop EMI",
      amount : 99.95,
      date : new Date(2021, 2, 5)
    },
    {
      id : "e2",
      title : "Transpotation",
      amount : 50.25,
      date : new Date(2021, 3, 30)
    },
    {
      id : "e3",
      title : "Food",
      amount : 75.46,
      date : new Date(2021, 1, 15)
    },
    {
      id : "e4",
      title : "Car Insurance",
      amount : 239.72,
      date : new Date(2021, 3, 10)
    }
  ]
  return (
    <div>
      <NewExpenses onCreateExpense={AddNewExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
