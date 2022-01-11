import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries, deleteEntry, editEntry }) {

    return (
        <div>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </div>

    )
}

export default EntryLines
