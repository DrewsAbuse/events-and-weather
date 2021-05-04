import React, { useContext } from 'react'
import { Alert } from '../Alert'
import { NavBar } from '../Navbar'
import { AlertState } from '../../context/alert/AlertState'

import AppRoute from './AppRoute'

import { UserContext } from '../../context/user/userContext'
import { NoteListState } from '../../context/noteList/NoteListState'

function App() {
  const { User, verifyUserToken } = useContext(UserContext)
  verifyUserToken()

  return (
    <NoteListState>
      <AlertState>
        <NavBar User={User} />
        <Alert />
        <AppRoute User={User} />
      </AlertState>
    </NoteListState>
  )
}

export default App
