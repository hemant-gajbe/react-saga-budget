import React, {useState} from 'react'
import { Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryFrom from './EntryFrom';
import { addEntryRedux } from '../actions/entries.actions';

// function NewEntryForm({addEntry, description, value, isExpense, setIsExpense, setDescription, setValue}) {
function NewEntryForm() {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true);
    const dispatch = useDispatch()

    function addEntry() {
        dispatch(addEntryRedux({
            id: 5,
            description,
            value,
            isExpense
            })
        );
        resetEntry()
    }

    function resetEntry() {
        setDescription('');
        setIsExpense(true);
        setValue('');
    }

    return (
        <div>
            <Form unstackable>
                <EntryFrom 
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense}/>
                <ButtonSaveOrCancel addEntry={addEntry}/>
            </Form>
        </div>
    )
}

export default NewEntryForm
