import React from 'react'
import EntryLine from './EntryLine';

// function EntryLines({ entries, deleteEntry, editEntry }) {
    function EntryLines({ entries, editEntry }) {
    return (
        <div>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    //deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </div>

    )
}

export default EntryLines
