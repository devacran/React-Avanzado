import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'
import { UserForm } from '../../components/UserForm'
import { RegisterMutation } from '../../containers/RegisterMutation'
import { LoginMutation } from '../../containers/LoginMutation'

export const Unregistered = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Registrarse'
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg =
            error && 'La contraseña no es correcta o el usuario no existe'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Iniciar sesión'
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </>
  )
}

// todo esto cabmio pero antes era asi :(
// <UserForm title='Iniciar sesión' onSubmit={activateAuth} />

// El Context.Consumer es el que le inyecta por parametro el metodo activateAuth
// para cambiar el valor de isAuth
// isAuth es la que permite entrar o no a una pagina
// la funcion register es la que envia los datos a la api y se le pasa como parametro al formulario
// onSubmit es la funcion que va a ejecutar a register y tiene que tener un passwrod y una contraseña

// Por lo que en UserForm debe de haber un boton que envie esos datos y que ejecute esa funcion
// tambien llegan por parametros ademas de register {data, loading, error} eso por grapghqel ya los trae

// disabled es para deshabilitar los botones cuando esta cargando
// todo aplica igual para login
