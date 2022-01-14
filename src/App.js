import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useSelector, useDispatch} from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [entry, setEntry ]= useState();
  const entries = useSelector((state) => state.entries );
  const {isOpen, id} = useSelector((state) => state.modals)

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map(entry => {
      if(entry.isExpense) {
        return totalExpenses += Number(entry.value);
      }
      return totalIncomes += Number(entry.value); 
    })
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries])

  const disptach = useDispatch();

  useEffect(() => {
    // dispatch action getAllEntries not from saga
    disptach(getAllEntries());
  })

  return (
    <div className="App">
      <Container>
        <MainHeader title='Budget' type='h1' />

        <DisplayBalance title="Your balance:" value={total} size="small" />

        <DisplayBalances incomeTotal = {incomeTotal} expenseTotal= {expenseTotal} />

        <MainHeader title='History' type='h3' />

        {/* <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} /> */}

        <EntryLines entries={entries}/>

        <MainHeader title='Add new transaction' type='h3' />

        <NewEntryForm/>

        <ModalEdit isOpen={isOpen} {...entry}/>
      </Container>
    </div>
  );
}

export default App;

// var initialEntries = [
//   {
//     description: "Work Income",
//     id: 1,
//     value: 1000,
//     isExpense: false
//   },
//   {
//     description: "Water bill",
//     id: 2,
//     value: 10,
//     isExpense: true
//   },
//   {
//     description: "Rent",
//     id: 3,
//     value: 300,
//     isExpense: true
//   },
//   {
//     description: "Power bill",
//     id: 4,
//     value: 50,
//     isExpense: true
//   },
//   {
//     description: "Phone bill",
//     id: 5,
//     value: 80,
//     isExpense: true
//   }
// ]