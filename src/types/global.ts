import { Dispatch, SetStateAction } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { TextProps } from 'react-native';

export type GenreProps = TextProps & {
  name: string;
}

export type HeaderProps = {
  title: string;
}

export type IconStatsProps = {
  icon: string | any;
  information: string | number;
  color?: string;
}

export type Params = {
  movie: MovieType;
}

export type MovieType = {
  id: number;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
};

export type MovieCardProps = RectButtonProps & {
  title: string;
  release: string;
  voteCount: number;
  rating: number;
  populatiry: number;
  posterURI: string;
  handleMovieCard: () => void;
}

export type ListHeaderProps = {
  title: string;
  subtitle: string | number;
}

export type CategoryProps = {
  title: string;
  icon: 'heart-outlined' | 'star-outlined' | 'calendar';
  handler: () => void;
}

export type GenresType = GenreProps & { id: number };



export type MainContextType = {
  movies: MovieType[];
  moviesListHeader: string;
  queryString:string;
  setQueryString: Dispatch<SetStateAction<string>>;
  handleMoviesCategory: (category: string) => void;
  handleMoviesSearch: (queryString: string) => void;
}
