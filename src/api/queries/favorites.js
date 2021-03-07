import { useQuery } from 'react-query'

// Tive problemas de CORS ao consumir dados da API
import db from '../db.json'

export const queryFavorites = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(db.favorites), 1000)
  })
}

export const useQueryFavorites = (config) => useQuery('favorites', queryFavorites, config)
useQueryFavorites.queryKey = 'favorites'
