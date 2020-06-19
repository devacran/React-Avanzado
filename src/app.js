// El suspense es para cargar las paginas en modo lazy, en este caso solo lo hice con
// la pagina favs a modo de ejemplo para saber como funciona
import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { Unregistered } from './pages/Unregistered'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { Router, Redirect } from '@reach/router' // este sirve para redireccionar

import { Context } from './Context'

// const Favs = React.lazy(() => {
//   import('./pages/Favs')
// })
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    // <Suspense fallback={<div />}>
    <div>
      <GlobalStyles />
      <Header />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <Unregistered path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
    // </Suspense>
  )
}

// El Context.Consumer es el que le inyecta por parametro isAuth para saber si esta logeado

// Asi era antes de modificar todoooo
// export const App = () => {
//   return (
//     <div>
//       <GlobalStyles />
//       <Logo />
//       <Router>
//         <Home path='/' />
//         <Home path='/pet/:categoryId' />
//         <Detail path='/detail/:detailId' />
//       </Router>
//       <Context.Consumer>
//         {({ isAuth }) =>
//           isAuth ? (
//             <Router>
//               <Favs path='/favs' />
//               <User path='/user' />
//             </Router>
//           ) : (
//             <Router>
//               <Unregistered path='/favs' />
//               <Unregistered path='/user' />
//             </Router>
//           )}
//       </Context.Consumer>
//       <NavBar />
//     </div>
//   )
// }
