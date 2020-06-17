import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true) // Muestra el loader
    window
      .fetch('https://petgram-server-devacran.vercel.app/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false) // Oculta el loader
      })
  }, [])
  return { categories, loading } // retorno el valor de categories y de loading
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData() // las guardo aqui

  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  function renderList (isFixed) {
    return (
      <List fixed={isFixed}>
        {categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    )
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
