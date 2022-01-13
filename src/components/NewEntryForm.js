import React, {useState} from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryFrom from './EntryFrom';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {

    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
    } = useEntryDetails();

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
