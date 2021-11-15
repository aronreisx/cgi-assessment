import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, View, Text, ScrollView } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Genre } from '../../components/Genre';
import { IconStats } from '../../components/IconStats'

import { Params, GenresType } from '../../types/global'

import { constants } from '../../utils/constants'
const { imageUrl, apiKey } = constants;

import { api } from '../../services/api';

import { styles } from './styles'

export function Movie() {
  const [genres, setGenres] = useState<GenresType[]>([])

  const route = useRoute();
  const { movie } = route.params as Params;

  useEffect(()=>{
    api.get(`/movie/${movie.id}?${apiKey}`).then(response=>{
      setGenres(response.data.genres.splice(0,3))
    })
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <Header
          title="Movie details"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
        >
          <ImageBackground
            style={styles.banner}
            source={{
              uri: `${imageUrl}${movie.backdrop_path}`
            }}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.information}>
              <IconStats icon='heart' information={movie.popularity} />
              <IconStats icon='calendar-blank' information={movie.release_date.slice(0,4)} />
              <IconStats icon='vote-outline' information={movie.vote_count} />
              <IconStats icon='star' information={movie.vote_average} />
            </View>
            <View style={styles.genres}>
              {genres.map((genre) => (
                <Genre key={genre.id} name={genre.name}/>
              ))}
            </View>
            <View>
              <Text style={styles.overview}>
              {movie.overview}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
  )
};
