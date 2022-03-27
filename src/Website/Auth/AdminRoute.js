import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from './AuthContext'
import { auth } from "../../firebase"
export default function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
    
  return (
    <Route
        {...rest}
        render={props => {
          return currentUser.email== 'email123456@hsestudents.org'||'thungtan0001@hsestudents.org' || 'admin@hsestudents.org'? <Component {...props} />:window.location.href='/'
        }}
      ></Route>
  )
}