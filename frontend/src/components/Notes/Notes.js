import React from 'react'
import PropTtypes, { object } from 'prop-types'
import { NoteItem } from './Note/NoteItem'
const Notes = ({ notes, onRemove }) => (
  <div className='notesContainer'>
    {console.log('error soon', notes)}
    {notes.map((note) => (
      <NoteItem key={`${note.id}`} note={note} onRemove={onRemove} />
    ))}
  </div>
)
Notes.propTypes = {
  notes: PropTtypes.arrayOf(object),
  onRemove: PropTtypes.func,
}

export { Notes }
