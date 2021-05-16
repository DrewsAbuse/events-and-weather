import React, { useReducer } from 'react'
import Cookies from 'js-cookie'

import { UserContext } from './userContext'
import { UserReducer } from './userReducer'
import { LOGIN_USER } from '../types'
import { verifyTokenApi } from '../../api/verifyTokenApi'
import { queryGraphql } from '../../api/QueryGraphql'

function UserState({ children }) {
  console.log('storage', localStorage.getItem('NoteAppUser'))
  const initialState = localStorage.getItem('NoteAppUser')
    ? JSON.parse(localStorage.getItem('NoteAppUser'))
    : {
        UserName: '',
        LoginStatus: false,
        Role: 'User',
        _id: null,
      }

  const [state, dispatch] = useReducer(UserReducer, initialState)
  const verifyUserToken = async () => {
    console.log('veriFY', state.LoginStatus)
    if (!state.LoginStatus) {
      if (Cookies.get('Authorization')) {
        const isVerify = await verifyTokenApi(Cookies.get('Authorization')).then((res) => res)
        if (isVerify.status !== 200) {
          localStorage.removeItem('NoteAppUser')

          return false
        }
        const isVerifyData = await isVerify.json()

        const { username, id } = isVerifyData.DecryptedJwt
        console.log('is verify', username, id)
        const payload = {
          LoginStatus: true,
          UserName: username,
          Role: 'User',
          _id: id,
        }

        dispatch({
          type: LOGIN_USER,
          payload: payload,
        })
        localStorage.setItem('NoteAppUser', JSON.stringify(payload))
      } else {
        localStorage.removeItem('NoteAppUser')

        return false
      }
    }
  }

  const loginUser = async (username, password) => {
    console.log('status now')
    try {
      const response = await queryGraphql
        .loginGql(username, password)
        .then((res) => res.data.loginUser)
        .catch((err) => {
          console.log(err)
        })
      console.log(response, 'QLlogin')

      if (!response.id) {
        return await response.json()
      }
      const { token, id } = response
      console.log(id, token)
      if (response) {
        console.log('COOKIE')
        Cookies.set('Authorization', `Bearer ${token}`, { secure: true, sameSite: 'Lax' })
      }
      const payload = {
        LoginStatus: true,
        UserName: username,
        Role: 'User',
        _id: id,
      }

      dispatch({
        type: LOGIN_USER,
        payload: payload,
      })
      localStorage.setItem('NoteAppUser', JSON.stringify(payload))

      return 200
    } catch (error) {
      console.log(error)
    }
  }
  const signOutUser = (clearNotes) => {
    localStorage.removeItem('NoteAppUser')
    Cookies.remove('Authorization')
    dispatch({
      type: LOGIN_USER,
      payload: {
        UserName: '',
        LoginStatus: false,
        Role: 'User',
        _id: null,
      },
    })
    clearNotes()
  }

  return <UserContext.Provider value={{ loginUser, verifyUserToken, signOutUser, User: state }}>{children}</UserContext.Provider>
}
export { UserState }
