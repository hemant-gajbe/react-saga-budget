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

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

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

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setIsExpense(true);
    setValue('');
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true)
    }
  }

  return (
    <div className="App">
      <Container>
        <MainHeader title='Budget' type='h1' />

        <DisplayBalance title="Your balance:" value={total} size="small" />

        <DisplayBalances incomeTotal = {incomeTotal} expenseTotal= {expenseTotal} />

        <MainHeader title='History' type='h3' />

        <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} />

        <MainHeader title='Add new transaction' type='h3' />

        <NewEntryForm
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense} />

        <ModalEdit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense} />
      </Container>
    </div>
  );
}

export default App;

var initialEntries = [
  {
    description: "Work Income",
    id: 1,
    value: 1000,
    isExpense: false
  },
  {
    description: "Water bill",
    id: 2,
    value: 10,
    isExpense: true
  },
  {
    description: "Rent",
    id: 3,
    value: 300,
    isExpense: true
  },
  {
    description: "Power bill",
    id: 4,
    value: 50,
    isExpense: true
  },
  {
    description: "Phone bill",
    id: 5,
    value: 80,
    isExpense: true
  }
]