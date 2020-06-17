import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { Unregistered } from './pages/Unregistered'
import { User } from './pages/User'
import { Context } from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <Unregistered path='/favs' />
              <Unregistered path='/user' />
            </Router>
          )}
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
// El Context.Consumer es el que le inyecta por parametro isAuth para saber si esta logeado
