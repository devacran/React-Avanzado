// Este archivo RegisterMutation sirve para poder hacer el registro de un usuario
import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={REGISTER}>{children}</Mutation>
}

// REGISTER es lo que se le inyecta por parametro a la funcion children
