import React from 'react';
import { TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/global';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';

import { useMovieSearch } from '../../hooks/useMovieSearch'

export function SearchBar() {
  const {
    queryString,
    setQueryString,
    handleMoviesSearch
  } = useMovieSearch();

  const { primary50, primary70, primary85 } = theme.colors;

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#ABB1CC"
        value={queryString}
        onChangeText={setQueryString}
        style={styles.input}
        placeholder="Search a movie"
      />
      <RectButton
        style={styles.searchButton}
        onPress={() => handleMoviesSearch(queryString)}
        testID='search-button'
      >
        <LinearGradient
          style={styles.gradientWrapper}
          colors={[primary50, primary70]}
        >
          <LinearGradient
            style={styles.gradient}
            colors={[primary85, primary50]}
          >
            <Entypo name="magnifying-glass" size={20} color={theme.colors.secondary10} />
          </LinearGradient>
        </LinearGradient>
      </RectButton>
    </View>
  )
}
