import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MovieCard } from '../../components/MovieCard';
import { SearchBar } from '../../components/SearchBar';
import { ListHeader } from '../../components/ListHeader';
import { CategoriesBar } from '../../components/CategoriesBar';
import { Background } from '../../components/Background';

import { styles } from './styles';

import { constants } from '../../utils/constants';
const { imageUrl } = constants;

import { MovieType } from '../../types/global';

import { useMovies } from '../../hooks/useMovies';

export function Home(){
  const { movies, moviesListHeader } = useMovies();

  const navigation = useNavigation();

  function handleMovieDetails(movie: MovieType) {
    navigation.navigate('Movie' as never, { movie } as never);
  }

  return (
    <Background>
      <View style={styles.container}>
        <SearchBar/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
        >
          <CategoriesBar />
          <ListHeader
          title={moviesListHeader}
          subtitle={`${movies.length} movies`}
          />
          { movies.length === 0 ?
            (
              <Text
              testID='not-found'
              style={styles.notFound}>
                No movies found
              </Text>
            ):
            movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release={movie.release_date.slice(0,4)}
              voteCount={movie.vote_count}
              rating={movie.vote_average}
              populatiry={movie.popularity}
              posterURI={`${imageUrl}${movie.poster_path}`}
              handleMovieCard={() => handleMovieDetails(movie)}
            />
          ))}
        </ScrollView>
      </View>
    </Background>
  )
}
