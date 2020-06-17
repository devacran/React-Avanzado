import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
// Esto es para filtrar por categoria (categoryId: $categoryId) y se pasa como parametro
// En el componente en app.js
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
