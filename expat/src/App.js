import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FormikLoginForm from './components/LoginForm'
import FormikRegister from './components/Register'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/loginform" component={FormikLoginForm} />
      <Route exact path="/register" component={FormikRegister} />
    </div>
  )
}

export default App
