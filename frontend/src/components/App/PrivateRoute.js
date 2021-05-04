import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../../context/user/userContext'
function PrivateRoute({ children, ...rest }) {
  const { User } = useContext(UserContext)
  console.log('USER I ROUTe', User)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return User.LoginStatus === true ? children : <Redirect to={{ pathname: '/main', state: { from: location } }} />
      }}
    />
  )
}
export { PrivateRoute }
