import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  // esto es lo que mantiene la sesion activa
  // pero no se porque, se supone que debe retornar true o false
  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  )
  // Esto es lo que se le va a pasar por parametro
  const value = {
    isAuth,
    activateAuth: token => {
      alert('logeado')
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  // aqui
  return <Context.Provider value={value}>{children}</Context.Provider>
}
// esto es igual a Provider: Provider, Consumer: Context.Consumer
export default { Provider, Consumer: Context.Consumer }

// Lo que se pasa por parametro isAuth para saber si ya esta loggeado
// Y El metodo activateAuth para poder cambiar el valor
// El Context.Consumer es el que se utiliza <Context.Consumer></Context.Consumer> es como el
// UserLogged
