import React from 'react'
import LoginForm from '../Components/loginForm'
import { ThemeProvider } from 'styled-components'
import './Sigma.css'
import theme from '../../theme'
function Sigma() {
    return (
        <div >
          
            <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
        </div>
    )
}

export default Sigma
