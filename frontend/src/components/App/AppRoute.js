import { Route, Switch } from 'react-router-dom'
import React from 'react'

import { About } from '../../pages/About'

import { Lending } from '../../pages/Lending'
import { NoteTable } from '../../pages/NoteTable'
import { PrivateRoute } from './PrivateRoute'
export default function AppRoute({ User }) {
  return (
    <Switch>
      <PrivateRoute path={'/notes'} User={User}>
        <NoteTable User={User} />
      </PrivateRoute>
      <Route path={'/about'} component={About} />
      <Route path={'/'} component={Lending} />
    </Switch>
  )
}
