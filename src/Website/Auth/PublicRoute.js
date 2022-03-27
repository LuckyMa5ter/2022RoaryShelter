import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from './AuthContext'
import { auth } from "../../firebase"
export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
      
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? window.location.href='/catalog':<Component {...props} />
        }}
      ></Route>
    )
  }
  