import { MainContextType, MovieType } from '../types/global';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

import { api } from '../services/api'
import { constants } from '../utils/constants'

const { apiKey, searchQuery } = constants;

export type MainContextProvider = {
  children: ReactNode;
}


export const MainContext = createContext<MainContextType>({} as MainContextType)

export function MainContextProvider({children}: MainContextProvider){
  const [movies, setMovies] = useState<MovieType[]>([] as MovieType[]);
  const [moviesListHeader, setMoviesListHeader] = useState('')
  const [queryString, setQueryString] = useState('')

  async function handleMoviesCategory(category: string){
    const response = await api.get(`/movie/${category}?${apiKey}`)
    setMovies(response.data.results)

    function capitalize(input:string) {
      return input.toLowerCase().split('_').map(
        word => word.charAt(0).toUpperCase() + word.substring(1)
      ).join(' ');
    }

    setMoviesListHeader(capitalize(category))
    setQueryString('')
  }

  async function handleMoviesSearch(queryString: string){
    const response = await api.get(`${searchQuery}${queryString}&${apiKey}`)
    setMovies(response.data.results)
    setMoviesListHeader('Search results')
  }

  useEffect(() =>{
    handleMoviesCategory('popular')
  }, []);

  return(
    <MainContext.Provider value={{
      movies,
      moviesListHeader,
      queryString,
      setQueryString,
      handleMoviesCategory,
      handleMoviesSearch
    }}>
      { children }
    </MainContext.Provider>
  )
}
