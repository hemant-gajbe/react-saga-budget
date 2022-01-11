import React from 'react'
import { Button, Modal } from 'semantic-ui-react';
import EntryFrom from './EntryFrom';

function ModalEdit({ isOpen, setIsOpen, description, value, isExpense, setIsExpense, setDescription, setValue }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryFrom
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
