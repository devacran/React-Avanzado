import React, { Fragment } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'

// recibe el id desde el app.js
export const Home = ({ categoryId }) => {
  console.log(categoryId)
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
