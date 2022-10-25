import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children }) => {
  const { isAuhenticated, user } = useAuth0()
  const isUser = isAuhenticated && user
  console.log(isAuhenticated)
  if (!user) {
    return <Navigate to='/login' />
  }
  return children
}
export default PrivateRoute
