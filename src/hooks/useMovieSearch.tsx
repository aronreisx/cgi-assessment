import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export function useMovieSearch(){
  const { queryString, setQueryString, handleMoviesSearch } = useContext(MainContext)
  return { queryString, setQueryString, handleMoviesSearch }
}
