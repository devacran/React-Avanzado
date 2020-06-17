// Este archivo LoginMutation sirve para poder hacer el login de un usuario
import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Login = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={Login}>{children}</Mutation>
}

// Login es lo que se le inyecta por parametro a la funcion children
