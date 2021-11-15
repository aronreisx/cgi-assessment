import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export function useMoviesCategory(){
  const { handleMoviesCategory } = useContext(MainContext)
  return { handleMoviesCategory }
}
