import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types'

const hendlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [FETCH_NOTES]: (state, { payload, date }) => ({
    ...state,
    notes: payload,
    loading: false,
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  DEFUALT: (state) => state,
}
export const NoteListReducer = (state, action) => {
  const handle = hendlers[action.type] || hendlers.DEFUALT

  return handle(state, action)
}
