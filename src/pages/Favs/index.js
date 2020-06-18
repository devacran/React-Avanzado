import React, { Fragment } from 'react'
import { FavsWithQuery } from '../../containers/GetFavorites'
import { Layout } from '../../components/Layout'

export const Favs = () => (
  <Layout title='Favoritos' description='Aqui se guardan tus favoritos'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
)
