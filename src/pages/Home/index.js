import React, { Fragment } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import { Layout } from '../../components/Layout'

// recibe el id desde el app.js
export const Home = ({ categoryId }) => {
  console.log(categoryId)
  return (
    <Layout
      title='Petgram la red social para tu mascota'
      subtitle='En petgram tu mascota vive en internet'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
