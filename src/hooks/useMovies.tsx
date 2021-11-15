import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export function useMovies(){
  const { movies, moviesListHeader } = useContext(MainContext)
  return { movies, moviesListHeader }
}
