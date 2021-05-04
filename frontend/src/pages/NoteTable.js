import React, { useContext, useEffect } from 'react'
import { NoteListContext } from '../context/noteList/noteListContext'

import { Loader } from '../components/Loader.js'
import { Notes } from '../components/Notes/Notes'
import { NotesForm } from '../components/Notes/Form/NotesForm'
export const NoteTable = ({ User }) => {
  const { loading, notes, fetchNotes, removeNote } = useContext(NoteListContext)

  useEffect(() => {
    console.log('table next fetch Note(user)')
    fetchNotes(User)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [User])

  return (
    <>
      <NotesForm />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  )
}
