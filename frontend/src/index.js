import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './Styles/App.scss'
import App from './components/App/App'
import { UserState } from './context/user/UserState'
ReactDOM.render(
  <UserState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserState>,
  document.getElementById('root')
)
