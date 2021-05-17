import React, { useReducer } from 'react'
import { removeNoteAPI, addNoteAPI, fetchNotesAPI } from '../../api/NoteListApi'
import { NoteListContext } from './noteListContext'
import { NoteListReducer } from './noteListReducer'
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types'
import { queryGraphql } from '../../api/QueryGraphql'
export const NoteListState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(NoteListReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async (User) => {
    const { notes, message } = await queryGraphql.fetchNotesAPI(User).then((res) => {
      console.log(res)
      return res.data.notesById
    })
    console.log(message, notes)
    if (notes) {
      console.log('NOTES  is STATE', notes)

      if (notes.lenght === 0) {
        const payload = []
        dispatch({ type: FETCH_NOTES, payload })
      } else {
        const payload = notes
        console.log('PAYLOAD NEXT DISPATCH', payload)
        dispatch({ type: FETCH_NOTES, payload })
      }
    }
  }

  const addNote = async (title, formDate, location, User, selectValue) => {
    const note = {
      title,
      event_date: formDate.toJSON(),
      region: location.region || location.country,
      description: selectValue,
      is_complete: false,
      user_id: User._id,
    }

    try {
      showLoader()
      const id = await queryGraphql.addNote(note).then((res) => res.data.addNote)
      const payload = {
        ...note,
        id: id,
      }
      console.log(note, 'ID is', id)
      dispatch({ type: ADD_NOTE, payload })
    } catch (e) {
      throw new Error(e.message)
    }
  }
  const clearNotes = async () => {
    const payload = []
    dispatch({ type: FETCH_NOTES, payload })
  }
  const removeNote = async (id, User) => {
    showLoader()
    await queryGraphql.deleteNotesGql(id, User)

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    })
  }

  return (
    <NoteListContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        clearNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </NoteListContext.Provider>
  )
}
